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

function ProjectCard({id, nome, nomespace, projectIMG, projectThumbnail, sobre, link, tipo, color}) {
  
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
        <Card className='customColor' key={id}>
          <Card.Header>    
            <div className='flex text-center mb-2'>
            <h5 className='user-select-none'> {nome} </h5>                     
            <span className='text-center user-select-none' style={{color: color}}> ({tipo}) </span>
            </div>
            <Image src={projectIMG} height={160}/>            
          </Card.Header>
          <Card.Body> 
            <div className='text-center'>          
            <Link 
                to={id +'/'+ nomespace}                
                preventScrollReset={true}>   
            <Pjmodal
            id={id}
            nome={nome}
            projectIMG={projectIMG}            
            sobre={sobre}
            link={link}
            tipo={tipo}
            color={color}        
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