import"./modulepreload-polyfill.b7f2da20.js";import{j as e,g as t,R as n}from"./vendor.9c094540.js";import{C as a}from"./index.43f4af3b.js";import"./DateSelect.dd918390.js";import"./use-date-select.d2e0ae07.js";import"./DateSelect.d34e8948.js";import"./DateSelect.70f8fab6.js";var o=`import { useState } from "react";
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
