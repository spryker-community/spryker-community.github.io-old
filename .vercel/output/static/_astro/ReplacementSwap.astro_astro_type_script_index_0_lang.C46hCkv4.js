import{a as m,b as f}from"./router.IuBYmEEZ.js";const E=t=>{[...t.scripts].forEach(e=>{e.dataset.astroExec="",!e.hasAttribute("data-astro-rerun")&&[...document.scripts].find(o=>o.isEqualNode(e))||delete e.dataset.astroExec})},p=(t,e)=>{const n=s=>s.startsWith("data-astro-")||e.includes(s),o=document.documentElement;[...o.attributes].forEach(({name:s})=>n(s)||o.removeAttribute(s)),[...t.documentElement.attributes].forEach(({name:s,value:l})=>n(s)||o.setAttribute(s,l))},h=t=>{[...document.head.children].forEach(e=>{e instanceof HTMLElement&&([...t.head.children].find(o=>o.isEqualNode(e))??e).remove()}),document.head.append(...t.head.children)},b=()=>{const t=document.activeElement;if((t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&t.ownerDocument.location.origin===document.location.origin){const e=t.selectionStart,n=t.selectionEnd;return{activeElement:t,start:e,end:n}}return{activeElement:t}},w=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(t.selectionStart=e,t.selectionEnd=n))},T=(t,e=[],n)=>{E(t),p(t,e),h(t);const o=b();n(t),w(o)},A="vtbot-replace-swap",S=()=>(document.querySelector(`meta[name="${A}"]`)?.getAttribute("content")??"").split(",").map(t=>t.trim());document.addEventListener(m,t=>{if(f(t)){const e=t.swap;t.swap=()=>{const n=a=>{const r=a.body.querySelectorAll("[data-vtbot-replace]"),i=[...r].map(c=>c instanceof HTMLElement&&c.dataset.vtbotReplace);return{elements:[...r],names:new Set(i)}},{elements:o,names:s}=n(document),{elements:l,names:u}=n(t.newDocument),d=[...s].filter(a=>u.has(a));if(d.length===0){e();return}T(t.newDocument,S(),()=>{d.forEach(a=>{const r=o.find(c=>c.dataset.vtbotReplace===a),i=l.find(c=>c.dataset.vtbotReplace===a);r&&i&&r.replaceWith(i)}),[...document.querySelectorAll("[class*='astro-route-announcer']")].forEach(a=>a.remove())})}}});
