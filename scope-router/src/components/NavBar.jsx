import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <div className = 'btn-group' style={{background:"#343a40", paddingBottom:"20px", width:"100%"}}>
          <Link to="/" className = "btn btn-dark" style={{marginTop:"20px"}}>
              Inicio
          </Link>
          <Link to="/contacto" className = "btn btn-dark" style={{marginTop:"20px"}}>
              Contacto
          </Link>
          <Link to="/nosotros" className = "btn btn-dark" style={{marginTop:"20px"}}>
              Nosotros
          </Link>
      </div>
    </div>
  )
}
