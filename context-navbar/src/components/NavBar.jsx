import React, {useContext} from 'react';
import { MasterChief } from './Wrapper';
//import styled from 'styled-components';


export default function NavBar() {

  const {state} = useContext(MasterChief);

  return (
    <div>
      <p>Hi{state}!</p>
    </div>
  )
}


