import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DateSelect, Options } from "../../lib";

interface CustomComponentProps {
  yearValue: string;
  monthValue: string;
  dayValue: string;
  yearOptions: Options;
  monthOptions: Options;
  dayOptions: Options;
  onYearChange: React.ChangeEventHandler<HTMLSelectElement>;
  onMonthChange: React.ChangeEventHandler<HTMLSelectElement>;
  onDayChange: React.ChangeEventHandler<HTMLSelectElement>;
  dateValue: string | null;
  onDateChange: React.ChangeEventHandler<HTMLInputElement>;
}
const CustomComponent = React.forwardRef<
  HTMLInputElement,
  CustomComponentProps
>((props, ref) => {
  return (
    <>
      <input
        type="date"
        value={props.dateValue || ""}
        onChange={props.onDateChange}
        ref={ref}
      />
      <label>
        Year
        <select value={props.yearValue} onChange={props.onYearChange}>
          <option value="" disabled></option>
          {props.yearOptions.map((yearOption) => (
            <option key={yearOption.value} value={yearOption.value}>
              {yearOption.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Month
        <select value={props.monthValue} onChange={props.onMonthChange}>
          <option value="" disabled></option>
          {props.monthOptions.map((monthOption) => (
            <option key={monthOption.value} value={monthOption.value}>
              {monthOption.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Day
        <select value={props.dayValue} onChange={props.onDayChange}>
          <option value="" disabled></option>
          {props.dayOptions.map((dayOption) => (
            <option key={dayOption.value} value={dayOption.value}>
              {dayOption.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
});
CustomComponent.displayName = "CustomComponent";

type FormData = {
  date: string;
};

function VanillaReactHookFormWithCustomComponentSample() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  console.log(watch("date")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <DateSelect {...field} component={CustomComponent} />
        )}
      />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default VanillaReactHookFormWithCustomComponentSample;
