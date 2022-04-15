import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import DateSelect from "../../lib/DateSelect";
import DateDropdownGroup from "../../lib/presets/chakra-ui/DateDropdownGroup";

type FormData = {
  date: string;
};

function ChakraUIReactHookFormSample() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  console.log(watch("date")); // watch input value by passing the name of it

  const isError = !!errors.date;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={isError}>
        <Controller
          name="date"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <DateSelect {...field} render={DateDropdownGroup} />
          )}
        />
        {!isError ? (
          <FormHelperText>Enter the date.</FormHelperText>
        ) : (
          <FormErrorMessage>This field is required.</FormErrorMessage>
        )}
      </FormControl>

      <input type="submit" />
    </form>
  );
}

export default ChakraUIReactHookFormSample;
