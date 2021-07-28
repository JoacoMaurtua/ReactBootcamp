import React, { useContext } from 'react';
import { MyComponent } from '../App';

export default function CompOne() {

 
  const {state,setState} = useContext(MyComponent);

  //newValue.setState(3);

  const onClick = (e) =>{
    setState(state+1);
  }
  
  return (
    <div>
      <h1>CONTEXT RESULT</h1>
      <button onClick={onClick}>{state}</button>
    </div>
  )
}


