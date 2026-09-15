import{a5 as e}from"./vue-vendor-kVwWhp8Z.js";
/**
 * @license lucide-vue-next v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},r=(...e)=>e.filter((e,t,o)=>Boolean(e)&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim(),s=e=>""===e;
/**
 * @license lucide-vue-next v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
/**
 * @license lucide-vue-next v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=({name:a,iconNode:c,absoluteStrokeWidth:n,"absolute-stroke-width":l,strokeWidth:d,"stroke-width":h,size:w=i.width,color:u=i.stroke,...k},{slots:p})=>e("svg",{...i,...k,width:w,height:w,stroke:u,"stroke-width":s(n)||s(l)||!0===n||!0===l?24*Number(d||h||i["stroke-width"])/Number(w):d||h||i["stroke-width"],class:r("lucide",k.class,...a?["lucide-".concat(t(o(a)),"-icon"),"lucide-".concat(t(a))]:["lucide-icon"])},[...c.map(t=>e(...t)),...p.default?[p.default()]:[]]),c=(t,o)=>(r,{slots:s,attrs:i})=>e(a,{...i,...r,iconNode:o,name:t},s);
/**
 * @license lucide-vue-next v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */export{c};
