import { useForm } from "react-hook-form";

export const example8title = "8) Async validator";

async function checkIfNameTaken(name: string) {
  setTimeout(() => {
    if (name === "Nykredit" || name === "Empik") {
      return true;
    } else {
      return false;
    }
  }, 2000);
}

export const Example8 = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  return (
    <div>
      <h1>{example8title}</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>
          Enter your shop name
          <input
            name="shopName"
            ref={register({
              minLength: {
                value: 3,
                message: "Shop's name must have at least 3 letters",
              },
              validate: {
                asyncValidate: (value) => {
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

      {errors.shopName && <p>{errors.shopName.message}</p>}
      <br />

      {console.log(errors)}
    </div>
  );
};
