import React from 'react';


export default function Form(props) {

  const {inputs,setInputs} = props;

  const onChange = (event) =>{
    setInputs({
      ...inputs,
      [event.target.name]:event.target.value
    });

  }

  return (
    <form>
      <div className="formBlock">
        <label htmlFor="firstName">First Name: </label>
        <input onChange={onChange} type="text" name="firstName" />
      </div>

      <div className="formBlock">
        <label htmlFor="lastName">Last Name: </label>
        <input onChange={onChange}  type="text" name="lastName" />
      </div>

      <div className="formBlock">
        <label htmlFor="email">Email: </label>
        <input onChange={onChange} type="email" name="email" />
      </div>

      <div className="formBlock">
        <label htmlFor="password">Password: </label>
        <input onChange={onChange} type="password" name="password" />
      </div>

      <div className="formBlock">
        <label htmlFor="password">Confirm Password: </label>
        <input onChange={onChange} type="password" name="password" />
      </div>
     

      
    </form>
  )
}
