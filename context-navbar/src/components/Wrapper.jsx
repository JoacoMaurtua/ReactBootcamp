import React, {useState, createContext} from 'react';


export default function Wrapper(props) {
  return (
    <div>
       {props.children}
    </div>
  )
}
