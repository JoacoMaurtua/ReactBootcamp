import React, { useState } from 'react';

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
      <textarea 
          rows="4"
          cols="50"
          placeholder="Enter your message here"
          onChange={ (e) => setMensaje(e.target.value)}
          value={ mensaje }
      ></textarea>
      <input type="submit" value="Send Message" />
    </form>
  )
}
