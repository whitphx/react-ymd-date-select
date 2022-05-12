var I=Object.defineProperty;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var y=(a,r,o)=>r in a?I(a,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[r]=o,m=(a,r)=>{for(var o in r||(r={}))E.call(r,o)&&y(a,o,r[o]);if(b)for(var o of b(r))O.call(r,o)&&y(a,o,r[o]);return a};import"./modulepreload-polyfill.b7f2da20.js";import{n as i,r as u,j as t,a as c,F as V,S as g,b as P,L as M,R,E as z,c as L,u as T,d as n,e as l,f as U,g as Y,h as j,i as B,C as $}from"./vendor.5ce835ef.js";import"./DateSelect.441a108e.js";import{g as A,u as N}from"./use-date-select.61b1bfac.js";import{C as p}from"./index.69b76d26.js";import"./DateSelect.d9ead660.js";import"./DateSelect.a3d90621.js";const q=i.code`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 5px;
  border: #ddd solid 1px;
  background: rgba(20, 20, 20, 0.4);
  color: #eee;

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`;function w(a){const r=u.exports.useRef(null),o=u.exports.useCallback(e=>{var h,f;if(e.detail!==2)return;const s=r.current;if(s==null)return;const d=new Range;d.setStart(s,0),d.setEnd(s,1),(h=document.getSelection())==null||h.removeAllRanges(),(f=document.getSelection())==null||f.addRange(d)},[]);return t(q,{ref:r,onClick:o,children:a.children})}const S="#be5f6f",v="#fcdfff",W=i.div`
  display: flex;

  & > div {
    margin: 0 4px;

    & > select {
      border-color: rgba(80, 80, 80, 0.4);

      &[aria-invalid="true"] {
        border-color: ${v};
        box-shadow: 0 0 0 1px ${v};
      }
    }
  }
`,G=A(new Date);function J(){const[a,r]=u.exports.useState(G||"2022-01-01"),o=N(a,r);return c(V,{isInvalid:a==="",children:[c(W,{children:[t(g,{value:o.yearValue,onChange:o.onYearChange,bg:"whiteAlpha.900",color:S,children:o.yearOptions.map(e=>t("option",{value:e.value,children:e.label},e.value))}),t(g,{value:o.monthValue,onChange:o.onMonthChange,bg:"whiteAlpha.900",color:S,children:o.monthOptions.map(e=>t("option",{value:e.value,children:e.label},e.value))}),t(g,{value:o.dayValue,onChange:o.onDayChange,bg:"whiteAlpha.900",color:S,children:o.dayOptions.map(e=>t("option",{value:e.value,children:e.label},e.value))})]}),t(P,{color:v,children:"Invalid date"})]})}const X=i.div`
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
`,_=i.div`
  text-align: center;
`,K=i.h1`
  color: #efefef;
  text-transform: uppercase;
  display: block;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`,Q=i.h2`
  color: #efefef;
  display: block;
  font-size: 1em;
`,Z=i.div`
  z-index: 10;
  text-align: center;
  color: #eee;
`,ee=i.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 16px auto 0;

  @media (max-width: 640px) {
    display: none;
  }
`,D=i.p`
  margin-bottom: 4px;
`,ne=i.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`,te=i.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: right;
`,ae=i(M)`
  display: inline-block;
  margin-top: 8px;
  color: #eee;
`,oe=i.div`
  width: 100%;
  max-width: 360px;
  margin: 16px auto 0;
`;function re(){return c(X,{children:[c(_,{children:[t(K,{children:"react-ymd-date-select"}),t(Q,{children:"Hooks and components for Y-M-D dropdowns with React"})]}),c(Z,{children:[c(ee,{children:[t(D,{children:t(w,{children:"npm install --save react-ymd-date-select"})}),t(D,{children:t(w,{children:"yarn add react-ymd-date-select"})})]}),t(oe,{children:t(J,{})})]}),t(ne,{children:t(te,{children:t(ae,{href:"https://github.com/whitphx/react-ymd-date-select",isExternal:!0,children:"See on GitHub"})})})]})}const ie=i.div`
  margin: 32px auto;
  max-width: 960px;
  padding: 0 16px;
`;function le(a){const r=a.children;if(!R.isValidElement(r))return t("pre",m({},a));const{className:o}=r.props,e=o==null?void 0:o.replace(/language-/,""),s=r.props.children.trim();return e==="jsx"||e==="tsx"?t(p,{initialCode:s,language:e}):t("pre",{children:t("code",{children:r})})}const de=i.code`
  margin: 0 2px;
  padding: 1px 4px;
  border-radius: 5px;
  border: #bbb solid 1px;
  background: rgba(210, 210, 210, 0.2);

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`,ce=i.h1`
  font-size: 2rem;
  margin: 1.6rem 0 0.4rem;
`,se=i.h2`
  font-size: 1.8rem;
  margin: 1.6rem 0 0.4rem;
`,C=i.h3`
  font-size: 1.6rem;
  margin: 1.6rem 0 0.4rem;
`,pe=i.h4`
  font-size: 1.4rem;
  margin: 1.6rem 0 0.4rem;
`;function he(a){if(a==null)return!1;try{return new URL(a).origin!==window.location.origin}catch{return!1}}function me(a){const r=he(a.href);return c(M,{href:a.href,isExternal:r,children:[a.children,r&&t(z,{mx:"2px"})]})}const ue={pre:le,code:a=>t(de,m({},a)),h1:a=>t(ce,m({},a)),h2:a=>t(se,m({},a)),h3:a=>t(C,m({},a)),h4:a=>t(pe,m({},a)),a:me},fe=i.iframe`
  display: block;
  width: 100%;
`;function x(a){const[r,o]=u.exports.useState(),e=u.exports.useRef(null),s=u.exports.useCallback(d=>{e.current=d,d!=null&&(d.onload=()=>{var h;o((h=d.contentWindow)==null?void 0:h.document.documentElement.scrollHeight)})},[]);return u.exports.useEffect(()=>{const d=setInterval(()=>{var f;if(e.current==null)return;const h=e.current;o((f=h.contentWindow)==null?void 0:f.document.documentElement.scrollHeight)},200);return()=>{clearInterval(d)}},[]),t(fe,{ref:s,src:a.src,frameBorder:"0",height:r})}var ge=`import { useState } from "react";
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
`,Se=`import { useState } from "react";
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
`;const ve=i.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,Ce=i.div`
  overflow: auto;
  max-height: 300px;
`,xe=i(L)`
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
`,be=i.div`
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
`;const k=i.button`
  background: #ddd;
  border: #aaa 1px solid;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.4rem;
`;function F({code:a,language:r,children:o}){const[e,{on:s,off:d}]=T();return c(ve,{children:[t(be,{children:o}),!e&&t(k,{onClick:s,children:"Show code"}),e&&t(Ce,{children:t(xe,{value:a,language:r,readOnly:!0})}),e&&t(k,{onClick:d,children:"Hide code"})]})}const ye=i.div`
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
`;function we(){return t(x,{src:"./website/components/preset-samples/samples/vanilla/index.html"})}function De(){return c(ye,{children:[c(H,{children:[t(C,{children:"Chakra UI"}),t(F,{code:ge,language:"tsx",children:t(x,{src:"./website/components/preset-samples/samples/chakra-ui/index.html"})})]}),c(H,{children:[t(C,{children:"Material UI"}),t(F,{code:Se,language:"tsx",children:t(x,{src:"./website/components/preset-samples/samples/mui/index.html"})})]})]})}var ke=`import { useState } from "react";
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
`,Fe=`import { useForm, Controller } from "react-hook-form";
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
`,He=`import { Formik, Form, Field, FieldProps } from "formik";
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
`,Me=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("2022-01-02");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,Re=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} defaultYear={2000} />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,Ie=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} defaultYear="now" />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,Ee=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} hideDay />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,Oe=`import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DateSelect, ChildComponentProps } from "react-ymd-date-select";
import { DateDropdownGroup } from "react-ymd-date-select/presets/vanilla";

