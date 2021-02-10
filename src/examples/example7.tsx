import { useForm } from "react-hook-form";

export const example7title = "7) Custom validator";

export const Example7 = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  /*
    Talk about:
        - basic custom validator - example on "onlyEven"
        - we can't add error in "message" key (uncomment and show that it doesn't work)
        - instead we can adjust what we return in function (show on `onlyOdd`)
    */
  return (
    <div>
      <h1>{example7title}</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>
          <span style={{ color: "#727" }}>Only even numbers</span>
          <input
            name="onlyEven"
            ref={register({
              validate: (value) => value % 2 === 0,
              // validate: {
              //     value:(value) => value % 2 === 0,
              //     message: 'this doesn`t work :('
              // }
            })}
          />
        </div>
        <div>
          <span style={{ color: "#277" }}>Only odd numbers </span>
          <input
            name="onlyOdd"
            ref={register({
              validate: {
                value: (value) => {
                  if (value % 2 === 1) {
                    return true;
                  } else {
                    return "Only numbers NOT divisible by 2";
                  }
                },
              },
            })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      {errors.onlyEven && (
        <p style={{ color: "#727" }}>Only numbers divisible by 2</p>
      )}
      {errors.onlyOdd && (
        <p style={{ color: "#277" }}>{errors.onlyOdd.message}</p>
      )}

      <br />

      {console.log(errors)}
    </div>
  );
};
