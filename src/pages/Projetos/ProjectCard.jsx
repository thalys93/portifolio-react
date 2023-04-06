import React, { useState , useEffect} from 'react'
import LoadingCircle from '../layout/loading-component/Loading';


// Import do Modal
import Pjmodal from './Pjmodal';

import { Link } from 'react-router-dom';

import './projects.css'


function ProjectCard() {
      
  // Card Vazio  
    const [emptyCard, setEmptyCard] = useState([]);

    useEffect(() => {
        fetch('http://26.79.95.70:1337/api/projetos?fields[0]')
        .then((response) => response.json())        
        .then(setEmptyCard)             
    }, []);   

    // Buscar na Api Informações e Set Elas
    const [loading, setLoading] = useState(true);    
    const [Pjdata, setPjData] = useState([]);        
    const local = "http://26.79.95.70:1337"    


    useEffect(() => {                            
    fetch('http://26.79.95.70:1337/api/projetos?populate=*')
    .then((response) => response.json())        
    .then(setPjData);        
    setLoading(false);    
    }, []);


    const LstyleInvisible = {
      opacity: '0',
    };

    
    // Modal        
    const [modalIsOpen, setModalIsOpen] = useState(false);    

    function openModal() {
      setModalIsOpen(true);
    }

    function closeModal () {
      setModalIsOpen(false);
    }
    


  return (
    // Depois de Carregado
    <div id='pjList'>
    {loading ? 
      emptyCard.data?.map(() => (
    <div id="pjListBlank">
      <li id='pjCardBlank'>
        <div className='lineAnimation'> | </div>
        <div id='pjtTitle'>
          <h3></h3>
        </div>
        <div id='pjDetails'>
          <img />
          <div style={LstyleInvisible}>
      <LoadingCircle  />
          </div>

        </div>
      </li>
    </div>
    )) : (      
        Pjdata.data?.map((pj,id1) => (          
        <li id='pjCard' key={id1} className='animate__animated animate_fadeIn'>          
            <div id='pjTitle'>
          <h3> Projeto : {pj.attributes.nome} </h3>           
            </div>
            <div id='pjDetails'>
          <img src={local + pj.attributes.image.data.attributes.url } className="imgBk"/> 
                        
            <Link to={pj.id + '/'+ pj.attributes.nomespace + '/'} 
            className='btn btn-outline-light' 
            onClick={openModal}
            preventScrollReset={true}
            >Saiba Mais sobre o {pj.attributes.nome}            
            </Link>
                      

            <Pjmodal isOpen={modalIsOpen} onRequestClose={closeModal} onAbort={closeModal} />
          
            </div>
            <hr />
        </li>
        ))
      )}  
    </div>
  )
}

export default ProjectCard