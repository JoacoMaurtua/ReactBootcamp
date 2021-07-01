import React, {useReducer} from 'react';

const initialState = {
  firstName:'',
  lastName:'',
  email:'',
  error:{}
};


const reducer = (state,action) =>{ //obtengo un nuevi estado
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

  const validation = (e) =>{

      const email = e.target.value;

      if(state.firstName.length>0 && state.firstName.lenght<2){
          state.error.firstName = "El nombre deber tener por lo menos dos caracteres"
      }

      else if(state.firstName.length>0 && state.firstName.lenght<2){
        state.error.firstName = "El nombre deber tener por lo menos dos caracteres"
      }

      else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-] + @ [a-zA-Z0 -9 -] + (?: \. [A-zA-Z0-9 -] +) * $ /.test(email))){
        state.error.email = "El correo ingresado no es valido"
      }

     /*  else{return ""} */
  }

  validation();
  

  return (
    <form onSubmit = {(event)=>event.preventDefault()}>

      <div>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" value={state.firstName} onChange={onChange} />
        {
          (state.error.firstName !== null)?<p>{state.error.firstName}</p>:""
        }
      </div>

      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" value={state.lastName} onChange={onChange}/>
        {
          //error
        }
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" name="firstName" value={state.email} onChange={onChange}/>
        {
          //error
        }
      </div>

      <input type="submit"/>
      
    </form>
  )
}
