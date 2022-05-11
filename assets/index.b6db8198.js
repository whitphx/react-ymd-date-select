import"./modulepreload-polyfill.b7f2da20.js";import{j as e,i as t,R as n}from"./vendor.5ce835ef.js";import{C as a}from"./index.54bef892.js";import"./DateSelect.2a4f74a3.js";import"./use-date-select.08b3d756.js";import"./DateSelect.eb0fb757.js";import"./DateSelect.13dd3b04.js";var o=`import { useState } from "react";
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
