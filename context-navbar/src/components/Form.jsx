import React, { useContext } from 'react';
import { MasterChief } from './Wrapper';
import styled from 'styled-components';

const StyleForm = styled.form`
  margin-top: 1.875rem;
  margin-left: 12.5rem;
  font-size: 1.563rem;
  font-weight: bold;

  input{
    background-color: #e2e1e1;
    height: 3.125rem;
    width: 18.75rem;
    border-style: none;
    border-radius: 0.625rem;
    :focus{
      outline: none;
    }
    padding-left: 1.25rem;
    font-size: 1.563rem;
  }

`



export default function Form() {

  const {state,setState} = useContext(MasterChief);

  return (
    <StyleForm>
      <label htmlFor="name">Your Name: </label>
      <input type="text" id="name" value={state} onChange = {(event) => setState(event.target.value)}/>
    </StyleForm>
  )
}
