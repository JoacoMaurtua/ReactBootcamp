import React from 'react';
import './App.css';
import{
  BrowserRouter as Router, //Componente global que hace posible la definicion de rutas a cualquier campo dentro del dominio
  Switch,  //Muestra el primer hijo, engloba las rutas
  Route, //Es un componente donde se definen las rutas, que URLs tendran las paginas
  //Link -> ancla
} from 'react-router-dom';
import Contacto from './views/Contacto';
import Nosotros from './views/Nosotros';
import Inicio from './views/Inicio';
import Item from './views/Item';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch> {/* SE DEBE DECLARAR DE LO MAS ESPECIFICO A LO MAS GENERAL */}
          <Route path="/contacto/:id">
            <Item/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>
          <Route path="/">
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


