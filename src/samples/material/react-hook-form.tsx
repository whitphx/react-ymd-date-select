import { useForm, Controller } from "react-hook-form";
import DateSelect from "../../react-date-select/DateSelect";
import DateDropdown from "../../react-date-select/presets/material/DateDropdown";

type FormData = {
  date: string;
};

function MaterialUIReactHookFormSample() {
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
        render={({ field }) => <DateSelect {...field} render={DateDropdown} />}
      />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default MaterialUIReactHookFormSample;
