import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DateSelect, ChildComponentProps } from "../../lib";
import { DateDropdownGroup } from "../../lib/presets/vanilla";

// Creating a new component wrapped with `React.forwardRef` is necessary to use `ref` inside it.
const CustomComponent = React.forwardRef<HTMLInputElement, ChildComponentProps>(
  (props, ref) => {
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
  }
);
CustomComponent.displayName = "CustomComponent";

type FormData = {
  date: string;
};

function VanillaReactHookFormWithReusedPresetComponentSample() {
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

export default VanillaReactHookFormWithReusedPresetComponentSample;
