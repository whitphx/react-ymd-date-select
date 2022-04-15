import { useForm, Controller } from "react-hook-form";
import DateSelect from "../../lib/DateSelect";
import DateDropdown from "../../lib/presets/vanilla/DateDropdown";

type FormData = {
  date: string;
};

function VanillaReactHookFormWithOriginalRenderSample() {
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
            render={(props) => (
              <>
                <input
                  type="date"
                  value={props.dateValue || ""}
                  onChange={props.onDateChange}
                  ref={props.ref}
                />
                <DateDropdown {...props} />
              </>
            )}
          />
        )}
      />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default VanillaReactHookFormWithOriginalRenderSample;
