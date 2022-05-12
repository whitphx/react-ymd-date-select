import"./modulepreload-polyfill.b7f2da20.js";import{j as e,i as t,R as n}from"./vendor.dc3ff489.js";import{C as a}from"./index.3f8abb8c.js";import"./DateSelect.b831c98c.js";import"./use-date-select.ef143c8e.js";import"./DateSelect.e7c5aa11.js";import"./DateSelect.a460d2ce.js";var o=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

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
`;function r(){return e(a,{initialCode:o,language:"tsx"})}const i=document.getElementById("root"),m=t(i);m.render(e(n.StrictMode,{children:e(r,{})}));
