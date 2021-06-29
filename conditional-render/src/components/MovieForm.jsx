import React, { useState } from 'react';

export default function MovieForm(props) {

  const [title,setTitle] = useState("");
  const [titleError,setTitleError] = useState("");

  const onChange =(event)=>{
    setTitle(event.target.value);
    if(event.target.value.length < 1){
      setTitleError("Y el titulo?")
    }
    else if(event.target.value.length < 3){
      setTitleError("El titulo debe tener aun mas caracteres")
    }
  }

  return (
    <form onSubmit = {event=>event.preventDefault()}>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" value = {title} id = "title" onChange={onChange}/>
        {
          titleError ?
          <p style={{color:'red'}}>{titleError}</p>:
          ""
        }
      </div>
      <input type="submit" value="Create Movie" />
      
    </form>
  )
}


