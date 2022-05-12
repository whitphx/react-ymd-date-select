var v=Object.defineProperty,g=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var s=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))d.call(t,a)&&s(e,a,t[a]);return e},f=(e,t)=>g(e,S(t));var m=(e,t)=>{var a={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&l)for(var o of l(e))t.indexOf(o)<0&&d.call(e,o)&&(a[o]=e[o]);return a};import{R as x,k as b,l as y,m as _,o as j,p as P,q as k,s as C,n as r,c as F,t as O,a as u,j as n}from"./vendor.bb11239e.js";import{D as G,a as M,b as z}from"./DateSelect.c96bd86b.js";import{g as E,u as L}from"./use-date-select.392af991.js";import{D as $,a as R}from"./DateSelect.feb6bcf6.js";import{D as T,a as q}from"./DateSelect.d39a8478.js";var H=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:G,getDateString:E,useDateSelect:L},Symbol.toStringTag,{value:"Module"})),J=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:M,DateDropdownGroup:z},Symbol.toStringTag,{value:"Module"})),N=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:$,DateDropdownGroup:R},Symbol.toStringTag,{value:"Module"})),U=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:T,DateDropdownGroup:q},Symbol.toStringTag,{value:"Module"}));const Y={import:{react:x,"react-hook-form":b,formik:y,"react-ymd-date-select":H,"react-ymd-date-select/presets/vanilla":J,"react-ymd-date-select/presets/chakra-ui":N,"react-ymd-date-select/presets/material":U,"date-fns/locale/fr":_,"date-fns/locale/ru":j,"date-fns/locale/de":P,"date-fns/locale/en-US":k,"date-fns/locale/ja":C}},A=r.div`
  display: flex;
  box-shadow: 0 0 2px 0 lightsteelblue;
  height: 300px;
  overflow: hidden;
  margin: 24px auto;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: 480px;
  }
`,B=r.div`
  flex: 0 1 720px;
  overflow: auto;
`,I=r(F)`
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 14px;
  white-space: pre;
  caret-color: #fff;
  min-width: 100%;
  min-height: 100%;
  float: left;

  & > textarea,
  & > pre {
    outline: none;
    white-space: pre !important;
  }
`,K=r.div`
  flex: 1 1 720px;
  position: relative;
  display: flex;
  overflow: hidden;
`,Q=r.div`
  margin: auto;
  white-space: pre-wrap;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`,V=r.div`
  background: #fcc;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  margin: 0;
  padding: 10px;
  color: #f00;
  white-space: pre-wrap;
`;function oe(a){var o=a,{language:e}=o,t=m(o,["language"]);const{code:h,element:D,error:i,onChange:w}=O(f(p({},t),{scope:Y}));return u(A,{children:[n(B,{children:n(I,{value:h,language:e,onChange:w})}),u(K,{children:[n(Q,{children:D}),i&&n(V,{children:i})]})]})}export{oe as C};
