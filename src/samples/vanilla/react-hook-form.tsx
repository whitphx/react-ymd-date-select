import { useForm, Controller } from "react-hook-form";
import DateSelect from "../../DateSelect/DateSelect";
import DateDropdown from "../../DateSelect/presets/vanilla/DateDropdown";

type FormData = {
  date: string;
};

function VanillaReactHookFormSample() {
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

export default VanillaReactHookFormSample;
