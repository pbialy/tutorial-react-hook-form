import React from "react";
import { useForm } from "react-hook-form";

export const example10title = "10) Dependent validation";

export const Example10 = () => {
  /*
        Talk about:
          - We want the value of 3 fields to not be bigger than 100
          - we use "getValues" to get values from form
          - we use "trigger" to validate other fields
          - on a side note - "errors" should no longer be used (deprecated soon), use "formState.errors" instead
        */

  const { register, handleSubmit, getValues, trigger, formState } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  const sumCheckerValidator = () => {
    const sum =
      Number(getValues()["val1"]) +
      Number(getValues()["val2"]) +
      Number(getValues()["val3"]);
    if (sum > 100) {
      return "Error - sum is greater than 100";
    }
    return true;
  };

  return (
    <div>
      <h1>{example10title}</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>Sum of those three can't be greater than 100</div>
        <div>
          Value 1
          <input
            name="val1"
            ref={register({
              validate: {
                isSumBiggerThan100: () => sumCheckerValidator(),
              },
            })}
            onChange={() => {
              trigger(["val2", "val3"]);
            }}
          />
          {formState.errors.val1 && (
            <span style={{ color: "red" }}>
              {formState.errors.val1.message}
            </span>
          )}
        </div>

        <div>
          Value 2
          <input
            name="val2"
            ref={register({
              validate: {
                isSumBiggerThan100: () => sumCheckerValidator(),
              },
            })}
            onChange={() => {
              trigger(["val1", "val3"]);
            }}
          />
          {formState.errors.val2 && (
            <span style={{ color: "red" }}>
              {formState.errors.val2.message}
            </span>
          )}
        </div>

        <div>
          Value 3
          <input
            name="val3"
            ref={register({
              validate: {
                isSumBiggerThan100: () => sumCheckerValidator(),
              },
            })}
            onChange={() => {
              trigger(["val1", "val2"]);
            }}
          />
          {formState.errors.val3 && (
            <span style={{ color: "red" }}>
              {formState.errors.val3.message}
            </span>
          )}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      {formState.errors.val1 && (
        <p style={{ color: "red" }}>{formState.errors.val1.message}</p>
      )}
      <br />

      {console.log("formState.errors", formState.errors)}
    </div>
  );
};
