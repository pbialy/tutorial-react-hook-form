import { useForm } from "react-hook-form";

// const ERRORS_ORDER = ["pattern", "minLength"];

export const example5title = "5) Validation order";

export const Example5 = () => {
  const { register, handleSubmit, errors } = useForm();

  // The default one:
  // const { register, handleSubmit, errors } = useForm({
  //   criteriaMode: "firstError",
  // });

  // const { register, handleSubmit, errors } = useForm({
  //   criteriaMode: "all",
  // });

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  // const getPrioritizedError = (): string => {
  //   if (!errors || !errors.min4digits) {
  //     return "";
  //   }
  //
  //   const firstErrorCode = ERRORS_ORDER.find((errorCode) => {
  //     return Object.keys(errors.min4digits.types).includes(errorCode);
  //   });
  //   return firstErrorCode ? errors.min4digits.types[firstErrorCode] : "";
  // };

  /*
        Talk about:
          - we have 2 validators
          - if I input "2s" I get "Min length is 4" error, but that's not the main problem.
            to fix this i just need to type to more chars, but then I'll know that "s" was wrong, so I need to go back.
            Instead I should see "Only digits" right after I press "s"
          - changing the order doesn't work (show it)
          - `errors` object stores only 1 error (show `console.log(errors)`)
          - you can set `criteriaMode` to "all"
          - then `console.log(errors)` will have all errors in `types` (show it)
          - you need to write your own error getter then (show "getPrioritizedError")
          - Keep in mind that it's not actually "5) Validation order" (all validators runs, no matter the result),
            it's more "5) Validation's errors order)
        */
  return (
    <div>
      <h1>{example5title}</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>
          Number with minimum 4 digits
          <input
            name="min4digits"
            ref={register({
              minLength: { value: 4, message: "Min length is 4" },
              pattern: { value: /^[0-9]+$/, message: "Only digits" },
            })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      {errors.min4digits && <p>{errors.min4digits.message}</p>}

      <br />

      {/*{getPrioritizedError()}*/}

      {console.log(errors)}
    </div>
  );
};
