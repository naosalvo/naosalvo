// =====================================================================
//  Player "da época": o vídeo abre com a cara do player do ano do meme
//  (inspirado no visual de cada era — sem logos de terceiros)
// =====================================================================
const ERAS=[
 {id:0,to:2004,name:"Player de mídia",note:"Antes do YouTube: o viral chegava por e-mail, Kazaa ou CD gravado."},
 {id:1,to:2007,name:"Player 2005–2007",note:"Barra cinza, estrelinhas de avaliação e 240p raiz."},
 {id:2,to:2009,name:"Player 2008–2009",note:"Barra preta brilhante, botão HQ e vídeos relacionados no fim."},
 {id:3,to:2012,name:"Player 2010–2012",note:"Barra de curtidas verde e vermelha e botão de inscrição amarelo."},
 {id:4,to:2016,name:"Player 2013–2016",note:"Visual flat, controles por cima do vídeo e engrenagem de qualidade."},
 {id:5,to:9999,name:"Player atual",note:"Modo escuro, cantos arredondados e barra de progresso vermelha."}
];
const eraOf=y=>ERAS.find(e=>(parseInt(y)||2020)<=e.to);
const mmss=s=>Math.floor(s/60)+":"+String(Math.floor(s%60)).padStart(2,"0");
const VP_GRADS=["#1d3a8a,#0b0f2a","#5b1d8a,#14061f","#8a3a1d,#2a0f06","#1d8a6e,#06241d","#8a1d4a,#240614","#1d6e8a,#06202a","#7a8a1d,#1f2406"];
const vpGrad=s=>"linear-gradient(135deg,"+VP_GRADS[[...s].reduce((a,c)=>a+c.charCodeAt(0),0)%VP_GRADS.length]+")";

function playerHTML(m){
  const e=eraOf(m.y),slug=m.id||"video",views=fmt(m.views||1000),likes=Math.round((m.saves||100)*4.2),dis=Math.round(likes*.06);
  const q=["","240p","HQ","360p","720p","1080p"][e.id]||"";
  const yearsAgo=Math.max(1,new Date().getFullYear()-(parseInt(m.y)||2020));
  let under="";
  if(e.id===0) under=`<div class="u0">Arquivo: ${slug}.wmv · 3,2 MB · recebido por e-mail (FW: FW: FW: olha isso kkkk)</div>`;
  if(e.id===1) under=`<div class="u1"><h4>${escapeHtml(m.t)}</h4><div><span class="st">★★★★★</span> <small>(${fmt(Math.round(likes/9))} avaliações)</small></div><div class="ul">Exibições: <b>${views}</b> · <a>Adicionar aos favoritos</a> · <a>Compartilhar</a> · <a>Sinalizar</a></div></div>`;
  if(e.id===2) under=`<div class="u2"><h4>${escapeHtml(m.t)}</h4><div class="u2r"><span class="st">★★★★½</span><span>${views} exibições</span><span class="hq">Assistir em alta qualidade</span></div></div>`;
  if(e.id===3) under=`<div class="u3"><h4>${escapeHtml(m.t)}</h4><div class="u3r"><span class="ch">acervo_naosalvo</span><button class="sub3">Inscrever-se</button><b class="vw">${views}</b></div><div class="u3l"><span>👍 Gostei</span><span>👎</span><i><s style="width:94%"></s></i><small>${fmt(likes)} curtidas, ${fmt(dis)} não curtiram</small></div></div>`;
  if(e.id===4) under=`<div class="u4"><h4>${escapeHtml(m.t)}</h4><div class="u4r"><span class="av4">🐱</span><span class="ch">acervo_naosalvo</span><button class="sub4">Inscrever-se <em>${fmt(Math.round(likes*3))}</em></button><b class="vw">${views} visualizações</b></div><div class="u4l"><span>👍 ${fmt(likes)}</span><span>👎 ${fmt(dis)}</span><i><s style="width:94%"></s></i></div></div>`;
  if(e.id===5) under=`<div class="u5"><h4>${escapeHtml(m.t)}</h4><div class="u5r"><span class="av4">🐱</span><span class="ch">acervo_naosalvo<small>${fmt(Math.round(likes*3))} inscritos</small></span><button class="sub5">Inscrever-se</button><span class="pill">👍 ${fmt(likes)} │ 👎</span><span class="pill">↗ Compartilhar</span></div><div class="u5d"><b>${views} visualizações · há ${yearsAgo} anos</b></div></div>`;
  return `<div class="vp vp-e${e.id}">
   ${e.id===0?`<div class="vp-title"><span>▶ Reproduzindo: ${slug}.wmv</span><span>_ □ ×</span></div>`:""}
   <div class="vp-stage">
    <div class="vp-screen" style="background:${vpGrad(m.t)}">${m.yt?`<img class="vp-thumb" src="https://i.ytimg.com/vi/${m.yt}/hqdefault.jpg" alt="" onerror="this.remove()">`:""}<span class="vp-emo">${m.e}</span><div class="vp-noise"></div>
      <button class="vp-big" data-a="play">▶</button><div class="vp-buf"><span></span>${e.id<=1?"Carregando… (conexão discada?)":"Carregando…"}</div><div class="vp-end"></div></div>
    <div class="vp-bar"><button class="vp-pp" data-a="play">▶</button><div class="vp-track"><i class="vp-load"></i><i class="vp-prog"></i><b class="vp-knob"></b></div>
      <span class="vp-time">0:00 / ${m.yt?"--:--":mmss(m.dur||47)}</span>${q?`<span class="vp-q">${q}</span>`:""}<button class="vp-ic vp-mute" title="Som">🔊</button>${e.id>=4?'<span class="vp-ic">⚙</span>':''}<button class="vp-ic vp-fs" title="Tela cheia">⛶</button></div>
   </div>${under}
   <div class="vp-era">📼 ${e.name} · ${e.note}${m.yt?` · <a class="vp-ytl" href="https://www.youtube.com/watch?v=${m.yt}" target="_blank" rel="noopener">Assistir no YouTube ↗</a>`:" · vídeo original ainda não encontrado"}</div></div>`;
}

