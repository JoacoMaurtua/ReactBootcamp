import './App.css';
import React, { useState } from 'react';
import MessageForm from './levantandoEstado/MessageForm';
import MessageDisplay from './levantandoEstado/MessageDisplay';
import styled from 'styled-components';

const Container = styled.div`
  margin: 100px 500px;
  width: 500px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 500px;
  display: inline-block;
  background-color: #2b2a2a;
  color: white;
`


function App() {

  const [message,setMessage] = useState("No hay texto para mostrar");

  //3 Recibe el mensaje de MessageForm.jsx
  //4 Actualiza el message con el de MessageForm.jsx
  const actualizarEstado = (state) =>{
    setMessage(state)
  }

  return (
    <Container>
      
      <MessageForm updateState = {actualizarEstado}/>
      <MessageDisplay displayMessage = {message}/>

    </Container>
  );
}

export default App;


