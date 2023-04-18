import React , {useState, useEffect} from 'react'

import Modal from 'react-modal'
import { Link } from 'react-router-dom';
import {apiProjects } from '../../services/api';


// Import do Projeto
import Projeto from './Projeto';

import './projects.css'

function Pjmodal({isOpen , onClose} ) {

  const style = {
    content: {        
      position: 'relative',
      top: 'auto',            
      bottom: '50pt',      
      height: '650pt',
      margin: '5pt',
    }}

    const [PjData, setPjData] = useState([]);
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
    }, []);




      
Modal.setAppElement('#root');

  return (
    <div>
      
      {PjData.map((pj) => (

      <Link to={pj.id +'/'+ pj.attributes.nomespace} 
        className='btn btn-outline-light' 
        onClick={openModal}
        preventScrollReset={true}
        >Saiba Mais sobre o {pj.attributes.nome}
      </Link> 

    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}              
        className='ModalProject'
        style={style}      
        overlayClassName='Overblur'>                    
        <Projeto />                                        
    </Modal>


    </div>            
  )
}

export default Pjmodal