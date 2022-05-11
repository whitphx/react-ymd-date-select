var D=Object.defineProperty,x=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(e,t,o)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&c(e,o,t[o]);if(i)for(var o of i(t))p.call(t,o)&&c(e,o,t[o]);return e},m=(e,t)=>x(e,S(t));var u=(e,t)=>{var o={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(o[r]=e[r]);return o};import{R as g,k as b,l as y,n as a,c as _,m as j,a as f,j as l}from"./vendor.5ce835ef.js";import{D as P,a as k,b as C}from"./DateSelect.2a4f74a3.js";import{u as O}from"./use-date-select.08b3d756.js";import{D as G,a as M}from"./DateSelect.eb0fb757.js";import{D as z,a as $}from"./DateSelect.13dd3b04.js";var E=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:P,useDateSelect:O},Symbol.toStringTag,{value:"Module"})),T=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:k,DateDropdownGroup:C},Symbol.toStringTag,{value:"Module"})),R=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:G,DateDropdownGroup:M},Symbol.toStringTag,{value:"Module"})),F=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:z,DateDropdownGroup:$},Symbol.toStringTag,{value:"Module"}));const H={import:{react:g,"react-hook-form":b,formik:y,"react-ymd-date-select":E,"react-ymd-date-select/presets/vanilla":T,"react-ymd-date-select/presets/chakra-ui":R,"react-ymd-date-select/presets/material":F}},N=a.div`
  display: flex;
  box-shadow: 0 0 2px 0 lightsteelblue;
  height: 300px;
  overflow: hidden;
  margin: 24px auto;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: 480px;
  }
`,Y=a.div`
  flex: 0 1 720px;
  overflow: auto;
`,q=a(_)`
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
`,A=a.div`
  flex: 1 1 720px;
  position: relative;
  display: flex;
  overflow: hidden;
`,B=a.div`
  margin: auto;
  white-space: pre-wrap;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`,I=a.div`
  background: #fcc;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  margin: 0;
  padding: 10px;
  color: #f00;
  white-space: pre-wrap;
`;function W(o){var r=o,{language:e}=r,t=u(r,["language"]);const{code:h,element:w,error:n,onChange:v}=j(m(d({},t),{scope:H}));return f(N,{children:[l(Y,{children:l(q,{value:h,language:e,onChange:v})}),f(A,{children:[l(B,{children:w}),n&&l(I,{children:n})]})]})}export{W as C};
