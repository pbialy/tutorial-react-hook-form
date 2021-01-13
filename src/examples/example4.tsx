import { useForm } from "react-hook-form";

export const Example4 = () => {
  const { register, handleSubmit, errors } = useForm();

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  /*
      Talk about:
        - we can add multiple validators for single input
        - show all 3 errors in browser
      */
  return (
    <div>
      <h1>4) Multiple validators</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>
          Number lower than 77 <span style={{ color: "red" }}>(*)</span>
          <input
            name="multiValidationInput"
            ref={register({
              required: "This field is required",
              max: { value: 77, message: "Lower than 77" },
              pattern: { value: /^[0-9]+$/, message: "Only digits" },
            })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      {errors.multiValidationInput && (
        <p>{errors.multiValidationInput.message}</p>
      )}
    </div>
  );
};
