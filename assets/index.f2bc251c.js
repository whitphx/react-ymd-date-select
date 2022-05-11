var O=Object.defineProperty;var S=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(t,a,o)=>a in t?O(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,h=(t,a)=>{for(var o in a||(a={}))R.call(a,o)&&y(t,o,a[o]);if(S)for(var o of S(a))I.call(a,o)&&y(t,o,a[o]);return t};import"./modulepreload-polyfill.b7f2da20.js";import{n as i,r as m,j as n,a as c,F as V,S as g,b as z,L as M,R as E,E as P,c as L,u as U,d as r,e as p,f as j,g as B,h as $,i as T,C as A}from"./vendor.5ce835ef.js";import"./DateSelect.2a4f74a3.js";import{u as Y}from"./use-date-select.08b3d756.js";import{C as f}from"./index.54bef892.js";import"./DateSelect.eb0fb757.js";import"./DateSelect.13dd3b04.js";const W=i.code`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 5px;
  border: #ddd solid 1px;
  background: rgba(20, 20, 20, 0.4);
  color: #eee;

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`;function w(t){const a=m.exports.useRef(null),o=m.exports.useCallback(e=>{var s,u;if(e.detail!==2)return;const d=a.current;if(d==null)return;const l=new Range;l.setStart(d,0),l.setEnd(d,1),(s=document.getSelection())==null||s.removeAllRanges(),(u=document.getSelection())==null||u.addRange(l)},[]);return n(W,{ref:a,onClick:o,children:t.children})}const x="#be5f6f",b="#fcdfff",q=i.div`
  display: flex;

  & > div {
    margin: 0 4px;

    & > select {
      border-color: rgba(80, 80, 80, 0.4);

      &[aria-invalid="true"] {
        border-color: ${b};
        box-shadow: 0 0 0 1px ${b};
      }
    }
  }
`;function N(){const[t,a]=m.exports.useState(""),o=Y(t,a,{defaultYear:"now",defaultMonth:"now",defaultDay:"now"});return c(V,{isInvalid:t==="",children:[c(q,{children:[n(g,{value:o.yearValue,onChange:o.onYearChange,bg:"whiteAlpha.900",color:x,children:o.yearOptions.map(e=>n("option",{value:e.value,children:e.label},e.value))}),n(g,{value:o.monthValue,onChange:o.onMonthChange,bg:"whiteAlpha.900",color:x,children:o.monthOptions.map(e=>n("option",{value:e.value,children:e.label},e.value))}),n(g,{value:o.dayValue,onChange:o.onDayChange,bg:"whiteAlpha.900",color:x,children:o.dayOptions.map(e=>n("option",{value:e.value,children:e.label},e.value))})]}),n(z,{color:b,children:"Invalid date"})]})}const G=i.div`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #a733d8; /* fallback color */
  background: linear-gradient(150deg, #f9b600 0%, #a432d5 100%);
  height: 360px;
  width: 100%;

  @media (max-width: 640px) {
    height: 200px;
  }
`,J=i.div`
  text-align: center;
`,X=i.h1`
  color: #efefef;
  text-transform: uppercase;
  display: block;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`,_=i.h2`
  color: #efefef;
  display: block;
  font-size: 1em;
`,K=i.div`
  z-index: 10;
  text-align: center;
  color: #eee;
`,Q=i.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 16px auto 0;

  @media (max-width: 640px) {
    display: none;
  }
`,k=i.p`
  margin-bottom: 4px;
`,Z=i.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`,ee=i.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: right;
`,ne=i(M)`
  display: inline-block;
  margin-top: 8px;
  color: #eee;
`,te=i.div`
  width: 100%;
  max-width: 360px;
  margin: 16px auto 0;
`;function oe(){return c(G,{children:[c(J,{children:[n(X,{children:"react-ymd-date-select"}),n(_,{children:"Hooks and components for Y-M-D dropdowns with React"})]}),c(K,{children:[c(Q,{children:[n(k,{children:n(w,{children:"npm install --save react-ymd-date-select"})}),n(k,{children:n(w,{children:"yarn add react-ymd-date-select"})})]}),n(te,{children:n(N,{})})]}),n(Z,{children:n(ee,{children:n(ne,{href:"https://github.com/whitphx/react-ymd-date-select",isExternal:!0,children:"See on GitHub"})})})]})}const ae=i.div`
  margin: 32px auto;
  max-width: 960px;
  padding: 0 16px;
`;function re(t){const a=t.children;if(!E.isValidElement(a))return n("pre",h({},t));const{className:o}=a.props,e=o==null?void 0:o.replace(/language-/,""),d=a.props.children.trim();return e==="jsx"||e==="tsx"?n(f,{initialCode:d,language:e}):n("pre",{children:n("code",{children:a})})}const ie=i.code`
  margin: 0 2px;
  padding: 1px 4px;
  border-radius: 5px;
  border: #bbb solid 1px;
  background: rgba(210, 210, 210, 0.2);

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`,le=i.h1`
  font-size: 2rem;
  margin: 1.6rem 0 0.4rem;
`,ce=i.h2`
  font-size: 1.8rem;
  margin: 1.6rem 0 0.4rem;
`,v=i.h3`
  font-size: 1.6rem;
  margin: 1.6rem 0 0.4rem;
`,de=i.h4`
  font-size: 1.4rem;
  margin: 1.6rem 0 0.4rem;
`;function se(t){if(t==null)return!1;try{return new URL(t).origin!==window.location.origin}catch{return!1}}function he(t){const a=se(t.href);return c(M,{href:t.href,isExternal:a,children:[t.children,a&&n(P,{mx:"2px"})]})}const pe={pre:re,code:t=>n(ie,h({},t)),h1:t=>n(le,h({},t)),h2:t=>n(ce,h({},t)),h3:t=>n(v,h({},t)),h4:t=>n(de,h({},t)),a:he},me=i.iframe`
  display: block;
  width: 100%;
`;function C(t){const[a,o]=m.exports.useState(),e=m.exports.useRef(null),d=m.exports.useCallback(l=>{e.current=l,l!=null&&(l.onload=()=>{var s;o((s=l.contentWindow)==null?void 0:s.document.documentElement.scrollHeight)})},[]);return m.exports.useEffect(()=>{const l=setInterval(()=>{var u;if(e.current==null)return;const s=e.current;o((u=s.contentWindow)==null?void 0:u.document.documentElement.scrollHeight)},200);return()=>{clearInterval(l)}},[]),n(me,{ref:d,src:t.src,frameBorder:"0",height:a})}var ue=`import { useState } from "react";
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
`,fe=`import { useState } from "react";
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
`;const ge=i.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,xe=i.div`
  overflow: auto;
  max-height: 300px;
`,be=i(L)`
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
`,ve=i.div`
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
`;const D=i.button`
  background: #ddd;
  border: #aaa 1px solid;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.4rem;
`;function F({code:t,language:a,children:o}){const[e,{on:d,off:l}]=U();return c(ge,{children:[n(ve,{children:o}),!e&&n(D,{onClick:d,children:"Show code"}),e&&n(xe,{children:n(be,{value:t,language:a,readOnly:!0})}),e&&n(D,{onClick:l,children:"Hide code"})]})}const Ce=i.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,H=i.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;function Se(){return n(C,{src:"./website/components/preset-samples/samples/vanilla/index.html"})}function ye(){return c(Ce,{children:[c(H,{children:[n(v,{children:"Chakra UI"}),n(F,{code:ue,language:"tsx",children:n(C,{src:"./website/components/preset-samples/samples/chakra-ui/index.html"})})]}),c(H,{children:[n(v,{children:"Material UI"}),n(F,{code:fe,language:"tsx",children:n(C,{src:"./website/components/preset-samples/samples/mui/index.html"})})]})]})}var we=`import { useState } from "react";
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
`,ke=`import { useForm, Controller } from "react-hook-form";
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
`,De=`import { Formik, Form, Field, FieldProps } from "formik";
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
        <input type="submit" />
      </Form>
    </Formik>
  );
}

