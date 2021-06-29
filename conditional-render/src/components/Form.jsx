
import React, { useState } from 'react';

export default function UseForm(props) {

  const [state, setState] = useState({
    userName:"",
    email:"",
    password:""
  });
  
  const [haSidoEnviado, setHaSidoEnviado] = useState(false);
  
  const onChange = (event) =>{
    const {name,value} = event.target
    setState({
      ...state,
      [name]:value
    })
  }
  
//MOSTARME LOS DATOS DE ENTRADA Y EVTAR RECARGA DE LA PAGINA
  const onSubmit = (event) =>{
    event.preventDefault();
    console.log(state);
    setHaSidoEnviado(true);
  }

  const Mensaje =()=>{
    if(haSidoEnviado){
      return "Su formulario sido enviado con exito"; 
    }else{
      return "Su formulario no ha sido enviado";
    }
  }


  const {userName,email,password} = state;

  
  return (
    <form onSubmit = {onSubmit}>
      <h1>{ Mensaje() }</h1>
      <br/>
      <div className="formGroup">
          <label>Username: </label>
          <input type="text" name="userName" value = {userName} onChange = {onChange}/>
      </div>
      <br/>
      <div className="formGroup">
          <label>Email Address: </label>
          <input type="email" name="email" value = {email} onChange = {onChange}/>
      </div>
      <br/>
      <div className="formGroup">
          <label>Password: </label>
          <input type="password" name="password" value = {password} onChange = {onChange}/>
      </div>
      <br/>
      <input type="submit" value="Create User"/>{/* SUBMIT ACTIVA EL ONSUBMIT QUE TIENE COMO ATRIBUTO EL FORM */}
      
    </form>
  )
}



