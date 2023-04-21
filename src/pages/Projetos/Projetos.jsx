import  React from 'react'


import Footer from '../layout/footer-component/Footer';

import Navbar from '../layout/navbar-component/Navbar';
import ProjectCard from './ProjectCard';

// CSS
import './projects.css'

function Projetos() {


  return (    
    <main id='projectMain'>
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
