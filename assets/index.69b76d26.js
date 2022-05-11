var v=Object.defineProperty,g=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(e,t,o)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&c(e,o,t[o]);if(i)for(var o of i(t))p.call(t,o)&&c(e,o,t[o]);return e},m=(e,t)=>g(e,x(t));var u=(e,t)=>{var o={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(o[r]=e[r]);return o};import{R as S,k as b,l as y,n as a,c as _,m as j,a as f,j as l}from"./vendor.5ce835ef.js";import{D as P,a as k,b as C}from"./DateSelect.441a108e.js";import{g as O,u as G}from"./use-date-select.61b1bfac.js";import{D as M,a as z}from"./DateSelect.d9ead660.js";import{D as $,a as E}from"./DateSelect.a3d90621.js";var T=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:P,getDateString:O,useDateSelect:G},Symbol.toStringTag,{value:"Module"})),R=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:k,DateDropdownGroup:C},Symbol.toStringTag,{value:"Module"})),F=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:M,DateDropdownGroup:z},Symbol.toStringTag,{value:"Module"})),H=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:$,DateDropdownGroup:E},Symbol.toStringTag,{value:"Module"}));const N={import:{react:S,"react-hook-form":b,formik:y,"react-ymd-date-select":T,"react-ymd-date-select/presets/vanilla":R,"react-ymd-date-select/presets/chakra-ui":F,"react-ymd-date-select/presets/material":H}},Y=a.div`
  display: flex;
  box-shadow: 0 0 2px 0 lightsteelblue;
  height: 300px;
  overflow: hidden;
  margin: 24px auto;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: 480px;
  }
`,q=a.div`
  flex: 0 1 720px;
  overflow: auto;
`,A=a(_)`
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
`,B=a.div`
  flex: 1 1 720px;
  position: relative;
  display: flex;
  overflow: hidden;
`,I=a.div`
  margin: auto;
  white-space: pre-wrap;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`,J=a.div`
  background: #fcc;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  margin: 0;
  padding: 10px;
  color: #f00;
  white-space: pre-wrap;
`;function X(o){var r=o,{language:e}=r,t=u(r,["language"]);const{code:h,element:D,error:n,onChange:w}=j(m(d({},t),{scope:N}));return f(Y,{children:[l(q,{children:l(A,{value:h,language:e,onChange:w})}),f(B,{children:[l(I,{children:D}),n&&l(J,{children:n})]})]})}export{X as C};
