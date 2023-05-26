// Libs
import React, { useState } from 'react'
import { Modal, ModalBody, ModalTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Componentes
import Projeto from '../Projeto';

// CSS
import '../css/projects.css'
import '../css/modalUtils.css'

function Pjmodal({id, nome, projectIMG, sobre, link, tipo, color}) {

    const [mostrarModal, setMostrarModal] = useState(false);

    const AbrirModal = () => setMostrarModal(true);
    const FecharModal = () => setMostrarModal(false);    

    
  return (    
    <div>
        <button onClick={AbrirModal} id="modalButtonD" className='btn btn-outline-light'>Saiba Mais</button>
      <Modal  
        show={mostrarModal}        
        onHide={FecharModal}
        backdropClassName='Overblur'
        contentClassName='ModalProject'
        scrollable={false}
        animation={false}
        centered={true}                
      > 
        <ModalTitle>
          <div id="ModalExitDiv">
            <Link to="/projetos" id="exitLinkD" preventScrollReset={true}> 
              <i className="bi bi-box-arrow-left" id="exitIcon" onClick={FecharModal}/>
            </Link>                        
          </div>          
        </ModalTitle>                            
          <ModalBody>
            <Projeto
              id={id}
              nome={nome}
              projectIMG={projectIMG}
              sobre={sobre}           
              link={link}
              tipo={tipo}
              color={color}            
            />
          </ModalBody>                    
        </Modal>
    </div>      
  )
}
    
export default Pjmodal