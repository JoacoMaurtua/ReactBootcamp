import React, { useState } from 'react'
import Input from './Input';
import FilteredList from './FilteredList'

export default function Wrapper(props) {
  const [state,setState] = useState('');
  const {items} = props;
  return (
    <div>
      <h2> Word's autocompleter</h2>
      <Input initialWord = {state} setInitialWord = {setState}/>
      <FilteredList wordsGroup={items.filter(iterator => iterator.indexOf(state) > -1)} inputWord = {state}/>
    </div>
  )
}

/* La funcion del metodo indexOf es devolver una lista con los string que tenga coincidencias
   con el valor(state) ingresado por el usuario */





