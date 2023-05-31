// Libs
import React, { useState } from 'react'
import { Modal, ModalBody, ModalTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Componentes
import Projeto from '../Projeto';

// CSS
import '../css/projects.css'
import '../css/modalUtils.css'

function Pjmodal(props) {

    const [mostrarModal, setMostrarModal] = useState(false);

    const AbrirModal = () => setMostrarModal(true);
    const FecharModal = () => setMostrarModal(false);    

    
  return (    
    <div>
        <button onClick={AbrirModal} id="modalButtonD" className={props.tema? 'btn btn-secondary' : 'btn btn-outline-light'}>Saiba Mais</button>
      <Modal  
        show={mostrarModal}        
        onHide={FecharModal}
        backdropClassName='Overblur'
        contentClassName={props.tema? 'ModalProjectD' : 'ModalProject'}
        scrollable={false}
        animation={false}
        centered={true}                
      > 
        <ModalTitle>
          <div id="ModalExitDiv">
            <Link to="/projetos" id="exitLinkD" preventScrollReset={true}> 
              <i className={props.tema? 'bi bi-box-arrow-left text-dark' : "bi bi-box-arrow-left"} id="exitIcon" onClick={FecharModal}/>
            </Link>                        
          </div>          
        </ModalTitle>                            
          <ModalBody>
            <Projeto
              id={props.id}
              nome={props.nome}
              projectIMG={props.projectIMG}
              sobre={props.sobre}           
              link={props.link}
              tipo={props.tipo}
              color={props.color}            
              tema={props.tema}
            />
          </ModalBody>                    
        </Modal>
    </div>      
  )
}
    
export default Pjmodal