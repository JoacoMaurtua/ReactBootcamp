import './App.css';
import React,  { createContext, useState } from 'react';
import CompOne from './componnets/CompOne';
import CompTwo from './componnets/CompTwo';

export const MyComponent = createContext();

function App() {


  const [state,setState] = useState(1);

  return (
    <div className="App">
      <MyComponent.Provider value = {{state,setState}}>
        <CompOne/>
        <CompTwo/>
      </MyComponent.Provider>

    </div>
  );
}

export default App;


