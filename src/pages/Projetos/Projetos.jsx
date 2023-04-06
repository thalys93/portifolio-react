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
      <ol>                          
        <ProjectCard />
      </ol>
      </section>
      <Footer />      
    </main>
  )
}

export default Projetos
