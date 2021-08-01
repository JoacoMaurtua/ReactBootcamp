import React, {useRef,useState} from 'react';

export default function Form(props) {

  const nameInput = useRef(null);
  const lastInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmInput = useRef(null);


  const[state,setState] = useState({
    userName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const onSubmit = (event) =>{
    event.preventDefault();
    nameInput.current.value = "";
    lastInput.current.value = "";
    emailInput.current.value = "";
    passwordInput.current.value = "";
    confirmInput.current.value = "";
  }


  const onChange = (event) =>{
    const {name,value} = event.target
    setState({
      ...state,
      [name]:value //lo mismo que [event.target.name]:event.target.value
    })

  }

  /* const NamesFunc = () =>{
    if(state.userName.length < 2 || state.lastName.length < 2){
      return "El nombre debe tener al menos dos caracteres";
    }else{return ""}
  }  */

  const {userName,lastName,email,password,confirmPassword} = state;

  return (

    <form onSubmit = { onSubmit }>

      <h3>This is a conditional render form</h3>

      <div className="inputContainer">
        <label>User Name: </label>
        <input type="text" ref={nameInput} name="userName" value={userName} onChange={onChange}/>
        {
          (userName.length>0 && userName.length<=2)?
          <p className="alerta">El nombre debe tener mas de dos caracteres</p>:
          ""
        }
      </div>

      <div className="inputContainer">
        <label>Last Name: </label>
        <input type="text" ref={lastInput} name="lastName" value={lastName} onChange={onChange}/>
        {
          (lastName.length>0 && lastName.length<=2)?
          <p className="alerta">El nombre debe tener mas de dos caracteres</p>:
          ""
        }
      </div>

      <div className="inputContainer">
        <label>Email: </label>
        <input type="email" ref={emailInput} name="email" value={email} onChange={onChange}/>
        {
          (email.length>0 && email.length < 5)?
          <p className="alerta">El email debe tener al menos cinco caracteres</p>:
          ""
        }
      </div>

      <div className="inputContainer">
        <label>Password: </label>
        <input type="password" ref={passwordInput} name="password" value={password} onChange={onChange}/>
        {
          (password.length>0 && password.length < 8)?
          <p className="alerta">La contraseña debe tener al menos 8 caracteres</p>:
          ""
        }

      </div>

      <div className="inputContainer">
        <label>Confirm Password: </label>
        <input type="password" ref={confirmInput} name="confirmPassword" value={confirmPassword} onChange={onChange}/>
        {
          (confirmPassword !== password)?
          <p className="alerta">Las contraseñas deben coincidir</p>:
          ""
        }
      </div>

      <input className = "button" type="submit" value="Create User"/>
    </form>
  )
}
