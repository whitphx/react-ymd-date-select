var D=Object.defineProperty,x=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var c=(e,t,o)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&c(e,o,t[o]);if(i)for(var o of i(t))s.call(t,o)&&c(e,o,t[o]);return e},m=(e,t)=>x(e,S(t));var u=(e,t)=>{var o={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(o[r]=e[r]);return o};import{R as g,n as a,E as b,h as y,a as f,j as l}from"./vendor.d3e3c2a5.js";import{D as _,a as j,b as P}from"./DateSelect.50fcf4e4.js";import{u as C}from"./use-date-select.bed0db3f.js";import{D as O,a as G}from"./DateSelect.ac5aaf31.js";import{D as M,a as z}from"./DateSelect.1b3361da.js";var $=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:_,useDateSelect:C},Symbol.toStringTag,{value:"Module"})),E=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:j,DateDropdownGroup:P},Symbol.toStringTag,{value:"Module"})),T=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:O,DateDropdownGroup:G},Symbol.toStringTag,{value:"Module"})),k=Object.freeze(Object.defineProperty({__proto__:null,DateSelect:M,DateDropdownGroup:z},Symbol.toStringTag,{value:"Module"}));const R={import:{react:g,"react-ymd-date-select":$,"react-ymd-date-select/presets/vanilla":E,"react-ymd-date-select/presets/chakra-ui":T,"react-ymd-date-select/presets/material":k}},N=a.div`
  display: flex;
  box-shadow: 0 0 2px 0 lightsteelblue;
  height: 300px;
  overflow: hidden;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: 480px;
  }
`,Y=a.div`
  flex: 0 1 720px;
  overflow: auto;
`,q=a(b)`
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
`,F=a.div`
  background: #fcc;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  margin: 0;
  padding: 10px;
  color: #f00;
  white-space: pre-wrap;
`;function U(o){var r=o,{language:e}=r,t=u(r,["language"]);const{code:h,element:w,error:n,onChange:v}=y(m(d({},t),{scope:R}));return f(N,{children:[l(Y,{children:l(q,{value:h,language:e,onChange:v})}),f(A,{children:[l(B,{children:w}),n&&l(F,{children:n})]})]})}export{U as C};
