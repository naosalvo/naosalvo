// Avatar de gatinho (do protótipo original)

const SG={
 fur:[["Cinza","#9b9ba1"],["Laranja","#e8932f"],["Preto","#24242a"],["Branco","#f2eee6"],["Marrom","#8a6a45"],["Grafite","#5b5c66"],["Creme","#e6c99a"],["Azulado","#7d8ca6"],["Chocolate","#4a3226"],["Rosa (Sphynx)","#efb6c4"]],
 pat:["Liso","Tigrado","Pintado","Smoking","Máscara"],
 eye:[["Âmbar","#e6a21a"],["Verde","#5bbf3a"],["Azul","#2f8cff"],["Esmeralda","#19c29a"],["Roxo","#9a5cff"]],
 acc:[["Nenhum","🚫"],["Óculos redondo","👓"],["Óculos escuro","🕶️"],["Boné","🧢"],["Gorro","🧶"],["Fone","🎧"],["Bandana","🧣"],["Corrente","⛓️"],["Monóculo","🧐"]],
 clo:[["Hoodie","#1c1c24"],["Camiseta","#ececec"],["Jaqueta jeans","#3d6aa8"],["Maletom","#cfc7b4"],["Jaqueta bomber","#4b5a3a"],["Camisa xadrez","#b3262d"],["Regata","#22222a"],["Pelado","#0000"]],
 bg:[["Azul",["#2a6bff","#0a2a8a"]],["Roxo",["#7a4dff","#2a1070"]],["Rosa",["#ff6bd0","#7a2aa8"]],["Verde",["#19c29a","#06503f"]],["Sol",["#ffb12a","#d9561a"]],["Noite",["#1a1f4a","#05060f"]],["Menta",["#7ef0c8","#1a8a7a"]],["Vermelho",["#ff5a6a","#7a1030"]]]
};
let sgN=0;
const SPHYNX=9; // "Rosa" vira gato Sphynx (sem pelo)
function catSVG(o){
  const sph=o.fur===SPHYNX;
  const id="g"+(sgN++),fur=sph?"#efb6c4":SG.fur[o.fur][1],eye=SG.eye[o.eye][1],bg=SG.bg[o.bg][1],clo=o.clo,acc=o.acc,pat=sph?0:o.pat;
  const dk="rgba(0,0,0,.28)",shade="#d48a9f";
  let s=`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="${id}" cx="50%" cy="35%" r="75%"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></radialGradient>
  <pattern id="${id}p" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M0 6H12M6 0V12" stroke="#00000055" stroke-width="2"/></pattern>
  ${sph?`<radialGradient id="${id}s" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#f7cdd7"/><stop offset="1" stop-color="#e7a2b4"/></radialGradient>`:""}</defs>
  <rect width="200" height="200" fill="url(#${id})"/>`;
  const skin=sph?`url(#${id}s)`:fur;
  // corpo
  s+=`<path d="M28 205Q30 150 72 140L128 140Q170 150 172 205Z" fill="${skin}"/>`;
  if(sph) s+=`<g stroke="${shade}" stroke-width="2" fill="none" stroke-linecap="round"><path d="M84 146q16 7 32 0M80 154q20 8 40 0"/></g>`;
  const cc=SG.clo[clo][1];
  if(clo===0) s+=`<path d="M28 205Q30 150 72 140Q100 166 128 140Q170 150 172 205Z" fill="${cc}"/><path d="M60 146Q100 176 140 146" stroke="#2b2b38" stroke-width="7" fill="none"/><path d="M92 165v26M108 165v26" stroke="#ddd" stroke-width="2"/><path d="M70 188h60l6 17H64z" fill="#15151c"/>`;
  else if(clo===1) s+=`<path d="M28 205Q30 150 72 140Q100 158 128 140Q170 150 172 205Z" fill="${cc}"/><path d="M76 142Q100 160 124 142" stroke="#bbb" stroke-width="3" fill="none"/>`;
  else if(clo===2) s+=`<path d="M28 205Q30 150 72 140L100 168L128 140Q170 150 172 205Z" fill="${cc}"/><path d="M100 168V205M72 140L88 176M128 140L112 176" stroke="#25497c" stroke-width="2.5"/><rect x="40" y="178" width="20" height="9" fill="#2f5a95"/>`;
  else if(clo===3) s+=`<path d="M28 205Q30 150 72 140Q100 154 128 140Q170 150 172 205Z" fill="${cc}"/><path d="M72 146Q100 164 128 146" stroke="#a99f88" stroke-width="6" fill="none"/>`;
  else if(clo===4) s+=`<path d="M28 205Q30 150 72 140Q100 158 128 140Q170 150 172 205Z" fill="${cc}"/><path d="M100 158V205" stroke="#2c3a20" stroke-width="3"/><path d="M62 144Q100 164 138 144" stroke="#d98a2a" stroke-width="6" fill="none"/>`;
  else if(clo===5) s+=`<path d="M28 205Q30 150 72 140Q100 158 128 140Q170 150 172 205Z" fill="${cc}"/><path d="M28 205Q30 150 72 140Q100 158 128 140Q170 150 172 205Z" fill="url(#${id}p)"/><path d="M80 144L100 166L120 144" stroke="#7a1218" stroke-width="3" fill="none"/>`;
  else if(clo===6) s+=`<path d="M68 142L76 205M132 142L124 205" stroke="${cc}" stroke-width="10"/><path d="M76 205Q100 180 124 205" fill="${skin}"/>`;
  // bandana atrás do rosto
  if(acc===6) s+=`<path d="M62 138Q100 150 138 138L100 182Z" fill="#d6282f"/><circle cx="90" cy="150" r="2" fill="#fff"/><circle cx="108" cy="150" r="2" fill="#fff"/><circle cx="99" cy="164" r="2" fill="#fff"/>`;
  if(sph){
    // Sphynx: orelhas enormes, rosto anguloso, pele com rugas, sem bigode
    s+=`<path d="M52 86L34 8L102 50Z" fill="${skin}"/><path d="M148 86L166 8L98 50Z" fill="${skin}"/>
    <path d="M60 72L45 24L90 52Z" fill="#e58aa1"/><path d="M140 72L155 24L110 52Z" fill="#e58aa1"/>
    <path d="M60 72L45 24" stroke="${shade}" stroke-width="1.5"/><path d="M140 72L155 24" stroke="${shade}" stroke-width="1.5"/>`;
    s+=`<ellipse cx="100" cy="97" rx="51" ry="48" fill="${skin}"/><ellipse cx="68" cy="114" rx="18" ry="15" fill="${skin}"/><ellipse cx="132" cy="114" rx="18" ry="15" fill="${skin}"/>`;
    s+=`<g stroke="${shade}" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M80 60Q100 52 120 60"/><path d="M84 68Q100 62 116 68"/><path d="M91 75Q100 71 109 75"/><path d="M64 80q9-6 18-1"/><path d="M118 79q9-5 18 1"/></g>`;
    s+=`<ellipse cx="100" cy="120" rx="19" ry="12" fill="#fff" opacity=".18"/>`;
    [[80,96,-10],[120,96,10]].forEach(([x,y,r])=>{s+=`<g transform="rotate(${r} ${x} ${y})"><path d="M${x-14} ${y}Q${x} ${y-17} ${x+14} ${y}Q${x} ${y+17} ${x-14} ${y}Z" fill="${eye}" stroke="${shade}" stroke-width="1.5"/><ellipse cx="${x}" cy="${y}" rx="4.4" ry="9.5" fill="#101018"/><circle cx="${x-3.5}" cy="${y-4.5}" r="2.8" fill="#fff"/><circle cx="${x+3}" cy="${y+4}" r="1.3" fill="#fff" opacity=".8"/></g>`});
    s+=`<path d="M94 112h12l-6 7z" fill="#c9667f"/><path d="M100 119v4M100 123q-6 6-12 2M100 123q6 6 12 2" stroke="#7a3a4a" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
  } else {
    // orelhas
    const ear=pat===4?"#4b3a30":fur;
    s+=`<path d="M54 76L56 26L96 56Z" fill="${ear}"/><path d="M146 76L144 26L104 56Z" fill="${ear}"/><path d="M62 64L63 38L84 55Z" fill="#e89aa8"/><path d="M138 64L137 38L116 55Z" fill="#e89aa8"/>`;
    // cabeça
    s+=`<ellipse cx="100" cy="98" rx="54" ry="47" fill="${fur}"/>`;
    if(pat===1) s+=`<g stroke="${dk}" stroke-width="4" stroke-linecap="round" fill="none"><path d="M100 53v15M88 55l3 13M112 55l-3 13M48 96h14M50 107h14M152 96h-14M150 107h-14"/></g>`;
    if(pat===2) s+=`<g fill="${dk}"><circle cx="70" cy="68" r="7"/><circle cx="132" cy="72" r="6"/><circle cx="56" cy="104" r="6"/><circle cx="146" cy="100" r="7"/><circle cx="104" cy="62" r="4"/></g>`;
    if(pat===3) s+=`<path d="M100 52Q92 74 94 96L106 96Q108 74 100 52Z" fill="#f4f1ea"/><ellipse cx="100" cy="120" rx="26" ry="18" fill="#f4f1ea"/>`;
    if(pat===4) s+=`<ellipse cx="100" cy="106" rx="34" ry="30" fill="#4b3a30" opacity=".6"/>`;
    s+=`<ellipse cx="100" cy="118" rx="20" ry="13" fill="#fff" opacity=".22"/>`;
    // olhos
    [[80,96],[120,96]].forEach(([x,y])=>{s+=`<ellipse cx="${x}" cy="${y}" rx="11.5" ry="12.5" fill="${eye}"/><ellipse cx="${x}" cy="${y}" rx="4.6" ry="9.5" fill="#101018"/><circle cx="${x-3.5}" cy="${y-4.5}" r="2.8" fill="#fff"/><circle cx="${x+3}" cy="${y+4}" r="1.3" fill="#fff" opacity=".8"/>`});
    s+=`<path d="M94 112h12l-6 7z" fill="#e58b9b"/><path d="M100 119v4M100 123q-6 6-12 2M100 123q6 6 12 2" stroke="#3a2a2a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <g stroke="#fff" stroke-opacity=".75" stroke-width="1.2" stroke-linecap="round"><path d="M70 116L38 110M70 122L40 126M130 116L162 110M130 122L160 126"/></g>`;
  }
  // acessórios
  if(acc===1) s+=`<g fill="none" stroke="#2a2a30" stroke-width="3"><circle cx="80" cy="96" r="15"/><circle cx="120" cy="96" r="15"/><path d="M95 94h10M65 92L52 86M135 92L148 86"/></g>`;
  if(acc===2) s+=`<g fill="#0c0c12"><rect x="62" y="84" width="34" height="22" rx="8"/><rect x="104" y="84" width="34" height="22" rx="8"/></g><path d="M96 90h8M62 90L50 84M138 90L150 84" stroke="#0c0c12" stroke-width="3"/><path d="M68 90h12" stroke="#fff" stroke-opacity=".4" stroke-width="2"/>`;
  if(acc===3) s+=`<path d="M52 66Q54 24 100 24Q146 24 148 66Q100 54 52 66Z" fill="#2d5bd1"/><path d="M52 64Q100 50 148 64Q170 68 176 76Q120 62 52 70Z" fill="#1c3f9c"/><circle cx="100" cy="24" r="4" fill="#1c3f9c"/>`;
  if(acc===4) s+=`<path d="M50 70Q52 20 100 20Q148 20 150 70Q100 58 50 70Z" fill="#c8402f"/><rect x="48" y="62" width="104" height="14" rx="7" fill="#9e2e20"/><circle cx="100" cy="16" r="7" fill="#e2e2e2"/>`;
  if(acc===5) s+=`<path d="M50 100Q42 20 100 20Q158 20 150 100" stroke="#222" stroke-width="7" fill="none"/><rect x="38" y="82" width="18" height="34" rx="9" fill="#2a2a36"/><rect x="144" y="82" width="18" height="34" rx="9" fill="#2a2a36"/><rect x="42" y="88" width="8" height="22" rx="4" fill="#3d8bff"/><rect x="150" y="88" width="8" height="22" rx="4" fill="#3d8bff"/>`;
  if(acc===7) s+=`<path d="M66 144Q100 178 134 144" stroke="#f0c040" stroke-width="5" fill="none" stroke-dasharray="7 3"/>`;
  if(acc===8) s+=`<circle cx="120" cy="96" r="16" fill="#ffffff14" stroke="#d4a82a" stroke-width="3"/><path d="M134 108Q142 140 130 170" stroke="#d4a82a" stroke-width="1.8" fill="none"/>`;
  return s+"</svg>";
}
const rnd=n=>Math.floor(Math.random()*n);
let sgO={fur:0,pat:1,eye:0,acc:0,clo:0,bg:0},sgTab=0;
const SG_TABS=["1. Pelo","2. Acessórios","3. Roupa","4. Fundo"];
function sgRender(){
  document.getElementById("sgBig").innerHTML=catSVG(sgO);const br=document.getElementById("sgBreed");if(br)br.innerHTML=sgO.fur===SPHYNX?"Raça: <b>Sphynx</b> · sem pelo, orelhas grandes e muitas ruguinhas":"Raça: <b>Gato padrão</b> · "+SG.fur[sgO.fur][0].toLowerCase();
  document.getElementById("sgTabs").innerHTML=SG_TABS.map((t,i)=>`<button class="${i===sgTab?'on':''}" onclick="sgTab=${i};sgRender()">${t}</button>`).join("");
  const sel=(k,i)=>sgO[k]===i?" on":"";
  let h="";
  if(sgTab===0){
    h+=`<h5>COR DO PELO</h5><div class="sg-row">${SG.fur.map((f,i)=>`<button class="sg-o${sel('fur',i)}" title="${f[0]}" onclick="sgSet('fur',${i})"><i style="background:${f[1]}"></i></button>`).join("")}</div>`;
    const sph=sgO.fur===SPHYNX;
    h+=`<h5>PADRÃO${sph?'<em>Sphynx não tem pelo, então não tem padrão</em>':''}</h5><div class="sg-row">${SG.pat.map((p,i)=>`<button class="sg-o sq${sph?'':sel('pat',i)}" ${sph?'disabled':''} onclick="sgSet('pat',${i})">${p}</button>`).join("")}</div>`;
    h+=`<h5>COR DOS OLHOS</h5><div class="sg-row">${SG.eye.map((f,i)=>`<button class="sg-o${sel('eye',i)}" title="${f[0]}" onclick="sgSet('eye',${i})"><i style="background:${f[1]}"></i></button>`).join("")}</div>`;
  }
  if(sgTab===1) h+=`<h5>ACESSÓRIOS (OPCIONAL)</h5><div class="sg-row">${SG.acc.map((a,i)=>`<button class="sg-o sq${sel('acc',i)}" onclick="sgSet('acc',${i})"><span>${a[1]}</span>${a[0]}</button>`).join("")}</div>`;
  if(sgTab===2) h+=`<h5>ROUPA (OPCIONAL)</h5><div class="sg-row">${SG.clo.map((c,i)=>`<button class="sg-o sq${sel('clo',i)}" onclick="sgSet('clo',${i})"><i style="background:${c[1]==='#0000'?'#222':c[1]};width:26px;height:26px;margin-bottom:4px"></i>${c[0]}</button>`).join("")}</div>`;
  if(sgTab===3) h+=`<h5>FUNDO</h5><div class="sg-row">${SG.bg.map((b,i)=>`<button class="sg-o${sel('bg',i)}" title="${b[0]}" onclick="sgSet('bg',${i})"><i style="background:radial-gradient(circle at 35% 30%,${b[1][0]},${b[1][1]})"></i></button>`).join("")}</div>`;
  document.getElementById("sgOpts").innerHTML=h;
}
function sgSet(k,i){sgO[k]=i;sgRender()}
function sgShuffle(){sgO={fur:rnd(SG.fur.length),pat:rnd(SG.pat.length),eye:rnd(SG.eye.length),acc:rnd(SG.acc.length),clo:rnd(SG.clo.length),bg:rnd(SG.bg.length)};sgRender()}

// =====================================================================
//  NÃO SALVO — estado compartilhado entre Acervo, Álbum e Economia
//  (protótipo: tudo fica no navegador; num site real isso vira backend)
// =====================================================================
const NS_KEY="naosalvo2_state";

// ---- Economia (números da proposta do grupo) ----
const RARITIES=["Comum","Relevante","Raro","Relíquia","Lendário","Mítico"];
const DUP_VALUE={Comum:5,Relevante:10,Raro:20,"Relíquia":40,"Lendário":80,"Mítico":150}; // carta repetida vira moeda
const ODDS={Comum:44,Relevante:26,Raro:15,"Relíquia":9,"Lendário":5,"Mítico":1};          // chance por carta no pacote
const REWARD={approved:25,oldLink:5,collection:100};                                      // moedas
const XP_GAIN={visit:10,pack:5,approved:50,oldLink:10,collection:100,newCard:{Comum:2,Relevante:4,Raro:8,"Relíquia":15,"Lendário":30,"Mítico":60}};
const PACK_SIZE=5;

// ---- Patentes (quem tem patente maior modera quem tem menor) ----
const RANKS=[
 {id:"discado",name:"Discado",xp:0,color:"#9aa3b2",can:"Navega no acervo, abre pacotes e coleciona cartas."},
 {id:"banda",name:"Banda larga",xp:150,color:"#2fbf5b",can:"Pode enviar vídeos para o acervo."},
 {id:"colab",name:"Colaborador",xp:500,color:"#2f86ff",can:"Pode salvar o link de virais antigos que estão sem vídeo."},
 {id:"mod",name:"Moderador",xp:1500,color:"#a855f7",can:"Modera envios de quem tem patente menor."},
 {id:"dono",name:"Dono de comunidade",xp:4000,color:"#f5b70a",can:"Selo dourado no perfil e voto de minerva na moderação."},
 {id:"lenda",name:"Lenda da internet",xp:10000,color:"#ff3b47",can:"Selo vermelho de lenda. Respeito máximo."}
];
const rankOf=xp=>{let r=RANKS[0];RANKS.forEach(k=>{if(xp>=k.xp)r=k});return r};
const rankIdx=xp=>RANKS.indexOf(rankOf(xp));
const nextRank=xp=>RANKS.find(k=>k.xp>xp);

// ---- Estado ----
function nsFresh(){return{acct:null,xp:0,coins:0,owned:{},completed:{},daily:{d:"",used:false},welcome:false,lastVisit:"",streak:0,subs:[],links:{},dayOffset:0,approvedCount:0,modDone:{}}}
let NS=nsFresh();
try{const s=JSON.parse(localStorage.getItem(NS_KEY)||"null");if(s)NS=Object.assign(nsFresh(),s)}catch(e){}
function nsSave(){try{localStorage.setItem(NS_KEY,JSON.stringify(NS))}catch(e){}}
function nsToday(){const d=new Date();d.setDate(d.getDate()+(NS.dayOffset||0));return d.toISOString().slice(0,10)}

// visita diária: XP + sequência (o pacote grátis do dia é aberto no álbum)
(function dailyVisit(){
  const t=nsToday();if(NS.lastVisit===t)return;
  const y=new Date(t);y.setDate(y.getDate()-1);
  NS.streak=NS.lastVisit===y.toISOString().slice(0,10)?NS.streak+1:1;
  NS.lastVisit=t;NS.xp+=XP_GAIN.visit;nsSave();
})();

function addXP(n){const before=rankOf(NS.xp);NS.xp+=n;const after=rankOf(NS.xp);nsSave();if(after!==before)setTimeout(()=>toast(`🎖️ Nova patente: ${after.name}! ${after.can}`,4200),600);renderWallet()}
function addCoins(n,why){NS.coins+=n;nsSave();renderWallet();if(why)toast(`+${n} 🪙 ${why}`)}

// ---- UI compartilhada ----
function toast(m,ms){let t=document.getElementById("toast");if(!t){t=document.createElement("div");t.id="toast";t.className="toast";document.body.appendChild(t)}
  t.textContent=m;t.style.display="block";clearTimeout(t._t);t._t=setTimeout(()=>t.style.display="none",ms||2400)}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
const fmt=n=>Number(n).toLocaleString("pt-BR");

function renderWallet(){
  const el=document.getElementById("wallet");if(!el)return;
  const r=rankOf(NS.xp),nx=nextRank(NS.xp);
  const pct=nx?Math.round((NS.xp-r.xp)/(nx.xp-r.xp)*100):100;
  el.innerHTML=`<button class="wl" onclick="openTestPanel()" title="Moedas, XP e patente — clique para o modo teste">
    <span class="wl-c">${icon("coin")}<b>${fmt(NS.coins)}</b></span>
    <span class="wl-r"><em style="color:${r.color}">${r.name}</em><i><s style="width:${pct}%;background:${r.color}"></s></i><small>${fmt(NS.xp)} XP${nx?` · ${fmt(nx.xp-NS.xp)} p/ ${nx.name}`:""}</small></span></button>`;
  updateAccount();
}

// ---- Cadastro com avatar de gatinho (layout original) ----
function openSignup(){
  const a=NS.acct;if(a){sgO={...a.av};document.getElementById("sgU").value=a.user;document.getElementById("sgE").value=a.email||"";document.getElementById("sgChat").checked=!!a.chat}
  document.getElementById("sgErr").textContent="";document.getElementById("sgm").classList.add("open");sgRender();
}
function closeSignup(){document.getElementById("sgm").classList.remove("open")}
function submitSignup(){
  const u=document.getElementById("sgU").value.trim(),e=document.getElementById("sgE").value.trim(),p=document.getElementById("sgP").value,chat=document.getElementById("sgChat").checked;
  const er=document.getElementById("sgErr");
  if(!/^[\w.-]{3,20}$/.test(u))return er.textContent="Usuário: 3 a 20 caracteres (letras, números, _ . -).";
  if(!/^\S+@\S+\.\S+$/.test(e))return er.textContent="Digite um e-mail válido.";
  if(!NS.acct&&p.length<6)return er.textContent="A senha precisa de pelo menos 6 caracteres.";
  const isNew=!NS.acct;
  NS.acct={user:u,email:e,av:{...sgO},chat};
  if(chat&&NS.xp<RANKS[1].xp)NS.xp=RANKS[1].xp; // quem é do chat já entra com patente maior
  nsSave();closeSignup();renderWallet();
  if(isNew)toast(chat?"Bem-vindo! Por ser do chat, você já entra como Banda larga 🐱":"Conta criada! Seu gatinho já está no ranking 🐱",3200);
  if(typeof onAccountChange==="function")onAccountChange();
}
function updateAccount(){
  const el=document.getElementById("acct");if(!el)return;const a=NS.acct;
  el.innerHTML=a?`<button class="sg-acct" onclick="openSignup()"><span class="sg-av">${catSVG(a.av)}</span><span>${escapeHtml(a.user)}<b>Gato nível ${rankIdx(NS.xp)+1}</b></span></button>`:`<button class="sg-cta" onclick="openSignup()">${icon("cat")}<span class="lg">CRIAR CONTA</span><span class="sh">ENTRAR</span></button>`;
}
const needAccount=()=>{if(NS.acct)return false;toast("Crie sua conta (e seu gatinho) primeiro 🐱");openSignup();return true};

// ---- Modo teste (para demonstrar a progressão) ----
function openTestPanel(){
  let m=document.getElementById("tp");
  if(!m){m=document.createElement("div");m.id="tp";m.onclick=e=>{if(e.target===m)m.classList.remove("open")};document.body.appendChild(m)}
  const r=rankOf(NS.xp);
  m.innerHTML=`<div class="tp-box"><button class="sg-x" onclick="document.getElementById('tp').classList.remove('open')">×</button>
   <h3>Seu perfil</h3>
   <div class="tp-kv"><span>Moedas</span><b>🪙 ${fmt(NS.coins)}</b></div>
   <div class="tp-kv"><span>XP</span><b>${fmt(NS.xp)}</b></div>
   <div class="tp-kv"><span>Patente</span><b style="color:${r.color}">${r.name}</b></div>
   <div class="tp-kv"><span>Sequência de visitas</span><b>${NS.streak} dia(s)</b></div>
   <div class="tp-kv"><span>Envios aprovados</span><b>${NS.approvedCount}</b></div>
   <h4>Patentes</h4>${RANKS.map(k=>`<div class="tp-rk ${k===r?'on':''}"><i style="background:${k.color}"></i><b>${k.name}</b><small>${fmt(k.xp)} XP · ${k.can}</small></div>`).join("")}
   <h4>Modo teste do protótipo</h4>
   <div class="tp-btns"><button onclick="testDay()">⏭ Avançar 1 dia</button><button onclick="addXP(500);openTestPanel()">+500 XP</button><button onclick="addCoins(300);openTestPanel()">+300 🪙</button><button onclick="if(window.confirmReset!==1){window.confirmReset=1;this.textContent='Clique de novo p/ confirmar';return}localStorage.removeItem(NS_KEY);location.reload()">↺ Zerar tudo</button></div>
   <p class="tp-note">Avançar o dia libera um novo pacote grátis no álbum.</p></div>`;
  m.classList.add("open");
}
function testDay(){NS.dayOffset=(NS.dayOffset||0)+1;nsSave();location.reload()}


// ---- Ícones dos menus (SVG próprios, traço único) ----
const ICONS={
 home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h5v-5.5h3v5.5h5V10"/>',
 timeline:'<path d="M3 12h18"/><circle cx="6" cy="12" r="1.9" fill="currentColor"/><circle cx="12" cy="12" r="1.9" fill="currentColor"/><circle cx="18" cy="12" r="1.9" fill="currentColor"/><path d="M6 8.5V5M12 15.5V19M18 8.5V5"/>',
 categories:'<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="3.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="3.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
 random:'<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.2" fill="currentColor"/>',
 ranking:'<path d="M8 4h8v5a4 4 0 0 1-8 0V4Z"/><path d="M8 6H4.5a3 3 0 0 0 3.5 4M16 6h3.5a3 3 0 0 1-3.5 4"/><path d="M12 13v4M8.5 20h7M10 17h4v3h-4z"/>',
 moderation:'<path d="M12 3 4.5 6v5.5c0 4.4 3.1 8 7.5 9.5 4.4-1.5 7.5-5.1 7.5-9.5V6L12 3Z"/><path d="m8.8 12 2.3 2.3 4.2-4.6"/>',
 album:'<rect x="7" y="3.5" width="12" height="16" rx="2" transform="rotate(8 13 11.5)"/><rect x="4" y="5" width="12" height="16" rx="2"/><path d="M7.5 9.5h5M7.5 13h3"/>',
 send:'<path d="M12 16V5M7.5 9.5 12 5l4.5 4.5"/><path d="M4.5 15v3.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V15"/>',
 collections:'<path d="M12 3.5 3.5 8 12 12.5 20.5 8 12 3.5Z"/><path d="m3.5 12 8.5 4.5 8.5-4.5"/><path d="m3.5 16 8.5 4.5 8.5-4.5"/>',
 pack:'<rect x="3.5" y="8.5" width="17" height="12" rx="1.5"/><path d="M3.5 12.5h17M12 8.5v12"/><path d="M12 8.5C10 4 6.5 4.5 7 7c.3 1.4 2.7 1.5 5 1.5ZM12 8.5c2-4.5 5.5-4 5-1.5-.3 1.4-2.7 1.5-5 1.5Z"/>',
 shop:'<path d="M5 8h14l-1.2 11.2a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3L5 8Z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/>',
 convert:'<path d="M4.5 12a7.5 7.5 0 0 1 13-5.1L19.5 9"/><path d="M19.5 4.5V9H15"/><path d="M19.5 12a7.5 7.5 0 0 1-13 5.1L4.5 15"/><path d="M4.5 19.5V15H9"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.5 1.5M17.2 17.2l1.5 1.5M5.3 18.7l1.5-1.5M17.2 6.8l1.5-1.5"/>',
 moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>',
 coin:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5.5"/><path d="M12 9.5v5"/>',
 cat:'<path d="M5 9.5 4.5 3.5l4.5 3.2a9 9 0 0 1 6 0l4.5-3.2-.5 6"/><path d="M5 9.5C4 15 7.5 20 12 20s8-5 7-10.5"/><path d="M9.5 13h.01M14.5 13h.01" stroke-width="2.6"/><path d="M11 16h2l-1 1Z"/>',
 flame:'<path d="M12 21c-4 0-6.5-2.7-6.5-6.2 0-3.4 2.6-5.3 3.6-8.3.4 1.6 1.4 2.8 2.6 3.3.2-2.6 1.4-5 3.6-6.8-.4 2.9.8 4.6 2 6.3 1 1.4 1.7 3 1.7 5.1C19 18.3 16 21 12 21Z"/><path d="M12 21c-1.7 0-2.8-1.2-2.8-2.8 0-1.8 1.4-2.8 2.1-4.2.6 1 2.9 2.3 2.9 4.4 0 1.5-.9 2.6-2.2 2.6Z"/>',
 new:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
 lock:'<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/><path d="M12 14.5v2.5"/>',
 cloud:'<path d="M7 18.5h10.5a4 4 0 0 0 .4-8 6 6 0 0 0-11.6 1.3A3.4 3.4 0 0 0 7 18.5Z"/><path d="M12 16v-5M9.8 13 12 10.8l2.2 2.2"/>',
 link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
 check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
 xmark:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
 alert:'<path d="M12 4 2.8 19.5h18.4L12 4Z"/><path d="M12 10v4.5M12 17.2h.01"/>',
 clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
 search:'<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
 all:'<path d="M12 3.5l2 5 5 .4-3.8 3.3 1.2 5-4.4-2.7-4.4 2.7 1.2-5L5 8.9l5-.4 2-5Z"/>',
 video:'<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M3.5 9h17M3.5 15h17M8 5.5v3.5M8 15v3.5M16 5.5v3.5M16 15v3.5"/>',
 tv:'<rect x="3.5" y="6.5" width="17" height="12" rx="2"/><path d="M8.5 3 12 6.5 15.5 3M8 21h8"/>',
 music:'<path d="M9 18V5.5l11-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
 culture:'<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5Z"/>',
 zoeira:'<circle cx="12" cy="12" r="8.5"/><path d="M8 14.5a4.5 4.5 0 0 0 8 0Z"/><path d="M8.5 9.5l1.5 1M15.5 9.5l-1.5 1"/>',
 photo:'<path d="M4 8.5h3l1.5-2.5h7L17 8.5h3v11H4z"/><circle cx="12" cy="13.5" r="3.5"/>',
 sports:'<circle cx="12" cy="12" r="8.5"/><path d="m12 7.5 3.5 2.6-1.3 4.1H9.8L8.5 10.1 12 7.5Z"/><path d="M12 3.5v4M15.5 10.1l4.5-1.4M14.2 14.2l2.6 3.8M9.8 14.2l-2.6 3.8M8.5 10.1 4 8.7"/>',
};
const icon=(k,cls)=>`<svg class="ico ${cls||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]||""}</svg>`;

// ---- Tema claro / escuro ----
function setTheme(t){document.documentElement.dataset.theme=t;try{localStorage.setItem("ns_theme",t)}catch(e){}const b=document.getElementById("themeB");if(b){b.setAttribute("aria-checked",t==="dark");b.title=t==="dark"?"Modo escuro ativo · clique para o modo claro":"Modo claro ativo · clique para o modo escuro"}}
function toggleTheme(){setTheme(document.documentElement.dataset.theme==="light"?"dark":"light")}

// ---- Cabeçalho + sub-menu compartilhados ----
// page: "inicio" | "album"; sub: [{k,ic,label,fn,cta,dd,href}]
function renderHeader(page,opt={}){
  const hd=document.createElement("header");hd.className="hd";
  hd.innerHTML=`<a class="brand" href="index.html" aria-label="Não Salvo — início"><img src="logo-word.png" alt="Não Salvo"><small>Museu da internet brasileira</small></a>
   <div class="tools">${opt.search?`<label class="srch">${icon("search","s-ic")}<input id="q" type="search" placeholder="Buscar memes, anos, categorias…" aria-label="Buscar"></label>`:""}
   <div id="wallet"></div><div id="acct"></div><button class="tsw" id="themeB" role="switch" aria-label="Modo escuro" onclick="toggleTheme()"><span class="t-l">${icon("sun")}<b class="lb">Claro</b></span><span class="t-d">${icon("moon")}<b class="lb">Escuro</b></span></button></div>`;
  document.body.prepend(hd);
  if(opt.sub){const n=document.createElement("nav");n.className="sub";n.id="sub";n.setAttribute("aria-label","Menu");hd.after(n);renderSub(opt.sub)}
  setTheme(document.documentElement.dataset.theme||"light");
  const fix=()=>document.documentElement.style.setProperty("--hdh",(window.innerWidth>760?hd.offsetHeight:0)+"px");fix();addEventListener("resize",fix);
}
let SUB=[],subOn=null;
function renderSub(items){if(items)SUB=items;const n=document.getElementById("sub");if(!n)return;
  n.innerHTML=SUB.map((x,i)=>x.sp?`<span class="sp"></span>`:x.href?`<a href="${x.href}" class="${x.k===subOn?"on":""} ${x.cta?"cta":""}"${x.k===subOn?' aria-current="page"':""}>${icon(x.ic)}${x.label}</a>`:`<button data-i="${i}" class="${x.k===subOn?"on":""} ${x.cta?"cta":""} ${x.dd?"dd":""}">${icon(x.ic)}${x.label}</button>`).join("");
  n.querySelectorAll("button[data-i]").forEach(b=>b.onclick=e=>{const x=SUB[+b.dataset.i];x.fn&&x.fn(e,b)});
}
function setSubOn(k){subOn=k;renderSub()}
function openPop(anchor,items){
  let p=document.getElementById("pop");if(!p){p=document.createElement("div");p.id="pop";p.className="pop";document.body.appendChild(p);
    document.addEventListener("click",e=>{if(!p.contains(e.target)&&!e.target.closest(".dd"))p.classList.remove("open")})}
  p.innerHTML=items.map((x,i)=>`<button data-i="${i}">${x.ic?icon(x.ic):""}${x.label}${x.note?`<small>${x.note}</small>`:""}</button>`).join("");
  p.querySelectorAll("button").forEach(b=>b.onclick=()=>{p.classList.remove("open");items[+b.dataset.i].fn()});
  const r=anchor.getBoundingClientRect();p.style.left=Math.min(r.left,innerWidth-240)+"px";p.style.top=(r.bottom+6)+"px";p.classList.toggle("open");
}

// injeta o modal de cadastro
(function inject(){
  const d=document.createElement("div");d.innerHTML="<div id=\"sgm\" onclick=\"if(event.target===this)closeSignup()\">\n  <div class=\"sg-box\">\n    <button class=\"sg-x\" onclick=\"closeSignup()\" aria-label=\"Fechar\">×</button>\n    <div>\n      <span class=\"sg-step\">PASSO 1 DE 1</span>\n      <h2>CRIAR CONTA<br>É SÓ O COMEÇO.<em>CRIE SEU AVATAR.</em></h2>\n      <p class=\"s\">Todo mundo começa com o mesmo gato.<br>A internet é sua. O estilo também.</p>\n      <label>Nome de usuário</label><input class=\"t\" id=\"sgU\" placeholder=\"ex: internauta_2006\" maxlength=\"20\">\n      <label>E-mail</label><input class=\"t\" id=\"sgE\" type=\"email\" placeholder=\"ex: voce@email.com\">\n      <label>Senha</label><input class=\"t\" id=\"sgP\" type=\"password\" placeholder=\"Crie uma senha segura\">\n      <label class=\"sg-chk\"><input type=\"checkbox\" id=\"sgChat\"> <span>Sou do chat da live do Cid <small>(já entra como Banda larga e pode enviar vídeos)</small></span></label>\n      <div class=\"sg-err\" id=\"sgErr\"></div>\n      <button class=\"sg-go\" onclick=\"submitSignup()\">CONTINUAR →</button>\n      <p class=\"s\" style=\"text-align:center;margin:10px 0 4px\">ou cadastre-se com</p>\n      <div class=\"sg-soc\"><button onclick=\"this.textContent='Em breve'\">Google</button><button onclick=\"this.textContent='Em breve'\">Discord</button></div>\n    </div>\n    <div class=\"sg-pv\">\n      <div style=\"font-weight:700;letter-spacing:.5px\">🐾 PERSONALIZE SEU GATO</div>\n      <div class=\"s\" style=\"color:#8590ad;font-size:12px\">Neste museu, todo avatar é um gatinho.</div>\n      <div class=\"big\" id=\"sgBig\"></div><div class=\"sg-breed\" id=\"sgBreed\"></div>\n      <button class=\"sg-shuf\" onclick=\"sgShuffle()\">🔀 EMBARALHAR TUDO</button>\n    </div>\n    <div class=\"sg-opts\">\n      <div class=\"sg-tabs\" id=\"sgTabs\"></div>\n      <div id=\"sgOpts\"></div>\n      <p class=\"sg-note\">Protótipo: nenhuma conta real é criada. O avatar, as moedas e as cartas ficam salvos só neste navegador, e a senha não é guardada.</p>\n    </div>\n  </div>\n</div>";document.body.appendChild(d.firstElementChild);
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeSignup();const t=document.getElementById("tp");t&&t.classList.remove("open");const p=document.getElementById("pop");p&&p.classList.remove("open")}});
})();
