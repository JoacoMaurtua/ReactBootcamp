import React from 'react';
import './App.css';
import Form from './components/Form';
//import NewComponent from './components/NewComponent';

function App() {
  return (
    <div className="App">
      {/* <NewComponent header = {"Header Prop"}>
          <p>This is a child</p>
          <p>This is another child</p>
          <p>This is even another child</p>
      </NewComponent> 
      <button onClick = {()=>alert("This is a event listener")}>Click me</button> */}
      <Form/>
    </div>
  );
}

export default App;