// reprodução: vídeo real do YouTube dentro do visual da época (quando o meme tem link);
// sem link, simula a reprodução com a arte do meme
function initPlayer(root,m,related,onPick){
  const e=eraOf(m.y),$q=s=>root.querySelector(s);
  const prog=$q(".vp-prog"),knob=$q(".vp-knob"),time=$q(".vp-time"),scr=$q(".vp-screen"),pp=$q(".vp-pp"),load=$q(".vp-load");
  let t=0,dur=m.yt?0:(m.dur||47),playing=false,started=false,muted=false;
  const draw=()=>{const p=dur?t/dur*100:0;prog.style.width=p+"%";knob.style.left=p+"%";time.textContent=mmss(t)+" / "+(dur?mmss(dur):"--:--")};
  const setPlaying=v=>{playing=v;scr.classList.toggle("playing",v);pp.textContent=v?"❚❚":(scr.classList.contains("ended")?"↻":"▶")};
  function endScreen(){setPlaying(false);scr.classList.add("ended");pp.textContent="↻";
    const rel=(related||[]).slice(0,4);
    $q(".vp-end").innerHTML=(rel.length&&e.id>=2?`<div class="vp-rel-t">${e.id>=5?"A seguir":"Vídeos relacionados"}</div><div class="vp-rel">${rel.map(r=>`<button data-id="${r.id}"><span style="background:${vpGrad(r.t)}">${r.e}</span>${escapeHtml(r.t)}</button>`).join("")}</div>`:"")+`<button class="vp-again" data-a="play">↻ Assistir novamente</button>`;
    $q(".vp-end").querySelectorAll("[data-id]").forEach(b=>b.onclick=ev=>{ev.stopPropagation();onPick&&onPick(b.dataset.id)});
    $q(".vp-end [data-a]").onclick=ev=>{ev.stopPropagation();scr.classList.remove("ended");api.seek(0);api.play()};
  }
  let api;
  if(m.yt){
    // ---- YouTube real, controlado pela barra da época (postMessage, sem script externo) ----
    let ifr=null,ready=false,timer=0,poke=0;
    const send=(func,args=[])=>{try{ifr&&ifr.contentWindow.postMessage(JSON.stringify({event:"command",func,args}),"*")}catch(x){}};
    const fail=msg=>{clearInterval(poke);scr.classList.remove("buffering");scr.classList.add("ytfail");
      $q(".vp-end").innerHTML=`<div class="vp-fail">${msg}</div><a class="vp-again" href="https://www.youtube.com/watch?v=${m.yt}" target="_blank" rel="noopener">▶ Assistir no YouTube ↗</a>`;scr.classList.add("ended")};
    const onMsg=ev=>{if(!ifr||ev.source!==ifr.contentWindow)return;let d;try{d=typeof ev.data==="string"?JSON.parse(ev.data):ev.data}catch(x){return}
      if(!d||!d.event)return;
      if(!ready){ready=true;clearTimeout(timer);clearInterval(poke);scr.classList.remove("buffering");send("addEventListener",["onStateChange"]);if(muted)send("mute")}
      if(d.event==="onError")return fail("Este vídeo não pode ser reproduzido fora do YouTube.");
      const info=d.info||{};
      if(typeof info.duration==="number"&&info.duration>0)dur=info.duration;
      if(typeof info.currentTime==="number")t=info.currentTime;
      if(typeof info.videoLoadedFraction==="number")load.style.width=(info.videoLoadedFraction*100)+"%";
      const st=typeof info.playerState==="number"?info.playerState:(d.event==="onStateChange"?d.info:undefined);
      if(st===1){scr.classList.remove("ended","buffering");setPlaying(true)}
      else if(st===2)setPlaying(false);
      else if(st===3)scr.classList.add("buffering");
      else if(st===0)endScreen();
      draw();
    };
    addEventListener("message",onMsg);
    const start=()=>{started=true;scr.classList.add("buffering","yt");
      ifr=document.createElement("iframe");
      const origin=/^https?:/.test(location.origin)?"&origin="+encodeURIComponent(location.origin):"";
      ifr.src=`https://www.youtube-nocookie.com/embed/${m.yt}?enablejsapi=1&autoplay=1&controls=0&disablekb=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&fs=0${origin}`;
      ifr.allow="autoplay; encrypted-media; picture-in-picture; fullscreen";ifr.title=m.t;ifr.className="vp-yt";
      scr.prepend(ifr);
      ifr.addEventListener("load",()=>{let n=0;poke=setInterval(()=>{if(ready||++n>20)return clearInterval(poke);try{ifr.contentWindow.postMessage(JSON.stringify({event:"listening",id:m.yt,channel:"widget"}),"*")}catch(x){}},250)});
      timer=setTimeout(()=>{if(!ready)fail("Não deu para carregar o vídeo aqui.")},(e.id<=1?9000:7000));
    };
    api={play:()=>{if(!started)return start();send("playVideo")},pause:()=>send("pauseVideo"),seek:s=>{t=s;draw();send("seekTo",[s,true])},
      mute:v=>send(v?"mute":"unMute"),
      stop:()=>{removeEventListener("message",onMsg);clearTimeout(timer);clearInterval(poke);send("pauseVideo");if(ifr){ifr.remove();ifr=null}}};
  } else {
    // ---- simulação (sem vídeo original) ----
    let raf=0,last=0;
    const tick=now=>{if(!playing)return;t=Math.min(dur,t+(now-last)/1000*4);last=now;draw();if(t>=dur){endScreen();return}raf=requestAnimationFrame(tick)};
    const go=()=>{setPlaying(true);last=performance.now();raf=requestAnimationFrame(tick)};
    api={play:()=>{if(t>=dur){t=0;scr.classList.remove("ended")}
        if(!started){started=true;scr.classList.add("buffering");load.style.width="100%";setTimeout(()=>{scr.classList.remove("buffering");go()},e.id<=1?1600:e.id<=3?700:250);return}go()},
      pause:()=>{setPlaying(false);cancelAnimationFrame(raf)},seek:s=>{t=s;draw()},mute:()=>{},stop:()=>{cancelAnimationFrame(raf);playing=false}};
  }
  const toggle=()=>{if(scr.classList.contains("ended")&&!scr.classList.contains("ytfail")){scr.classList.remove("ended");api.seek(0);api.play();return}playing?api.pause():api.play()};
  root.querySelectorAll(".vp-big,.vp-pp").forEach(b=>b.onclick=ev=>{ev.stopPropagation();toggle()});
  scr.onclick=()=>{if(scr.classList.contains("ended"))return;toggle()};
  $q(".vp-track").onclick=ev=>{if(!dur)return;const r=ev.currentTarget.getBoundingClientRect();const s=Math.max(0,Math.min(dur,(ev.clientX-r.left)/r.width*dur));scr.classList.remove("ended");api.seek(s);if(!playing)api.play()};
  const mb=$q(".vp-mute");if(mb)mb.onclick=ev=>{ev.stopPropagation();muted=!muted;mb.textContent=muted?"🔇":"🔊";api.mute(muted)};
  const fb=$q(".vp-fs");if(fb)fb.onclick=ev=>{ev.stopPropagation();const st=$q(".vp-stage");try{document.fullscreenElement?document.exitFullscreen():st.requestFullscreen()}catch(x){}};
  draw();
  return {stop:()=>api.stop()};
}

