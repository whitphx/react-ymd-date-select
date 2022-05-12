var O=Object.defineProperty;var w=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var D=(a,r,o)=>r in a?O(a,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[r]=o,u=(a,r)=>{for(var o in r||(r={}))V.call(r,o)&&D(a,o,r[o]);if(w)for(var o of w(r))P.call(r,o)&&D(a,o,r[o]);return a};import"./modulepreload-polyfill.b7f2da20.js";import{n as i,r as f,j as t,a as d,F as z,S,b as L,L as I,R as E,E as T,c as U,u as j,d as n,e as l,f as Y,g as B,h as $,i as A,C as G}from"./vendor.5ce835ef.js";import"./DateSelect.441a108e.js";import{g as N,u as q}from"./use-date-select.61b1bfac.js";import{C as p}from"./index.69b76d26.js";import"./DateSelect.d9ead660.js";import"./DateSelect.a3d90621.js";const W=i.code`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 5px;
  border: #ddd solid 1px;
  background: rgba(20, 20, 20, 0.4);
  color: #eee;

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`;function k(a){const r=f.exports.useRef(null),o=f.exports.useCallback(e=>{var m,h;if(e.detail!==2)return;const s=r.current;if(s==null)return;const c=new Range;c.setStart(s,0),c.setEnd(s,1),(m=document.getSelection())==null||m.removeAllRanges(),(h=document.getSelection())==null||h.addRange(c)},[]);return t(W,{ref:r,onClick:o,children:a.children})}const v="#be5f6f",x="#fcdfff",J=i.div`
  display: flex;

  & > div {
    margin: 0 4px;

    & > select {
      border-color: rgba(80, 80, 80, 0.4);

      &[aria-invalid="true"] {
        border-color: ${x};
        box-shadow: 0 0 0 1px ${x};
      }
    }
  }
`,X=N(new Date);function _(){const[a,r]=f.exports.useState(X||"2022-01-01"),o=q(a,r);return d(z,{isInvalid:a==="",children:[d(J,{children:[t(S,{value:o.yearValue,onChange:o.onYearChange,bg:"whiteAlpha.900",color:v,children:o.yearOptions.map(e=>t("option",{value:e.value,children:e.label},e.value))}),t(S,{value:o.monthValue,onChange:o.onMonthChange,bg:"whiteAlpha.900",color:v,children:o.monthOptions.map(e=>t("option",{value:e.value,children:e.label},e.value))}),t(S,{value:o.dayValue,onChange:o.onDayChange,bg:"whiteAlpha.900",color:v,children:o.dayOptions.map(e=>t("option",{value:e.value,children:e.label},e.value))})]}),t(L,{color:x,children:"Invalid date"})]})}const K=i.div`
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
    height: 240px;
  }
`,Q=i.div`
  text-align: center;
`,Z=i.h1`
  color: #efefef;
  text-transform: uppercase;
  display: block;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`,ee=i.h2`
  color: #efefef;
  display: block;
  font-size: 1em;
`,ne=i.div`
  z-index: 10;
  text-align: center;
  color: #eee;
`,te=i.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 16px auto 0;

  @media (max-width: 640px) {
    display: none;
  }
`,F=i.p`
  margin-bottom: 4px;
`,ae=i.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
`,oe=i.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: right;
`,re=i(I)`
  display: inline-flex;
  margin-top: 8px;
  color: #eee;
  align-items: center;
`,ie=i.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  mask: url(https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg)
    no-repeat center;
  background: #eee;
  margin-right: 8px;
`,le=i.span`
  padding-top: 2px;

  @media (max-width: 640px) {
    display: none;
  }
`,de=i.div`
  width: 100%;
  max-width: 360px;
  margin: 16px auto 0;
`;function ce(){return d(K,{children:[t(ae,{children:t(oe,{children:d(re,{href:"https://github.com/whitphx/react-ymd-date-select",isExternal:!0,children:[t(ie,{}),t(le,{children:"See on GitHub"})]})})}),d(Q,{children:[t(Z,{children:"react-ymd-date-select"}),t(ee,{children:"Hooks and components for Y-M-D dropdowns with React"})]}),d(ne,{children:[d(te,{children:[t(F,{children:t(k,{children:"npm install react-ymd-date-select"})}),t(F,{children:t(k,{children:"yarn add react-ymd-date-select"})})]}),t(de,{children:t(_,{})})]})]})}const se=i.div`
  margin: 32px auto;
  max-width: 960px;
  padding: 0 16px;
`;function pe(a){const r=a.children;if(!E.isValidElement(r))return t("pre",u({},a));const{className:o}=r.props,e=o==null?void 0:o.replace(/language-/,""),s=r.props.children.trim();return e==="jsx"||e==="tsx"?t(p,{initialCode:s,language:e}):t("pre",{children:t("code",{children:r})})}const he=i.code`
  margin: 0 2px;
  padding: 1px 4px;
  border-radius: 5px;
  border: #bbb solid 1px;
  background: rgba(210, 210, 210, 0.2);

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`,me=i.h1`
  font-size: 2rem;
  margin: 1.6rem 0 0.4rem;
`,ue=i.h2`
  font-size: 1.8rem;
  margin: 1.6rem 0 0.4rem;
`,C=i.h3`
  font-size: 1.6rem;
  margin: 1.6rem 0 0.4rem;
`,fe=i.h4`
  font-size: 1.4rem;
  margin: 1.6rem 0 0.4rem;
`;function ge(a){if(a==null)return!1;try{return new URL(a).origin!==window.location.origin}catch{return!1}}function Se(a){const r=ge(a.href);return d(I,{href:a.href,isExternal:r,children:[a.children,r&&t(T,{mx:"2px"})]})}const ve={pre:pe,code:a=>t(he,u({},a)),h1:a=>t(me,u({},a)),h2:a=>t(ue,u({},a)),h3:a=>t(C,u({},a)),h4:a=>t(fe,u({},a)),a:Se},xe=i.iframe`
  display: block;
  width: 100%;
`;function b(a){const[r,o]=f.exports.useState(),e=f.exports.useRef(null),s=f.exports.useCallback(c=>{e.current=c,c!=null&&(c.onload=()=>{var m,h,g;o((g=(h=(m=c.contentWindow)==null?void 0:m.document)==null?void 0:h.documentElement)==null?void 0:g.scrollHeight)})},[]);return f.exports.useEffect(()=>{const c=setInterval(()=>{var h,g,y;if(e.current==null)return;const m=e.current;o((y=(g=(h=m.contentWindow)==null?void 0:h.document)==null?void 0:g.documentElement)==null?void 0:y.scrollHeight)},200);return()=>{clearInterval(c)}},[]),t(xe,{ref:s,src:a.src,frameBorder:"0",height:r})}var Ce=`import { useState } from "react";
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
`,be=`import { useState } from "react";
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
`;const ye=i.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,we=i.div`
  overflow: auto;
  max-height: 300px;
`,De=i(U)`
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
`,ke=i.div`
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
`;const H=i.button`
  background: #ddd;
  border: #aaa 1px solid;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.4rem;
`;function M({code:a,language:r,children:o}){const[e,{on:s,off:c}]=j();return d(ye,{children:[t(ke,{children:o}),!e&&t(H,{onClick:s,children:"Show code"}),e&&t(we,{children:t(De,{value:a,language:r,readOnly:!0})}),e&&t(H,{onClick:c,children:"Hide code"})]})}const Fe=i.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,R=i.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;function He(){return t(b,{src:"./website/components/preset-samples/samples/vanilla/index.html"})}function Me(){return d(Fe,{children:[d(R,{children:[t(C,{children:"Chakra UI"}),t(M,{code:Ce,language:"tsx",children:t(b,{src:"./website/components/preset-samples/samples/chakra-ui/index.html"})})]}),d(R,{children:[t(C,{children:"Material UI"}),t(M,{code:be,language:"tsx",children:t(b,{src:"./website/components/preset-samples/samples/mui/index.html"})})]})]})}var Re=`import { useState } from "react";
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
`,Ie=`import { useForm, Controller } from "react-hook-form";
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
`,Ee=`import { Formik, Form, Field, FieldProps } from "formik";
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
`,Oe=`import { useState } from "react";
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
`,Ve=`import { useState } from "react";
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
`,Pe=`import { useState } from "react";
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
`,ze=`import { useState } from "react";
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
`,Le=`import React from "react";
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
`;function Te(a={}){const{wrapper:r}=a.components||{};return r?n(r,Object.assign({},a,{children:n(o,{})})):o();function o(){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3"},a.components);return l(Y,{children:[n(e.h2,{children:"Presets"}),`
`,l(e.p,{children:["It provides ready-to-use ",n(e.code,{children:"<DateSelect />"})," component for each UI library, exported from ",n(e.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,l(e.p,{children:[n(e.code,{children:"react-ymd-date-select/presets/vanilla"})," is a bare HTML version without styling."]}),`
`,n(He,{}),`
`,l(e.p,{children:[n(e.code,{children:"react-ymd-date-select/presets/(chakra-ui|mui)"})," is also available for ",n(e.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",n(e.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,n(Me,{}),`
`,n(e.h2,{children:"Hook for custom components"}),`
`,l(e.p,{children:["This library also provides ",n(e.code,{children:"useDateSelect"})," hook so that you can create original customized components."]}),`
`,`
`,n(p,{initialCode:Re,language:"tsx"}),`
`,n(e.h2,{children:"With form libraries"}),`
`,n(e.h3,{children:"React Hook Form"}),`
`,`
`,n(p,{initialCode:Ie,language:"tsx"}),`
`,l(e.p,{children:[`For the details about the usage with React Hook Form,
see `,n(e.a,{href:"https://react-hook-form.com/advanced-usage#ControlledmixedwithUncontrolledComponents",children:'the "Controlled mixed with Uncontrolled Components" section'}),` in the official document.
Since the date selector is a controlled component, we need to use the `,n(e.code,{children:"<Controller />"})," provided from React Hook Form as the example above."]}),`
`,n(e.h3,{children:"Formik"}),`
`,`
`,n(p,{initialCode:Ee,language:"tsx"}),`
`,l(e.p,{children:["Note that you have to use ",n(e.code,{children:"setFieldValue()"})," in the ",n(e.code,{children:"onChange"})," prop of ",n(e.code,{children:"<DateSelect />"})," instead of directly passing the ",n(e.code,{children:"field.onChange"}),` prop.
It is because `,n(e.code,{children:"<DateSelect />"}),"'s ",n(e.code,{children:"onChange"})," is called with a ",n(e.code,{children:"string"})," value but not with an event and it does not match Formik's ",n(e.code,{children:"onChange"}),"."]}),`
`,n(e.h2,{children:"The date string format"}),`
`,l(e.p,{children:["The ",n(e.code,{children:"value"})," prop and the argument of ",n(e.code,{children:"onChange()"})," are string formatted in ",n(e.code,{children:"yyyy-MM-DD"}),`,
which is ISO8601 format, and the same as `,l(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#value",children:["the value of the native ",n(e.code,{children:'<input type="date" />'})]}),`.
It's also `,n(e.a,{href:"https://tc39.es/ecma262/#sec-date-time-string-format",children:"the JavaScript standard date string format"}),"."]}),`
`,n(e.h2,{children:"Samples"}),`
`,n(e.h3,{children:"Setting default value to the state"}),`
`,`
`,n(p,{initialCode:Oe,language:"tsx"}),`
`,n(e.h3,{children:"Default values for year, month, and day"}),`
`,`
`,n(p,{initialCode:Ve,language:"tsx"}),`
`,l(e.p,{children:["You can set ",n(e.code,{children:"defaultYear"}),", ",n(e.code,{children:"defaultMonth"}),", and ",n(e.code,{children:"defaultDay"}),"."]}),`
`,l(e.p,{children:["Note that these props only set the default selection of the dropdown UI, but does not affects the state as ",n(e.code,{children:"onChange"})," is not called."]}),`
`,n(e.h3,{children:"Set the current date as the default values"}),`
`,`
`,n(p,{initialCode:Pe,language:"tsx"}),`
`,l(e.p,{children:["You can set ",n(e.code,{children:'"now"'})," to ",n(e.code,{children:"defaultYear"}),", ",n(e.code,{children:"defaultMonth"}),", and ",n(e.code,{children:"defaultDay"}),"."]}),`
`,n(e.h3,{children:"Hide day"}),`
`,`
`,n(p,{initialCode:ze,language:"tsx"}),`
`,l(e.p,{children:[n(e.code,{children:"hideDay"})," prop to hide the day select."]}),`
`,n(e.h3,{children:"A custom component wrapping the preset component"}),`
`,`
`,n(p,{initialCode:Le,language:"tsx"}),`
`,l(e.p,{children:["This example shows how to pass the ",n(e.code,{children:"ref"})," to the preset component and how to integrate it with React Hook Form, which uses the ",n(e.code,{children:"ref"}),"."]})]})}}function Ue(){return d(B,{children:[t(ce,{}),t(se,{children:t(Te,{components:ve})})]})}const je=$({styles:{global:{"*, *::before, &::after":{borderColor:null,wordWrap:null},html:{lineHeight:1.5},body:{position:"relative",minHeight:"100%",fontFeatureSettings:"kern"},"*, *::before, *::after":{boxSizing:"border-box"},"body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:0}}}}),Ye=document.getElementById("root"),Be=A(Ye);Be.render(t(E.StrictMode,{children:t(G,{resetCSS:!1,theme:je,children:t(Ue,{})})}));
