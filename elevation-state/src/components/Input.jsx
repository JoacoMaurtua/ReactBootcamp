import React from 'react';

export default function Input(props) {
  const {initialWord,setInitialWord} = props
  return (
    <div>
      <label htmlFor="words">Filter</label><br/>
      <input type="text" id="words" value={initialWord} onChange = {event => setInitialWord(event.target.value)}/>
    </div>
  );
}

