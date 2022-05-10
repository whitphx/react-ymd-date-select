import"./modulepreload-polyfill.b7f2da20.js";import{j as e,g as t,R as n}from"./vendor.6ec624d3.js";import{C as a}from"./index.11ce0c9e.js";import"./DateSelect.4b261789.js";import"./use-date-select.9d400971.js";import"./DateSelect.3578c347.js";import"./DateSelect.52e76da9.js";var o=`import { useState } from "react";
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
