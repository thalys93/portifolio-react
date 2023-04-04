import React from 'react'
import { FaBookmark } from 'react-icons/fa'

// CSS
import './exp.css'

function Experiencia() {
  return (
    <section>      
      <ol id='expList'>
        <li id='expObj'>          
            <FaBookmark id='expIcon'/>
            <div id='expTitle'>
          <h3> Experiência (Exemplo) </h3> 
          <h3> 2022 - 2023 </h3>
            </div>          
            <div id='expDetails'>
          <h5> Estagiário </h5>
          <p> Exemplo de Atividades de Estagiário </p>
            </div>
        </li>        
      </ol>
    </section>
  )
}

export default Experiencia
