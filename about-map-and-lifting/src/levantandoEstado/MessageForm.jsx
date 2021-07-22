import React, { useState } from 'react';
import styled from 'styled-components';

const StyleArea = styled.textarea`
  border-radius: 20px;
  padding: 20px;
  border: 0;
  outline: none;
  font-size: 15px;

` 

const Button = styled.button`
  background:rgb(4, 174, 204);
  padding: 10px 30px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border: none;

  :hover{
    background-color: rgb(4, 120, 141);
  }

`

export default function MessageForm({updateState}) {

  const[mensaje,setMensaje] = useState("");

  //1 Llama a la funcion padre updateState
  //2 lE PASO EL MENSAJE A updatestate

  //El punto es pasar un prop como funcion y luego darle
  //como valor a ese prop una funcion del componente padre(App.js)

  return (
    <form onSubmit={(event)=>
      {event.preventDefault();
        updateState(mensaje);
      }}>

      <h1>Set Message</h1>
      <StyleArea 
          rows="4"
          cols="50"
          placeholder="Enter your message here"
          onChange={ (e) => setMensaje(e.target.value)}
          value={ mensaje }
      ></StyleArea>
      
      <Button type="submit">Send</Button>
    </form>
  )
}


