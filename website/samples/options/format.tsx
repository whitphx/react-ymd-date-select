import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

const yearFormats = ["y", "yo", "yy", "yyy", "yyyy", "yyyyy"] as const;
const monthFormats = [
  "M",
  "Mo",
  "MM",
  "MMM",
  "MMMM",
  "MMMMM",
  "L",
  "Lo",
  "LL",
  "LLL",
  "LLLL",
  "LLLLL",
] as const;
const dayFormats = ["d", "do", "dd"] as const;

type YearFormat = typeof yearFormats[number];
type MonthFormat = typeof monthFormats[number];
type DayFormat = typeof dayFormats[number];

function Sample() {
  const [yearFormat, setYearFormat] = useState<YearFormat>("yy");
  const [monthFormat, setMonthFormat] = useState<MonthFormat>("MMMM");
  const [dayFormat, setDayFormat] = useState<DayFormat>("do");

  const [date, setDate] = useState<string>("");

  return (
    <div>
      <DateSelect
        value={date}
        onChange={setDate}
        yearFormat={yearFormat}
        monthFormat={monthFormat}
        dayFormat={dayFormat}
        defaultYear="now"
        defaultMonth="now"
        defaultDay="now"
      />
      <p>Selected date is: {date}</p>

      <div>
        <label>
          Year format:
          <select
            value={yearFormat}
            onChange={(e) => setYearFormat(e.target.value as YearFormat)}
          >
            {yearFormats.map((yearFormat) => (
              <option key={yearFormat} value={yearFormat}>
                {yearFormat}
              </option>
            ))}
          </select>
        </label>

        <label>
          Month format:
          <select
            value={monthFormat}
            onChange={(e) => setMonthFormat(e.target.value as MonthFormat)}
          >
            {monthFormats.map((monthFormat) => (
              <option key={monthFormat} value={monthFormat}>
                {monthFormat}
              </option>
            ))}
          </select>
        </label>

        <label>
          Day format:
          <select
            value={dayFormat}
            onChange={(e) => setDayFormat(e.target.value as DayFormat)}
          >
            {dayFormats.map((dayFormat) => (
              <option key={dayFormat} value={dayFormat}>
                {dayFormat}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

export default Sample;
