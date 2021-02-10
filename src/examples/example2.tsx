import { useForm } from "react-hook-form";

export const example2title = "2) Basic validation";

export const Example2 = () => {
  const { register, handleSubmit, errors } = useForm();

  /*
    Talk about:
        - howto add validation (inside `register`)
        - howto show errors (on "required: true")
            - take errors from `useForm()`
            - errors.name on bottom
        - different way to setup error message
            - put it instead of `true`
            - howto show error then
        - If validator needs more than a bool (example - min) to set it - you need `value` and `message`
        - NOTE that age validation won't trigger
            - if empty
            - if letters inside
            - show that `triggerSubmit` will be called with empty age
     */

  const triggerSubmit = (myData: any) => {
    // NOTE - this won't run if form has any errors
    console.log(myData);
  };

  return (
    <div>
      <h1>{example2title}</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>
          Name
          <input name="name" ref={register({ required: true })} />
        </div>
        <div>
          Surname
          <input
            name="surname"
            ref={register({
              required: "Surname is required",
            })}
          />
        </div>
        <div>
          Age
          <input
            name="age"
            ref={register({
              min: {
                value: 18,
                message: "You need to be an adult to enter this site",
              },
            })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      <div>
        {errors.name && <p>Name is required</p>}
        {errors.surname && <p>{errors.surname.message}</p>}
        {errors.age && <p>{errors.age.message}</p>}
      </div>
    </div>
  );
};
