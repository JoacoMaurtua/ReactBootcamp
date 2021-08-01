import React, {useState} from 'react'


export default function Component(props) {
  const {number} = props;
  const [state,setState] = useState(number);

  const count = () =>{
    setState(state + 1);
  }

  return (
    <div>
      <button onClick = {count} className="botonsaso">Click me {state}!</button>
    </div>
  )
}
