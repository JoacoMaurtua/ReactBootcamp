import React, {useContext} from 'react';
import { MasterChief } from './Wrapper';
import styled from 'styled-components';

const StyleDiv = styled.div`
  background-color: #0699a3;
  color: white;
  padding: 0.125rem;
  box-sizing: border-box;
`
const StyleP = styled.p`
  text-align: right;
  margin-right: 5rem;
  font-size: 1.75rem;
  font-weight: bold;

`

export default function NavBar() {

  const {state} = useContext(MasterChief);

  return (
    <StyleDiv>
      <StyleP>Hi {state} !</StyleP>
    </StyleDiv>
  )
}


