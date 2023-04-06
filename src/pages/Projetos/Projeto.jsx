import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import LoadingCircle from "../layout/loading-component/Loading";
import Footer from '../layout/footer-component/Footer';

// Icons
import { FaGithub } from "react-icons/fa";

import './PjCard.css'


function Projeto () {
  
    const [loading, setLoading] = useState(true);
    const [Pjdata, setPjData] = useState([]);  

    const local = "http://26.79.95.70:1337"
    const {id} = useParams() ;
    

    useEffect(() => {                            
        fetch(`http://26.79.95.70:1337/api/projetos/${id}?populate=*`)              
        .then((response) => response.json())        
        .then(setPjData);
        setTimeout(() => {
        setLoading(false);
        }, 500);        
    }, []);
        
    
    return(
      <main className='animate__animated animate_fadeIn'>        
        
        {loading ? 
        <section id="ItemSectionBlank">
          <div id="ItemDivBlank">
          <LoadingCircle />
          </div>
        </section> : (
      <section id="ItemSection">
        <div id="exitDiv">
          <Link to="/projetos" id="exitLink" reloadDocument={true} preventScrollReset={true} > 
                  <i className="bi bi-box-arrow-left" id="exitIcon"/> 
            </Link>
          </div>                       
    <h3> {Pjdata.data?.attributes.nome} </h3>
    <h5> Tipo de Projeto | {Pjdata.data?.attributes.tipo}</h5> 
      <div className="projectText">
    <p> {Pjdata.data?.attributes.sobre}</p>
    <a href={Pjdata.data?.attributes.link} target="_blank" className="projectLink"> <FaGithub id="github"/> | Link do Projeto </a>    
      </div>
        <hr />
      <div >
        <img src={local + Pjdata.data?.attributes.image.data.attributes.url}                      
             alt={Pjdata.data?.attributes.image.data.attributes.name}
             className="projectImg"/>
      </div>
      </section>      
      )}

      </main>      
    )
}

export default Projeto