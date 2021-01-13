import { useForm } from "react-hook-form";

export const Example6 = () => {
  // const { register, handleSubmit, errors } = useForm();

  // This is the default one
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  // const { register, handleSubmit, errors } = useForm({
  //   mode: "onChange",
  //   reValidateMode: "onChange",
  // });

  // const { register, handleSubmit, errors } = useForm({
  //   mode: "onSubmit",
  //   reValidateMode: "onSubmit",
  // });

  // const { register, handleSubmit, errors } = useForm({
  //   mode: "onBlur",
  //   reValidateMode: "onBlur",
  // });

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  /*
          Talk about:
          - The default validation is on "change", but it only triggers after first submit
          - default on is `mode: "onSubmit", reValidateMode: "onChange"`
          - mode - when 1st validation occurs, reValidateMode - when next validations occurs
          - show the onChange/onChange, onSubmit/onSubmit and onBlur/onBlur versions
          */
  return (
    <div>
      <h1>6) Validate on submit/blur/change</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>
          minimum 6 chars
          <input
            name="min6chars"
            ref={register({
              minLength: { value: 6, message: "Min length is 6" },
            })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      {errors.min6chars && <p>{errors.min6chars.message}</p>}

      <br />

      {console.log(errors)}
    </div>
  );
};
