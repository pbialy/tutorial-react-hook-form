import React, { useEffect, useState } from "react";
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

  const [fieldsNames, setFieldsNames] = useState(["0"]);
  const [counter, setCounter] = useState(0);

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  const addKid = () => {
    setFieldsNames(fieldsNames.concat([String(counter + 1)]));
    setCounter(counter + 1);
  };

  // useEffect(() => {
  //   setValue("0", "Jack");
  //   setValue("1", "Anna");
  //   console.log(getValues());
  // }, []);

  const removeKid = (kidIndex: number) => {};

  return (
    <div>
      <h1>{example12title}</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>List of kids in class</div>
        <div>
          {fieldsNames.map((key: any) => {
            return (
              <div>
                <input name={key} ref={register} />
                <button onClick={() => removeKid(key)}>REMOVE</button>
              </div>
            );
          })}
        </div>

        <br />
        <br />
        <button onClick={() => addKid()}>Add kid</button>
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
