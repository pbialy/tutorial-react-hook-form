import { useForm } from "react-hook-form";

export const Example5 = () => {
  const { register, handleSubmit, errors } = useForm();

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  /*
        Talk about:
          - we have 2 validators
          - if I input "2s" I get "Min length is 4" error, but that's not the main problem.
            to fix this i just need to type to more chars, but then I'll know that "s" was wrong, so I need to go back.
            Instead I should see "Only digits" right after I press "s"
          - changing the order doesn't work (show it)
          - `errors` object stores only 1 error (show `console.log(errors)`)
          - ??? no idea :( ???
        */
  return (
    <div>
      <h1>5) Validation order</h1>

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

      {console.log(errors)}
    </div>
  );
};
