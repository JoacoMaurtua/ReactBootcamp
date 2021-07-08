import React, { useContext } from 'react';
import { MasterChief } from './Wrapper';

export default function Form() {

  const {state,setState} = useContext(MasterChief);

  return (
    <form>
      <label htmlFor="name">Your Name: </label>
      <input type="text" id="name" value={state} onChange = {(event) => setState(event.target.value)}/>
    </form>
  )
}
