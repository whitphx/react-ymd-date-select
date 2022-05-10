var k=Object.defineProperty;var S=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(t,o,r)=>o in t?k(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,c=(t,o)=>{for(var r in o||(o={}))w.call(o,r)&&v(t,r,o[r]);if(S)for(var r of S(o))D.call(o,r)&&v(t,r,o[r]);return t};import"./use-date-select.027e032e.js";import{n as i,j as n,R as y,a as s,L as F,E as O,r as p,b as H,u as M,c as a,d,F as I,e as E,f as V,g as P,C as z}from"./vendor.6ec624d3.js";import{C as u}from"./index.c5744835.js";import"./DateSelect.6766b2ed.js";import"./DateSelect.e5ae9e3c.js";import"./DateSelect.ce713bb4.js";const B=i.div`
  margin: 0;
  background: #46c9e5; /* fallback color */
  background: linear-gradient(150deg, #46c9e5 0%, #d26ac2 100%);
  height: 300px;
  width: 100%;
  text-align: center;

  @media (max-width: 640px) {
    height: 150px;
  }
`,R=i.h1`
  color: #efefef;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 60px;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`;function j(){return n(B,{children:n("div",{children:n(R,{children:"react-ymd-date-select"})})})}const L=i.div`
  margin: 32px auto;
  max-width: 960px;
  padding: 0 16px;
`;function U(t){const o=t.children;if(!y.isValidElement(o))return n("pre",c({},t));const{className:r}=o.props,e=r==null?void 0:r.replace(/language-/,""),m=o.props.children.trim();return e==="jsx"||e==="tsx"?n(u,{initialCode:m,language:e}):n("pre",{children:n("code",{children:o})})}const T=i.code`
  margin: 0 2px;
  padding: 1px 4px;
  border-radius: 5px;
  border: #bbb solid 1px;
  background: rgba(210, 210, 210, 0.2);

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`,$=i.h1`
  font-size: 2rem;
  margin: 1.6rem 0 0.4rem;
`,W=i.h2`
  font-size: 1.8rem;
  margin: 1.6rem 0 0.4rem;
`,f=i.h3`
  font-size: 1.6rem;
  margin: 1.6rem 0 0.4rem;
`,q=i.h4`
  font-size: 1.4rem;
  margin: 1.6rem 0 0.4rem;
`;function N(t){if(t==null)return!1;try{return new URL(t).origin!==window.location.origin}catch{return!1}}function J(t){const o=N(t.href);return s(F,{href:t.href,isExternal:o,children:[t.children,o&&n(O,{mx:"2px"})]})}const X={pre:U,code:t=>n(T,c({},t)),h1:t=>n($,c({},t)),h2:t=>n(W,c({},t)),h3:t=>n(f,c({},t)),h4:t=>n(q,c({},t)),a:J},Y=i.iframe`
  display: block;
  width: 100%;
`;function g(t){const[o,r]=p.exports.useState(),e=p.exports.useRef(null),m=p.exports.useCallback(l=>{e.current=l,l!=null&&(l.onload=()=>{var h;r((h=l.contentWindow)==null?void 0:h.document.documentElement.scrollHeight)})},[]);return p.exports.useEffect(()=>{const l=setInterval(()=>{var x;if(e.current==null)return;const h=e.current;r((x=h.contentWindow)==null?void 0:x.document.documentElement.scrollHeight)},200);return()=>{clearInterval(l)}},[]),n(Y,{ref:m,src:t.src,frameBorder:"0",height:o})}var _=`import { useState } from "react";
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
`,A=`import { useState } from "react";
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
`;const G=i.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,K=i.div`
  overflow: auto;
  max-height: 300px;
`,Q=i(H)`
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
`,Z=i.div`
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
`;function b({code:t,language:o,children:r}){const[e,{on:m,off:l}]=M();return s(G,{children:[n(Z,{children:r}),!e&&n("button",{onClick:m,children:"Show code"}),e&&n(K,{children:n(Q,{value:t,language:o,readOnly:!0})}),e&&n("button",{onClick:l,children:"Hide code"})]})}const ee=i.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,C=i.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;function ne(){return n(g,{src:"/site/components/preset-samples/samples/vanilla/index.html"})}function te(){return s(ee,{children:[s(C,{children:[n(f,{children:"Chakra UI"}),n(b,{code:_,language:"tsx",children:n(g,{src:"/site/components/preset-samples/samples/chakra-ui/index.html"})})]}),s(C,{children:[n(f,{children:"Material UI"}),n(b,{code:A,language:"tsx",children:n(g,{src:"/site/components/preset-samples/samples/mui/index.html"})})]})]})}var ae=`import { useState } from "react";
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
`;function oe(){return n(u,{initialCode:ae,language:"tsx"})}var re=`import { useForm, Controller } from "react-hook-form";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

type FormData = {
  date: string;
};

function Sample() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  console.log(watch("date")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <DateSelect {...field} />}
      />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default Sample;
`,ie=`import { Formik, Form, Field, FieldProps } from "formik";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

interface Values {
  date: string;
}

function Sample() {
  return (
    <Formik
      initialValues={{ date: "" }}
      onSubmit={(values: Values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Field name="date">
          {({ field, form }: FieldProps) => {
            return (
              <DateSelect
                value={field.value}
                onChange={(value) => {
                  form.setFieldValue("date", value);
                }}
              />
            );
          }}
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default Sample;
`;function le(t={}){const{wrapper:o}=t.components||{};return o?a(o,Object.assign({},t,{children:a(r,{})})):r();function r(){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3"},t.components);return d(I,{children:[a(e.h2,{children:"Presets"}),`
`,d(e.p,{children:["It provides ",a(e.code,{children:"<DateSelect />"})," component for each UI library, exported from ",a(e.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,d(e.p,{children:[a(e.code,{children:"react-ymd-date-select/presets/vanilla"})," is for a bare HTML without styling."]}),`
`,a(ne,{}),`
`,d(e.p,{children:[a(e.code,{children:"react-ymd-date-select/presets/(chakra-ui|mui)"})," is also available for ",a(e.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",a(e.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,a(te,{}),`
`,a(e.h2,{children:"Hook"}),`
`,d(e.p,{children:["This library also provides ",a(e.code,{children:"useDateSelect"})," hook so that you can create original customized components."]}),`
`,a(oe,{}),`
`,a(e.h2,{children:"With form libraries"}),`
`,a(e.h3,{children:a(e.a,{href:"https://react-hook-form.com/",children:"React Hook Form"})}),`
`,`
`,a(u,{initialCode:re,language:"tsx"}),`
`,a(e.h3,{children:"Formik"}),`
`,`
`,a(u,{initialCode:ie,language:"tsx"}),`
`,d(e.p,{children:["Note that you have to use ",a(e.code,{children:"setFieldValue()"})," in the ",a(e.code,{children:"onChange"})," prop of ",a(e.code,{children:"<DateSelect />"})," instead of directly passing the ",a(e.code,{children:"field.onChange"}),` prop.
It is because `,a(e.code,{children:"<DateSelect />"}),"'s ",a(e.code,{children:"onChange"})," is called with a ",a(e.code,{children:"string"})," value but not with an event and it does not match Formik's ",a(e.code,{children:"onChange"}),"."]})]})}}function ce(){return s(E,{children:[n(j,{}),n(L,{children:n(le,{components:X})}),s("div",{style:{height:"100%"},children:[n("iframe",{style:{height:"100%"},src:"./samples/vanilla/index.html",frameBorder:"0"}),n("iframe",{style:{height:"100%"},src:"./samples/mui/index.html",frameBorder:"0"}),n("iframe",{style:{height:"100%"},src:"./samples/chakra-ui/index.html",frameBorder:"0"})]})]})}const se=V({styles:{global:{"*, *::before, &::after":{borderColor:null,wordWrap:null},html:{lineHeight:1.5},body:{position:"relative",minHeight:"100%",fontFeatureSettings:"kern"},"*, *::before, *::after":{boxSizing:"border-box"},"body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:0}}}}),de=document.getElementById("root"),me=P(de);me.render(n(y.StrictMode,{children:n(z,{resetCSS:!1,theme:se,children:n(ce,{})})}));
