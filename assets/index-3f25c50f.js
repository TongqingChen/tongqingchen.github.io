import{c as e,bu as l,I as o}from"./index-90b969ab.js";const i=["class","style"],E=/^on[A-Z]/,f=(c={})=>{const{excludeListeners:u=!1,excludeKeys:t}=c,a=e(()=>((t==null?void 0:t.value)||[]).concat(i)),s=o();return s?e(()=>{var n;return l(Object.entries((n=s.proxy)==null?void 0:n.$attrs).filter(([r])=>!a.value.includes(r)&&!(u&&E.test(r))))}):e(()=>({}))};export{f as u};