export default Sample;
`;function Fe(t={}){const{wrapper:a}=t.components||{};return a?r(a,Object.assign({},t,{children:r(o,{})})):o();function o(){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3"},t.components);return p(j,{children:[r(e.h2,{children:"Presets"}),`
`,p(e.p,{children:["It provides ready-to-use ",r(e.code,{children:"<DateSelect />"})," component for each UI library, exported from ",r(e.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,p(e.p,{children:[r(e.code,{children:"react-ymd-date-select/presets/vanilla"})," is a bare HTML version without styling."]}),`
`,r(Se,{}),`
`,p(e.p,{children:[r(e.code,{children:"react-ymd-date-select/presets/(chakra-ui|mui)"})," is also available for ",r(e.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",r(e.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,r(ye,{}),`
`,r(e.h2,{children:"Hook for custom components"}),`
`,p(e.p,{children:["This library also provides ",r(e.code,{children:"useDateSelect"})," hook so that you can create original customized components."]}),`
`,`
`,r(f,{initialCode:we,language:"tsx"}),`
`,r(e.h2,{children:"With form libraries"}),`
`,r(e.h3,{children:"React Hook Form"}),`
`,`
`,r(f,{initialCode:ke,language:"tsx"}),`
`,p(e.p,{children:[`For the details about the usage with React Hook Form,
see `,r(e.a,{href:"https://react-hook-form.com/advanced-usage#ControlledmixedwithUncontrolledComponents",children:'the "Controlled mixed with Uncontrolled Components" section'}),` in the official document.
Since the date selector is a controlled component, we need to use the `,r(e.code,{children:"<Controller />"})," provided from React Hook Form as the example above."]}),`
`,r(e.h3,{children:"Formik"}),`
`,`
`,r(f,{initialCode:De,language:"tsx"}),`
`,p(e.p,{children:["Note that you have to use ",r(e.code,{children:"setFieldValue()"})," in the ",r(e.code,{children:"onChange"})," prop of ",r(e.code,{children:"<DateSelect />"})," instead of directly passing the ",r(e.code,{children:"field.onChange"}),` prop.
It is because `,r(e.code,{children:"<DateSelect />"}),"'s ",r(e.code,{children:"onChange"})," is called with a ",r(e.code,{children:"string"})," value but not with an event and it does not match Formik's ",r(e.code,{children:"onChange"}),"."]})]})}}function He(){return c(B,{children:[n(oe,{}),n(ae,{children:n(Fe,{components:pe})})]})}const Me=$({styles:{global:{"*, *::before, &::after":{borderColor:null,wordWrap:null},html:{lineHeight:1.5},body:{position:"relative",minHeight:"100%",fontFeatureSettings:"kern"},"*, *::before, *::after":{boxSizing:"border-box"},"body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:0}}}}),Ee=document.getElementById("root"),Oe=T(Ee);Oe.render(n(E.StrictMode,{children:n(A,{resetCSS:!1,theme:Me,children:n(He,{})})}));
