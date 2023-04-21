// Import do React, Use State ,Use Effect , Link , Modal
import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Placeholder, Button } from 'react-bootstrap';



// Import dos Serviços da API
import { apiField, apiProjects } from '../../services/api';


// Import do Modal
import Pjmodal from './Pjmodal';

// CSS
import './projects.css'
import './modalUtils.css'


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
    }, 1500);     
    }, []);

  return (
    // Antes de Carregar
    <ul id='pjList'>      
    {loading ? 
      emptyCard.data?.map(() => (        
    <div id="pjListBlank">          
      <Placeholder animation="wave" id="pjCardBlank">    
          <Placeholder as="h3" animation="glow" className="BlankH3">
            <Placeholder style={{ width : '100pt' }} />
          </Placeholder>   

        <div id='pjDetails'>
          <div>
        <Placeholder as='img' animation="glow" className="blankImg"/>                            
          </div> 

      <Placeholder animation="glow">
        <Placeholder className="btn btn-outline-light" id="BlankButton" />
      </Placeholder>

        </div>
      </Placeholder>
      
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
            <Link 
                to={pj.id +'/'+ pj.attributes.nomespace}                
                preventScrollReset={true}>            
            <Pjmodal/>                                           
            </Link>

          {/* Mobile Option */}          
          <Link to = { '/' + 'projeto' + '/' + pj.id +'/'+ pj.attributes.nomespace} className='btn btn-outline-light' id='LinkM'>
            Saiba Mais
          </Link>
            </div>
            <hr />
        </li>
        ))
      )}  
    </ul>
  )
}

export default ProjectCard