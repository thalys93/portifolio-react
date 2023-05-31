// React , Link, UseParams
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjetoPlaceholder from './placeholder/ProjetoPlaceholder'
import { Helmet } from "react-helmet";

// Icons
import { FaGithub } from "react-icons/fa";

// CSS
import './css/PjCard.css'

function Projeto (props) {

  
    const [loading, setLoading] = useState(true);    

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }, []);

    const abrirLink = () => {
      const linkProjeto = document.getElementById('projectLink').getAttribute('href');
      window.open(linkProjeto, "_blank");
    };
    
    return(    
      <section className="ItemSection">
      {loading ? 
      <>
      <ProjetoPlaceholder/>
      </>
 : (
      <article className="conteudo container-fluid">      
        <Helmet>
          <title> {props.nome} </title>
        </Helmet>

      <div className="flex-column text-center">
        <h3> {props.nome} </h3>
        <h5 className="text-secondary-emphasis"> Tipo de Projeto | <span className={props.tema? 'text-dark' : ''} style={{color: props.color}}>{props.tipo}</span></h5> 
      </div>

      <div className="projectText text-center">
        <p className={props.tema? 'text-dark' : "text-light"}>{props.sobre}</p>
      </div>

      <div className="text-center mb-3">
      <a href={props.link} target="_blank" onClick={abrirLink} id="projectLink" className={props.tema? "btn btn-primary" : "btn btn-outline-light"}> 
        <FaGithub id="github"/> 
        | Link do Projeto
      </a>
    </div>

      <div className="text-center">
        <img src={props.projectIMG} className='img-fluid' />
      </div>      
      </article>

      )}
      </section>        
    )
}

export default Projeto