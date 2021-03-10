import React from "react";
import { useForm } from "react-hook-form";

export const example9title = "9) Async validator with custom debounce";

const wasSomethingTypedArray: true[] = [];

export const Example9 = () => {
  /*
        Talk about:
          - I've created a custom debounce method - basically everytime key is stroked we push something to an array,
            then if array is empty after 0.5second - trigger backend request
          - show that it:
            - start loading after 0.5sec of no typing
            - show error if needed
            - if request is triggered but additional things are typed - no error is shown (type 'Nykredit' and start typing after loading)
          - important thing - if `wasSomethingTypedArray` is defined inside component it won't work (because
            it resets every render)
          - this "nameChecker" could be put outside of component too (just pass `setShowLoader` to it),
            I've left it here only to show the thing from point above
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
    // don't trigger request on empty value
    if (value === "") {
      return true;
    }

    wasSomethingTypedArray.push(true); // show that a char was typed, and thus validation and this function were fired

    // console.log("before sleep - ", wasSomethingTypedArray.length);
    await sleep(500); // this is the debounce timer - 0.5 second

    wasSomethingTypedArray.pop(); // after this 0.5 we remove key stroke from array
    // console.log("after pop - ", wasSomethingTypedArray.length);

    // and check if there were no additional keystrokes
    if (wasSomethingTypedArray.length === 0) {
      setShowLoader(true); // if no - we show the loader

      const isTaken = await checkIfNameTaken(value); // and trigger backend request
      setShowLoader(false); // we can remove the loader

      // console.log("after response ", wasSomethingTypedArray.length);
      if (wasSomethingTypedArray.length === 0) {
        // when response come and there were no more keystrokes in the meantime

        // and show the error message if needed
        if (isTaken) {
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
                  // return await nameChecker(value, setShowLoader);
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

// const nameChecker = async (value: string, setShowLoader: any) => {
//   if (value === "") {
//     return true;
//   }
//
//   wasSomethingTypedArray.push(true);
//   await sleep(500);
//   wasSomethingTypedArray.pop();
//
//   if (wasSomethingTypedArray.length === 0) {
//     setShowLoader(true);
//
//     const isTaken = await checkIfNameTaken(value);
//     setShowLoader(false);
//
//     if (wasSomethingTypedArray.length === 0) {
//       if (isTaken) {
//         return `Sorry, name ${value} is already taken.`;
//       } else {
//         return true;
//       }
//     }
//     return true;
//   }
//   return true;
// };
