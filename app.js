const views=[...document.querySelectorAll('.view')];
const nav=[...document.querySelectorAll('.nav')];
const titles={dashboard:'Field dashboard',memory:'Intervention memory',disease:'Disease scan',plan:'Regenerative plan',network:'BRICS knowledge network'};
function go(id){
  views.forEach(v=>v.classList.toggle('active',v.id===id));
  nav.forEach(n=>n.classList.toggle('active',n.dataset.view===id));
  document.getElementById('pageTitle').textContent=titles[id];
  window.scrollTo({top:0,behavior:'smooth'});
}
nav.forEach(n=>n.addEventListener('click',()=>go(n.dataset.view)));
function showAdvisory(){document.getElementById('modal').classList.add('show')}
function closeModal(){document.getElementById('modal').classList.remove('show')}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2300)}
function speakAdvisory(){
  if(!('speechSynthesis' in window)){toast('Voice playback is not supported by this browser');return}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance('Your field is entering a water stress window. The recommended action is mulch and staged irrigation within the next forty eight hours. Transfer confidence is eighty one percent.');
  u.rate=.95; speechSynthesis.speak(u);
}
function runDisease(){
  const result=document.getElementById('diagnosis');
  result.innerHTML='<span class="eyebrow">DIAGNOSTIC RESULT</span><h3>Processing field evidence…</h3><p>Combining image signal, humidity, recent rainfall and crop stage.</p>';
  setTimeout(()=>{
    result.innerHTML='<span class="eyebrow">DIAGNOSTIC RESULT</span><h3>Possible fungal leaf spot</h3><div class="pill red">87% prototype confidence</div><p>Image pattern is consistent with a fungal leaf-spot family. Current humidity and rainfall conditions increase near-term risk.</p><div class="result caution"><strong>Action:</strong> inspect lower canopy, avoid unnecessary leaf wetness, and consult local agronomy guidance before treatment.</div><small>Demo output — not a validated disease diagnosis.</small>';
  },900);
}
document.getElementById('leafInput').addEventListener('change',e=>{
  if(e.target.files[0]) toast('Image selected — run the multimodal scan');
});
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
