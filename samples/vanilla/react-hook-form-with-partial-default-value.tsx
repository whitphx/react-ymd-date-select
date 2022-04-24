import { useForm, Controller } from "react-hook-form";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";

type FormData = {
  date: string;
};

function VanillaReactHookFormWithPartialDefaultValueSample() {
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
        render={({ field }) => <DateSelect {...field} defaultYear={2000} />}
      />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default VanillaReactHookFormWithPartialDefaultValueSample;
