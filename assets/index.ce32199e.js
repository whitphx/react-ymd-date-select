var M=Object.defineProperty;var v=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var S=(t,a,o)=>a in t?M(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,h=(t,a)=>{for(var o in a||(a={}))O.call(a,o)&&S(t,o,a[o]);if(v)for(var o of v(a))R.call(a,o)&&S(t,o,a[o]);return t};import"./modulepreload-polyfill.b7f2da20.js";import{n as i,r as u,j as n,a as l,S as g,L as F,R as H,E,b as V,u as z,c as r,d as p,F as I,e as P,f as L,g as U,C as j}from"./vendor.9c094540.js";import"./DateSelect.6160f698.js";import{u as B}from"./use-date-select.f3a79916.js";import{C as f}from"./index.1d3871c0.js";import"./DateSelect.62828fdc.js";import"./DateSelect.5e2039ea.js";const T=i.code`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 5px;
  border: #ddd solid 1px;
  background: rgba(20, 20, 20, 0.4);
  color: #eee;

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`;function C(t){const a=u.exports.useRef(null),o=u.exports.useCallback(e=>{var s,m;if(e.detail!==2)return;const d=a.current;if(d==null)return;const c=new Range;c.setStart(d,0),c.setEnd(d,1),(s=document.getSelection())==null||s.removeAllRanges(),(m=document.getSelection())==null||m.addRange(c)},[]);return n(T,{ref:a,onClick:o,children:t.children})}const $=i.div`
  display: flex;

  & > div {
    margin: 0 4px;
    border-color: rgba(80, 80, 80, 0.4);
  }
`;function A(){const[t,a]=u.exports.useState(""),o=B(t,a,{defaultYear:"now",defaultMonth:"now",defaultDay:"now"});return l($,{children:[l(g,{value:o.yearValue,onChange:o.onYearChange,bg:"whiteAlpha.900",color:"#be5f6f",children:[n("option",{value:"",disabled:!0}),o.yearOptions.map(e=>n("option",{value:e.value,children:e.label},e.value))]}),l(g,{value:o.monthValue,onChange:o.onMonthChange,bg:"whiteAlpha.900",color:"#be5f6f",children:[n("option",{value:"",disabled:!0}),o.monthOptions.map(e=>n("option",{value:e.value,children:e.label},e.value))]}),l(g,{value:o.dayValue,onChange:o.onDayChange,bg:"whiteAlpha.900",color:"#be5f6f",children:[n("option",{value:"",disabled:!0}),o.dayOptions.map(e=>n("option",{value:e.value,children:e.label},e.value))]})]})}const Y=i.div`
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
`,W=i.div`
  text-align: center;
`,q=i.h1`
  color: #efefef;
  text-transform: uppercase;
  display: block;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`,N=i.h2`
  color: #efefef;
  display: block;
  font-size: 1em;
`,G=i.div`
  z-index: 10;
  text-align: center;
  color: #eee;
`,J=i.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 16px auto 0;

  @media (max-width: 640px) {
    display: none;
  }
`,y=i.p`
  margin-bottom: 4px;
`,X=i.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`,_=i.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: right;
`,K=i(F)`
  display: inline-block;
  margin-top: 8px;
  color: #eee;
`,Q=i.div`
  width: 100%;
  max-width: 360px;
  margin: 16px auto 0;
`;function Z(){return l(Y,{children:[l(W,{children:[n(q,{children:"react-ymd-date-select"}),n(N,{children:"Hooks and components for Y-M-D dropdowns with React"})]}),l(G,{children:[l(J,{children:[n(y,{children:n(C,{children:"npm install --save react-ymd-date-select"})}),n(y,{children:n(C,{children:"yarn add react-ymd-date-select"})})]}),n(Q,{children:n(A,{})})]}),n(X,{children:n(_,{children:n(K,{href:"https://github.com/whitphx/react-ymd-date-select",isExternal:!0,children:"See on GitHub"})})})]})}const ee=i.div`
  margin: 32px auto;
  max-width: 960px;
  padding: 0 16px;
`;function ne(t){const a=t.children;if(!H.isValidElement(a))return n("pre",h({},t));const{className:o}=a.props,e=o==null?void 0:o.replace(/language-/,""),d=a.props.children.trim();return e==="jsx"||e==="tsx"?n(f,{initialCode:d,language:e}):n("pre",{children:n("code",{children:a})})}const te=i.code`
  margin: 0 2px;
  padding: 1px 4px;
  border-radius: 5px;
  border: #bbb solid 1px;
  background: rgba(210, 210, 210, 0.2);

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`,oe=i.h1`
  font-size: 2rem;
  margin: 1.6rem 0 0.4rem;
`,ae=i.h2`
  font-size: 1.8rem;
  margin: 1.6rem 0 0.4rem;
`,b=i.h3`
  font-size: 1.6rem;
  margin: 1.6rem 0 0.4rem;
`,re=i.h4`
  font-size: 1.4rem;
  margin: 1.6rem 0 0.4rem;
`;function ie(t){if(t==null)return!1;try{return new URL(t).origin!==window.location.origin}catch{return!1}}function le(t){const a=ie(t.href);return l(F,{href:t.href,isExternal:a,children:[t.children,a&&n(E,{mx:"2px"})]})}const ce={pre:ne,code:t=>n(te,h({},t)),h1:t=>n(oe,h({},t)),h2:t=>n(ae,h({},t)),h3:t=>n(b,h({},t)),h4:t=>n(re,h({},t)),a:le},de=i.iframe`
  display: block;
  width: 100%;
`;function x(t){const[a,o]=u.exports.useState(),e=u.exports.useRef(null),d=u.exports.useCallback(c=>{e.current=c,c!=null&&(c.onload=()=>{var s;o((s=c.contentWindow)==null?void 0:s.document.documentElement.scrollHeight)})},[]);return u.exports.useEffect(()=>{const c=setInterval(()=>{var m;if(e.current==null)return;const s=e.current;o((m=s.contentWindow)==null?void 0:m.document.documentElement.scrollHeight)},200);return()=>{clearInterval(c)}},[]),n(de,{ref:d,src:t.src,frameBorder:"0",height:a})}var se=`import { useState } from "react";
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
`,he=`import { useState } from "react";
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
`;const pe=i.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,ue=i.div`
  overflow: auto;
  max-height: 300px;
`,me=i(V)`
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
`,fe=i.div`
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
`;const w=i.button`
  background: #ddd;
  border: #aaa 1px solid;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.4rem;
`;function k({code:t,language:a,children:o}){const[e,{on:d,off:c}]=z();return l(pe,{children:[n(fe,{children:o}),!e&&n(w,{onClick:d,children:"Show code"}),e&&n(ue,{children:n(me,{value:t,language:a,readOnly:!0})}),e&&n(w,{onClick:c,children:"Hide code"})]})}const ge=i.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,D=i.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;function be(){return n(x,{src:"./website/components/preset-samples/samples/vanilla/index.html"})}function xe(){return l(ge,{children:[l(D,{children:[n(b,{children:"Chakra UI"}),n(k,{code:se,language:"tsx",children:n(x,{src:"./website/components/preset-samples/samples/chakra-ui/index.html"})})]}),l(D,{children:[n(b,{children:"Material UI"}),n(k,{code:he,language:"tsx",children:n(x,{src:"./website/components/preset-samples/samples/mui/index.html"})})]})]})}var ve=`import { useState } from "react";
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
`,Se=`import { useForm, Controller } from "react-hook-form";
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
`,Ce=`import { Formik, Form, Field, FieldProps } from "formik";
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
`;function ye(t={}){const{wrapper:a}=t.components||{};return a?r(a,Object.assign({},t,{children:r(o,{})})):o();function o(){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3"},t.components);return p(I,{children:[r(e.h2,{children:"Presets"}),`
`,p(e.p,{children:["It provides ready-to-use ",r(e.code,{children:"<DateSelect />"})," component for each UI library, exported from ",r(e.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,p(e.p,{children:[r(e.code,{children:"react-ymd-date-select/presets/vanilla"})," is a bare HTML version without styling."]}),`
`,r(be,{}),`
`,p(e.p,{children:[r(e.code,{children:"react-ymd-date-select/presets/(chakra-ui|mui)"})," is also available for ",r(e.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",r(e.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,r(xe,{}),`
`,r(e.h2,{children:"Hook for custom components"}),`
`,p(e.p,{children:["This library also provides ",r(e.code,{children:"useDateSelect"})," hook so that you can create original customized components."]}),`
`,`
`,r(f,{initialCode:ve,language:"tsx"}),`
`,r(e.h2,{children:"With form libraries"}),`
`,r(e.h3,{children:"React Hook Form"}),`
`,`
`,r(f,{initialCode:Se,language:"tsx"}),`
`,p(e.p,{children:[`For the details about the usage with React Hook Form,
see `,r(e.a,{href:"https://react-hook-form.com/advanced-usage#ControlledmixedwithUncontrolledComponents",children:'the "Controlled mixed with Uncontrolled Components" section'}),` in the official document.
Since the date selector is a controlled component, we need to use the `,r(e.code,{children:"<Controller />"})," provided from React Hook Form as the example above."]}),`
`,r(e.h3,{children:"Formik"}),`
`,`
`,r(f,{initialCode:Ce,language:"tsx"}),`
`,p(e.p,{children:["Note that you have to use ",r(e.code,{children:"setFieldValue()"})," in the ",r(e.code,{children:"onChange"})," prop of ",r(e.code,{children:"<DateSelect />"})," instead of directly passing the ",r(e.code,{children:"field.onChange"}),` prop.
It is because `,r(e.code,{children:"<DateSelect />"}),"'s ",r(e.code,{children:"onChange"})," is called with a ",r(e.code,{children:"string"})," value but not with an event and it does not match Formik's ",r(e.code,{children:"onChange"}),"."]})]})}}function we(){return l(P,{children:[n(Z,{}),n(ee,{children:n(ye,{components:ce})})]})}const ke=L({styles:{global:{"*, *::before, &::after":{borderColor:null,wordWrap:null},html:{lineHeight:1.5},body:{position:"relative",minHeight:"100%",fontFeatureSettings:"kern"},"*, *::before, *::after":{boxSizing:"border-box"},"body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:0}}}}),De=document.getElementById("root"),Fe=U(De);Fe.render(n(H.StrictMode,{children:n(j,{resetCSS:!1,theme:ke,children:n(we,{})})}));
