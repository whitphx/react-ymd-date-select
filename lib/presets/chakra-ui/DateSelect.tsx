import DateDropdownGroup from "./DateDropdownGroup";
import Base, { DateSelectProps as BaseProps } from "../../DateSelect";

export interface DateSelectProps extends Omit<BaseProps, "render"> {
  hideDay?: boolean;
}

function DateSelect(props: DateSelectProps) {
  return (
    <Base
      {...props}
      defaultDay={
        props.defaultDay ? props.defaultDay : props.hideDay ? 1 : undefined
      }
      render={(renderProps) => (
        <DateDropdownGroup {...renderProps} hideDay={props.hideDay} />
      )}
    />
  );
}

export default DateSelect;
