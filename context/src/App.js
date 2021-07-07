import './App.css';
import React,  { createContext, useState } from 'react';
import NavBar from './componnets/NavBar';

export const MyComponent = createContext()

function App() {

  const [state,setState] = useState(1);

  return (
    <div className="App">
      <MyComponent.Provider value = {{state,setState}}>
        <NavBar/>

      </MyComponent.Provider>
      
    </div>
  );
}

export default App;

