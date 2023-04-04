import React from 'react'

import './projects.css'

function Projetos() {
  return (
    <section>      
      <ol id='pjList'>
        <li id='pjCard'>          
            <div id='pjTitle'>
          <h3> Projeto (Nome) </h3>           
            </div>
            <div id='pjDetails'>
          <h6> (Categoria do Projeto) </h6>
          <h5> Thumbnail </h5>        
          <p> Descrição do Projeto </p>
            </div>
        </li>        
      </ol>
    </section>
  )
}

export default Projetos
