import React, { useState } from 'react';

import styled from 'styled-components';

const StyleDiv = styled.div`
  width: 50%;
  display: inline-block;
  padding: 0 auto;
  
`

const Title = styled.h2`
  margin-top:2px;
  margin-bottom: 10px;
  font-size: 18px;
`

const BigForm = styled.form`
  background-color: #ddd8d8;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 20px;
`

const InputDiv = styled.div`
  background-color: #c9c9c9;
  width: 280px;
  margin-bottom: 12px;
  display: inline-block;
  padding: 10px 60px;
  border-radius: 10px;
  font-size: 12px;
  overflow: hidden;
`

const StyleLabel = styled.label`
  font-weight: bold;
  margin-left: -60px;
`

const StyleInput = styled.input`
  background-color: #faf8f8;
  width: 180px;
  border: 2px solid #e6e3e3;
  outline: none;
  float: right;
  margin-left: -25px;
  border-radius: 5px;  
`

/* BEGIN THE DATA ZONE*/

const DataDiv = styled.div`
  background-color: #4F7B3E;
  margin-top: -20px;
  overflow: hidden;
  padding-bottom: 30px;
  h2{
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
  }
  p{
    color: #eeeeee;
    float: left;
    margin-right: 150px;
    margin-left: 50px;
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: bold;
  }
  span{
    margin-left: 30px;
    color: white;
    font-size: 15px;
  }

`

export default function UseForm(props) {

  //REEMPLAZAR ESTOS STATES DENTRO DE UN OBJETO QUE VA A RECIBIR VARIABLES EN UNA CADENA VACIA

 /*const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */

  const [state,setState] = useState({  //un solo useState que reciba un objeto donde le pasaremos las propiedades del formulario
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
   const onSubmit = (event) =>{
    event.preventDefault();
    const data = {...state};
    console.log(data);
    setState("");   //limipar los datos
  }  

  //FUNCION ONCHANGE: ACTUALIZAR CADA STATE.USERNAME, STATE.EMAIL, STATE.PASSWORD

  const onChange = (event) =>{
      setState({
        ...state, //utilizando spreads extraigo el objeto state
        [event.target.name]: event.target.value        //con braket notation accedo a la key de state y le doy como valor el input que escriba el user
      });
      
      /*
        [name]:value;
        [userName]:joaquin  
       */  
  }

  //EMPLEAR SETSTATE PARA MODIFICAR EL OBJETO DEL ESTADO

  //EMPLEAR SPREADS ...STATE

  const {firstName,lastName,email,password,newPassword} = state; //desestructuro el objeto state

  return (
    <StyleDiv>
      <BigForm onSubmit = {onSubmit}>
        <Title>HOOK'S FORM</Title>

        <InputDiv>
            <StyleLabel>First Name: </StyleLabel>
            {/* Agregar un atributo name dentro de cada input ya que name es un ID de la base de datos */}
            {/* Cada onChange hacer lo mismo que onSubmit(implementar una funcion) */}
            <StyleInput type="text" value = {firstName} name = "firstName" onChange={onChange}/>  {/* Name es un id de la base de datos */}
        </InputDiv>
      
        <InputDiv>
            <StyleLabel>Last Name: </StyleLabel>
            <StyleInput type="text" value = {lastName} name = "lastName" onChange={onChange}/>  {/* Name es un id de la base de datos */}
        </InputDiv>
     
        <InputDiv>
            <StyleLabel>Email Address: </StyleLabel>
            <StyleInput type="email"  value = {email} name = "email" onChange={onChange}/>
        </InputDiv>
      
        <InputDiv>
            <StyleLabel>Password: </StyleLabel>
            <StyleInput type="password" value = {password}  name = "password" onChange={onChange}/>
        </InputDiv>

        <InputDiv>
            <StyleLabel>Confirm Password: </StyleLabel>
            <StyleInput type="password" value = {newPassword}  name = "newPassword" onChange={onChange}/>
        </InputDiv>
        {/* <input type="submit" value="Create User"/>{/* SUBMIT ACTIVA EL ONSUBMIT QUE TIENE COMO ATRIBUTO EL FORM */}
  </BigForm>

  <DataDiv className="Data">
        <h2>YOUR FORM DATA</h2>
        <p>First Name:<span>{firstName}</span> </p> 
        <p>Last Name: <span>{lastName}</span></p>   
        <p>Email: <span>{email}</span></p>   
        <p>Password: <span>{password}</span></p>   
        <p>Confirm password: <span>{newPassword}</span></p>   
  </DataDiv>
    
  </StyleDiv>

  )
}


