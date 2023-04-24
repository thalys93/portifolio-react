import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import './hamburguer.css'

function Hamburger() {



  return (    
    <Navbar expand="lg" className="HamburguerNav" fixed='top' id="burgerMenu">
      <Navbar.Toggle aria-controls="basic-navbar-nav" id='Toggle'>
        <i className='bi bi-list' id='HamIcon'/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" id='NavbarList'>
          <Nav.Link><Link to='/'>Inicio</Link></Nav.Link>
          <Nav.Link><Link to='/Sobre'>Sobre Mim</Link></Nav.Link>
          <Nav.Link><Link to='/Projetos'>Projetos</Link></Nav.Link>
          <Nav.Link><Link to='/Contato'>Contato</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  )
}

export default Hamburger