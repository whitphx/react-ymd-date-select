import { useState } from "react";
import { useDateSelect } from "react-ymd-date-select";

interface CustomDateSelectProps {
  onChange: (value: string) => void;
  value: string;
}
function CustomDateSelect(props: CustomDateSelectProps) {
  const dateSelect = useDateSelect(props.value, props.onChange);

  return (
    <>
      <input
        type="date"
        value={dateSelect.dateValue || ""}
        onChange={dateSelect.onDateChange}
      />
      <label>
        Year
        <select value={dateSelect.yearValue} onChange={dateSelect.onYearChange}>
          <option value="" disabled></option>
          {dateSelect.yearOptions.map((yearOption) => (
            <option key={yearOption.value} value={yearOption.value}>
              {yearOption.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Month
        <select
          value={dateSelect.monthValue}
          onChange={dateSelect.onMonthChange}
        >
          <option value="" disabled></option>
          {dateSelect.monthOptions.map((monthOption) => (
            <option key={monthOption.value} value={monthOption.value}>
              {monthOption.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Day
        <select value={dateSelect.dayValue} onChange={dateSelect.onDayChange}>
          <option value="" disabled></option>
          {dateSelect.dayOptions.map((dayOption) => (
            <option key={dayOption.value} value={dayOption.value}>
              {dayOption.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

function Sample() {
  const [date, setDate] = useState("");

  return (
    <div>
      <CustomDateSelect value={date} onChange={setDate} />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
