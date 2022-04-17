import React from "react";
import DateDropdownGroup from "./DateDropdownGroup";
import Base, { DateSelectProps as BaseProps } from "../../DateSelect";

export interface DateSelectProps extends Omit<BaseProps, "render"> {
  hideDay?: boolean;
}

const DateSelect = React.forwardRef<unknown, DateSelectProps>((props, ref) => {
  return (
    <Base
      {...props}
      defaultDay={
        props.defaultDay ? props.defaultDay : props.hideDay ? 1 : undefined
      }
      ref={ref}
      render={({ ref, ...renderProps }) => (
        <DateDropdownGroup {...renderProps} hideDay={props.hideDay} />
      )}
    />
  );
});
DateSelect.displayName = "DateSelect";

export default DateSelect;
