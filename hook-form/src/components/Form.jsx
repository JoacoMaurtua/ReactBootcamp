
import React, { useState } from 'react';

export default function UseForm(props) {

  //REEMPLAZAR ESTOS STATES DENTRO DE UN OBJETO QUE VA A RECIBIR VARIABLES EN UNA CADENA VACIA


 /*  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */

  const [state,setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password: "",
    newPassword:""
  })

  /*
  state = {name:value} 
   */


//MOSTARME LOS DATOS DE ENTRADA Y EVTAR RECARGA DE LA PAGINA
 /*  const onSubmit = (event) =>{
    event.preventDefault();
    const data = {...state};
    console.log(data);
   /*  setUserName("");
    setEmail("");
    setPassword("");

  } */

  //FUNCION ONCHANGE: ACTUALIZAR CADA STATE.USERNAME, STATE.EMAIL, STATE.PASSWORD

  const onChange = (event) =>{
      setState({
        ...state,
        [event.target.name]: event.target.value
      });
      
      /*
        [name]:value;
        [userName]:joaquin  
       */  
  }

  
  //EMPLEAR SETSTATE PARA MODIFICAR EL OBJETO DEL ESTADO

  //EMPLEAR SPREADS ...STATE

  const {firstName,lastName,email,password,newPassword} = state;

  return (
    <div>
          <form>
      <h2>My first form in React</h2>
      <br/>
      <div>
          <label>First Name: </label>
          {/* Agregar un atributo name dentro de cada input ya que name es un ID de la base de datos */}
          {/* Cada onChange hacer lo mismo que onSubmit(implementar una funcion) */}
          <input type="text" value = {firstName} name = "firstName" onChange={onChange}/>  {/* Name es un id de la base de datos */}
      </div>
      <br/>
      <div>
          <label>Last Name: </label>
          <input type="text" value = {lastName} name = "lastName" onChange={onChange}/>  {/* Name es un id de la base de datos */}
      </div>
      <br/>
      <div>
          <label>Email Address: </label>
          <input type="email"  value = {email} name = "email" onChange={onChange}/>
      </div>
      <br/>
      <div>
          <label>Password: </label>
          <input type="password" value = {password}  name = "password" onChange={onChange}/>
      </div>
      <br/>
      <div>
          <label>Confirm Password: </label>
          <input type="password" value = {newPassword}  name = "newPassword" onChange={onChange}/>
      </div>
      {/* <input type="submit" value="Create User"/>{/* SUBMIT ACTIVA EL ONSUBMIT QUE TIENE COMO ATRIBUTO EL FORM */}
  </form>

    <div className="Data">
          <h2>Your form data</h2>
          <p>First Name: {firstName}</p> 
          <p>Last Name: {lastName}</p>   
          <p>Email: {email}</p>   
          <p>Password: {password}</p>   
          <p>Confirm password: {newPassword}</p>   
    </div>
    
  </div>

  )
}


