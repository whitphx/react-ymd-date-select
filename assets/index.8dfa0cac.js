var E=Object.defineProperty;var F=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var D=(a,r,o)=>r in a?E(a,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[r]=o,u=(a,r)=>{for(var o in r||(r={}))O.call(r,o)&&D(a,o,r[o]);if(F)for(var o of F(r))Y.call(r,o)&&D(a,o,r[o]);return a};import"./modulepreload-polyfill.b7f2da20.js";import{n as l,r as f,j as t,a as d,F as V,S as y,b as z,L as I,R,E as j,c as P,u as T,d as n,e as i,f as U,g as B,h as A,i as $,C as G}from"./vendor.dc3ff489.js";import"./DateSelect.b831c98c.js";import{g as N,u as q}from"./use-date-select.ef143c8e.js";import{C as s}from"./index.3f8abb8c.js";import"./DateSelect.e7c5aa11.js";import"./DateSelect.a460d2ce.js";const W=l.code`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 5px;
  border: #ddd solid 1px;
  background: rgba(20, 20, 20, 0.4);
  color: #eee;

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`;function w(a){const r=f.exports.useRef(null),o=f.exports.useCallback(e=>{var h,p;if(e.detail!==2)return;const m=r.current;if(m==null)return;const c=new Range;c.setStart(m,0),c.setEnd(m,1),(h=document.getSelection())==null||h.removeAllRanges(),(p=document.getSelection())==null||p.addRange(c)},[]);return t(W,{ref:r,onClick:o,children:a.children})}const S="#be5f6f",v="#fcdfff",J=l.div`
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
`,K=N(new Date);function X(){const[a,r]=f.exports.useState(K||"2022-01-01"),o=q(a,r,{monthFormat:"MMM"});return d(V,{isInvalid:a==="",children:[d(J,{children:[t(y,{value:o.yearValue,onChange:o.onYearChange,bg:"whiteAlpha.900",color:S,children:o.yearOptions.map(e=>t("option",{value:e.value,children:e.label},e.value))}),t(y,{value:o.monthValue,onChange:o.onMonthChange,bg:"whiteAlpha.900",color:S,children:o.monthOptions.map(e=>t("option",{value:e.value,children:e.label},e.value))}),t(y,{value:o.dayValue,onChange:o.onDayChange,bg:"whiteAlpha.900",color:S,children:o.dayOptions.map(e=>t("option",{value:e.value,children:e.label},e.value))})]}),t(z,{color:v,children:"Invalid date"})]})}const _=l.div`
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
`,Q=l.div`
  text-align: center;
`,Z=l.h1`
  color: #efefef;
  text-transform: uppercase;
  display: block;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`,ee=l.h2`
  color: #efefef;
  display: block;
  font-size: 1em;
`,ne=l.div`
  z-index: 10;
  text-align: center;
  color: #eee;
`,te=l.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 16px auto 0;

  @media (max-width: 640px) {
    display: none;
  }
`,k=l.p`
  margin-bottom: 4px;
`,ae=l.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
`,oe=l.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: right;
`,re=l(I)`
  display: inline-flex;
  margin-top: 8px;
  color: #eee;
  align-items: center;
`,le=l.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  mask: url(https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg)
    no-repeat center;
  background: #eee;
  margin-right: 8px;
`,ie=l.span`
  padding-top: 2px;

  @media (max-width: 640px) {
    display: none;
  }
`,de=l.div`
  width: 100%;
  max-width: 360px;
  margin: 16px auto 0;
`;function ce(){return d(_,{children:[t(ae,{children:t(oe,{children:d(re,{href:"https://github.com/whitphx/react-ymd-date-select",isExternal:!0,children:[t(le,{}),t(ie,{children:"See on GitHub"})]})})}),d(Q,{children:[t(Z,{children:"react-ymd-date-select"}),t(ee,{children:"Hooks and components for Y-M-D dropdowns with React"})]}),d(ne,{children:[d(te,{children:[t(k,{children:t(w,{children:"npm install react-ymd-date-select"})}),t(k,{children:t(w,{children:"yarn add react-ymd-date-select"})})]}),t(de,{children:t(X,{})})]})]})}const se=l.div`
  margin: 32px auto;
  max-width: 960px;
  padding: 0 16px;
`;function me(a){const r=a.children;if(!R.isValidElement(r))return t("pre",u({},a));const{className:o}=r.props,e=o==null?void 0:o.replace(/language-/,""),m=r.props.children.trim();return e==="jsx"||e==="tsx"?t(s,{initialCode:m,language:e}):t("pre",{children:t("code",{children:r})})}const pe=l.code`
  margin: 0 2px;
  padding: 1px 4px;
  border-radius: 5px;
  border: #bbb solid 1px;
  background: rgba(210, 210, 210, 0.2);

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`,he=l.h1`
  font-size: 2rem;
  margin: 1.6rem 0 0.4rem;
`,ue=l.h2`
  font-size: 1.8rem;
  margin: 1.6rem 0 0.4rem;
`,b=l.h3`
  font-size: 1.6rem;
  margin: 1.6rem 0 0.4rem;
`,fe=l.h4`
  font-size: 1.4rem;
  margin: 1.6rem 0 0.4rem;
`;function ge(a){if(a==null)return!1;try{return new URL(a).origin!==window.location.origin}catch{return!1}}function ye(a){const r=ge(a.href);return d(I,{href:a.href,isExternal:r,children:[a.children,r&&t(j,{mx:"2px"})]})}const Se={pre:me,code:a=>t(pe,u({},a)),h1:a=>t(he,u({},a)),h2:a=>t(ue,u({},a)),h3:a=>t(b,u({},a)),h4:a=>t(fe,u({},a)),a:ye},ve=l.iframe`
  display: block;
  width: 100%;
`;function x(a){const[r,o]=f.exports.useState(),e=f.exports.useRef(null),m=f.exports.useCallback(c=>{e.current=c,c!=null&&(c.onload=()=>{var h,p,g;o((g=(p=(h=c.contentWindow)==null?void 0:h.document)==null?void 0:p.documentElement)==null?void 0:g.scrollHeight)})},[]);return f.exports.useEffect(()=>{const c=setInterval(()=>{var p,g,C;if(e.current==null)return;const h=e.current;o((C=(g=(p=h.contentWindow)==null?void 0:p.document)==null?void 0:g.documentElement)==null?void 0:C.scrollHeight)},200);return()=>{clearInterval(c)}},[]),t(ve,{ref:m,src:a.src,frameBorder:"0",height:r})}var be=`import { useState } from "react";
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
`,xe=`import { useState } from "react";
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
`;const Ce=l.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`,Fe=l.div`
  overflow: auto;
  max-height: 300px;
`,De=l(P)`
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
`,we=l.div`
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
`;const M=l.button`
  background: #ddd;
  border: #aaa 1px solid;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.4rem;
`;function L({code:a,language:r,children:o}){const[e,{on:m,off:c}]=T();return d(Ce,{children:[t(we,{children:o}),!e&&t(M,{onClick:m,children:"Show code"}),e&&t(Fe,{children:t(De,{value:a,language:r,readOnly:!0})}),e&&t(M,{onClick:c,children:"Hide code"})]})}const ke=l.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,H=l.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;function Me(){return t(x,{src:"./website/components/preset-samples/samples/vanilla/index.html"})}function Le(){return d(ke,{children:[d(H,{children:[t(b,{children:"Chakra UI"}),t(L,{code:be,language:"tsx",children:t(x,{src:"./website/components/preset-samples/samples/chakra-ui/index.html"})})]}),d(H,{children:[t(b,{children:"Material UI"}),t(L,{code:xe,language:"tsx",children:t(x,{src:"./website/components/preset-samples/samples/mui/index.html"})})]})]})}var He=`import { useState } from "react";
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
`,Re=`import { Formik, Form, Field, FieldProps } from "formik";
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
`,Ee=`import { useState } from "react";
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
`,Oe=`import { useState } from "react";
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
`,Ye=`import { useState } from "react";
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
`,Ve=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

const yearFormats = ["y", "yo", "yy", "yyy", "yyyy", "yyyyy"] as const;
const monthFormats = [
  "M",
  "Mo",
  "MM",
  "MMM",
  "MMMM",
  "MMMMM",
  "L",
  "Lo",
  "LL",
  "LLL",
  "LLLL",
  "LLLLL",
] as const;
const dayFormats = ["d", "do", "dd"] as const;

type YearFormat = typeof yearFormats[number];
type MonthFormat = typeof monthFormats[number];
type DayFormat = typeof dayFormats[number];

function Sample() {
  const [yearFormat, setYearFormat] = useState<YearFormat>("y");
  const [monthFormat, setMonthFormat] = useState<MonthFormat>("M");
  const [dayFormat, setDayFormat] = useState<DayFormat>("d");

  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect
        value={date}
        onChange={setDate}
        yearFormat={yearFormat}
        monthFormat={monthFormat}
        dayFormat={dayFormat}
        defaultYear="now"
        defaultMonth="now"
        defaultDay="now"
      />
      <p>Selected date is: {date}</p>

      <div>
        <label>
          Year format:
          <select
            value={yearFormat}
            onChange={(e) => setYearFormat(e.target.value as YearFormat)}
          >
            {yearFormats.map((yearFormat) => (
              <option key={yearFormat} value={yearFormat}>
                {yearFormat}
              </option>
            ))}
          </select>
        </label>

        <label>
          Month format:
          <select
            value={monthFormat}
            onChange={(e) => setMonthFormat(e.target.value as MonthFormat)}
          >
            {monthFormats.map((monthFormat) => (
              <option key={monthFormat} value={monthFormat}>
                {monthFormat}
              </option>
            ))}
          </select>
        </label>

        <label>
          Day format:
          <select
            value={dayFormat}
            onChange={(e) => setDayFormat(e.target.value as DayFormat)}
          >
            {dayFormats.map((dayFormat) => (
              <option key={dayFormat} value={dayFormat}>
                {dayFormat}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

export default Sample;
`,ze=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";
import frLocale from "date-fns/locale/fr";
import ruLocale from "date-fns/locale/ru";
import deLocale from "date-fns/locale/de";
import enLocale from "date-fns/locale/en-US";
import jaLocale from "date-fns/locale/ja";

const localeMap = {
  en: enLocale,
  fr: frLocale,
  ru: ruLocale,
  de: deLocale,
  ja: jaLocale,
};

type LocaleKey = keyof typeof localeMap;

function Sample() {
  const [locale, setLocale] = useState<LocaleKey>("en");
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <div>
        <label>
          Locale:
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as LocaleKey)}
          >
            {Object.keys(localeMap).map((localeItem) => (
              <option key={localeItem} value={localeItem}>
                {localeItem}
              </option>
            ))}
          </select>
        </label>
      </div>

      <DateSelect
        value={date}
        onChange={setDate}
        locale={localeMap[locale]}
        monthFormat="MMM"
        defaultMonth="now"
      />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`,je=`import { useState } from "react";
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
`,Pe=`import React from "react";
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
`;function Te(a={}){const{wrapper:r}=a.components||{};return r?n(r,Object.assign({},a,{children:n(o,{})})):o();function o(){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3"},a.components);return i(U,{children:[n(e.h2,{children:"Presets"}),`
`,i(e.p,{children:["It provides ready-to-use ",n(e.code,{children:"<DateSelect />"})," component for each UI library, exported from ",n(e.code,{children:"react-ymd-date-select/presets/*"}),"."]}),`
`,i(e.p,{children:[n(e.code,{children:"react-ymd-date-select/presets/vanilla"})," is a bare HTML version without styling."]}),`
`,n(Me,{}),`
`,i(e.p,{children:[n(e.code,{children:"react-ymd-date-select/presets/(chakra-ui|mui)"})," is also available for ",n(e.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," and ",n(e.a,{href:"https://mui.com/",children:"Material UI"}),"."]}),`
`,n(Le,{}),`
`,n(e.h2,{children:"Hook for custom components"}),`
`,i(e.p,{children:["This library also provides ",n(e.code,{children:"useDateSelect"})," hook so that you can create original customized components."]}),`
`,`
`,n(s,{initialCode:He,language:"tsx"}),`
`,n(e.h2,{children:"With form libraries"}),`
`,n(e.h3,{children:"React Hook Form"}),`
`,`
`,n(s,{initialCode:Ie,language:"tsx"}),`
`,i(e.p,{children:[`For the details about the usage with React Hook Form,
see `,n(e.a,{href:"https://react-hook-form.com/advanced-usage#ControlledmixedwithUncontrolledComponents",children:'the "Controlled mixed with Uncontrolled Components" section'}),` in the official document.
Since the date selector is a controlled component, we need to use the `,n(e.code,{children:"<Controller />"})," provided from React Hook Form as the example above."]}),`
`,n(e.h3,{children:"Formik"}),`
`,`
`,n(s,{initialCode:Re,language:"tsx"}),`
`,i(e.p,{children:["Note that you have to use ",n(e.code,{children:"setFieldValue()"})," in the ",n(e.code,{children:"onChange"})," prop of ",n(e.code,{children:"<DateSelect />"})," instead of directly passing the ",n(e.code,{children:"field.onChange"}),` prop.
It is because `,n(e.code,{children:"<DateSelect />"}),"'s ",n(e.code,{children:"onChange"})," is called with a ",n(e.code,{children:"string"})," value but not with an event and it does not match Formik's ",n(e.code,{children:"onChange"}),"."]}),`
`,n(e.h2,{children:"The date string format"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"value"})," prop and the argument of ",n(e.code,{children:"onChange()"})," are string formatted in ",n(e.code,{children:"yyyy-MM-DD"}),`,
which is ISO8601 format, and the same as `,i(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#value",children:["the value of the native ",n(e.code,{children:'<input type="date" />'})]}),`.
It's also `,n(e.a,{href:"https://tc39.es/ecma262/#sec-date-time-string-format",children:"the JavaScript standard date string format"}),"."]}),`
`,n(e.h2,{children:"Samples"}),`
`,n(e.h3,{children:"Setting default value to the state"}),`
`,`
`,n(s,{initialCode:Ee,language:"tsx"}),`
`,n(e.h3,{children:"Default values for year, month, and day"}),`
`,`
`,n(s,{initialCode:Oe,language:"tsx"}),`
`,i(e.p,{children:["You can set ",n(e.code,{children:"defaultYear"}),", ",n(e.code,{children:"defaultMonth"}),", and ",n(e.code,{children:"defaultDay"}),"."]}),`
`,i(e.p,{children:["Note that these props only set the default selection of the dropdown UI, but does not affects the state as ",n(e.code,{children:"onChange"})," is not called."]}),`
`,n(e.h3,{children:"Set the current date as the default values"}),`
`,`
`,n(s,{initialCode:Ye,language:"tsx"}),`
`,i(e.p,{children:["You can set ",n(e.code,{children:'"now"'})," to ",n(e.code,{children:"defaultYear"}),", ",n(e.code,{children:"defaultMonth"}),", and ",n(e.code,{children:"defaultDay"}),"."]}),`
`,n(e.h3,{children:"Format"}),`
`,`
`,n(s,{initialCode:Ve,language:"tsx"}),`
`,i(e.p,{children:["You can control the format through ",n(e.code,{children:"yearFormat"}),", ",n(e.code,{children:"monthFormat"}),", and ",n(e.code,{children:"dayFormat"})," props."]}),`
`,i(e.p,{children:["As ",n(e.code,{children:"date-fns/format"}),` is internally used to format the date string, so you can set its formatting options.
See `,i(e.a,{href:"https://date-fns.org/v2.28.0/docs/format",children:["the document of ",n(e.code,{children:"date-fns/format"})]})," about the available options."]}),`
`,n(e.h3,{children:"Localization"}),`
`,`
`,n(s,{initialCode:ze,language:"tsx"}),`
`,i(e.p,{children:["You can use the ",n(e.code,{children:"locale"})," prop to control the locale used at formatting."]}),`
`,i(e.p,{children:["As ",n(e.code,{children:"date-fns/format"})," is internally used to format the date string, its locale object can be passed."]}),`
`,n(e.h3,{children:"Hide day"}),`
`,`
`,n(s,{initialCode:je,language:"tsx"}),`
`,i(e.p,{children:["Set ",n(e.code,{children:"hideDay"})," prop as true to hide the day select."]}),`
`,n(e.h3,{children:"A custom component wrapping the preset component"}),`
`,`
`,n(s,{initialCode:Pe,language:"tsx"}),`
`,i(e.p,{children:["This example shows how to pass the ",n(e.code,{children:"ref"})," to the preset component and how to integrate it with React Hook Form, which uses the ",n(e.code,{children:"ref"}),"."]})]})}}function Ue(){return d(B,{children:[t(ce,{}),t(se,{children:t(Te,{components:Se})})]})}const Be=A({styles:{global:{"*, *::before, &::after":{borderColor:null,wordWrap:null},html:{lineHeight:1.5},body:{position:"relative",minHeight:"100%",fontFeatureSettings:"kern"},"*, *::before, *::after":{boxSizing:"border-box"},"body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:0}}}}),Ae=document.getElementById("root"),$e=$(Ae);$e.render(t(R.StrictMode,{children:t(G,{resetCSS:!1,theme:Be,children:t(Ue,{})})}));
