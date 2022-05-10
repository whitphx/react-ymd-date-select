var w=Object.defineProperty;var x=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(n,t,o)=>t in n?w(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,c=(n,t)=>{for(var o in t||(t={}))k.call(t,o)&&v(n,o,t[o]);if(x)for(var o of x(t))D.call(t,o)&&v(n,o,t[o]);return n};import"./use-date-select.7a401f4d.js";import{n as r,j as e,R as b,a as s,L as O,E as M,r as m,b as H,u as E,c as i,d as p,F as I,e as z,f as B,g as P,C as j}from"./vendor.3cf90fc3.js";import{C as y}from"./index.ffb2bee8.js";import"./DateSelect.bcaa505c.js";import"./DateSelect.328ad6f5.js";import"./DateSelect.f2aff365.js";const L=r.div`
  margin: 0;
  background: #46c9e5; /* fallback color */
  background: linear-gradient(150deg, #46c9e5 0%, #d26ac2 100%);
  height: 300px;
  width: 100%;
  text-align: center;

  @media (max-width: 640px) {
    height: 150px;
  }
`,U=r.h1`
  color: #efefef;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 60px;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`;function F(){return e(L,{children:e("div",{children:e(U,{children:"react-ymd-date-select"})})})}const R=r.div`
  margin: 32px auto;
  max-width: 960px;
  padding: 0 16px;
`;function V(n){const t=n.children;if(!b.isValidElement(t))return e("pre",c({},n));const{className:o}=t.props,a=o==null?void 0:o.replace(/language-/,""),d=t.props.children.trim();return a==="jsx"||a==="tsx"?e(y,{initialCode:d,language:a}):e("pre",{children:e("code",{children:t})})}const $=r.code`
  margin: 0 2px;
  padding: 1px 4px;
  border-radius: 5px;
  border: #bbb solid 1px;
  background: rgba(210, 210, 210, 0.2);

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`,T=r.h1`
  font-size: 2rem;
  margin: 1.6rem 0 0.4rem;
`,W=r.h2`
  font-size: 1.8rem;
  margin: 1.6rem 0 0.4rem;
`,u=r.h3`
  font-size: 1.6rem;
  margin: 1.6rem 0 0.4rem;
`,X=r.h4`
  font-size: 1.4rem;
  margin: 1.6rem 0 0.4rem;
`;function Y(n){if(n==null)return!1;try{return new URL(n).origin!==window.location.origin}catch{return!1}}function _(n){const t=Y(n.href);return s(O,{href:n.href,isExternal:t,children:[n.children,t&&e(M,{mx:"2px"})]})}const q={pre:V,code:n=>e($,c({},n)),h1:n=>e(T,c({},n)),h2:n=>e(W,c({},n)),h3:n=>e(u,c({},n)),h4:n=>e(X,c({},n)),a:_},A=r.iframe`
  display: block;
  width: 100%;
`;function f(n){const[t,o]=m.exports.useState(),a=m.exports.useRef(null),d=m.exports.useCallback(l=>{a.current=l,l!=null&&(l.onload=()=>{var h;o((h=l.contentWindow)==null?void 0:h.document.documentElement.scrollHeight)})},[]);return m.exports.useEffect(()=>{const l=setInterval(()=>{var g;if(a.current==null)return;const h=a.current;o((g=h.contentWindow)==null?void 0:g.document.documentElement.scrollHeight)},200);return()=>{clearInterval(l)}},[]),e(A,{ref:d,src:n.src,frameBorder:"0",height:t})}var G=`import { useState } from "react";
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
`,J=`import { useState } from "react";
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
`;const K=r.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,N=r.div`
  overflow: auto;
  max-height: 300px;
`,Q=r(H)`
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
`,Z=r.div`
  position: relative;
  display: flex;
  overflow: hidden;
  min-height: 180px;
`;r.div`
  margin: auto;
  white-space: pre-wrap;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;r.div`
  background: #fcc;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  margin: 0;
  padding: 10px;
  color: #f00;
  white-space: pre-wrap;
`;function C({code:n,language:t,children:o}){const[a,{on:d,off:l}]=E();return s(K,{children:[e(Z,{children:o}),!a&&e("button",{onClick:d,children:"Show code"}),a&&e(N,{children:e(Q,{value:n,language:t,readOnly:!0})}),a&&e("button",{onClick:l,children:"Hide code"})]})}const ee=r.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,S=r.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;function ne(){return e(f,{src:"/site/components/preset-samples/samples/vanilla/index.html"})}function te(){return s(ee,{children:[s(S,{children:[e(u,{children:"Chakra UI"}),e(C,{code:G,language:"tsx",children:e(f,{src:"/site/components/preset-samples/samples/chakra-ui/index.html"})})]}),s(S,{children:[e(u,{children:"Material UI"}),e(C,{code:J,language:"tsx",children:e(f,{src:"/site/components/preset-samples/samples/mui/index.html"})})]})]})}var ae=`import { useState } from "react";
import { useDateSelect } from "react-ymd-date-select";

interface CustomDateSelectProps {
  onChange: (value: string) => void;
  value: string;
}
function CustomDateSelect(props: CustomDateSelectProps) {
  const dateSelect = useDateSelect(props.value, props.onChange);

  return (
    <>
      <input
        type="date"
        value={dateSelect.dateValue || ""}
        onChange={dateSelect.onDateChange}
      />
      <label>
        Year
        <select value={dateSelect.yearValue} onChange={dateSelect.onYearChange}>
          <option value="" disabled></option>
          {dateSelect.yearOptions.map((yearOption) => (
            <option key={yearOption.value} value={yearOption.value}>
              {yearOption.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Month
        <select
          value={dateSelect.monthValue}
          onChange={dateSelect.onMonthChange}
        >
          <option value="" disabled></option>
          {dateSelect.monthOptions.map((monthOption) => (
            <option key={monthOption.value} value={monthOption.value}>
              {monthOption.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Day
        <select value={dateSelect.dayValue} onChange={dateSelect.onDayChange}>
          <option value="" disabled></option>
          {dateSelect.dayOptions.map((dayOption) => (
            <option key={dayOption.value} value={dayOption.value}>
              {dayOption.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

function Sample() {
  const [date, setDate] = useState("");

  return (
    <div>
      <CustomDateSelect value={date} onChange={setDate} />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`;function oe(){return e(y,{initialCode:ae,language:"tsx"})}function re(n={}){const{wrapper:t}=n.components||{};return t?i(t,Object.assign({},n,{children:i(o,{})})):o();function o(){const a=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},n.components);return p(I,{children:[i(a.h2,{children:"Presets"}),`
`,p(a.p,{children:["It provides ",i(a.code,{children:"<DateSelect />"})," component for each UI library, exported from ",i(a.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,p(a.p,{children:[i(a.code,{children:"react-ymd-date-select/presets/vanilla"})," is for a bare HTML without styling."]}),`
`,i(ne,{}),`
`,p(a.p,{children:[i(a.code,{children:"react-ymd-date-select/presets/(chakra-ui|mui)"})," is also available for ",i(a.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",i(a.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,i(te,{}),`
`,i(a.h2,{children:"Hook"}),`
`,p(a.p,{children:["This library also provides ",i(a.code,{children:"useDateSelect"})," hook so that you can create original customized components."]}),`
`,i(oe,{})]})}}function ie(){return s(z,{children:[e(F,{}),e(R,{children:e(re,{components:q})}),s("div",{style:{height:"100%"},children:[e("iframe",{style:{height:"100%"},src:"./samples/vanilla/index.html",frameBorder:"0"}),e("iframe",{style:{height:"100%"},src:"./samples/mui/index.html",frameBorder:"0"}),e("iframe",{style:{height:"100%"},src:"./samples/chakra-ui/index.html",frameBorder:"0"})]})]})}const le=B({styles:{global:{"*, *::before, &::after":{borderColor:null,wordWrap:null},html:{lineHeight:1.5},body:{position:"relative",minHeight:"100%",fontFeatureSettings:"kern"},"*, *::before, *::after":{boxSizing:"border-box"},"body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:0}}}}),ce=document.getElementById("root"),se=P(ce);se.render(e(b.StrictMode,{children:e(j,{resetCSS:!1,theme:le,children:e(ie,{})})}));
