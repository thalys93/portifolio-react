// Import do React, Use State ,Use Effect , Link , Modal
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';
import { ProjectUtils } from '../../services/projectsUtils/projectUtils';


// Import do Modal
import Pjmodal from './container/Pjmodal';
import CardPlaceholder from './placeholder/CardPlaceholder';

// CSS
import './css/projects.css'
import './css/modalUtils.css'

function ProjectCard(props) {
  
  // Simula um Carregamento
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500)
  }, []);

  return (    
    <>      
    {loading ? (                      
        <Card className={props.tema? 'customColorD'  : 'customColor'} key={props.id}>
          <Card.Header className='bg-emphasis'>    
            <div className='flex text-center mb-1 mt-3'>
              <h5 className='user-select-none'> {props.nome} </h5>                     
              <span className={props.tema? 'text-center user-select-none text-dark' : 'text-center user-select-none'} style={{color: props.color}}> ({props.tipo}) </span>
            </div>
          </Card.Header>
            <Image src={props.projectIMG} className='projectImage'/>
          <Card.Body> 
            <div className='text-center'>          
            <Link 
                to={props.id +'/'+ props.nomespace}
                preventScrollReset={true}>   
            <Pjmodal
            id={props.id}
            nome={props.nome}
            projectIMG={props.projectIMG}
            sobre={props.sobre}
            link={props.link}
            tipo={props.tipo}
            color={props.color}  
            tema={props.tema}      
            />
            </Link>            
          </div>              
          </Card.Body>
        </Card>
    ) : ( <CardPlaceholder/> )
      }
    </>
  )
}

export default ProjectCard