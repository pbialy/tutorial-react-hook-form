import React from "react";
import { useForm } from "react-hook-form";

export const example9title = "9) Async validator with custom debounce";

const wasSomethingTypedArray: number[] = [];

export const Example9 = () => {
  /*
        Talk about:
          - We want to check if the name of the shop is taken WHILE inputting
          - Looks like async validator only runs if normal validators are fine
          - when field empty - async runs (add === '' check)
          - problem - there's no debounce/throttle build in reactHookForms, and I haven't found a way around
        */

  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  const [showLoader, setShowLoader] = React.useState(false);

  const nameChecker = async (value: string) => {
    wasSomethingTypedArray.push(Math.random()); // show that a char was typed, and thus validation and this function were fired

    console.log("before sleep - ", wasSomethingTypedArray.length);
    await sleep(500); // this is the debounce timer - 0.5 second

    wasSomethingTypedArray.pop(); // after this 0.5 we remove key stroke from array
    console.log("after pop - ", wasSomethingTypedArray.length);
    if (wasSomethingTypedArray.length === 0) {
      // and check if there are no additional keystrokes
      setShowLoader(true); // if no - we show the loader

      const isTaken = await checkIfNameTaken(value); // and trigger backend request
      setShowLoader(false); // we can remove the loader

      console.log("after response ", wasSomethingTypedArray.length);
      if (wasSomethingTypedArray.length === 0) {
        // when response come and there were no more keystrokes in the meantime

        if (isTaken) {
          // and show the error message if needed
          return `Sorry, name ${value} is already taken.`;
        } else {
          return true;
        }
      }
      return true; // this is to prevent showing errors during loading
    }
    return true; // this is to prevent showing errors during typing
  };

  return (
    <div>
      <h1>{example9title}</h1>

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
                  return await nameChecker(value);
                },
              },
            })}
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

      {/*{console.log(errors)}*/}
    </div>
  );
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkIfNameTaken(name: string) {
  await sleep(2000);
  if (name === "Nykredit" || name === "Empik") {
    return true;
  } else {
    return false;
  }
}
