import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

export default function String() {

  const history = useHistory();

  const home =(e)=>{
    history.push(`/`)
  }
  const {id} = useParams();
  const palabra = !(isNaN(id))?"This is not a word":`The word is: ${id}`;

  return (

    <div>
      <h1>{palabra}</h1>
      <button onClick={e=>home(e)}>Return Main</button>
    </div>
  )
}