const PLAYER_CSS=`
.vp{font-family:Arial,Helvetica,sans-serif;--h:auto}
.vp-stage{position:relative}
.vp-screen{position:relative;aspect-ratio:16/9;display:grid;place-items:center;overflow:hidden;cursor:pointer;background:#000}
.vp-emo{font-size:clamp(60px,12vw,110px);filter:drop-shadow(0 6px 16px #000a);transition:filter .3s}
.vp-screen.playing .vp-emo{animation:vpb 1.1s ease-in-out infinite}
@keyframes vpb{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-10px) rotate(3deg) scale(1.06)}}
.vp-noise{position:absolute;inset:0;pointer-events:none;opacity:0}
.vp-big{position:absolute;width:74px;height:52px;border-radius:14px;background:#000a;color:#fff;font-size:24px;border:0;cursor:pointer}
.vp-screen.playing .vp-big,.vp-screen.buffering .vp-big,.vp-screen.ended .vp-big{display:none}
.vp-buf{position:absolute;display:none;flex-direction:column;align-items:center;gap:10px;color:#fff;font-size:12px;text-shadow:0 1px 3px #000}
.vp-buf span{width:34px;height:34px;border:4px solid #fff4;border-top-color:#fff;border-radius:50%;animation:vps .8s linear infinite}
@keyframes vps{to{transform:rotate(360deg)}}
.vp-screen.buffering .vp-buf{display:flex}
.vp-end{position:absolute;inset:0;background:#000d;display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:14px}
.vp-screen.ended .vp-end{display:flex}
.vp-rel-t{color:#ddd;font-size:12px;align-self:flex-start}
.vp-rel{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;width:100%}
.vp-rel button{background:none;border:0;color:#ddd;font-size:11px;text-align:left;cursor:pointer;line-height:1.2}
.vp-rel button span{display:grid;place-items:center;aspect-ratio:16/9;font-size:28px;margin-bottom:4px;border:1px solid #fff2}
.vp-rel button:hover{color:#fff}
.vp-again{background:#fff2;border:1px solid #fff5;color:#fff;border-radius:4px;padding:6px 12px;cursor:pointer;font-size:12px}
.vp-bar{display:flex;align-items:center;gap:10px;padding:0 10px;height:32px;font-size:11px;color:#fff;user-select:none}
.vp-pp{background:none;border:0;color:inherit;font-size:13px;cursor:pointer;width:18px}
.vp-track{flex:1;height:6px;position:relative;background:#555;cursor:pointer}
.vp-track i{position:absolute;left:0;top:0;bottom:0;width:0}
.vp-load{background:#999;transition:width 1.5s}
.vp-prog{background:#c00}
.vp-knob{position:absolute;top:50%;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:#eee;left:0}
.vp-ic{opacity:.85}.vp-q{font-weight:700}
.vp-era{font-family:Inter,sans-serif;font-size:11px;color:#8590ad;padding:8px 2px 0}
.vp-ytl{color:#e62117!important;font-weight:700;text-decoration:none!important}
.vp-thumb{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.9}
.vp-screen.playing .vp-thumb,.vp-screen.yt .vp-thumb,.vp-screen.yt .vp-emo{display:none}
.vp-yt{position:absolute;inset:0;width:100%;height:100%;border:0;z-index:1;pointer-events:none}
.vp-screen .vp-noise{z-index:2}.vp-screen .vp-big,.vp-screen .vp-buf,.vp-screen .vp-end{z-index:3}
.vp-e0 .vp-yt{filter:saturate(.7) contrast(1.15) blur(.6px)}.vp-e1 .vp-yt{filter:saturate(.85) blur(.35px)}
.vp-fail{color:#fff;font:600 13px Inter,sans-serif;text-align:center;max-width:80%}
a.vp-again{text-decoration:none}
.vp-ic{background:none;border:0;color:inherit;cursor:pointer;font-size:inherit;padding:0}
.vp-stage:fullscreen{background:#000;display:flex;flex-direction:column;justify-content:center}.vp-stage:fullscreen .vp-screen{aspect-ratio:auto;flex:1}
.vp h4{font-weight:700}
.vp a{color:#03c;cursor:pointer;text-decoration:underline}
/* era 0: player de mídia pré-YouTube */
.vp-e0{background:linear-gradient(#e9eef7,#c4cfe2);border:2px solid #7a8bb0;border-radius:8px;padding:0 6px 8px}
.vp-e0 .vp-title{display:flex;justify-content:space-between;background:linear-gradient(#2a5bd7,#0d2f8f);color:#fff;font:bold 12px Tahoma,Arial;padding:5px 8px;margin:0 -6px 6px;border-radius:6px 6px 0 0}
.vp-e0 .vp-stage{max-width:520px;margin:0 auto}
.vp-e0 .vp-screen{aspect-ratio:4/3;border:2px inset #889}
.vp-e0 .vp-emo{filter:blur(2.2px) saturate(.6) contrast(1.3)}
.vp-e0 .vp-noise{opacity:.35;background:repeating-linear-gradient(0deg,#000 0 1px,transparent 1px 3px)}
.vp-e0 .vp-bar{background:linear-gradient(#f4f6fb,#b9c4da);color:#123;border-radius:0 0 6px 6px;margin-top:6px}
.vp-e0 .vp-track{background:#7a8bb0;height:5px;border-radius:3px}.vp-e0 .vp-prog{background:#1fa83a}.vp-e0 .vp-knob{background:#2a5bd7;border-radius:3px;width:10px;height:14px;margin:-7px 0 0 -5px}
.vp-e0 .vp-big{background:#2a5bd7;border-radius:50%;width:60px;height:60px}
.u0{font:11px Tahoma,Arial;color:#334;padding:6px 2px 0}
/* era 1: 2005–2007 */
.vp-e1{background:#fff;color:#000;padding:10px;border:1px solid #ccc}
.vp-e1 .vp-screen{aspect-ratio:4/3;max-width:440px;margin:0 auto}
.vp-e1 .vp-stage{max-width:440px;margin:0 auto}
.vp-e1 .vp-emo{filter:blur(1.6px) saturate(.75)}
.vp-e1 .vp-noise{opacity:.18;background:repeating-linear-gradient(90deg,#000 0 2px,transparent 2px 4px)}
.vp-e1 .vp-bar{background:linear-gradient(#f2f2f2,#c8c8c8);color:#333;border:1px solid #999;border-top:0;height:26px}
.vp-e1 .vp-track{height:8px;background:#e6e6e6;border:1px solid #999}.vp-e1 .vp-prog{background:#8a8a8a}.vp-e1 .vp-load{background:#d0d0d0}.vp-e1 .vp-knob{background:#fff;border:1px solid #777;border-radius:2px;width:9px;height:14px;margin:-7px 0 0 -4px}
.vp-e1 .vp-big{background:#0006;border-radius:50%;width:56px;height:56px}
.u1{max-width:440px;margin:8px auto 0;font-size:12px}.u1 h4{font-size:15px;margin-bottom:3px}.u1 .st{color:#f90;font-size:15px}.u1 small{color:#666}.ul{color:#333;margin-top:4px}
/* era 2: 2008–2009 */
.vp-e2{background:#f1f1f1;color:#222;padding:10px;border:1px solid #ccc}
.vp-e2 .vp-emo{filter:blur(.9px)}
.vp-e2 .vp-bar{background:linear-gradient(#4a4a4a,#111);border-top:1px solid #666}
.vp-e2 .vp-track{height:7px;background:#333;border-radius:2px}.vp-e2 .vp-load{background:#666}.vp-e2 .vp-prog{background:linear-gradient(#f33,#a00)}.vp-e2 .vp-knob{background:linear-gradient(#fff,#bbb);width:13px;height:13px}
.vp-e2 .vp-q{background:#c00;padding:1px 4px;border-radius:2px;font-size:10px}
.u2{margin-top:8px}.u2 h4{font-size:16px}.u2r{display:flex;gap:14px;font-size:12px;color:#555;margin-top:4px;flex-wrap:wrap}.u2 .st{color:#f90}.u2 .hq{color:#03c;text-decoration:underline}
/* era 3: 2010–2012 */
.vp-e3{background:#fff;color:#222;padding:10px;border:1px solid #ddd}
.vp-e3 .vp-bar{background:linear-gradient(#2b2b2b,#141414)}
.vp-e3 .vp-track{height:5px;background:#3a3a3a}.vp-e3 .vp-load{background:#777}.vp-e3 .vp-prog{background:#cc181e}.vp-e3 .vp-knob{background:#eee;width:12px;height:12px;box-shadow:0 0 3px #000}
.u3{margin-top:8px}.u3 h4{font-size:18px;font-weight:400}.u3r{display:flex;align-items:center;gap:10px;margin:6px 0;font-size:12px}.u3 .ch{font-weight:700}
.sub3{background:linear-gradient(#ffe066,#f6c000);border:1px solid #d8a800;border-radius:3px;font:bold 11px Arial;padding:4px 10px;color:#333}
.u3 .vw{margin-left:auto;font-size:18px;color:#222}
.u3l{display:flex;align-items:center;gap:10px;font-size:11px;color:#555;flex-wrap:wrap}.u3l span{border:1px solid #ccc;border-radius:3px;padding:3px 8px;background:#f8f8f8}
.u3l i{width:140px;height:4px;background:#c00;display:block}.u3l s{display:block;height:100%;background:#390}
/* era 4: 2013–2016 */
.vp-e4{background:#fff;color:#222;padding:0 0 10px;font-family:Roboto,Arial,sans-serif}
.vp-e4 .vp-bar{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(transparent,#000c);height:38px;opacity:0;transition:.2s}
.vp-e4 .vp-stage:hover .vp-bar,.vp-e4 .vp-screen:not(.playing)+.vp-bar{opacity:1}
.vp-e4 .vp-track{position:absolute;left:10px;right:10px;top:2px;height:3px;background:#fff4}.vp-e4 .vp-load{background:#fff6}.vp-e4 .vp-prog{background:#e52d27}.vp-e4 .vp-knob{background:#e52d27;width:12px;height:12px}
.vp-e4 .vp-bar{padding-top:10px}.vp-e4 .vp-time{margin-right:auto}
.vp-e4 .vp-big{background:#1f1f1fe6;border-radius:12px}
.u4{padding:10px 12px 0}.u4 h4{font-size:18px;font-weight:400}.u4r{display:flex;align-items:center;gap:10px;margin:8px 0;font-size:13px}.av4{width:30px;height:30px;border-radius:50%;background:#eee;display:grid;place-items:center}
.sub4{background:#e62117;color:#fff;border:0;border-radius:2px;padding:6px 10px;font:500 12px Roboto,Arial}.sub4 em{font-style:normal;background:#fff;color:#666;padding:2px 6px;margin-left:6px;border-radius:2px}
.u4 .vw{margin-left:auto;font-size:16px;font-weight:400;color:#666}
.u4l{display:flex;gap:14px;align-items:center;font-size:12px;color:#666;justify-content:flex-end}.u4l i{width:150px;height:2px;background:#ccc;display:block}.u4l s{display:block;height:100%;background:#167ac6}
/* era 5: atual */
.vp-e5{background:#0f0f0f;color:#f1f1f1;font-family:Roboto,Arial,sans-serif;padding-bottom:10px}
.vp-e5 .vp-screen{border-radius:12px}
.vp-e5 .vp-bar{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(transparent,#000d);height:42px;border-radius:0 0 12px 12px;padding-top:12px;opacity:0;transition:.2s}
.vp-e5 .vp-stage:hover .vp-bar,.vp-e5 .vp-screen:not(.playing)+.vp-bar{opacity:1}
.vp-e5 .vp-track{position:absolute;left:12px;right:12px;top:4px;height:3px;background:#fff3;border-radius:2px}.vp-e5 .vp-load{background:#fff5}.vp-e5 .vp-prog{background:#f00}.vp-e5 .vp-knob{background:#f00;width:13px;height:13px}
.vp-e5 .vp-time{margin-right:auto}
.vp-e5 .vp-big{background:#000a;border-radius:50%;width:68px;height:68px}
.u5{padding:12px 4px 0}.u5 h4{font-size:19px}.u5r{display:flex;align-items:center;gap:10px;margin:10px 0;font-size:13px;flex-wrap:wrap}.u5 .ch{font-weight:600;display:flex;flex-direction:column}.u5 .ch small{color:#aaa;font-weight:400;font-size:11px}.u5 .av4{background:#333}
.sub5{background:#f1f1f1;color:#0f0f0f;border:0;border-radius:99px;padding:8px 14px;font:600 13px Roboto,Arial}
.u5 .pill{background:#272727;border-radius:99px;padding:7px 12px;font-size:12px}.u5r .pill:first-of-type{margin-left:auto}
.u5d{background:#272727;border-radius:10px;padding:10px 12px;font-size:12px}
@media(max-width:600px){.vp-rel{grid-template-columns:repeat(2,1fr)}.vp-ic{display:none}}`;
(function(){const s=document.createElement("style");s.textContent=PLAYER_CSS;document.head.appendChild(s)})();
