// Libs
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';


// Componentes
import Pjmodal from '../container/Pjmodal';
import CardPlaceholder from '../placeholder/CardPlaceholder';

// CSS
import '../css/projects.css'
import '../css/modalUtils.css'



function ProjectCard({id, nome, nomespace, imageURL, sobre, link, tipo}) {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 210)
  }, []);

  return (    
    <>      
    {loading ? (                      
        <Card className='customColor' key={id}>
          <Card.Header>
            <div className='mb-1 text-center'>
              <h3 className='user-select-none'> {nome} </h3>                     
              <span className='text-secondary-emphasis user-select-none'> ({tipo}) </span>
            </div>
            <Image src={imageURL} height={180}/>
          </Card.Header>
          <Card.Body>
            <div id='pjDetails'>
          {/* Desktop Modal */}
            <Link 
                to={id +'/'+ nomespace}                
                preventScrollReset={true}>   
            <Pjmodal
            id={id}
            nome={nome}
            imageURL={imageURL}
            sobre={sobre}
            link={link}
            tipo={tipo}
            />
            </Link>          
          <Link to = { '/' + 'projeto' + '/' + id +'/'+ nomespace} className='btn btn-outline-light' id='LinkM'>
            Saiba Mais
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