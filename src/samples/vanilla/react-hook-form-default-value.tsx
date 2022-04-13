import { useForm, Controller } from "react-hook-form";
import DateSelect from "../../DateSelect";

type FormData = {
  date: string;
};

function VanillaReactHookFormWithDefaultValueSample() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      date: "1990-02-15"
    }
  });
  const onSubmit = (data: FormData) => console.log(data);

  console.log(watch("date")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <DateSelect {...field} />}
      />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default VanillaReactHookFormWithDefaultValueSample;
