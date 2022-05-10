var S=Object.defineProperty;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(a,t,n)=>t in a?S(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,g=(a,t)=>{for(var n in t||(t={}))y.call(t,n)&&x(a,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&x(a,n,t[n]);return a};import"./use-date-select.bed0db3f.js";import{R as C,j as e,n as i,r as p,E as b,u as D,a as l,b as o,c as m,F as I,d as M}from"./vendor.d3e3c2a5.js";import{C as B}from"./index.306eacde.js";import"./DateSelect.50fcf4e4.js";import"./DateSelect.ac5aaf31.js";import"./DateSelect.2f9ab357.js";function j(a){const t=a.children;if(!C.isValidElement(t))return e("pre",g({},a));const{className:n}=t.props,r=n==null?void 0:n.replace(/language-/,""),s=t.props.children.trim();return r==="jsx"||r==="tsx"?e(B,{initialCode:s,language:r}):e("pre",{children:e("code",{children:t})})}const E={pre:j},H=i.iframe`
  width: 100%;
`;function h(a){const[t,n]=p.exports.useState(),r=p.exports.useRef(null),s=p.exports.useCallback(c=>{r.current=c,c!=null&&(c.onload=()=>{var d;n((d=c.contentWindow)==null?void 0:d.document.documentElement.scrollHeight)})},[]);return p.exports.useEffect(()=>{const c=setInterval(()=>{var u;if(r.current==null)return;const d=r.current;n((u=d.contentWindow)==null?void 0:u.document.documentElement.scrollHeight)},200);return()=>{clearInterval(c)}},[]),e(H,{ref:s,src:a.src,frameBorder:"0",height:t})}var P=`import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { DateSelect } from "react-ymd-date-select/presets/chakra-ui";

function Sample() {
  const [date, setDate] = useState("");

  return (
    <ChakraProvider>
      <DateSelect value={date} onChange={setDate} />
      <p>Selected date is: {date}</p>
    </ChakraProvider>
  );
}

export default Sample;
`,U=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/mui";

function Sample() {
  const [date, setDate] = useState("");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`;const F=i.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,O=i.div`
  overflow: auto;
  max-height: 300px;
`,R=i(b)`
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 14px;
  white-space: pre;
  caret-color: #fff;
  min-width: 100%;
  max-height: 100%;
  float: left;

  & > textarea,
  & > pre {
    outline: none;
    white-space: pre !important;
  }
`,V=i.div`
  position: relative;
  display: flex;
  overflow: hidden;
  min-height: 180px;
`;i.div`
  margin: auto;
  white-space: pre-wrap;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;i.div`
  background: #fcc;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  margin: 0;
  padding: 10px;
  color: #f00;
  white-space: pre-wrap;
`;function v({code:a,language:t,children:n}){const[r,{on:s,off:c}]=D();return l(F,{children:[e(V,{children:n}),!r&&e("button",{onClick:s,children:"Show code"}),r&&e(O,{children:e(R,{value:a,language:t,readOnly:!0})}),r&&e("button",{onClick:c,children:"Hide code"})]})}const L=i.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,w=i.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;function W(){return e(h,{src:"/site/components/preset-samples/samples/vanilla/index.html"})}function X(){return l(L,{children:[l(w,{children:[e("h3",{children:"Chakra UI"}),e(v,{code:P,language:"tsx",children:e(h,{src:"/site/components/preset-samples/samples/chakra-ui/index.html"})})]}),l(w,{children:[e("h3",{children:"Material UI"}),e(v,{code:U,language:"tsx",children:e(h,{src:"/site/components/preset-samples/samples/mui/index.html"})})]})]})}function _(a={}){const{wrapper:t}=a.components||{};return t?o(t,Object.assign({},a,{children:o(n,{})})):n();function n(){const r=Object.assign({p:"p",code:"code",a:"a"},a.components);return m(I,{children:[m(r.p,{children:["It provides ",o(r.code,{children:"<DateSelect />"})," component for each UI library, exported from ",o(r.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,m(r.p,{children:[o(r.code,{children:"react-ymd-date-select/presets/vanilla"})," is for a bare HTML without styling."]}),`
`,o(W,{}),`
`,m(r.p,{children:[o(r.code,{children:"react-ymd-date-select/presets/(chakra|mui)"})," is also available for ",o(r.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",o(r.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,o(X,{})]})}}function $(){return l("div",{style:{height:"100%"},children:[e(_,{components:E}),e("iframe",{style:{height:"100%"},src:"./samples/vanilla/index.html",frameBorder:"0"}),e("iframe",{style:{height:"100%"},src:"./samples/mui/index.html",frameBorder:"0"}),e("iframe",{style:{height:"100%"},src:"./samples/chakra-ui/index.html",frameBorder:"0"})]})}const z=document.getElementById("root"),A=M(z);A.render(e(C.StrictMode,{children:e($,{})}));
