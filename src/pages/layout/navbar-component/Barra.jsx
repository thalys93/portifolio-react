import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import './BarraNavegacao.css'

function BarraNavegacao() {
  return (    
    <Navbar expand="lg" className="HamburguerNav" position='top' fixed='top' id="burgerMenu">        
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='Toggle'>
        <i className='bi bi-list HamIcon' />
      </Navbar.Toggle>
      <Navbar.Collapse className='NavCollapse'>
        <Nav className='justify-content-start m-2'>
          <Nav.Link><Link to='/'>Inicio</Link></Nav.Link>
        </Nav>          
        <Nav className="NavbarList m-2">          
            <Nav.Link><Link to='/Sobre'>Sobre Mim</Link></Nav.Link>
            <Nav.Link><Link to='/Projetos'>Projetos</Link></Nav.Link>
            <Nav.Link><Link to='/Contato'>Contato</Link></Nav.Link>          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  )
}

export default BarraNavegacao