import React, { useState } from 'react';
import style from '../megabuton/MegaButon.module.css';

/********MODULOS CSS********/

export default function MegaButon() {
  let [name,setName] = useState('');

  const changeNombre = () =>{
    setName(name='JOAQUIN');
  }

  return (
    <div>
       <button onClick = {changeNombre} className={style.botonsote}>Click me {name}!</button>
    </div>
  )
}


