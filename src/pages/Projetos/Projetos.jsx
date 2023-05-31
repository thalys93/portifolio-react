// Bibliotecas e Utils
import  React, { useContext, useEffect } from 'react'
import { ProjectUtils } from '../../services/projectsUtils/projectUtils'


// Componentes
import Navbar from '../layout/navbar-component/Navbar';
import ProjectCard from './ProjectCard';
import LoadingCircle from '../layout/loading-component/Loading'
import { Helmet } from 'react-helmet';
import { ThemeContext } from '../../services/context/ThemeContext';


// CSS
import './css/projects.css'

function Projetos() {

  const {carregou, contador, projetos} = ProjectUtils();    
  const {theme} = useContext(ThemeContext)

    useEffect(() => {
    if (theme) {
      document.body.classList.add('lightBody')
    } else {
      document.body.classList.remove('lightBody')
    }
    }, [theme]);

  if(!carregou) {
    return(
      <>
        <Helmet>
          <title>Carregando Projetos</title>
          <link rel="shortcut icon" href="https://res.cloudinary.com/dh39ahmpj/image/upload/v1682362918/portifolio.dev/icons8-lista-de-ingredientes-16_a8j5ju.png" type="image/x-icon" />
        </Helmet>
        <Navbar tema={theme}/>
        <section id='projectSection' className='text-center'>          
          <div>
            <h3> Aguarde Carregando..</h3>
            <LoadingCircle/>
            <span className='text-secondary animate__animated animate__fadeIn'> loading...</span>
          </div>
        </section>
      </>
    )
  } else {
  return (    
    <>
      <Helmet>
        <title>Luis Thalys RX - Meus Projetos</title>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dh39ahmpj/image/upload/v1682362918/portifolio.dev/icons8-lista-de-ingredientes-16_a8j5ju.png" type="image/x-icon" />
      </Helmet>

      <Navbar tema={theme}/>

      <section className='ProjectSection'>
        <h3 className='text-center mb-5 text-decoration-underline'> Meus Projetos </h3>
      <div className='overflow-y-auto overflow-x-auto container listOverflow'>
      <ol className='list-group list-group-horizontal list-group-numbered gap-4 container ProjectList'> 
      {projetos?.map((pj, index) => (
        contador > index ? (
      <>
      <li key={index} className='animate__animated animate__fadeIn'>
          <ProjectCard
            id={pj.id}
            nome={pj.nome}
            nomespace={pj.nomespace}
            projectIMG={pj.projectIMG}
            projectThumbnail={pj.projectThumbail}            
            sobre={pj.sobre}
            link={pj.link}
            tipo={pj.tipo}
            color={pj.cor}
            tema={theme}
          />          
      </li>
      </>
        ) : null
      ))}
      </ol>
      </div>
      </section>                         
    </>
    )
  }
}

export default Projetos
