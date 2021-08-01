import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
 /*  background-color: #6aa84f; */
  background-color: ${props=>props.color ||"#6aa84f"};
  height: 5rem;
  border: 2px solid black;
  margin-bottom: 0.938rem;

  @media(max-width:480px){
    height: 3rem;
  }
`

export default function Header(props) {
  return (
    <StyleDiv color={""}>
 
    </StyleDiv>
  );
}
