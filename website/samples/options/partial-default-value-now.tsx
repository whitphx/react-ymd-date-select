import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

function Sample() {
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect value={date} onChange={setDate} defaultYear="now" />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
