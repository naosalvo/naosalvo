// Simulação da economia do álbum (Monte Carlo).
// Como rodar: node docs/simulacao.js   (precisa do Node.js instalado)
// Para testar outras regras, mude ODDS, DUP, o preço (price) e os perfis (P) abaixo.
const fs=require('fs');const vm=require('vm');
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync(require('path').join(__dirname,'..','site-v2','data.js'),'utf8').replace(/const /g,'var '),ctx);
const COLLECTIONS=ctx.COLLECTIONS;
const RAR=["Comum","Relevante","Raro","Relíquia","Lendário","Mítico"];
const ODDS={Comum:44,Relevante:26,Raro:15,"Relíquia":9,"Lendário":5,"Mítico":1};
const DUP={Comum:5,Relevante:10,Raro:20,"Relíquia":40,"Lendário":80,"Mítico":150};
const CARDS=[];COLLECTIONS.forEach((c,ci)=>c.cards.forEach(x=>CARDS.push({ci,r:x.r})));
function rng(s){return()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const DAYS=730;
function sim(v,a,R,price=150,size=5){const owned=new Uint8Array(CARDS.length),byR={};RAR.forEach(r=>byR[r]=[]);CARDS.forEach((c,i)=>byR[c.r].push(i));
 const left=COLLECTIONS.map(c=>c.cards.length);let have=0,coins=0;const cum=[];let t=0;RAR.forEach(r=>{t+=ODDS[r];cum.push(t)});
 const draw=()=>{const x=R()*t;let k=0;while(x>=cum[k])k++;const p=byR[RAR[k]];const i=p[(R()*p.length)|0];if(owned[i])coins+=DUP[RAR[k]];else{owned[i]=1;have++;if(--left[CARDS[i].ci]===0)coins+=100}};
 for(let j=0;j<size;j++)draw();const pv=v/7,pa=a/7;
 for(let d=1;d<=DAYS;d++){if(R()<pv)for(let j=0;j<size;j++)draw();let q=pa;while(q>0){if(q>=1||R()<q)coins+=25;q-=1}while(coins>=price){coins-=price;for(let j=0;j<size;j++)draw()}if(have===CARDS.length)return d}return null}
const P=[["Casual",2,0],["Engajado",5,2],["Hardcore",7,7]];const N=3000;
const out=P.map(([n,v,a],pi)=>Array.from({length:N},(_,i)=>sim(v,a,rng(pi*1e6+i+1))));
const pct=(arr,d)=>arr.filter(x=>x&&x<=d).length/arr.length*100;
const med=a=>{const s=a.filter(Boolean).sort((x,y)=>x-y);return s.length>=a.length/2?s[Math.floor(a.length/2)]:null};
const rows=[];for(let d=0;d<=DAYS;d+=30){rows.push({d,c:+pct(out[0],d).toFixed(1),e:+pct(out[1],d).toFixed(1),h:+pct(out[2],d).toFixed(1)})}
console.log(JSON.stringify(rows));console.log('medians',out.map(med));
const mix=[.7,.25,.05],U=20000;for(const d of [90,180,365,730])console.log(d,Math.round(out.reduce((s,a,i)=>s+U*mix[i]*pct(a,d)/100,0)),out.map(a=>pct(a,d).toFixed(1)));
// sensitivity: price 100 and mítico 0.5%
console.log('counts',RAR.map(r=>CARDS.filter(c=>c.r===r).length));
