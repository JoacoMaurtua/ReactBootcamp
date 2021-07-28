import React, {useContext} from 'react';
import { MyComponent } from '../App';

export default function CompTwo() {

  const {state,setState} = useContext(MyComponent); 

  const onClick = (e) =>{
    setState(state+1);
  }

  return (
    <div>
      <label htmlFor="simpleInput">Actual number: </label>
      <textarea id="simpleInput" value ={state} rows="2" cols="5" onClick={onClick}>
          {state}
      </textarea>
      
    </div>
  )
}


