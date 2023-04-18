import React, { useState , useEffect} from 'react'
import LoadingCircle from '../layout/loading-component/Loading';
import { Link } from 'react-router-dom';
import { apiField, apiProjects } from '../../services/api';


// Import do Modal
import Pjmodal from './Pjmodal';

// CSS
import './projects.css'


function ProjectCard() {
      
  // Card Vazio  
    const [emptyCard, setEmptyCard] = useState([]);
    useEffect(() => {
      const fetchEmptyData = async () => {
        try {
          const data = await apiField();
          setEmptyCard(data);
        } catch (error){
          console.error('Falha ao buscar dados da API', error);
        }
      };
      fetchEmptyData();
    }, []);   

    
    // constante para obtenção de dados para imagens
    const local = "http://26.79.95.70:1337"   

    // Card Preenchido
    const [PjData, setPjData] = useState([]);
    const [loading, setLoading] = useState(true);      
    useEffect(() => {  
      const fetchData = async () => {
        try {
          const data = await apiProjects();
          setPjData(data);
        } catch (error){
          console.error('Falha ao buscar dados da API', error);
        }
      };
      fetchData();               
    setTimeout(() => {
      setLoading(false);          
    }, 1000);     
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
        PjData.data?.map((pj) => (          
        <li id='pjCard' key={pj.id} className='animate__animated animate_fadeIn'>          
            <div id='pjTitle'>
          <h3> Projeto : {pj.attributes.nome} </h3>           
            </div>
            <div id='pjDetails'>
          <img src={local + pj.attributes.image.data.attributes.url } className="imgBk"/>                         
          {/* Desktop Modal */}
            {/* <Link to={pj.id +'/'+ pj.attributes.nomespace} 
            className='btn btn-outline-light' 
            onClick={openModal}
            preventScrollReset={true}
            >Saiba Mais sobre o {pj.attributes.nome}
            </Link>  */}

            <Pjmodal 
            isOpen={modalIsOpen} 
            onRequestClose={closeModal}
            />

          
          {/* Mobile Option */}          
          <Link to = { '/' + 'projeto' + '/' + pj.id +'/'+ pj.attributes.nomespace} className='btn btn-outline-light' id='LinkM'>
            *Saiba Mais sobre o {pj.attributes.nome}
          </Link>
            </div>
            <hr />
        </li>
        ))
      )}  
    </div>
  )
}

export default ProjectCard