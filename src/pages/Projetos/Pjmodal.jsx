// React, Modal, Link
import React, { useState } from 'react'
import { Modal, ModalBody, ModalTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import do Card do Projeto
import Projeto from './Projeto';

// CSS
import './projects.css'
import './modalUtils.css'

function Pjmodal() {

    const [mostrarModal, setMostrarModal] = useState(false);

    const AbrirModal = () => setMostrarModal(true);
    const FecharModal = () => setMostrarModal(false);

    
  return (
    <div>
        <button onClick={AbrirModal} id="modalButton" className='btn btn-outline-light'>Saiba Mais</button>

      <Modal  
        show={mostrarModal}        
        onHide={FecharModal}
        backdropClassName='Overblur'
        contentClassName='ModalProject'
        scrollable={false}
        animation={false}
      > 
        <ModalTitle>
          <div id="ModalExitDiv">
            <Link to="/projetos" id="exitLinkD" preventScrollReset={true}> 
              <i className="bi bi-box-arrow-left" id="exitIcon" onClick={FecharModal}/>
            </Link>                        
          </div>          
        </ModalTitle>                            
          <ModalBody>            
            <Projeto />
          </ModalBody>                    
        </Modal>
    </div>      
  )
}
    
export default Pjmodal