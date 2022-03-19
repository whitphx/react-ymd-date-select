import { useForm, Controller } from "react-hook-form";
import { ChakraProvider } from "@chakra-ui/react";
import DateSelect from "../../DateSelect/DateSelect";
import DateDropdown from "../../DateSelect/presets/chakra-ui/DateDropdown";

type FormData = {
  date: string;
};

function App() {
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

function ChakraUIReactHookFormSample() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}

export default ChakraUIReactHookFormSample;
