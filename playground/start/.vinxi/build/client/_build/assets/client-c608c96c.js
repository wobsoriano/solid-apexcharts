const u={context:void 0,registry:void 0};function V(e){u.context=e}function me(){return{...u.context,id:`${u.context.id}${u.context.count++}-`,count:0}}const xe=(e,n)=>e===n,P=Symbol("solid-proxy"),ht=Symbol("solid-track"),C={equals:xe};let $=null,le=ae;const m=1,O=2,oe={owned:null,cleanups:null,context:null,owner:null};var d=null;let D=null,g=null,p=null,y=null,j=0;function we(e,n){const t=g,r=d,i=e.length===0,s=n===void 0?r:n,l=i?oe:{owned:null,cleanups:null,context:s?s.context:null,owner:s},o=i?e:()=>e(()=>b(()=>I(l)));d=l,g=null;try{return S(o,!0)}finally{g=t,d=r}}function q(e,n){n=n?Object.assign({},C,n):C;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},r=i=>(typeof i=="function"&&(i=i(t.value)),ce(t,i));return[fe.bind(t),r]}function F(e,n,t){const r=L(e,n,!1,m);_(r)}function ue(e,n,t){le=Ae;const r=L(e,n,!1,m);(!t||!t.render)&&(r.user=!0),y?y.push(r):_(r)}function X(e,n,t){t=t?Object.assign({},C,t):C;const r=L(e,n,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,_(r),fe.bind(r)}function gt(e){return S(e,!1)}function b(e){if(g===null)return e();const n=g;g=null;try{return e()}finally{g=n}}function pt(e,n,t){const r=Array.isArray(e);let i,s=t&&t.defer;return l=>{let o;if(r){o=Array(e.length);for(let c=0;c<e.length;c++)o[c]=e[c]()}else o=e();if(s){s=!1;return}const f=b(()=>n(o,i,l));return i=o,f}}function Ee(e){ue(()=>b(e))}function ve(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Se(e,n){$||($=Symbol("error")),d=L(void 0,void 0,!0),d.context={...d.context,[$]:[n]};try{return e()}catch(t){B(t)}finally{d=d.owner}}function yt(){return g}function fe(){if(this.sources&&this.state)if(this.state===m)_(this);else{const e=p;p=null,S(()=>R(this),!1),p=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function ce(e,n,t){let r=e.value;return(!e.comparator||!e.comparator(r,n))&&(e.value=n,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],l=D&&D.running;l&&D.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?p.push(s):y.push(s),s.observers&&de(s)),l||(s.state=m)}if(p.length>1e6)throw p=[],new Error},!1)),n}function _(e){if(!e.fn)return;I(e);const n=j;$e(e,e.value,n)}function $e(e,n,t){let r;const i=d,s=g;g=d=e;try{r=e.fn(n)}catch(l){return e.pure&&(e.state=m,e.owned&&e.owned.forEach(I),e.owned=null),e.updatedAt=t+1,B(l)}finally{g=s,d=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?ce(e,r):e.value=r,e.updatedAt=t)}function L(e,n,t,r=m,i){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:d?d.context:null,pure:t};return d===null||d!==oe&&(d.owned?d.owned.push(s):d.owned=[s]),s}function T(e){if(e.state===0)return;if(e.state===O)return R(e);if(e.suspense&&b(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<j);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===m)_(e);else if(e.state===O){const r=p;p=null,S(()=>R(e,n[0]),!1),p=r}}function S(e,n){if(p)return e();let t=!1;n||(p=[]),y?t=!0:y=[],j++;try{const r=e();return _e(t),r}catch(r){t||(y=null),p=null,B(r)}}function _e(e){if(p&&(ae(p),p=null),e)return;const n=y;y=null,n.length&&S(()=>le(n),!1)}function ae(e){for(let n=0;n<e.length;n++)T(e[n])}function Ae(e){let n,t=0;for(n=0;n<e.length;n++){const r=e[n];r.user?e[t++]=r:T(r)}if(u.context){if(u.count){u.effects||(u.effects=[]),u.effects.push(...e.slice(0,t));return}else u.effects&&(e=[...u.effects,...e],t+=u.effects.length,delete u.effects);V()}for(n=0;n<t;n++)T(e[n])}function R(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const r=e.sources[t];if(r.sources){const i=r.state;i===m?r!==n&&(!r.updatedAt||r.updatedAt<j)&&T(r):i===O&&R(r,n)}}}function de(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=O,t.pure?p.push(t):y.push(t),t.observers&&de(t))}}function I(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),r=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),l=t.observerSlots.pop();r<i.length&&(s.sourceSlots[l]=r,i[r]=s,t.observerSlots[r]=l)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)I(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function Pe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function J(e,n,t){try{for(const r of n)r(e)}catch(r){B(r,t&&t.owner||null)}}function B(e,n=d){const t=$&&n&&n.context&&n.context[$],r=Pe(e);if(!t)throw r;y?y.push({fn(){J(r,t,n)},state:m}):J(r,t,n)}let he=!1;function Ce(){he=!0}function x(e,n){if(he&&u.context){const t=u.context;V(me());const r=b(()=>e(n||{}));return V(t),r}return b(()=>e(n||{}))}function A(){return!0}const W={get(e,n,t){return n===P?t:e.get(n)},has(e,n){return n===P?!0:e.has(n)},set:A,deleteProperty:A,getOwnPropertyDescriptor(e,n){return{configurable:!0,enumerable:!0,get(){return e.get(n)},set:A,deleteProperty:A}},ownKeys(e){return e.keys()}};function H(e){return(e=typeof e=="function"?e():e)?e:{}}function Oe(){for(let e=0,n=this.length;e<n;++e){const t=this[e]();if(t!==void 0)return t}}function bt(...e){let n=!1;for(let s=0;s<e.length;s++){const l=e[s];n=n||!!l&&P in l,e[s]=typeof l=="function"?(n=!0,X(l)):l}if(n)return new Proxy({get(s){for(let l=e.length-1;l>=0;l--){const o=H(e[l])[s];if(o!==void 0)return o}},has(s){for(let l=e.length-1;l>=0;l--)if(s in H(e[l]))return!0;return!1},keys(){const s=[];for(let l=0;l<e.length;l++)s.push(...Object.keys(H(e[l])));return[...new Set(s)]}},W);const t={},r={},i=new Set;for(let s=e.length-1;s>=0;s--){const l=e[s];if(!l)continue;const o=Object.getOwnPropertyNames(l);for(let f=0,c=o.length;f<c;f++){const a=o[f];if(a==="__proto__"||a==="constructor")continue;const h=Object.getOwnPropertyDescriptor(l,a);if(!i.has(a))h.get?(i.add(a),Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:Oe.bind(r[a]=[h.get.bind(l)])})):(h.value!==void 0&&i.add(a),t[a]=h.value);else{const w=r[a];w?h.get?w.push(h.get.bind(l)):h.value!==void 0&&w.push(()=>h.value):t[a]===void 0&&(t[a]=h.value)}}}return t}function Te(e,...n){if(P in e){const i=new Set(n.length>1?n.flat():n[0]),s=n.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},W));return s.push(new Proxy({get(l){return i.has(l)?void 0:e[l]},has(l){return i.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!i.has(l))}},W)),s}const t={},r=n.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,i),l=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let o=!1,f=0;for(const c of n)c.includes(i)&&(o=!0,l?r[f][i]=s.value:Object.defineProperty(r[f],i,s)),++f;o||(l?t[i]=s.value:Object.defineProperty(t,i,s))}return[...r,t]}let v;function Re(){v&&[...v].forEach(e=>e())}function ke(e){let n;u.context&&u.load&&(n=u.load(u.context.id+u.context.count));const[t,r]=q(n,void 0);return v||(v=new Set),v.add(r),ve(()=>v.delete(r)),X(()=>{let i;if(i=t()){const s=e.fallback;return typeof s=="function"&&s.length?b(()=>s(i,()=>r())):s}return Se(()=>e.children,r)},void 0,void 0)}function Ne(e,n,t){let r=t.length,i=n.length,s=r,l=0,o=0,f=n[i-1].nextSibling,c=null;for(;l<i||o<s;){if(n[l]===t[o]){l++,o++;continue}for(;n[i-1]===t[s-1];)i--,s--;if(i===l){const a=s<r?o?t[o-1].nextSibling:t[s-o]:f;for(;o<s;)e.insertBefore(t[o++],a)}else if(s===o)for(;l<i;)(!c||!c.has(n[l]))&&n[l].remove(),l++;else if(n[l]===t[s-1]&&t[o]===n[i-1]){const a=n[--i].nextSibling;e.insertBefore(t[o++],n[l++].nextSibling),e.insertBefore(t[--s],a),n[i]=t[s]}else{if(!c){c=new Map;let h=o;for(;h<s;)c.set(t[h],h++)}const a=c.get(n[l]);if(a!=null)if(o<a&&a<s){let h=l,w=1,Q;for(;++h<i&&h<s&&!((Q=c.get(n[h]))==null||Q!==a+w);)w++;if(w>a-o){const be=n[l];for(;o<a;)e.insertBefore(t[o++],be)}else e.replaceChild(t[o++],n[l++])}else l++;else n[l++].remove()}}}const ee="_$DX_DELEGATE";function je(e,n,t,r={}){let i;return we(s=>{i=s,n===document?e():k(n,e(),n.firstChild?null:void 0,t)},r.owner),()=>{i(),n.textContent=""}}function Z(e,n,t){let r;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,t?l.content.firstChild.firstChild:l.content.firstChild},s=n?()=>b(()=>document.importNode(r||(r=i()),!0)):()=>(r||(r=i())).cloneNode(!0);return s.cloneNode=s,s}function Le(e,n=window.document){const t=n[ee]||(n[ee]=new Set);for(let r=0,i=e.length;r<i;r++){const s=e[r];t.has(s)||(t.add(s),n.addEventListener(s,ge))}}function Ie(e,n,t,r){if(r)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=s=>i.call(e,t[1],s))}else e.addEventListener(n,t)}function mt(e,n,t){return b(()=>e(n,t))}function k(e,n,t,r){if(t!==void 0&&!r&&(r=[]),typeof n!="function")return N(e,n,r,t);F(i=>N(e,n(),i,t),r)}function Be(e,n,t={}){u.completed=globalThis._$HY.completed,u.events=globalThis._$HY.events,u.load=i=>globalThis._$HY.r[i],u.has=i=>i in globalThis._$HY.r,u.gather=i=>ne(n,i),u.registry=new Map,u.context={id:t.renderId||"",count:0},ne(n,t.renderId);const r=je(e,n,[...n.childNodes],t);return u.context=null,r}function Y(e){let n,t;return!u.context||!(n=u.registry.get(t=He()))?e():(u.completed&&u.completed.add(n),u.registry.delete(t),n)}function De(){u.events&&!u.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=u;for(n.queued=!1;n.length;){const[t,r]=n[0];if(!e.has(t))return;ge(r),n.shift()}}),u.events.queued=!0)}function ge(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),u.registry&&!u.done&&(u.done=_$HY.done=!0);t;){const r=t[n];if(r&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?r.call(t,i,e):r.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function N(e,n,t,r,i){if(u.context){!t&&(t=[...e.childNodes]);let o=[];for(let f=0;f<t.length;f++){const c=t[f];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():o.push(c)}t=o}for(;typeof t=="function";)t=t();if(n===t)return t;const s=typeof n,l=r!==void 0;if(e=l&&t[0]&&t[0].parentNode||e,s==="string"||s==="number"){if(u.context)return t;if(s==="number"&&(n=n.toString()),l){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=E(e,t,r,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||s==="boolean"){if(u.context)return t;t=E(e,t,r)}else{if(s==="function")return F(()=>{let o=n();for(;typeof o=="function";)o=o();t=N(e,o,t,r)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(K(o,n,t,i))return F(()=>t=N(e,o,t,r,!0)),()=>t;if(u.context){if(!o.length)return t;if(r===void 0)return[...e.childNodes];let c=o[0],a=[c];for(;(c=c.nextSibling)!==r;)a.push(c);return t=a}if(o.length===0){if(t=E(e,t,r),l)return t}else f?t.length===0?te(e,o,r):Ne(e,t,o):(t&&E(e),te(e,o));t=o}else if(n.nodeType){if(u.context&&n.parentNode)return t=l?[n]:n;if(Array.isArray(t)){if(l)return t=E(e,t,r,n);E(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function K(e,n,t,r){let i=!1;for(let s=0,l=n.length;s<l;s++){let o=n[s],f=t&&t[s],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=K(e,o,f)||i;else if(c==="function")if(r){for(;typeof o=="function";)o=o();i=K(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const a=String(o);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return i}function te(e,n,t=null){for(let r=0,i=n.length;r<i;r++)e.insertBefore(n[r],t)}function E(e,n,t,r){if(t===void 0)return e.textContent="";const i=r||document.createTextNode("");if(n.length){let s=!1;for(let l=n.length-1;l>=0;l--){const o=n[l];if(i!==o){const f=o.parentNode===e;!s&&!l?f?e.replaceChild(i,o):e.insertBefore(i,t):f&&o.remove()}else s=!0}}else e.insertBefore(i,t);return[i]}function ne(e,n){const t=e.querySelectorAll("*[data-hk]");for(let r=0;r<t.length;r++){const i=t[r],s=i.getAttribute("data-hk");(!n||s.startsWith(n))&&!u.registry.has(s)&&u.registry.set(s,i)}}function He(){const e=u.context;return`${e.id}${e.count++}`}const Me=(...e)=>(Ce(),Be(...e)),Ue="modulepreload",Ve=function(e){return"/_build/"+e},re={},G=function(n,t,r){if(!t||t.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=Ve(s),s in re)return;re[s]=!0;const l=s.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(!!r)for(let a=i.length-1;a>=0;a--){const h=i[a];if(h.href===s&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Ue,l||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),l)return new Promise((a,h)=>{c.addEventListener("load",a),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>n()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})},M="Invariant Violation",{setPrototypeOf:qe=function(e,n){return e.__proto__=n,e}}=Object;class z extends Error{framesToPop=1;name=M;constructor(n=M){super(typeof n=="number"?`${M}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),qe(this,z.prototype)}}function U(e,n){if(!e)throw new z(n)}function Fe(e=""){return!e||!e.includes("\\")?e:e.replace(/\\/g,"/")}const We=/^[/\\]{2}/,Ye=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Ke=/^[A-Za-z]:$/,Ge=function(e){if(e.length===0)return".";e=Fe(e);const n=e.match(We),t=se(e),r=e[e.length-1]==="/";return e=Ze(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),Ke.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!se(e)?`/${e}`:e)},Xe=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":Ge(n.replace(/\/\/+/g,"/"))};function Ze(e,n){let t="",r=0,i=-1,s=0,l=null;for(let o=0;o<=e.length;++o){if(o<e.length)l=e[o];else{if(l==="/")break;l="/"}if(l==="/"){if(!(i===o-1||s===1))if(s===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const f=t.lastIndexOf("/");f===-1?(t="",r=0):(t=t.slice(0,f),r=t.length-1-t.lastIndexOf("/")),i=o,s=0;continue}else if(t.length>0){t="",r=0,i=o,s=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(i+1,o)}`:t=e.slice(i+1,o),r=o-i-1;i=o,s=0}else l==="."&&s!==-1?++s:s=-1}return t}const se=function(e){return Ye.test(e)};function ze(e){return`virtual:${e}`}function Qe(e){return e.handler?.endsWith(".html")?e.handler:`#vinxi/handler/${e.name}`}const Je=new Proxy({},{get(e,n){return U(typeof n=="string","Bundler name should be a string"),{handler:ze(Qe({name:n})),chunks:new Proxy({},{get(t,r){U(typeof r=="string","Chunk expected");let i=Xe("/_build",r+".js");return{import(){return G(()=>import(i),[])},output:{path:i}}}}),inputs:new Proxy({},{get(t,r){U(typeof r=="string","Input must be string");let i=window.manifest[r].output;return{async import(){return G(()=>import(i),[])},async assets(){return window.manifest[r].assets},output:{path:i}}}})}}});globalThis.MANIFEST=Je;function et(e){const[n,t]=q();return e().then(r=>t(()=>r.default)),r=>{let i,s;const[,l]=Te(r,["fallback"]);if((i=n())&&!u.context)return i(l);const[o,f]=q(!u.context);return Ee(()=>f(!0)),X(()=>(i=n(),s=o(),b(()=>i&&s?i(l):r.fallback)))}}const pe=[];tt(pe.filter(e=>e.type==="page"));nt(pe.filter(e=>e.type==="api"));function tt(e){function n(t,r,i,s){const l=Object.values(t).find(o=>i.startsWith(o.id+"/"));return l?(n(l.children||(l.children=[]),r,i.slice(l.id.length)),t):(t.push({...r,id:i,path:i.replace(/\/\([^)/]+\)/g,"")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function nt(e){return e.flatMap(n=>ye(n.path).map(r=>({...n,path:r}))).map(rt).sort((n,t)=>t.score-n.score)}function ye(e){let n=/(\/?\:[^\/]+)\?/.exec(e);if(!n)return[e];let t=e.slice(0,n.index),r=e.slice(n.index+n[0].length);const i=[t,t+=n[1]];for(;n=/^(\/\:[^\/]+)\?/.exec(r);)i.push(t+=n[1]),r=r.slice(n[0].length);return ye(r).reduce((s,l)=>[...s,...i.map(o=>o+l)],[])}function rt(e){const n=e.path.split("/").filter(Boolean),t=[],r=[];let i=0,s=!1;for(const[l,o]of n.entries())if(o[0]===":"){const f=o.slice(1);i+=3,t.push({type:":",name:f,index:l}),r.push(null)}else o[0]==="*"?(i-=1,t.push({type:"*",name:o.slice(1),index:l}),s=!0):(i+=4,r.push(o));return{...e,score:i,params:t,matchSegments:r,wildcard:s}}const st=Z("<main>"),it=Z("<div>Loading chart"),lt=et(()=>G(()=>import("./Chart-519ec38a.js"),[]));function ot(){return(()=>{const e=Y(st);return k(e,x(lt,{get fallback(){return Y(it)}})),e})()}const ut=Z('<div style=padding:16px><div style="background-color:rgba(252, 165, 165);color:rgb(153, 27, 27);border-radius&quot;:5px;overflow:scroll;padding:16px;margin-bottom:8px;"><p style=font-weight:bold id=error-message></p><button id=reset-errors style="color:rgba(252, 165, 165);background-color:rgb(153, 27, 27);border-radius:5px;padding:4px 8px">Clear errors and retry</button><pre style=margin-top:8px;width:100%>');function ft(e){return x(ke,{fallback:n=>x(ct,{error:n}),get children(){return e.children}})}function ct(e){return ue(()=>console.error(e.error)),(()=>{const n=Y(ut),t=n.firstChild,r=t.firstChild,i=r.nextSibling,s=i.nextSibling;return k(r,()=>e.error.message),Ie(i,"click",Re,!0),k(s,()=>e.error.stack),De(),n})()}Le(["click"]);function at(e,n){return Me(e,n)}function ie(e){return e.children}function dt(){return x(ie,{get children(){return x(ie,{get children(){return x(ft,{get children(){return x(ot,{})}})}})}})}at(()=>x(dt,{}),document.getElementById("app"));export{P as $,ht as a,gt as b,q as c,ue as d,pt as e,ve as f,yt as g,Y as h,x as i,bt as m,Ee as o,Z as t,mt as u};
