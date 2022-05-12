import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DateSelect, ChildComponentProps } from "react-ymd-date-select";
import { DateDropdownGroup } from "react-ymd-date-select/presets/vanilla";

// Creating a new component wrapped with `React.forwardRef` is necessary to use `ref` inside it.
const CustomDateSelect = React.forwardRef<
  HTMLInputElement,
  ChildComponentProps
>((props, ref) => {
  return (
    <>
      <input
        type="date"
        value={props.dateValue || ""}
        onChange={props.onDateChange}
        ref={ref}
      />
      <DateDropdownGroup {...props} />
    </>
  );
});
CustomDateSelect.displayName = "CustomDateSelect";

type FormData = {
  date: string;
};

function Sample() {
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
          <DateSelect
            {...field}
            render={(props) => <CustomDateSelect {...props} />}
          />
        )}
      />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default Sample;
