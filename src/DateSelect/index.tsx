import React, { useState, useCallback } from "react";

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;
interface DateSelectProps extends HTMLInputProps {}

const DateSelect = React.forwardRef<HTMLInputElement, DateSelectProps>(
  (props, ref) => {
    const { onChange, ...restProps } = props;

    const [value, setValue] = useState("");
    const handleChange = useCallback<NonNullable<HTMLInputProps["onChange"]>>(
      (e) => {
        setValue(e.target.value);

        if (onChange) {
          onChange(e);
        }
      },
      [onChange]
    );

    return (
      <input
        type="date"
        ref={ref}
        {...restProps}
        value={value}
        onChange={handleChange}
      />
    );
  }
);

export default DateSelect;
