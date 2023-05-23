// React , Link, UseParams
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProjetoPlaceholder from './ProjetoPlaceholder'

// Icons
import { FaGithub } from "react-icons/fa";

// CSS
import './PjCard.css'
import './modalUtils.css'
import { Helmet } from "react-helmet";


function Projeto ({nome, imageURL, sobre, link, tipo}) {

  const {id} = useParams()
  

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 210)
    }, []);
       
    const abrirLink = () => {
      const linkProjeto = document.getElementById('projectLink').getAttribute('href');
      window.open(linkProjeto, "_blank");
    };
    
    return(    
      <main id="prodMain" >
      {loading ? 
      <>
      <ProjetoPlaceholder/>
      </>
 : (
      <section id="ItemSection">      
        <Helmet>
          <title> {nome} </title>
        </Helmet>
    <h3> {nome} </h3>
    <h5> Tipo de Projeto | {tipo}</h5> 
      <div className="projectText">
    <p>{sobre}</p>
      
          <a href={link} target="_blank" onClick={abrirLink} id="projectLink" className="btn btn-outline-light"> <FaGithub id="github"/> | Link do Projeto </a>    
      
      </div>

      <div >
        <img src={imageURL}        
             className="projectImg"
        />
      </div>
      
      </section>
      )}
      </main>        
    )
}

export default Projeto