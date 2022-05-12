import"./modulepreload-polyfill.b7f2da20.js";import{j as e,i as t,R as n}from"./vendor.bb11239e.js";import{C as a}from"./index.c72104b6.js";import"./DateSelect.c96bd86b.js";import"./use-date-select.392af991.js";import"./DateSelect.feb6bcf6.js";import"./DateSelect.d39a8478.js";var o=`import { useState } from "react";
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
