import React, {useState, createContext} from 'react';


export const MasterChief = createContext();

export default function Wrapper(props) {

  const [state,setState] = useState("");

  return (
    <MasterChief.Provider value = {{state,setState}}>
       {props.children}
    </MasterChief.Provider>
  )
}
