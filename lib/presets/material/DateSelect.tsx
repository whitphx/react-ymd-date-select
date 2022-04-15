import DateDropdownGroup from "./DateDropdownGroup";
import Base, { DateSelectProps as BaseProps } from "../../DateSelect";

export type DateSelectProps = Omit<BaseProps, "render">;

function DateSelect(props: DateSelectProps) {
  return <Base {...props} render={DateDropdownGroup} />;
}

export default DateSelect;
