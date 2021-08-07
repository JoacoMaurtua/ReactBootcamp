import React, {useState} from 'react';

export default function Form(props) {

  return (
   <form>
     <label htmlFor="menu">Search for: </label>
     <select name="menu" id="menu">
       <option value="1">People</option>
       <option value="2">Starships</option>
       <option value="3">Vehicles</option>
       <option value="4">Species</option>
       <option value="4">Planets</option>
     </select>
     <label htmlFor="id">id: </label>
     <input type="text" id="id" />
     <button>Search</button>

   </form>
  )
}
