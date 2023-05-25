import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import './BarraNavegacao.css'

function BarraNavegacao() {
  return (    
    <Navbar expand="lg" className="HamburguerNav" fixed='top' id="burgerMenu">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='Toggle'>
        <i className='bi bi-list HamIcon' />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex justify-content-around" className='NavbarList'>
          <Navn.Link className='justify-content-start'><Link to='/'>Inicio</Link></Nav.Link>
          <Nav.Link className='justify-content-end'><Link to='/Sobre'>Sobre Mim</Link></Nav.Link>
          <Nav.Link className='justify-content-end'><Link to='/Projetos'>Projetos</Link></Nav.Link>
          <Nav.Link className='justify-content-end'><Link to='/Contato'>Contato</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  )
}

export default BarraNavegacao