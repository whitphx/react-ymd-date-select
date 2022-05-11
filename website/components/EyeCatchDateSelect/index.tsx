import { useState } from "react";
import { Select } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useDateSelect } from "react-ymd-date-select";

const Container = styled.div`
  display: flex;

  & > div {
    margin: 0 4px;
    border-color: rgba(80, 80, 80, 0.4);

    & > select {
      background-color: #eee;
    }
  }
`;

function EyeCatchDateSelect() {
  const [date, setDate] = useState("");
  const dateSelect = useDateSelect(date, setDate, {
    defaultYear: "now",
    defaultMonth: "now",
    defaultDay: "now",
  });

  return (
    <Container>
      <Select value={dateSelect.yearValue} onChange={dateSelect.onYearChange}>
        <option value="" disabled></option>
        {dateSelect.yearOptions.map((yearOption) => (
          <option key={yearOption.value} value={yearOption.value}>
            {yearOption.label}
          </option>
        ))}
      </Select>
      <Select value={dateSelect.monthValue} onChange={dateSelect.onMonthChange}>
        <option value="" disabled></option>
        {dateSelect.monthOptions.map((monthOption) => (
          <option key={monthOption.value} value={monthOption.value}>
            {monthOption.label}
          </option>
        ))}
      </Select>
      <Select value={dateSelect.dayValue} onChange={dateSelect.onDayChange}>
        <option value="" disabled></option>
        {dateSelect.dayOptions.map((dayOption) => (
          <option key={dayOption.value} value={dayOption.value}>
            {dayOption.label}
          </option>
        ))}
      </Select>
    </Container>
  );
}

export default EyeCatchDateSelect;
