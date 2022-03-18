import { useCallback, useReducer } from "react";
import { compileDateString, parseDateString } from "./date-string";


interface DateSelectState {
  yearValue: string; // It's of type string because it's <select />'s value.
  monthValue: string; // It's of type string because it's <select />'s value.
  dayValue: string; // It's of type string because it's <select />'s value.
  dateString: string | null;
}

interface DateSelectActionBase {
  type: string;
}
interface SetDateAction extends DateSelectActionBase {
  type: "SET_DATE";
  year?: string;
  month?: string;
  day?: string;
}
type DateSelectAction = SetDateAction;
const dateSelectReducer: React.Reducer<DateSelectState, DateSelectAction> = (
  state,
  action
) => {
  let yearValue: string, monthValue: string, dayValue: string;
  switch (action.type) {
    case "SET_DATE": {  // TODO: `useState` is sufficient?
      yearValue = action.year || state.yearValue;
      monthValue = action.month || state.monthValue;
      dayValue = action.day || state.dayValue;
    }
  }

  return {
    yearValue,
    monthValue,
    dayValue,
    dateString: compileDateString(
      parseInt(yearValue),
      parseInt(monthValue),
      parseInt(dayValue)
    ),
  };
};


export const useDateSelect = () => {
  const [state, dispatch] = useReducer(dateSelectReducer, {
    yearValue: "",
    monthValue: "",
    dayValue: "",
    dateString: null,
  });

  return {
    state,
    onYearChange: useCallback((e: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch({ type: "SET_DATE", year: e.target.value }), []),
    onMonthChange: useCallback((e: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch({ type: "SET_DATE", month: e.target.value }), []),
    onDayChange: useCallback((e: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch({ type: "SET_DATE", day: e.target.value }), []),
    onDateChange: useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const { year, month, day } = parseDateString(e.target.value)
      dispatch({ type: "SET_DATE", year, month, day })
    }, [])
  };
};
