(()=>{"use strict";var e={4647:(e,r,t)=>{var o=t(1957),n=t(1947),a=t(499),i=t(9835);function u(e,r,t,o,n,a){const u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(u)}const s=(0,i.aZ)({name:"App"});var c=t(1639);const l=(0,c.Z)(s,[["render",u]]),p=l;var d=t(3340),f=t(8339);const v=[{path:"/",component:()=>Promise.all([t.e(736),t.e(581)]).then(t.bind(t,5581))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(862)]).then(t.bind(t,1862))}],h=v,b=(0,d.BC)((function(){const e=f.r5,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return r}));var m=t(7634);const{SplashScreen:g}=m.Vn,y=(0,i.aZ)({name:"AppWrapper",setup(e){return(0,i.bv)((()=>{g.hide()})),()=>(0,i.h)(p,e)}});async function w(e,r){const t=e(y);t.use(n.Z,r),t.config.globalProperties.$q.capacitor=window.Capacitor;const o=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:t,router:o}}var j=t(4328);const O={config:{},plugins:{Notify:j.Z}};async function k({app:e,router:r}){e.use(r),e.mount("#q-app")}w(o.ri,O).then(k)}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(l=0;l<e.length;l++){for(var[o,n,a]=e[l],u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+".js"})(),(()=>{t.miniCssF=e=>{}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="quasar-project:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==r+a){u=p;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",r+a),u.src=o),e[o]=[n];var d=(r,t)=>{u.onerror=u.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),u=new Error,s=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}};t.l(i,s,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,u,s]=o,c=0;if(i.some((r=>0!==e[r]))){for(n in u)t.o(u,n)&&(t.m[n]=u[n]);if(s)var l=s(t)}for(r&&r(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(4647)));o=t.O(o)})();