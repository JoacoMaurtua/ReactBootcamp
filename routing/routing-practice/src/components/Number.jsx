import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

export default function Number() {

  const history = useHistory();
  const {id} = useParams(); //Traer el id de la URL
  const numero = isNaN(id)?"This is not a number":`The number is: ${id}`;

  const home = (e) =>{
    history.push(`/`)
  }

  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={e=>home(e)} >Return Main</button>
    </div>
  )
}
