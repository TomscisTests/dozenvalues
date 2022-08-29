import{getJson as e}from"./common.js";!function(){const t=e("langs"),n=document.getElementById("langDropdown");let o=new Array;for(const e of t){const t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t),o.push(e.id)}const a=new URLSearchParams(document.location.search),l=a.get("lang")??"en",c=t=>{try{!function(e,t){const n=document.getElementById("column-holder"),o=document.getElementById("values-explaination"),a=document.getElementById("credits-list"),l=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};l(n),l(o),l(a),document.getElementById("start_button").addEventListener("click",(()=>window.location.href="instructions.html?lang="+t)),document.getElementById("matches_button").addEventListener("click",(()=>window.location.href="matches.html?lang="+t));for(const t of e.axes){document.createElement("div").className="column";const e=document.createElement("div");e.className="block";const a=document.createElement("div");a.className="axis_label",a.textContent=t.axisname.toUpperCase(),e.appendChild(a);const l=e=>{const n=document.createElement("a");n.href="#anchor-"+t.axisname.toLowerCase();const o=new Image;return o.src=e.icon,o.className="quadcolumn",n.appendChild(o),n};e.appendChild(l(t.leftvalue)),e.appendChild(l(t.rightvalue)),n.appendChild(e);const c=document.createElement("div");c.className="spacer";const d=(e,t)=>{const n=document.createElement("div");n.className="explanation_blurb_"+e;const o=document.createElement("p");o.className="value";const a=document.createElement("b");a.textContent=t.name.toUpperCase(),a.style.color=t.color,o.appendChild(a);const l=document.createElement("p");return l.textContent=t.blurb,l.className="blurb-text",n.appendChild(o),n.appendChild(l),n};c.appendChild(d("left",t.leftvalue));const s=document.createElement("div"),i=document.createElement("p");i.textContent=t.axisname.toUpperCase(),i.className="axis_name";const r=document.createElement("a");r.id="anchor-"+t.axisname.toLowerCase(),s.appendChild(i),s.appendChild(r),s.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" width="71.2522" height="21.8695" viewBox="0 0 406.4 135.46666667" class="arrow"><path fill="none" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m338.66666 101.6 50.8-33.866668-50.8-33.866666m-270.933328 0L16.933333 67.73333 67.733332 101.6M16.933333 67.73333H389.46666"></path></svg>',c.appendChild(s),c.appendChild(d("right",t.rightvalue)),o.appendChild(c)}for(const t of Object.keys(e.indextext.rawtext))document.getElementById(t).textContent=e.indextext.rawtext[t];for(const t of Object.keys(e.indextext.htmltext))document.getElementById(t).innerHTML=e.indextext.htmltext[t];document.title=e.indextext.rawtext.title;for(const n of e.indextext.creditslist){const e=document.createElement("div");e.textContent=n.role;const o=document.createElement("a");o.textContent=n.tag,o.href="./results.html?lang="+t+"&score="+n.score.map((e=>e.toFixed(1))).join(",")+"&send=no",e.appendChild(o),a.appendChild(e)}}(e("ui-"+t),t),a.set("lang",t);const l=document.location.origin+"/index.html?"+a.toString();window.history.replaceState(null,document.title,l),n.selectedIndex=o.indexOf(t,0)}catch(e){console.error(e),alert(t+" is not a valid language"),c("en")}};c(l),n.addEventListener("change",(()=>c(n.value)))}();
//# sourceMappingURL=index.js.map