import React from 'react';
import './App.css';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
         <Switch>
           <Route path={"/"}>
              <Form/>  
          </Route>
         </Switch>

      </div>
    </Router>
   
  );
}

export default App;
