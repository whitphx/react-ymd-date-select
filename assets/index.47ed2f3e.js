import{j as e,c as t,R as n}from"./jsx-runtime.2f4bb9f3.js";import{C as o}from"./index.54870ccb.js";import"./DateSelect.0639770c.js";import"./emotion-styled.browser.esm.e0d2f2cb.js";import"./use-date-select.aeab0953.js";import"./index.esm.d3e0aa34.js";import"./DateSelect.4aeb2ff8.js";import"./DateSelect.640ea876.js";var a=`import { useState } from "react";
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
`;function r(){return e(o,{initialCode:a,language:"tsx"})}const i=document.getElementById("root"),m=t(i);m.render(e(n.StrictMode,{children:e(r,{})}));
