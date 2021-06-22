import './App.css';
import React from 'react';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper items ={['something','sobrero','wholesome','randson','apple','recact','javascript']}/>
    </div>
    /*
      item = 'something'
      filter = 's'
      start = someting.indexOf(s)
      start = 0
      end = 1
       
     */
  );
}

export default App;
