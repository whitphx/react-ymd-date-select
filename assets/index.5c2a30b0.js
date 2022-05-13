import"./modulepreload-polyfill.b7f2da20.js";import{j as e,i as t,R as n}from"./vendor.bb11239e.js";import{C as a}from"./index.f326d9ab.js";import"./DateSelect.6ca21455.js";import"./use-date-select.b6e49b91.js";import"./DateSelect.0c9988ff.js";import"./DateSelect.9834434a.js";var o=`import { useState } from "react";
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
