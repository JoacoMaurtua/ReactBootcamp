import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path = '/PageOne'>
              <PageOne/>
          </Route>

          <Route path = '/PageTwo'>
              <PageTwo/>
          </Route>

        </Switch>  
      </Router>
      <p>This is the principal page in react </p>
    </div>
  );
}

export default App;

