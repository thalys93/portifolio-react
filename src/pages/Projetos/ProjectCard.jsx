// Import do React, Use State ,Use Effect , Link , Modal
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';


// Import do Modal
import Pjmodal from './Pjmodal';
import CardPlaceholder from './CardPlaceholder';

// CSS
import './projects.css'
import './modalUtils.css'



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
            <h3 className='user-select-none'> {nome} </h3>                     
            <span className='text-center text-secondary user-select-none'> ({tipo}) </span>
            <Image src={imageURL} height={50}/>
          </Card.Header>
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
        </Card>
    ) : ( <CardPlaceholder/> )          
      }
    </>
  )
}

export default ProjectCard