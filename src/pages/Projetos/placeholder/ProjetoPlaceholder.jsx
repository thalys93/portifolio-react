// Libs
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Placeholder, PlaceholderButton } from 'react-bootstrap'

// CSS
import '../css/PjCard.css'

function ProjetoPlaceholder() {
  return (
      <article className="container-fluid text-center">
      <div className="flex-column">
        <Placeholder animation='glow'>
          <h3> <Placeholder xs={3} /> </h3>
          <h5> <Placeholder xs={1} /> |  <Placeholder xs={1} /> </h5> 
        </Placeholder>
      </div>

      <div>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={2} /> <br/>
          <Placeholder xs={2} /> <br/>
          <Placeholder xs={2} /> <br/>          
        </Placeholder>
      </div>
        
      <div className='m-2'>
    <a target="_blank" id="projectLink" className="btn btn-outline-light disabled">
      <FaGithub id="github"/> 
      | Link do Projeto
    </a>
      </div>

        <Placeholder as='div' className='text-center container-fluid' animation='wave'>
          <Placeholder as='img' width={350} height={250}/>
        </Placeholder>          
      </article>

  )
}

export default ProjetoPlaceholder