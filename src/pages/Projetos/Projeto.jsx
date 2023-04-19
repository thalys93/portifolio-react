// React , Link, UseParams , Modal
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


// Loading
import LoadingCircle from "../layout/loading-component/Loading";

// Services
import { apiId } from "../../services/api";

// Icons
import { FaGithub } from "react-icons/fa";

// CSS
import './PjCard.css'
import './modalUtils.css'


function Projeto () {
  // Nested Routes
    const {id} = useParams() ;
    
  // apiID do Projeto
    const [loading, setLoading] = useState(true);
    const [Pjdata, setPjData] = useState([]);  

    const local = "http://26.79.95.70:1337"
    

    useEffect(() => {                            
        const fetchData = async () => {
            try {
                const data = await apiId(id);
                setPjData(data);
            } catch (error) {
                console.error("Falha ao buscar dados da API", error);
            }
        };
        fetchData();        
        setTimeout(() => {
        setLoading(false);
        }, 500);        
    }, []);
       
    
    return(      
      <main className='animate__animated animate_fadeIn' id="prodMain">
      
              <div id="exitDiv" hidden>
                {/* Mobile */}
                <Link to="/projetos" id="exitLinkM" preventScrollReset={true}> 
                  <i className="bi bi-box-arrow-left" id="exitIcon"/> 
                </Link>
              </div>  
        
      {loading ? 
        <section id="ItemSectionBlank">
          <LoadingCircle />          
        </section> : (
      <section id="ItemSection">                       
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
             className="projectImg"
        />
      </div>
      
      </section>
      )}
      </main>      
    )
}

export default Projeto