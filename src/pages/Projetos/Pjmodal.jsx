import React from 'react'

import Modal from 'react-modal'
// Import do Projeto
import Projeto from './Projeto';

import './projects.css'

function Pjmodal({ isOpen, onClose }) {

  const style = {
    content: {        
      position: 'fixed',
      top: 'auto',            
      bottom: '-35pt',      
    }}

      
Modal.setAppElement('#root');

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}                
        className='ModalProject'
        style={style}      
        overlayClassName='Overblur'>                                 
            <Projeto />
    </Modal>            
  )
}

export default Pjmodal