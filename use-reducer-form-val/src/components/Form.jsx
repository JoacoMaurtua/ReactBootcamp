import React, {useReducer} from 'react';

const initialState = {
  firstName:'',
  lastName:'',
  email:'',
  error:{}
};


const reducer = (state,action) =>{ //obtengo un nuevo estado
  return{
    ...state,
    [action.typeName]:action.typeValue
    //nuevo estado a null
  }
};

export default function Form() {

  const [state,dispatch] = useReducer(reducer,initialState);

  const onChange = (event) =>{
    const {name,value} = event.target;
    dispatch({
      typeName:name,
      typeValue:value
    })
  }


  const validation = () =>{

      if(state.firstName.length>0 && state.firstName.length<=2){
          state.error.firstName = "El nombre deber tener por lo menos dos caracteres"
      }

      else if(state.lastName.length>0 && state.lastName.length<=2){
        state.error.lastName = "El nombre deber tener por lo menos dos caracteres"
      }

      else if(state.email.length>0 && state.email.length< 5){
        state.error.email = "El correo ingresado no es valido"
      }

     else{
      state.error.firstName = ""
      state.error.lastName = ""
      state.error.email = ""
     }
  }

  validation();
  

  return (
    <form onSubmit = {(event)=>{event.preventDefault();console.log(state);
      console.log(state.firstName);}}>

      <div className="group">
        <label htmlFor="firstName">First Name </label>
        <input type="text" name="firstName" value={state.firstName} onChange={onChange} />
        {
          (state.error.firstName !== null)?<p>{state.error.firstName}</p>:""
        }
      </div>

      <div className="group">
        <label htmlFor="lastName">Last Name </label>
        <input type="text" name="lastName" value={state.lastName} onChange={onChange}/>
        {
          (state.error.lastName !== null)?<p>{state.error.lastName}</p>:""
        }
      </div>

      <div className="group">
        <label className="email" htmlFor="email">Your Email </label>
        <input type="text" name="email" value={state.email} onChange={onChange}/>
        {
          (state.error.email !== null)?<p>{state.error.email}</p>:""
        }
      </div>

      <input className="boton" type="submit"/>
      
    </form>
  )
}

