import React, { useContext } from 'react';
import { MyComponent } from '../App';

export default function NavBar() {

  //const newValue = useContext(MyComponent);
  const {state,setState} = useContext(MyComponent);

  //newValue.setState(3);
  setState(3);
  
  return (
    <div>
      <h1>CONTEXT RESULT</h1>
      <p>{state}</p>
    </div>
  )
}


