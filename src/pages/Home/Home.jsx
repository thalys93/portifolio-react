// Libs
import React, { useContext } from 'react'
import  { FaHtml5, FaCss3Alt, FaAngular, FaReact} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si'
import { Helmet } from 'react-helmet';
import { ThemeContext } from '../../services/context/ThemeContext';

// CSS
import './home.css'

// IMG
let PerfImg = '/img/me.jpg'

function Home() {    

  const {theme} = useContext(ThemeContext)

  return (
    <section className='HomeSection'>
      <Helmet>
        <title> Luis Thalys RX - Página Inicial </title>
        <link rel="icon" href="https://res.cloudinary.com/dh39ahmpj/image/upload/v1682362799/portifolio.dev/icons8-casa-16_nutbqc.png" />
      </Helmet>
      <div id='FigureDiv'>
        <figure className='animate__animated animate__fadeIn' id="perfFig">
        <img src={PerfImg}/>
          <figcaption className='AuthorName'> Luis Thalys RX</figcaption>          
        </figure>
        <h2>Desenvolvedor Front End</h2>         
      </div>          
        <div id="iconsDiv" className='iconDiv'> 
          <a className={theme? 'iconDetails HtmlD' : 'iconDetails Html'} href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target='_blank'>
            <FaHtml5 className="icon"/>
            <span>HTML</span>            
          </a>

          <a className={theme? 'iconDetails CssD' : 'iconDetails Css'} href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
          <FaCss3Alt className="icon"/>
          <span>CSS</span>
          </a>

          <a className={theme? 'iconDetails JavascriptD' : 'iconDetails Javascript'} href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
          <SiJavascript className="icon"/>
          <span>Javascript</span>
          </a>

          <a className={theme? 'iconDetails ReactD' : 'iconDetails React'} href="https://react.dev/" target="_blank">
          <FaReact className="icon"/>
          <span>React</span>
          </a>

          <a className={theme? 'iconDetails AngularD' : 'iconDetails Angular'} href="https://angular.io/" target="_blank">
          <FaAngular className="icon" />
          <span>Angular</span>
          </a>
        </div>          

    </section>
  )
}



export default Home
