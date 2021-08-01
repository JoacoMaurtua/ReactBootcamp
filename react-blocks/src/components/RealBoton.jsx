import React from 'react';
import styled from 'styled-components';


const BigDaddyButton = styled.button`
  width: 600px;
  padding: 40px;
  background: black;
  marginBottom: 1.5rem;
  marginTop: 1.5rem;
  color: white;
`;


export default function RealBoton() {
  return (
    <div>
      <BigDaddyButton>Im the fucking Big poppa</BigDaddyButton>
    </div>
  );
}
