import{g as L,o as j,a as U,n as W,u as b,b as V,r as N,w as B,c as _,s as A,d as D,e as F,f as y,V as R,h as m,i as I,t as P,j as O}from"./index-Cmi27OP_.js";import{u as q}from"./list-XtVI_Cgy.js";import{u as z}from"./settings-BfiPItHG.js";import{V as E,a as H}from"./VRow-DSx9s_Qp.js";function k(e){return L()?(j(e),!0):!1}function T(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const r=()=>t(o);return k(r),{off:r}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(r=>r(...o)))}}function M(e){return typeof e=="function"?e():b(e)}const $=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const J=Object.prototype.toString,K=e=>J.call(e)==="[object Object]",Q=()=>{};function X(e){return V()}function Y(e,t=!0,n){X()?U(e,n):t?e():W(e)}function Z(e){var t;const n=M(e);return(t=n==null?void 0:n.$el)!=null?t:n}const x=$?window:void 0;function ee(...e){let t,n,s,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,o]=e,t=x):[t,n,s,o]=e,!t)return Q;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const r=[],i=()=>{r.forEach(u=>u()),r.length=0},p=(u,l,c,f)=>(u.addEventListener(l,c,f),()=>u.removeEventListener(l,c,f)),g=B(()=>[Z(t),M(o)],([u,l])=>{if(i(),!u)return;const c=K(l)?{...l}:l;r.push(...n.flatMap(f=>s.map(h=>p(u,f,h,c))))},{immediate:!0,flush:"post"}),v=()=>{g(),i()};return k(v),v}function te(){const e=N(!1),t=V();return t&&U(()=>{e.value=!0},t),e}function ne(e){const t=te();return _(()=>(t.value,!!e()))}function oe(e={}){const{window:t=x,requestPermissions:n=!0}=e,s=e,o=ne(()=>{if(!t||!("Notification"in t))return!1;try{new Notification("")}catch{return!1}return!0}),r=N(o.value&&"permission"in Notification&&Notification.permission==="granted"),i=N(null),p=async()=>{if(o.value)return!r.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(r.value=!0),r.value},{on:g,trigger:v}=T(),{on:u,trigger:l}=T(),{on:c,trigger:f}=T(),{on:h,trigger:w}=T(),C=async a=>{if(!o.value||!r.value)return;const d=Object.assign({},s,a);return i.value=new Notification(d.title||"",d),i.value.onclick=v,i.value.onshow=l,i.value.onerror=f,i.value.onclose=w,i.value},S=()=>{i.value&&i.value.close(),i.value=null};if(n&&Y(p),k(S),o.value&&t){const a=t.document;ee(a,"visibilitychange",d=>{d.preventDefault(),a.visibilityState==="visible"&&S()})}return{isSupported:o,notification:i,ensurePermissions:p,permissionGranted:r,show:C,close:S,onClick:g,onShow:u,onError:c,onClose:h}}const ue={__name:"index",setup(e){const t={STOP:0,COUNTING:1,PAUSE:2},n=N(t.STOP),s=q(),{currentItem:o,items:r,timeleft:i}=A(s),{setCurrentItem:p,countdown:g,setFinishItem:v}=s,u=z(),{selectedAlarmFile:l}=A(u);let c=0;const f=()=>{n.value===t.STOP&&r.value.length>0&&p(),n.value=t.COUNTING,c=setInterval(()=>{g(),i.value===0&&w()},1e3)},h=()=>{n.value=t.PAUSE,clearInterval(c)},w=()=>{clearInterval(c),n.value=t.STOP;const a=new Audio;a.src=l.value,a.play();const{show:d,isSupported:G}=oe({title:"事項完成",body:o.value,icon:new URL(""+new URL("tomato-tm_sgEMz.png",import.meta.url).href,import.meta.url).href});G.value&&d(),v(),r.value.length>0&&f()},C=_(()=>o.value.length>0?o.value:r.value.length>0?"點擊開始":"沒有事項"),S=_(()=>{const a=Math.floor(i.value/60).toString().padStart(2,"0"),d=(i.value%60).toString().padStart(2,"0");return a+":"+d});return(a,d)=>(D(),F(R,null,{default:y(()=>[m(H,null,{default:y(()=>[m(E,{cols:"12"},{default:y(()=>[I("h1",null,"目前事項 "+P(C.value),1),I("h2",null,"剩餘時間 "+P(S.value),1)]),_:1}),m(E,{cols:"12"},{default:y(()=>[m(O,{icon:"mdi-play",onClick:f,disabled:n.value===t.COUNTING||b(o).length===0&&b(r).length===0},null,8,["disabled"]),m(O,{icon:"mdi-pause",disabled:n.value!==t.COUNTING,onClick:h},null,8,["disabled"]),m(O,{icon:"mdi-skip-next",disabled:b(o).length===0,onClick:w},null,8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{ue as default};
