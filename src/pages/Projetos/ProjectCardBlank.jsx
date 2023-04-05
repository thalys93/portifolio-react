import React, { useState , useEffect} from 'react'
import LoadingCircle from '../layout/loading-component/Loading';
import { Link } from 'react-router-dom';

import './projects.css'


function ProjectCardBlank() {

    const [cardLoading, setCardLoading] = useState(true);
    const [emptyCard, setEmptyCard] = useState([]);

        useEffect(() => {
        fetch('http://26.79.95.70:1337/api/projetos?fields[0]')
        .then((response) => response.json())        
        .then(setEmptyCard)     
        setEmptyCard(false);          
    }, []);   



    return (             
    
        <div id='pjList'>
    {cardLoading ? ( LoadingCircle) : (
        emptyCard.data?.map((card,id1) => (
        <li id='pjCardBlank' key={id1}>          
            <div id='pjTitle'>
          <h3> {card.attributes} </h3>           
            </div>
            <div id='pjDetails'>
          <img src={card.attributes} className="imgBk"/>          
          <Link className='btn btn-outline-light'> {card.attributes} </Link>
            </div>
            <hr />
        </li>
        ))
    )}
</div>
)
}

export default ProjectCardBlank