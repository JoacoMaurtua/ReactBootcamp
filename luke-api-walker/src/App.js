import React from 'react';
import './App.css';
/* import Form from './components/Form'; */
import Main from './views/Main';
import Item from './views/Item';
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
            <Route path ="/:id"> 
                <Item/>
            </Route>
            <Route path="/">
                <Main/>  
            </Route>
         </Switch>

      </div>
    </Router>
   
  );
}

export default App;
