import React, { useState } from 'react'

export default function Form() {

  //HOOCKS
  const [nombre,setNombre] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  //end hoocks
  const onsubmit = (event) =>{ //evento sintetico para enviar datos
    event.preventDefault(); //para evitar una recarga de pagina
    console.table({nombre,email,password}) //mostart datos
  }

  return (
    <form onSubmit={onsubmit}>
      <label htmlFor = "name">Name: </label>
      <input type="text" id = "name" value={nombre} onChange = {function(event){setNombre(event.target.value)}}/>
      <br/>
      <label htmlFor = "email">Email: </label>
      <input type="email" id = "email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
      <br/>
      <label htmlFor = "password">Password: </label>
      <input type="password" id = "password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
  )
}

