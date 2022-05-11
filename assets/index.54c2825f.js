import"./modulepreload-polyfill.b7f2da20.js";import{j as e,g as t,R as n}from"./vendor.9c094540.js";import{C as a}from"./index.1d3871c0.js";import"./DateSelect.6160f698.js";import"./use-date-select.f3a79916.js";import"./DateSelect.62828fdc.js";import"./DateSelect.5e2039ea.js";var o=`import { useState } from "react";
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
