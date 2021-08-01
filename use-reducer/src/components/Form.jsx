import React, { useReducer } from 'react';

const initialState = {
  name:"",
  email:""
}

const reducer = (state,action) =>{
  return{
    ...state,
    //[name]:value
    [action.nombre]:action.valor
  }

}

export default function Form() {

  const [state,dispatch] = useReducer(reducer,initialState);

  const onChange = (e) =>{
    const {name,value} = e.target;
    dispatch({
      nombre:name,
      valor:value
    })
  }

  return (
    <form onSubmit={(event)=>event.preventDefault()}>

      <div>
        <label htmlFor="name" >Name: </label>
        <input type="text" name = "name" value={state.name} onChange={onChange} />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name = "email" value={state.email} onChange={onChange} />
      </div>

      <input type="submit" value="Login"/>
      
    </form>
  )
}

