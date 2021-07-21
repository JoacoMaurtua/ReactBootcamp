import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Colors from '../components/Colors';
import Home from '../components/Home';
import Number from '../components/Number';
import String from '../components/String';

export default function Main() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path={`/string/:id/:color1/:color2`}>    {/* SIEMPRE COMILLAS FRANCESAS */}
              <Colors/>
          </Route>
      
          <Route path={`/number/:id`}>    {/* SIEMPRE COMILLAS FRANCESAS */}
              <Number/>
          </Route>

          <Route path={`/string/:id`}>    {/* SIEMPRE COMILLAS FRANCESAS */}
              <String/>
          </Route>

          <Route path={`/`}>    {/* SIEMPRE COMILLAS FRANCESAS */}
              <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  )
}
