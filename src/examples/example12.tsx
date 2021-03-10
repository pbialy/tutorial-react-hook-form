import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const example12title = "12) Adding/removing fields";

export const Example12 = () => {
  /*
          Talk about:
            - xxx
          */

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState,
    setValue,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  useEffect(() => {
    setValue("0", "Jack");
    setValue("1", "Anna");
    console.log(getValues());
  }, []);

  return (
    <div>
      <h1>{example12title}</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>List of kids in class</div>
        <div>
          {Object.keys(getValues()).map((key: any) => {
            return (
              <>
                <input name={key} ref={register} />
                <button>REMOVE</button>
                <div>val</div>
              </>
            );
          })}
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
