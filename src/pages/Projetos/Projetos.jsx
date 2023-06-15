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

  const {carregou, contador, dados} = ProjectUtils();    
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
        <title>Meus Projetos</title>
        <link rel="shortcut icon" href="https://www.svgrepo.com/show/15389/tasks.svg" type="image/x-icon" />
      </Helmet>

      <Navbar tema={theme}/>

      <section className='ProjectSection'>
        <h3 className='text-center mb-5 text-decoration-underline'> Meus Projetos </h3>
      <div className='overflow-y-auto overflow-x-auto container listOverflow'>
      <ol className='list-group list-group-horizontal list-group-numbered gap-4 container ProjectList'> 
      {dados?.map((pj, index) => (
        contador > index ? (
      <>
      <li key={index} className='animate__animated animate__fadeIn'>
          <ProjectCard
            id={pj._id}
            nome={pj.nome}
            nomespace={pj.nomespace}
            projectIMG={pj.detalhes.projectIMG}                     
            sobre={pj.detalhes.sobre}
            link={pj.detalhes.link}
            tipo={pj.detalhes.tipo}
            color={pj.detalhes.cor}
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
