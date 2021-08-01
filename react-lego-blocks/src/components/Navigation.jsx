import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
  display: inline-block;
  background-color: ${props=>props.color || "#6fa8dc"};
  height: 21.875rem;
  width: 12.5rem;
  border: 2px solid black;
  vertical-align: top;

  @media (max-width:480px){
    display: none;
  }
`

export default function Navigation(props) {
  return (
    <StyleDiv color = {""}>
    
    </StyleDiv>

  )
}
