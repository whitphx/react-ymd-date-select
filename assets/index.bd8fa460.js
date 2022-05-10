var H=Object.defineProperty;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var S=(t,o,i)=>o in t?H(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,p=(t,o)=>{for(var i in o||(o={}))O.call(o,i)&&S(t,i,o[i]);if(b)for(var i of b(o))M.call(o,i)&&S(t,i,o[i]);return t};import"./modulepreload-polyfill.b7f2da20.js";import{n as r,r as h,j as n,L as F,a as d,R as D,E as R,b as E,u as I,c as a,d as m,F as z,e as V,f as P,g as L,C as U}from"./vendor.6ec624d3.js";import{C as f}from"./index.11ce0c9e.js";import"./DateSelect.4b261789.js";import"./use-date-select.9d400971.js";import"./DateSelect.3578c347.js";import"./DateSelect.52e76da9.js";const j=r.code`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 5px;
  border: #888 solid 1px;
  background: rgba(20, 20, 20, 0.4);
  color: #eee;

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`;function v(t){const o=h.exports.useRef(null),i=h.exports.useCallback(e=>{var s,u;if(e.detail!==2)return;const c=o.current;if(c==null)return;const l=new Range;l.setStart(c,0),l.setEnd(c,1),(s=document.getSelection())==null||s.removeAllRanges(),(u=document.getSelection())==null||u.addRange(l)},[]);return n(j,{ref:o,onClick:i,children:t.children})}const B=r.div`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #46c9e5; /* fallback color */
  background: linear-gradient(150deg, #46c9e5 0%, #d26ac2 100%);
  height: 300px;
  width: 100%;

  @media (max-width: 640px) {
    height: 200px;
  }
`,T=r.div`
  text-align: center;
`,$=r.h1`
  color: #efefef;
  text-transform: uppercase;
  display: block;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`,W=r.h2`
  color: #efefef;
  display: block;
  font-size: 1em;
`,q=r.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: center;
  color: #eee;
`,N=r.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 16px auto 0;

  @media (max-width: 640px) {
    display: none;
  }
`,C=r.p`
  margin-bottom: 4px;
`,Y=r.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`,A=r.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 8px 8px;
  text-align: right;
`,G=r(F)`
  display: inline-block;
  margin-top: 8px;
  color: #eee;
`;function J(){return d(B,{children:[d(T,{children:[n($,{children:"react-ymd-date-select"}),n(W,{children:"Helper hooks and components for Y-M-D dropdowns with React"})]}),n(q,{children:d(N,{children:[n(C,{children:n(v,{children:"npm install --save react-ymd-date-select"})}),n(C,{children:n(v,{children:"yarn add react-ymd-date-select"})})]})}),n(Y,{children:n(A,{children:n(G,{href:"https://github.com/whitphx/react-ymd-date-select",isExternal:!0,children:"See on GitHub"})})})]})}const X=r.div`
  margin: 32px auto;
  max-width: 960px;
  padding: 0 16px;
`;function _(t){const o=t.children;if(!D.isValidElement(o))return n("pre",p({},t));const{className:i}=o.props,e=i==null?void 0:i.replace(/language-/,""),c=o.props.children.trim();return e==="jsx"||e==="tsx"?n(f,{initialCode:c,language:e}):n("pre",{children:n("code",{children:o})})}const K=r.code`
  margin: 0 2px;
  padding: 1px 4px;
  border-radius: 5px;
  border: #bbb solid 1px;
  background: rgba(210, 210, 210, 0.2);

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`,Q=r.h1`
  font-size: 2rem;
  margin: 1.6rem 0 0.4rem;
`,Z=r.h2`
  font-size: 1.8rem;
  margin: 1.6rem 0 0.4rem;
`,g=r.h3`
  font-size: 1.6rem;
  margin: 1.6rem 0 0.4rem;
`,ee=r.h4`
  font-size: 1.4rem;
  margin: 1.6rem 0 0.4rem;
`;function ne(t){if(t==null)return!1;try{return new URL(t).origin!==window.location.origin}catch{return!1}}function te(t){const o=ne(t.href);return d(F,{href:t.href,isExternal:o,children:[t.children,o&&n(R,{mx:"2px"})]})}const oe={pre:_,code:t=>n(K,p({},t)),h1:t=>n(Q,p({},t)),h2:t=>n(Z,p({},t)),h3:t=>n(g,p({},t)),h4:t=>n(ee,p({},t)),a:te},ae=r.iframe`
  display: block;
  width: 100%;
`;function x(t){const[o,i]=h.exports.useState(),e=h.exports.useRef(null),c=h.exports.useCallback(l=>{e.current=l,l!=null&&(l.onload=()=>{var s;i((s=l.contentWindow)==null?void 0:s.document.documentElement.scrollHeight)})},[]);return h.exports.useEffect(()=>{const l=setInterval(()=>{var u;if(e.current==null)return;const s=e.current;i((u=s.contentWindow)==null?void 0:u.document.documentElement.scrollHeight)},200);return()=>{clearInterval(l)}},[]),n(ae,{ref:c,src:t.src,frameBorder:"0",height:o})}var re=`import { useState } from "react";
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
`,ie=`import { useState } from "react";
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
`;const le=r.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,ce=r.div`
  overflow: auto;
  max-height: 300px;
`,de=r(E)`
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
`,se=r.div`
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
`;const y=r.button`
  background: #ddd;
  border: #aaa 1px solid;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.4rem;
`;function k({code:t,language:o,children:i}){const[e,{on:c,off:l}]=I();return d(le,{children:[n(se,{children:i}),!e&&n(y,{onClick:c,children:"Show code"}),e&&n(ce,{children:n(de,{value:t,language:o,readOnly:!0})}),e&&n(y,{onClick:l,children:"Hide code"})]})}const pe=r.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,w=r.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;function me(){return n(x,{src:"./website/components/preset-samples/samples/vanilla/index.html"})}function he(){return d(pe,{children:[d(w,{children:[n(g,{children:"Chakra UI"}),n(k,{code:re,language:"tsx",children:n(x,{src:"./website/components/preset-samples/samples/chakra-ui/index.html"})})]}),d(w,{children:[n(g,{children:"Material UI"}),n(k,{code:ie,language:"tsx",children:n(x,{src:"./website/components/preset-samples/samples/mui/index.html"})})]})]})}var ue=`import { useState } from "react";
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
`;function fe(){return n(f,{initialCode:ue,language:"tsx"})}var ge=`import { useForm, Controller } from "react-hook-form";
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
`,xe=`import { Formik, Form, Field, FieldProps } from "formik";
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
`;function be(t={}){const{wrapper:o}=t.components||{};return o?a(o,Object.assign({},t,{children:a(i,{})})):i();function i(){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3"},t.components);return m(z,{children:[a(e.h2,{children:"Presets"}),`
`,m(e.p,{children:["It provides ",a(e.code,{children:"<DateSelect />"})," component for each UI library, exported from ",a(e.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,m(e.p,{children:[a(e.code,{children:"react-ymd-date-select/presets/vanilla"})," is for a bare HTML without styling."]}),`
`,a(me,{}),`
`,m(e.p,{children:[a(e.code,{children:"react-ymd-date-select/presets/(chakra-ui|mui)"})," is also available for ",a(e.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",a(e.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,a(he,{}),`
`,a(e.h2,{children:"Hook"}),`
`,m(e.p,{children:["This library also provides ",a(e.code,{children:"useDateSelect"})," hook so that you can create original customized components."]}),`
`,a(fe,{}),`
`,a(e.h2,{children:"With form libraries"}),`
`,a(e.h3,{children:"React Hook Form"}),`
`,`
`,a(f,{initialCode:ge,language:"tsx"}),`
`,m(e.p,{children:[`For the details about the usage with React Hook Form,
see `,a(e.a,{href:"https://react-hook-form.com/advanced-usage#ControlledmixedwithUncontrolledComponents",children:'the "Controlled mixed with Uncontrolled Components" section'}),` in the official document.
Since the date selector is a controlled component, we need to use the `,a(e.code,{children:"<Controller />"})," provided from React Hook Form as the example above."]}),`
`,a(e.h3,{children:"Formik"}),`
`,`
`,a(f,{initialCode:xe,language:"tsx"}),`
`,m(e.p,{children:["Note that you have to use ",a(e.code,{children:"setFieldValue()"})," in the ",a(e.code,{children:"onChange"})," prop of ",a(e.code,{children:"<DateSelect />"})," instead of directly passing the ",a(e.code,{children:"field.onChange"}),` prop.
It is because `,a(e.code,{children:"<DateSelect />"}),"'s ",a(e.code,{children:"onChange"})," is called with a ",a(e.code,{children:"string"})," value but not with an event and it does not match Formik's ",a(e.code,{children:"onChange"}),"."]})]})}}function Se(){return d(V,{children:[n(J,{}),n(X,{children:n(be,{components:oe})})]})}const ve=P({styles:{global:{"*, *::before, &::after":{borderColor:null,wordWrap:null},html:{lineHeight:1.5},body:{position:"relative",minHeight:"100%",fontFeatureSettings:"kern"},"*, *::before, *::after":{boxSizing:"border-box"},"body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:0}}}}),Ce=document.getElementById("root"),ye=L(Ce);ye.render(n(D.StrictMode,{children:n(U,{resetCSS:!1,theme:ve,children:n(Se,{})})}));
