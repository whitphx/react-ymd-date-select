import React from "react";

interface DateSelectProps extends React.HTMLProps<HTMLInputElement> {}

const DateSelect = React.forwardRef<HTMLInputElement, DateSelectProps>(
  (props, ref) => {
    return <input type="text" ref={ref} {...props} />;
  }
);

export default DateSelect;
