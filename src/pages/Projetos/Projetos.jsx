// Libs
import  React from 'react'
import { ProjectUtils } from '../../services/projectsUtils/projectUtils'
import { Helmet } from 'react-helmet';

// Componentes De Interface
import Footer from '../layout/footer-component/Footer';
import Navbar from '../layout/navbar-component/Navbar';
import LoadingCircle from '../layout/loading-component/Loading'

// Componentes
import ProjectCard from './container/ProjectCard';


// CSS
import './css/projects.css'

function Projetos() {

  const {carregou, contador, projetos} = ProjectUtils();


  // Se Ainda Não Carregou
  if(!carregou) {
    return(
      <>
        <Helmet>
          <title>Carregando Projetos</title>
          <link rel="shortcut icon" href="https://res.cloudinary.com/dh39ahmpj/image/upload/v1682362918/portifolio.dev/icons8-lista-de-ingredientes-16_a8j5ju.png" type="image/x-icon" />
        </Helmet>
        <Navbar />
        <section id='projectSection' className='text-center'>          
          <div>
            <h3> Aguarde Carregando..</h3>
            <LoadingCircle/>
            <span className='text-secondary animate__animated animate__fadeIn'> loading...</span>
          </div>
        </section>
      </>
    )
  // Carregado
  } else {
  return (    
    <>
      <Helmet>
        <title>Luis Thalys RX - Meus Projetos</title>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dh39ahmpj/image/upload/v1682362918/portifolio.dev/icons8-lista-de-ingredientes-16_a8j5ju.png" type="image/x-icon" />
      </Helmet>
      <Navbar />
      <section id="projectSection">
        <h3 id='mobileTitle'> Meus Projetos </h3>
        <div id='listOverflow'>
      <ol className='list-group list-group-horizontal gap-2 break-line-list' id='ProjectList'> 
      {projetos?.map((pj, index) => (
        contador > index ? (
      <>
      <li key={index} className='animate__animated animate__fadeIn container-fluid'>
          <ProjectCard
            id={pj.id}
            nome={pj.nome}
            nomespace={pj.nomespace}
            imageURL={pj.imageURL}
            sobre={pj.sobre}
            link={pj.link}
            tipo={pj.tipo}
          />          
      </li>
      </>
        ) : null
      ))}
      </ol>
      </div>
      </section>
        <div className='footerPJ'>
      <Footer/>      
        </div>
    </>
    )
  }
}

export default Projetos
