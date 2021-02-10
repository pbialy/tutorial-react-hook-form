import React from "react";
import { useForm } from "react-hook-form";

import debounce from "debounce";

export const example8title = "8) Async validator";

export const Example8 = () => {
  /*
      Talk about:
        - We want to check if the name of the shop is taken WHILE inputting
        - Looks like async validator only runs if normal validators are fine
        - when field empty - async runs (add === '' check)
        - problem - there's no debounce/throttle
      */

  // const { register, handleSubmit, errors } = useForm({
  //   mode: "onChange",
  //   reValidateMode: "onChange",
  // });
  const { register, handleSubmit, errors, trigger } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  const [showLoader, setShowLoader] = React.useState(false);

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
                isNameTaken: async (value) => {
                  // if (value === "") {
                  //   return true;
                  // }

                  setShowLoader(true);
                  const isTaken = await checkIfNameTaken(value);
                  setShowLoader(false);

                  if (isTaken) {
                    return `Sorry, name ${value} is already taken.`;
                  } else {
                    return true;
                  }
                },
              },
            })}
            onChange={debounce(async () => {
              await trigger("shopName");
            }, 200)}
          />
          {showLoader && (
            <div style={{ color: "#441" }}>Checking if name is taken...</div>
          )}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      {errors.shopName && (
        <p style={{ color: "red" }}>{errors.shopName.message}</p>
      )}
      <br />

      {console.log(errors)}
    </div>
  );
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkIfNameTaken(name: string) {
  console.log("checkIfNameTaken called");
  await sleep(2000);
  if (name === "Nykredit" || name === "Empik") {
    return true;
  } else {
    return false;
  }
}
