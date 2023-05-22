// React +
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Toast, ToastContainer } from 'react-bootstrap'

// CSS
import './error.css'
import { Helmet } from 'react-helmet'



function Error() {  

  const lordStyle = {
    width:'120px',
    height:'120px'
}

const [mostrarError, setMostrarError] = useState(false)
const toggleError  = () => setMostrarError(!mostrarError)

useEffect(() => {
  toggleError()
}, [])


  return (
    <section className='sectionError'>   
      <Helmet>
        <title> Ops Algo deu Errado! </title>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dh39ahmpj/image/upload/v1682364473/portifolio.dev/icons8-erro-16_dvxo8h.png" type="image/x-icon" />
      </Helmet>
            <div id="error">
                <h1> Ops!  </h1>
                <h2> Algo deu Errado! </h2>  
            <lord-icon
                src="https://cdn.lordicon.com/sbiheqdr.json"
                trigger="loop"
                delay="1000"
                colors="primary:#ffffff,secondary:#545454"
                style={lordStyle}>
            </lord-icon>  
                <hr />
                <h1 id="spanError"> Clique no Botão Abaixo para voltar </h1>      
                <br/>
                <div className='ButtonsError'>
                <Link to="/">                
                    <button id="errorbtn" className='btn btn-outline-light'>                        
                        <i className="bi bi-door-open"/> 
                        <p>Voltar Ao Inicio</p>
                    </button>
                </Link>      

                    <button className='btn btn-outline-light' id='errorbtn' onClick={toggleError}>
                      <i class="bi bi-bug"/>
                        <p>Mostrar Error</p>                     
                    </button> 
                                       
                </div>

              <ToastContainer className='toastContainer' position='top-center'>
                <Toast show={mostrarError} onClose={toggleError} className='bg-danger' delay={3500} autohide>
                    <Toast.Body>
                      <div className='text-center'>
                      Erro 404: Página não encontrada! <br/>
                      <b>Verifique sua URL</b>
                      </div>
                      </Toast.Body>
                </Toast>
              </ToastContainer>

            </div>                         
        </section>
  )
}

export default Error
