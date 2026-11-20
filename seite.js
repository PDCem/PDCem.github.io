const sprache=document.documentElement.lang||"de";
const basis=document.documentElement.dataset.basis||"";
const farben={infraclaude:"#e67e22",ercanbot:"#e84393",karrierebot:"#d4a017",gesundheitsbot:"#4cc9b0",finanzbot:"#2ecc71",claudecode:"#e8a86b",codex:"#22c55e",opencode:"#f5b700",aibroker:"#5b9dff",healtdashcem:"#fd79a8",kipc_karte:"#8b5cf6",ares:"#f1c40f",kaan:"#38bdf8"};
const texte={
 de:{zeigen:"lebendig zeigen",bild:"Porträt",team:[
  ["infraclaude","InfraClaude","Chef und Admin","Verteilt die Aufträge, prüft die Ergebnisse und hält Netz, Server und Backups am Laufen."],
  ["ares","ARES","Desktop-Helfer","Hilft direkt am Mac: Dateien, Apps, Recherche."],
  ["ercanbot","Ercan","Scout","Behält alle Projekte im Blick, schickt morgens den Brief."],
  ["karrierebot","Clara","Karriere-Coach","Jobsuche, Bewerbungs-Tracker und Interview-Training."],
  ["gesundheitsbot","Emma","Ärztin","Führt die Gesundheitsakten der Familie, streng getrennt."],
  ["finanzbot","Victoria","Finanzen","Kennt Einnahmen, Ausgaben und Krypto."],
  ["claudecode","Max","Baumeister","Coding-Agent für Apps und Webseiten."],
  ["codex","Codex","Code-Ninja","Zweiter Coding-Agent, baut Android-Apps und Webseiten."],
  ["opencode","Bolt","Tüftler","Baut eigene Werkzeuge mit Gratis-Modellen und findet neue Modelle."],
  ["aibroker","Leon","Trader","Holt Kurse und bewertet Positionen."],
  ["healtdashcem","Mia","Fitness und Uhr","Baut das Health-Dashboard."],
  ["kaan","K.A.A.N.","Hausverwalter","Zeigt und steuert Haus, Netz und Medien."],
  ["kipc_karte","Iris","Designerin","Malt, filmt und baut 3D direkt auf dem KI-PC."]]},
 tr:{zeigen:"canlandır",bild:"Portre",team:[
  ["infraclaude","InfraClaude","Şef ve yönetici","Görevleri dağıtır, sonuçları kontrol eder; ağı, sunucuları ve yedekleri ayakta tutar."],
  ["ares","ARES","Masaüstü yardımcısı","Doğrudan Mac’te yardım eder: dosyalar, uygulamalar, araştırma."],
  ["ercanbot","Ercan","Gözcü","Tüm projeleri takip eder, her sabah özeti gönderir."],
  ["karrierebot","Clara","Kariyer koçu","İş arama, başvuru takibi ve mülakat çalışması."],
  ["gesundheitsbot","Emma","Doktor","Ailenin sağlık dosyalarını tutar, kesin olarak ayrı."],
  ["finanzbot","Victoria","Finans","Gelirleri, giderleri ve kriptoyu bilir."],
  ["claudecode","Max","Usta","Uygulama ve web siteleri için kodlama ajanı."],
  ["codex","Codex","Kod ninjası","İkinci kodlama ajanı, Android uygulamaları ve web siteleri yapar."],
  ["opencode","Bolt","Mucit","Ücretsiz modellerle kendi araçlarını yapar, yeni modelleri bulur."],
  ["aibroker","Leon","Trader","Fiyatları çeker ve pozisyonları değerlendirir."],
  ["healtdashcem","Mia","Fitness ve saat","Sağlık panosunu geliştirir."],
  ["kaan","K.A.A.N.","Ev yöneticisi","Evi, ağı ve medyayı gösterir ve yönetir."],
  ["kipc_karte","Iris","Tasarımcı","Yapay zekâ bilgisayarında resim, video ve 3D üretir."]]},
 en:{zeigen:"bring to life",bild:"Portrait of",team:[
  ["infraclaude","InfraClaude","Chief and admin","Hands out the jobs, checks the results and keeps network, servers and backups running."],
  ["ares","ARES","Desktop helper","Helps right on the Mac: files, apps, research."],
  ["ercanbot","Ercan","Scout","Keeps an eye on every project and sends the morning brief."],
  ["karrierebot","Clara","Career coach","Job search, application tracker and interview practice."],
  ["gesundheitsbot","Emma","Doctor","Keeps the family's health records, strictly separated."],
  ["finanzbot","Victoria","Finance","Knows income, spending and crypto."],
  ["claudecode","Max","Builder","Coding agent for apps and websites."],
  ["codex","Codex","Code ninja","Second coding agent, builds Android apps and websites."],
  ["opencode","Bolt","Tinkerer","Builds his own tools with free models and scouts new ones."],
  ["aibroker","Leon","Trader","Pulls prices and rates positions."],
  ["healtdashcem","Mia","Fitness and watch","Builds the health dashboard."],
  ["kaan","K.A.A.N.","House manager","Shows and controls house, network and media."],
  ["kipc_karte","Iris","Designer","Paints, films and builds 3D right on the AI PC."]]}
};
const T=texte[sprache]||texte.de;
const liste=document.getElementById("liste");
liste.innerHTML=T.team.map(([id,n,t,r])=>`<li style="--farbe:${farben[id]}">
 <button aria-label="${n} ${T.zeigen}"><img src="${basis}medien/agenten/${id}.webp" alt="${T.bild} ${n}" loading="lazy" width="520" height="780">
 <video muted loop playsinline preload="none" data-src="${basis}medien/agenten/${id}.mp4"></video></button>
 <h3>${n}</h3><p class="t">${t}</p><p class="r">${r}</p></li>`).join("");
const ruhig=matchMedia("(prefers-reduced-motion: reduce)").matches;
function spiel(li,an){const v=li.querySelector("video");
 if(an){if(!v.src)v.src=v.dataset.src;v.play().catch(()=>{});li.classList.add("spielt")}
 else{v.pause();li.classList.remove("spielt")}}
liste.querySelectorAll("li").forEach(li=>{
 li.addEventListener("mouseenter",()=>spiel(li,true));
 li.addEventListener("mouseleave",()=>spiel(li,false));
 li.querySelector("button").addEventListener("click",()=>spiel(li,!li.classList.contains("spielt")));
});

const bilder=[...document.querySelectorAll("#zeitbild img")],knoepfe=[...document.querySelectorAll(".wahl button")];
knoepfe.forEach(b=>b.addEventListener("click",()=>{
 knoepfe.forEach(k=>k.setAttribute("aria-pressed",k===b));
 bilder.forEach(i=>i.classList.toggle("an",i.dataset.z===b.dataset.z));
}));

const io=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;
 if(e.isIntersecting&&!ruhig)v.play().catch(()=>{});else v.pause()}),{threshold:.4});
document.querySelectorAll("video[data-auto]").forEach(v=>io.observe(v));
if(ruhig)document.querySelector(".hero video").remove();

const dlg=document.getElementById("gross");
document.querySelectorAll(".zoom").forEach(b=>b.addEventListener("click",()=>{
 const i=b.querySelector("img");dlg.querySelector("img").src=i.src;dlg.querySelector("img").alt=i.alt;dlg.showModal()}));
dlg.addEventListener("click",()=>dlg.close());
