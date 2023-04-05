import  React from 'react'


import Footer from '../layout/footer-component/Footer';

import Navbar from '../layout/navbar-component/Navbar';
import ProjectCardBlank from './ProjectCardBlank';
import ProjectCard from './ProjectCard';

// CSS
import './projects.css'

function Projetos() {


  return (    
    <main id='projectMain' className='animate__animated animate_fadeIn'>
      <Navbar />
      <section id="projectSection">
      <ol>                          
        <ProjectCardBlank />
      </ol>
      </section>
      <Footer />      
    </main>
  )
}

export default Projetos
