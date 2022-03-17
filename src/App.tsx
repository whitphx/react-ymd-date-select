import { useForm } from "react-hook-form";
import DateSelect from "./DateSelect";

type FormData = {
  date: string;
};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  console.log(watch("date")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DateSelect {...register("date", { required: true })} />
      {errors.date && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default App;
