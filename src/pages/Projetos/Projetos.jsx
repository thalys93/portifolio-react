import  React from 'react'


import Footer from '../layout/footer-component/Footer';

import Navbar from '../layout/navbar-component/Navbar';
import ProjectCard from './ProjectCard';

// CSS
import './projects.css'
import { Helmet } from 'react-helmet';

function Projetos() {  

  return (    
    <main id='projectMain'>
      <Helmet>
        <title>Luis Thalys RX - Meus Projetos</title>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dh39ahmpj/image/upload/v1682362918/portifolio.dev/icons8-lista-de-ingredientes-16_a8j5ju.png" type="image/x-icon" />
      </Helmet>
      <Navbar />
      <section id="projectSection">
        <h3 id='mobileTitle'> Meus Projetos </h3>
      <ol className='olProject'>                          
        <ProjectCard />
      </ol>
      </section>
        <div className='footerPJ'>
      <Footer/>      
        </div>
    </main>
  )
}

export default Projetos
