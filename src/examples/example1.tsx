import { useForm } from "react-hook-form";

export const Example1 = () => {
  const { register, handleSubmit } = useForm();

  /*
  Talk about:
      - howto install
      - how form's code looks like without react-hook-form
      - what to add and where:
        - useForm
        - register to ref
        - handleSubmit to onSubmit
      - how code looks after adding react-hook-form
      - show (in browser) that clicking on Submit triggerrs `triggerSubmit` function
   */

  const triggerSubmit = (myData: any) => {
    console.log(myData);
    // make backend request here
  };

  return (
    <div>
      <h1>1) Howto setup basic form</h1>
      <div>
        To install - run{" "}
        <span style={{ backgroundColor: "#CCC", color: "#488" }}>
          npm install react-hook-form
        </span>
      </div>

      <br />
      <br />

      <h3>We start with this:</h3>

      <form>
        <div>
          Name <input name="name" />
        </div>
        <div>
          Surname <input name="surname" />
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />
      <h3>We add `ref` and `handleSubmit`, and we end up with this:</h3>

      <form onSubmit={handleSubmit(triggerSubmit)}>
        <div>
          Name <input name="name" ref={register} />
        </div>
        <div>
          Surname <input name="surname" ref={register} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
