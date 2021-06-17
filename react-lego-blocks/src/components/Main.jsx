import React from 'react';
import styled from 'styled-components';

const StyleMain = styled.div`
  display: inline-block;
  background-color: #e06666;
  width: 45.555rem;
  height: 26.5rem;
  vertical-align: top;
  margin-left: 0.938rem;
  box-sizing: border-box;
  border: 2px solid black;
  padding: 0.938rem 0 0 1.05rem;
 
 
`

export default function Main(props) {
  return (
    <StyleMain>
      {props.children}
    </StyleMain>
  )
}
