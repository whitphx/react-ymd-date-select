import"./use-date-select.027e032e.js";import{j as e,g as t,R as n}from"./vendor.6ec624d3.js";import{C as a}from"./index.c5744835.js";import"./DateSelect.6766b2ed.js";import"./DateSelect.e5ae9e3c.js";import"./DateSelect.ce713bb4.js";var o=`import { useState } from "react";
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
`;function r(){return e(a,{initialCode:o,language:"tsx"})}const i=document.getElementById("root"),d=t(i);d.render(e(n.StrictMode,{children:e(r,{})}));