// Creating a new component wrapped with \`React.forwardRef\` is necessary to use \`ref\` inside it.
const CustomDateSelect = React.forwardRef<
  HTMLInputElement,
  ChildComponentProps
>((props, ref) => {
  return (
    <>
      <input
        type="date"
        value={props.dateValue || ""}
        onChange={props.onDateChange}
        ref={ref}
      />
      <DateDropdownGroup {...props} />
    </>
  );
});
CustomDateSelect.displayName = "CustomDateSelect";

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
  const onSubmit = (data: FormData) => console.log(data);

  console.log(watch("date")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <DateSelect
            {...field}
            render={(props) => <CustomDateSelect {...props} />}
          />
        )}
      />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default Sample;
`;function Ve(a={}){const{wrapper:r}=a.components||{};return r?n(r,Object.assign({},a,{children:n(o,{})})):o();function o(){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3"},a.components);return l(U,{children:[n(e.h2,{children:"Presets"}),`
`,l(e.p,{children:["It provides ready-to-use ",n(e.code,{children:"<DateSelect />"})," component for each UI library, exported from ",n(e.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,l(e.p,{children:[n(e.code,{children:"react-ymd-date-select/presets/vanilla"})," is a bare HTML version without styling."]}),`
`,n(we,{}),`
`,l(e.p,{children:[n(e.code,{children:"react-ymd-date-select/presets/(chakra-ui|mui)"})," is also available for ",n(e.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",n(e.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,n(De,{}),`
`,n(e.h2,{children:"Hook for custom components"}),`
`,l(e.p,{children:["This library also provides ",n(e.code,{children:"useDateSelect"})," hook so that you can create original customized components."]}),`
`,`
`,n(p,{initialCode:ke,language:"tsx"}),`
`,n(e.h2,{children:"With form libraries"}),`
`,n(e.h3,{children:"React Hook Form"}),`
`,`
`,n(p,{initialCode:Fe,language:"tsx"}),`
`,l(e.p,{children:[`For the details about the usage with React Hook Form,
see `,n(e.a,{href:"https://react-hook-form.com/advanced-usage#ControlledmixedwithUncontrolledComponents",children:'the "Controlled mixed with Uncontrolled Components" section'}),` in the official document.
Since the date selector is a controlled component, we need to use the `,n(e.code,{children:"<Controller />"})," provided from React Hook Form as the example above."]}),`
`,n(e.h3,{children:"Formik"}),`
`,`
`,n(p,{initialCode:He,language:"tsx"}),`
`,l(e.p,{children:["Note that you have to use ",n(e.code,{children:"setFieldValue()"})," in the ",n(e.code,{children:"onChange"})," prop of ",n(e.code,{children:"<DateSelect />"})," instead of directly passing the ",n(e.code,{children:"field.onChange"}),` prop.
It is because `,n(e.code,{children:"<DateSelect />"}),"'s ",n(e.code,{children:"onChange"})," is called with a ",n(e.code,{children:"string"})," value but not with an event and it does not match Formik's ",n(e.code,{children:"onChange"}),"."]}),`
`,n(e.h2,{children:"The date string format"}),`
`,l(e.p,{children:["The ",n(e.code,{children:"value"})," prop and the argument of ",n(e.code,{children:"onChange()"})," are string formatted in ",n(e.code,{children:"yyyy-MM-DD"}),`,
which is ISO8601 format, and the same as `,l(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#value",children:["the value of the native ",n(e.code,{children:'<input type="date" />'})]}),`.
It's also `,n(e.a,{href:"https://tc39.es/ecma262/#sec-date-time-string-format",children:"the JavaScript standard date string format"}),"."]}),`
`,n(e.h2,{children:"Samples"}),`
`,n(e.h3,{children:"Setting default value to the state"}),`
`,`
`,n(p,{initialCode:Me,language:"tsx"}),`
`,n(e.h3,{children:"Default values for year, month, and day"}),`
`,`
`,n(p,{initialCode:Re,language:"tsx"}),`
`,l(e.p,{children:["You can set ",n(e.code,{children:"defaultYear"}),", ",n(e.code,{children:"defaultMonth"}),", and ",n(e.code,{children:"defaultDay"}),"."]}),`
`,l(e.p,{children:["Note that these props only set the default selection of the dropdown UI, but does not affects the state as ",n(e.code,{children:"onChange"})," is not called."]}),`
`,n(e.h3,{children:"Set the current date as the default values"}),`
`,`
`,n(p,{initialCode:Ie,language:"tsx"}),`
`,l(e.p,{children:["You can set ",n(e.code,{children:'"now"'})," to ",n(e.code,{children:"defaultYear"}),", ",n(e.code,{children:"defaultMonth"}),", and ",n(e.code,{children:"defaultDay"}),"."]}),`
`,n(e.h3,{children:"Hide day"}),`
`,`
`,n(p,{initialCode:Ee,language:"tsx"}),`
`,l(e.p,{children:[n(e.code,{children:"hideDay"})," prop to hide the day select."]}),`
`,n(e.h3,{children:"A custom component wrapping the preset component"}),`
`,`
`,n(p,{initialCode:Oe,language:"tsx"}),`
`,l(e.p,{children:["This example shows how to pass the ",n(e.code,{children:"ref"})," to the preset component and how to integrate it with React Hook Form, which uses the ",n(e.code,{children:"ref"}),"."]})]})}}function Pe(){return c(Y,{children:[t(re,{}),t(ie,{children:t(Ve,{components:ue})})]})}const ze=j({styles:{global:{"*, *::before, &::after":{borderColor:null,wordWrap:null},html:{lineHeight:1.5},body:{position:"relative",minHeight:"100%",fontFeatureSettings:"kern"},"*, *::before, *::after":{boxSizing:"border-box"},"body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:0}}}}),Le=document.getElementById("root"),Te=B(Le);Te.render(t(R.StrictMode,{children:t($,{resetCSS:!1,theme:ze,children:t(Pe,{})})}));
