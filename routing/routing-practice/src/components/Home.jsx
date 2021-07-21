import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {

  const history = useHistory();

  const numero = (e) =>{
    history.push(`/number/:id`);
  }

  const string = (e) =>{
    history.push(`/string/:id`);
  }

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={e => numero(e)}>Number Page</button>
      <button onClick={e => string(e)}>String Page</button>
    </div>
  )
}
