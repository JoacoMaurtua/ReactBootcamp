import React from 'react';
import './App.css';
import Component from './components/Component';
import MegaButon from './components/megabuton/MegaButon';
import RealBoton from './components/RealBoton';
 
 
function App() {

  /*********ESTILOS EN LINEA*********/ 

  const buttonStyle ={
    padding:'30px',
    backgroundColor: 'green',
    marginTop: '1.5rem'
  }

  return (
    <div className="App">
      <button className="botoncito">KING</button>
      <Component number={0}/>
      <button style = {buttonStyle}>Click me fucker!</button>
      <MegaButon/>
      <RealBoton/>
  
    </div>
  );
}

export default App;
