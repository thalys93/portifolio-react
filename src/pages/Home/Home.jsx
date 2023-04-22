import React from 'react'

// Estilizações e Icones
import './home.css'
import  { FaHtml5, FaCss3Alt, FaAngular, FaReact} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si'


// Imagens
let PerfImg = '/img/me.jpg'

function Home() {
  return (
    <section className='HomeSection'>
      <div id='FigureDiv'>
        <figure className='animate__animated animate__fadeIn' id="perfFig">
        <img src={PerfImg}/>
          <figcaption className='AuthorName'> Luis Thalys RX</figcaption>          
        </figure>
        <h2>Desenvolvedor Front End</h2>         
      </div>          
        <div id="iconsDiv" className='iconDiv'> 
          <a id="iconDetails" className='Html' href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target='_blank'>
            <FaHtml5 className="icon"/>
            <span id='Html'>HTML</span>            
          </a>

          <a id="iconDetails" className='Css' href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
          <FaCss3Alt className="icon"/>
          <span>CSS</span>
          </a>

          <a id="iconDetails" className='Javascript' href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
          <SiJavascript className="icon"/>
          <span>Javascript</span>
          </a>

          <a id="iconDetails" className='React' href="https://react.dev/" target="_blank">
          <FaReact className="icon"/>
          <span>React</span>
          </a>

          <a id="iconDetails" className='Angular' href="https://angular.io/" target="_blank">
          <FaAngular className="icon" />
          <span>Angular</span>
          </a>
        </div>          

    </section>
  )
}



export default Home
