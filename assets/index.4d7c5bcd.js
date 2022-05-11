import"./modulepreload-polyfill.b7f2da20.js";import{j as e,i as t,R as n}from"./vendor.5ce835ef.js";import{C as a}from"./index.69b76d26.js";import"./DateSelect.441a108e.js";import"./use-date-select.61b1bfac.js";import"./DateSelect.d9ead660.js";import"./DateSelect.a3d90621.js";var o=`import { useState } from "react";
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
