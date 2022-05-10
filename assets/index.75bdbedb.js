import"./use-date-select.7a401f4d.js";import{j as e,g as t,R as n}from"./vendor.3cf90fc3.js";import{C as a}from"./index.ffb2bee8.js";import"./DateSelect.bcaa505c.js";import"./DateSelect.328ad6f5.js";import"./DateSelect.f2aff365.js";var o=`import { useState } from "react";
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
