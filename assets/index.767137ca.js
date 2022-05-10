import"./use-date-select.bed0db3f.js";import{j as e,d as t,R as n}from"./vendor.d3e3c2a5.js";import{C as a}from"./index.7293aaab.js";import"./DateSelect.50fcf4e4.js";import"./DateSelect.ac5aaf31.js";import"./DateSelect.1b3361da.js";var o=`import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
`;function r(){return e(a,{initialCode:o,language:"tsx"})}const i=document.getElementById("root"),d=t(i);d.render(e(n.StrictMode,{children:e(r,{})}));
