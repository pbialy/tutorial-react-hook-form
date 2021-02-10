import { useForm } from "react-hook-form";

export const example3title = "3) Regex validation";

export const Example3 = () => {
  const { register, handleSubmit, errors } = useForm();

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  /*
    Talk about:
    Regex validation - use `pattern`.

    */
  return (
    <div>
      <h1>{example3title}</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>
          Only numbers
          <input name="onlyNumbers" ref={register({ pattern: /^[0-9]+$/ })} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      <div>{errors.onlyNumbers && <p>Only digits allowed</p>}</div>
    </div>
  );
};
