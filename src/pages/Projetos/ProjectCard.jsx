import React, { useState , useEffect} from 'react'
import LoadingCircle from '../layout/loading-component/Loading';
import { Link } from 'react-router-dom';

import './projects.css'


function ProjectCard() {

    // Buscar na Api Informações
    const [loading, setLoading] = useState(true);    
    const [Pjdata, setPjData] = useState([]);        
    const local = "http://26.79.95.70:1337"    


    useEffect(() => {                            
    fetch('http://26.79.95.70:1337/api/projetos?populate=*')
    .then((response) => response.json())        
    .then(setPjData);

    setLoading(false);

    }, []);

    
  return (
    // Depois de Carregado
    <div id='pjList'>
    {setLoading ? 
      <LoadingCircle/>  : (      
        Pjdata.data?.map((pj,id1) => (          
        <li id='pjCard' key={id1}>          
            <div id='pjTitle'>
          <h3> Projeto : {pj.attributes.nome} </h3>           
            </div>
            <div id='pjDetails'>
          <img src={local + pj.attributes.image.data.attributes.url } className="imgBk"/>          
          <Link to={pj.id + '/'+ pj.attributes.nomespace + '/'} className='btn btn-outline-light'> Saiba Mais sobre o {pj.attributes.nome} </Link>
            </div>
            <hr />
        </li>
        ))
      )}  
    </div>
  )
}

export default ProjectCard