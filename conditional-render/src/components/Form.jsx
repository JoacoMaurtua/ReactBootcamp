
import React, { useRef, useState } from 'react';

export default function UseForm(props) {

  //USANDO EL HOOK USEREF, SE VA A CARGAR EL VALOR COMO NULO, PARA QUE TODOS LOS INPUTS SE LIMPIEN 

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);


  const [state, setState] = useState({
    userName:"",
    email:"",
    password:"",
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
    nameInput.current.value = "";
    emailInput.current.value = "";
    passwordInput.current.value = "";
  }

  //const Mensaje =()=>{
   /*  if(haSidoEnviado){
      return "Su formulario sido enviado con exito"; 
    }else{
      return "Su formulario no ha sido enviado";
    } */
    //USANDO OPERADOR TERNARIO:
    //(condicion)?condicion es true:condicion es false
   // return (haSidoEnviado)? "Su formulario ha sido enviado":"Su formulario no ha sido enviado";
 // }


  const {userName,email,password} = state;

  
  return (
    <form onSubmit = {onSubmit}>
      {
         (haSidoEnviado)? <h1>"Su formulario ha sido enviado"</h1>:
         <h1>"Su formulario no ha sido enviado"</h1>  
      }
      
      <br/>
      <div className="formGroup">
          <label>Username: </label>
          <input type="text" ref = {nameInput} name="userName" value = {userName} onChange = {onChange}/>
      </div>
      <br/>
      <div className="formGroup">
          <label>Email Address: </label>
          <input type="email" ref = {emailInput} name="email" value = {email} onChange = {onChange}/>
      </div>
      <br/>
      <div className="formGroup">
          <label>Password: </label>
          <input type="password" ref = {passwordInput} name="password" value = {password} onChange = {onChange}/>
      </div>
      <br/>
      <input type="submit" value="Create User"/>{/* SUBMIT ACTIVA EL ONSUBMIT QUE TIENE COMO ATRIBUTO EL FORM */}
      
    </form>
  )
}



