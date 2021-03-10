import React from "react";
import { useForm } from "react-hook-form";

export const example11title = "11) Set values";

const data = [
  { name: "John", age: "34" },
  { name: "Bob", age: "19" },
  { name: "Mike", age: "7" },
];

export const Example11 = () => {
  /*
        Talk about:
          - We might want to base our inputs on some other data - we have something like that in ApiGui already
          - To do that we use "setValue" for every filed (can't use it once)
          - You can pass "{ shouldValidate: true }" in order to trigger validation after setting value
          - BONUS - u can set multiple fields with `reset`, but to trigger validation you need to
            put `trigger` in `setTimeout`, which is ... very bad practice
        */

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    reset,
    trigger,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const triggerSubmit = (myData: any) => {
    console.log(myData);
  };

  const handleDataImport = (personIndex: number) => {
    // setValue("name", data[personIndex].name);
    // setValue("age", data[personIndex].age);
    // setValue("age", data[personIndex].age, { shouldValidate: true });

    reset(data[personIndex]);
    // trigger();
    setTimeout(() => trigger(), 0);
  };

  return (
    <div>
      <h1>{example11title}</h1>

      {/*<button onClick={() => trigger()}>trigger</button>*/}

      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>click</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data[0].name}</td>
            <td>{data[0].age}</td>
            <td>
              <button onClick={() => handleDataImport(0)}>import</button>
            </td>
          </tr>
          <tr>
            <td>{data[1].name}</td>
            <td>{data[1].age}</td>
            <td>
              <button onClick={() => handleDataImport(1)}>import</button>
            </td>
          </tr>
          <tr>
            <td>{data[2].name}</td>
            <td>{data[2].age}</td>
            <td>
              <button onClick={() => handleDataImport(2)}>import</button>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>
          Name
          <input name="name" ref={register} />
        </div>

        <div>
          Age
          <input
            name="age"
            ref={register({
              min: {
                value: 18,
                message: "You must be mature bro",
              },
            })}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      {formState.errors.age && (
        <p style={{ color: "red" }}>{formState.errors.age.message}</p>
      )}
      <br />
    </div>
  );
};
