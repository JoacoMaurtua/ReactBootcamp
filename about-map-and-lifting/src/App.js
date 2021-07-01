import './App.css';
import React, { useState } from 'react';
/* import Grosery from './components/Grosery'; */
import MessageForm from './levantandoEstado/MessageForm';
import MessageDisplay from './levantandoEstado/MessageDisplay';


function App() {

  const [message,setMessage] = useState("No hay texto para mostrar");

  //3 Recibe el mensaje de MessageForm.jsx
  //4 Actualiza el message con el de MessageForm.jsx
  const actualizarEstado = (state) =>{
    setMessage(state)
  }

  return (
    <div className="App">
      {/* <Grosery groseryList = {["pearl onions", "thyme", "cremini mushrooms", "butter"]}/> */}
      <MessageForm updateState = {actualizarEstado}/>
      <MessageDisplay displayMessage = {message}/>
    </div>
  );
}

export default App;
