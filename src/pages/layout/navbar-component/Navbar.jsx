import React from 'react'

// Importação das Barras
import Barra from "./Barra"
import Hamburger from './Hamburger'

// Importação dos Estilos
import './navbar.css'

function Navbar() {
  return (
    <navbar>
      <Barra/>      
      <Hamburger/>
    </navbar>
  )
}

export default Navbar
