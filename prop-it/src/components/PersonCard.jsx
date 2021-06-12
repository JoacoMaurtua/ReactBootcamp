import React, { useState } from 'react'

const PersonCard =(props)=> {
 
  const {firstName, lastName, age, hairColor} = props;
  const [state,setAge] = useState(age);

  const incrementAge = () =>{
    setAge(state + 1)
  }

  return(
    <div className="container">
      <h2>
        {lastName},{firstName}
      </h2>
      <p>Age:{state}</p>
      <p>Hair Color:{hairColor}</p>
      <button onClick = {incrementAge}>Birthday button for {firstName} {lastName}</button>
    </div>
  );
  
}

export default PersonCard;