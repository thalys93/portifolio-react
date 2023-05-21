import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineBell } from 'react-icons/ai'
import { AiOutlineLink } from 'react-icons/ai'
import { Badge, Dropdown } from 'react-bootstrap'
import { apiTips } from '../../../services/api'

// CSS
import './navbar.css'

function Barra() {  

  const [notifications, setNotifications] = React.useState(0)
  const [list, setList] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false)


  useEffect(() => {
    const fetchList = async () => {
      try{
        const data = await apiTips();
        setList(data);
        setNotifications(data.data.length)      
      } catch (error) {
        console.error('Falha ao buscar dados da API', error);
      }
    };
    fetchList();
  }, []);
  
  

  const itemCheck = isChecked? {textDecoration: 'line-through'} : {textDecoration: 'none'}

  let sino = null

  if (notifications !== 0) {
    sino = <Badge pill bg='danger' id='badgePosition'>{notifications}</Badge>
  }

    const abrirLink = () => {
      const linkProjeto = document.getElementById('projectLink').getAttribute('href');
      window.open(linkProjeto, "_blank");
    };

  return (
  <div>
    <nav>
      <ul id="navUL">
        <div id="HomeDiv">
        <li>
          <Link to="/" className="href">
            <span>Inicio</span>
          </Link>
        </li>
        </div>

        <div id="LinksDiv">
        <li>
          <Link to="/sobre" className="href">
            <span>Sobre Mim |</span> 
          </Link>          
        </li>            

        <li>
          <Link to="/projetos" className="href">
            <span>Projetos |</span>
            </Link>
        </li>

        <li>
          <Link to="/contato" className="href">
            <span>Contato |</span>
            </Link>
        </li>
        
          <Dropdown>
          <Dropdown.Toggle as='span' id="iconBell">
              {sino}
              <AiOutlineBell/>
           </Dropdown.Toggle>
           <Dropdown.Menu className='mt-1'>
            <Dropdown.Header className='text-center'> <h6 className='text-secondary'>Novidades</h6> </Dropdown.Header>
              <ol className='list-group list-group-numbered' id='listCount'>
                {list.data?.map((tip, i) => (
                <li className='list-group-item' key={i}>
                  <a href={tip.attributes.linkFromNew} target='_blank' id='projectLink'>
                    <span className='text-black '> {tip.attributes.tip} </span>                                                         
                      <AiOutlineLink className='text-black'/>
                  </a>
                </li>
                ))}
              </ol>
           </Dropdown.Menu>           
          </Dropdown>        
        </div>

      </ul>
    </nav>
  </div>
  )
}

export default Barra