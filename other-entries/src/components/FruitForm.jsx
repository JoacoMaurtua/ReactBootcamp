import React, { useState } from 'react';

const fruits = [
  'banana',
  'pineapple',
  'peach',
  'apple'
] 

export default function FruitForm() {

  const [state,setState] = useState(fruits[0]);
  const [tasty,setTasty] = useState(false);
 

  const onSubmit = event =>{
    event.preventDefault();
    console.log('The ' + state + ' is' + (tasty ? '' : ' not') + ' tasty!');
  }

  
  return (
    <form onSubmit = {onSubmit}>
      <select value={state} onChange={event => setState(event.target.value)}>
       {/*  <option value="Banana">Banana</option>
        <option value="Pineapple">Pineapple</option>
        <option value="Peach">Peach</option>
        <option value="Apple">Apple</option> */}
        {
          fruits.map((item,index)=>(<option key={index}>{item.replace(/\b\w/g , M => M.toUpperCase())}</option>)) //los regular expressions(REGEX) se utilizan para validaciones 
        }
      </select>
        
      <label htmlFor="check" >Is it tasty? </label>
      <input type="checkbox" id="check" checked={tasty} onChange={event => setTasty(event.target.checked)}/>
     
      <button>Take a bite</button>

    </form>
  )
}


