import {useForm} from "react-hook-form";

export const Example1 = () => {

  const {register, handleSubmit, errors} = useForm();

  const triggerSubmit = (myData: any) => {
      console.log(myData)
  }

  return (
    <div>
        <h1>1) Howto setup basic form</h1>
        <div>To install - run <span style={{backgroundColor: '#CCC', color: '#488'}}>npm install react-hook-form</span></div>

        <br/>
        <br/>

        <h3>We start with this:</h3>

        <form>
            <div>Name <input name='name'/></div>
            <div>Surname <input name='surname'/></div>
            <button type='submit'>Submit</button>
        </form>

        <br/>
        <br/>
        <h3>We add `ref` and `handleSubmit`, and we end up with this:</h3>

        <form onSubmit={handleSubmit(triggerSubmit)}>
            <div>Name <input name='name' ref={register}/></div>
            <div>Surname <input name='surname' ref={register}/></div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}