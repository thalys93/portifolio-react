// Libs
import React, { useContext } from 'react'
import  { FaHtml5, FaCss3Alt, FaAngular, FaReact, FaNodeJs} from 'react-icons/fa';
import { SiAdonisjs, SiExpress, SiJavascript } from 'react-icons/si'
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
          <div className='flex flex-row'>
            <figcaption className='AuthorName'> Luis Thalys RX <span className='text-secondary'>.dev</span></figcaption>            
          </div>
        </figure>
        <h2>Desenvolvedor Web </h2>         
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

          <a className={theme? 'iconDetails NodeD' : 'iconDetails Node'} href='https://nodejs.org/pt-br' target='_blank'>    
            <FaNodeJs className='icon'/>
            <span>Node.js</span>          
          </a>

          <a className={theme? 'iconDetails AdonisD' : 'iconDetails Adonis'} href='https://adonisjs.com/' target='_blank'>
            <SiAdonisjs className='icon'/>
            <span>Adonis.js</span>
          </a>

          <a className={theme? 'iconDetails ExpressD' : 'iconDetails Express'} href='https://expressjs.com/pt-br/' target='_blank'>
            <SiExpress className='icon'/>
            <span>Express</span>
          </a>
        </div>          

    </section>
  )
}



export default Home
