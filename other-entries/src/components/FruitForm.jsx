import React, { useState } from 'react';

const fruits = [
  'banana',
  'pineapple',
  'peach',
  'apple'
] 

export default function FruitForm() {

  const [state,setState] = useState(fruits[0]);
  console.log(state);


  return (
    <form>
      <select value={state} onChange={event => setState(event.target.value)}>
       {/*  <option value="Banana">Banana</option>
        <option value="Pineapple">Pineapple</option>
        <option value="Peach">Peach</option>
        <option value="Apple">Apple</option> */}
        {
          fruits.map((item,index)=>(<option key={index}>{item.replace(/\b\w/g , M => M.toUpperCase())}</option>)) //los regular expressions(REGEX) se utilizan para validaciones 
        }
      </select>
    
     {/*  <input type="checkbox"/>Is it tasty? */}
     
      <button>Take a bite</button>


      
    </form>
  )
}

