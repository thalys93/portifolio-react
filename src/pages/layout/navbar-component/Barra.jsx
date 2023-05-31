import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { ThemeContext } from '../../../services/context/ThemeContext'
import { BsMoonStars } from 'react-icons/bs'

import './BarraNavegacao.css'

function BarraNavegacao(props) {
  const { toggleTheme } = useContext(ThemeContext);

  return (    
    <Navbar expand="lg" className={props.tema? 'HamburguerNav bg-light' : 'HamburguerNav CustomColor'} position='top' fixed='top'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='Toggle mt-1'>
        <i className={props.tema? 'bi bi-list HamIconDark' : 'bi bi-list HamIcon'} />
      </Navbar.Toggle>
      <Navbar.Collapse className='NavCollapse'>
        <Nav className='justify-content-start m-2'>
          <Nav.Link><Link to='/' className={props.tema? 'text-dark' : 'text-light'}>Inicio</Link></Nav.Link>
        </Nav>          
        <Nav className="NavbarList m-2">          
            <Nav.Link><Link to='/Sobre' className={props.tema? 'text-dark' : 'text-light'}>Sobre Mim</Link></Nav.Link>
            <Nav.Link><Link to='/Projetos' className={props.tema? 'text-dark' : 'text-light'} >Projetos</Link></Nav.Link>
            <Nav.Link><Link to='/Contato' className={props.tema? 'text-dark' : 'text-light'}>Contato</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
            <Nav className='me-3 mt-1'>
              <button onClick={toggleTheme} className={props.tema? 'btn btn-outline-dark border-0' : 'btn btn-outline-light border-0'} ><BsMoonStars/></button>
            </Nav>
    </Navbar>
    
  )
}

export default BarraNavegacao