import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

function Barra() {  
  return (
  <div>
    <nav>
      <ul id="navUL">
        <div id="HomeDiv">
        <li>
          <Link to="/" className="href">
            <span>Inicio</span>
          </Link>
        </li>
        </div>

        <div id="LinksDiv">
        <li>
          <Link to="/sobre" className="href">
            <span>Sobre Mim |</span> 
          </Link>          
        </li>            
        <li>
          <Link to="/experiencia" className="href">
            <span>Experiência |</span>
            </Link>
        </li>

        <li>
          <Link to="/projetos" className="href">
            <span>Projetos |</span>
            </Link>
        </li>

        <li>
          <Link to="/contato" className="href">
            <span>Contato</span>
            </Link>
        </li>
        </div>

      </ul>
    </nav>
  </div>
  )
}

export default Barra