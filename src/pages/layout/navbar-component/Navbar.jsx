// Libs
import React from 'react'

// Importação das Barras
import BarraNavegacao from './Barra'

function Navbar(props) {  

  return (
    <>      
      <BarraNavegacao tema={props.tema}/>
    </>
  )
}

export default Navbar
