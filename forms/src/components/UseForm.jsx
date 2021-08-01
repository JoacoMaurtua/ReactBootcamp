
import React, { useState } from 'react';

export default function UseForm(props) {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
//MOSTARME LOS DATOS DE ENTRADA Y EVTAR RECARGA DE LA PAGINA
  const onSubmit = (event) =>{
    event.preventDefault();
    const data = {userName,email,password};
    console.log(data);
    setUserName("");
    setEmail("");
    setPassword(""); 
  }

  
  return (
    <form onSubmit = {onSubmit}>
      <h1>My first form in React</h1>
      <br/>
      <div>
          <label>Username: </label>
          <input type="text" value = {userName} onChange = {e=>setUserName(e.target.value)}/>
      </div>
      <br/>
      <div>
          <label>Email Address: </label>
          <input type="email" value = {email} onChange = {e=>setEmail(e.target.value)}/>
      </div>
      <br/>
      <div>
          <label>Password: </label>
          <input type="password" value = {password} onChange = {e=>setPassword(e.target.value)}/>
      </div>
      <br/>
      <input type="submit" value="Create User"/>{/* SUBMIT ACTIVA EL ONSUBMIT QUE TIENE COMO ATRIBUTO EL FORM */}
      
    </form>
  )
}


