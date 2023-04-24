// React , Link, UseParams , Modal
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Placeholder } from "react-bootstrap";

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
        }, 1000);        
    }, []);       
    
    return(    
      <main id="prodMain" >
      
              <div id="exitDiv">
                {/* Mobile */}
                <Link to="/projetos" id="exitLinkM" preventScrollReset={true}> 
                  <i className="bi bi-box-arrow-left" id="exitIcon"/> 
                </Link>
              </div>  
        
      {loading ? 
        <section id="ItemSectionBlank">

        <div className="blankTitleDiv">

          <div className="titleA">
          <Placeholder as='h3' animation="glow">
            <Placeholder className="BlankTxt70"/>                         
          </Placeholder>
          </div>
           
          <div className="titleB">
          <Placeholder as="h5" animation="glow">
            <Placeholder className="BlankTxt40"/>            
          </Placeholder>
              <p className="line">|</p>
          <Placeholder as="h5" animation="glow">           
            <Placeholder            
            className="BlankTxt40"/>          
          </Placeholder>
          </div>
        </div>

        <div className="BlankDescription">
          
            <Placeholder                      
            animation="glow"          
            as="p">
            <Placeholder className="pPlaceholder" />            
            </Placeholder>

            <Placeholder                      
            animation="glow"          
            as="p">
            <Placeholder className="pPlaceholder" />            
            </Placeholder>

            <Placeholder                      
            animation="glow"          
            as="p">
            <Placeholder className="pPlaceholder" />            
            </Placeholder>        

        </div>
          
          <div className="projectTextBk">     
          <i><Placeholder as="i" id="BlankI" animation="wave" /></i>       
             
             <p>|</p> 

             <Placeholder as="p" animation="glow">
              <Placeholder  className="BlankTxt60" />
            </Placeholder>
          </div>
          <div>
            <Placeholder as="img" id="BlankImg" animation="wave"/>            
          </div>          
        </section> : (
      <section id="ItemSection">                       
    <h3> {Pjdata.data?.attributes.nome} </h3>
    <h5> Tipo de Projeto | {Pjdata.data?.attributes.tipo}</h5> 
      <div className="projectText">
    <p> {Pjdata.data?.attributes.sobre}</p>
    <a href={Pjdata.data?.attributes.link} target="_blank" className="projectLink"> <FaGithub id="github"/> | Link do Projeto </a>    
      </div>
              
      <div >
        <img src={Pjdata.data?.attributes.image.data.attributes.url}                      
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