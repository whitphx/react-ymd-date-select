var w=Object.defineProperty;var f=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var v=(o,n,a)=>n in o?w(o,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[n]=a,S=(o,n)=>{for(var a in n||(n={}))b.call(n,a)&&v(o,a,n[a]);if(f)for(var a of f(n))k.call(n,a)&&v(o,a,n[a]);return o};import"./use-date-select.bed0db3f.js";import{R as g,j as e,n as l,r as m,E as D,u as O,a as d,b as r,c as s,F as I,d as M}from"./vendor.d3e3c2a5.js";import{C as y}from"./index.306eacde.js";import"./DateSelect.50fcf4e4.js";import"./DateSelect.ac5aaf31.js";import"./DateSelect.2f9ab357.js";function B(o){const n=o.children;if(!g.isValidElement(n))return e("pre",S({},o));const{className:a}=n.props,t=a==null?void 0:a.replace(/language-/,""),c=n.props.children.trim();return t==="jsx"||t==="tsx"?e(y,{initialCode:c,language:t}):e("pre",{children:e("code",{children:n})})}const j={pre:B},E=l.iframe`
  width: 100%;
`;function u(o){const[n,a]=m.exports.useState(),t=m.exports.useRef(null),c=m.exports.useCallback(i=>{t.current=i,i!=null&&(i.onload=()=>{var p;a((p=i.contentWindow)==null?void 0:p.document.documentElement.scrollHeight)})},[]);return m.exports.useEffect(()=>{const i=setInterval(()=>{var h;if(t.current==null)return;const p=t.current;a((h=p.contentWindow)==null?void 0:h.document.documentElement.scrollHeight)},200);return()=>{clearInterval(i)}},[]),e(E,{ref:c,src:o.src,frameBorder:"0",height:n})}var P=`import { useState } from "react";
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
`,V=`import { useState } from "react";
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
`;const H=l.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,U=l.div`
  overflow: auto;
  max-height: 300px;
`,F=l(D)`
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
`,R=l.div`
  position: relative;
  display: flex;
  overflow: hidden;
  min-height: 180px;
`;l.div`
  margin: auto;
  white-space: pre-wrap;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;l.div`
  background: #fcc;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  margin: 0;
  padding: 10px;
  color: #f00;
  white-space: pre-wrap;
`;function C({code:o,language:n,children:a}){const[t,{on:c,off:i}]=O();return d(H,{children:[e(R,{children:a}),!t&&e("button",{onClick:c,children:"Show code"}),t&&e(U,{children:e(F,{value:o,language:n,readOnly:!0})}),t&&e("button",{onClick:i,children:"Hide code"})]})}const z=l.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,x=l.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;function L(){return e(u,{src:"/site/components/preset-samples/samples/vanilla/index.html"})}function W(){return d(z,{children:[d(x,{children:[e("h3",{children:"Chakra UI"}),e(C,{code:P,language:"tsx",children:e(u,{src:"/site/components/preset-samples/samples/chakra-ui/index.html"})})]}),d(x,{children:[e("h3",{children:"Material UI"}),e(C,{code:V,language:"tsx",children:e(u,{src:"/site/components/preset-samples/samples/mui/index.html"})})]})]})}var X=`import { useState } from "react";
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
`;function Y(){return e(y,{initialCode:X,language:"tsx"})}function _(o={}){const{wrapper:n}=o.components||{};return n?r(n,Object.assign({},o,{children:r(a,{})})):a();function a(){const t=Object.assign({p:"p",code:"code",a:"a"},o.components);return s(I,{children:[s(t.p,{children:["It provides ",r(t.code,{children:"<DateSelect />"})," component for each UI library, exported from ",r(t.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,s(t.p,{children:[r(t.code,{children:"react-ymd-date-select/presets/vanilla"})," is for a bare HTML without styling."]}),`
`,r(L,{}),`
`,s(t.p,{children:[r(t.code,{children:"react-ymd-date-select/presets/(chakra|mui)"})," is also available for ",r(t.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",r(t.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,r(W,{}),`
`,s(t.p,{children:["It also provides ",r(t.code,{children:"useDateSelect"})," hook for customized components."]}),`
`,r(Y,{})]})}}function $(){return d("div",{style:{height:"100%"},children:[e(_,{components:j}),e("iframe",{style:{height:"100%"},src:"./samples/vanilla/index.html",frameBorder:"0"}),e("iframe",{style:{height:"100%"},src:"./samples/mui/index.html",frameBorder:"0"}),e("iframe",{style:{height:"100%"},src:"./samples/chakra-ui/index.html",frameBorder:"0"})]})}const A=document.getElementById("root"),T=M(A);T.render(e(g.StrictMode,{children:e($,{})}));
