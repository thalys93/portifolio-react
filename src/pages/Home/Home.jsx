// Libs
import React, { useContext } from 'react'
import  { FaJava, FaHtml5, FaCss3Alt, FaAngular, FaReact, FaNodeJs} from 'react-icons/fa';
import { SiMysql, SiCsharp, SiPhp, SiExpress, SiJavascript, SiMongodb,  } from 'react-icons/si'
import { DiDotnet } from 'react-icons/di'
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
        <title>Página Inicial</title>
        <link rel="icon" href="https://www.svgrepo.com/show/501871/home-house.svg" />
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

          <a className={theme? 'iconDetails ExpressD' : 'iconDetails Express'} href='https://expressjs.com/pt-br/' target='_blank'>
            <SiExpress className='icon'/>
            <span>Express</span>
          </a>

          <a className={theme? 'iconDetails MongoD' : 'iconDetails Mongo'} href='https://www.mongodb.com/' target='_blank'>
            <SiMongodb className='icon'/>
            <span>MongoDB</span>
          </a>

          <a className={theme? 'iconDetails MySqlD' : 'iconDetails MySql'} href='https://www.mysql.com/' target='_blank'>
            <SiMysql className='icon'/>
            <span>My SQL</span>
          </a>

          <a className={theme? 'iconDetails PHPD' : 'iconDetails PHP'} href='https://www.php.net/' target='_blank'>
            <SiPhp className='icon'/>
            <span>PHP</span>
          </a>

          <a className={theme? 'iconDetails CSharpD' : 'iconDetails CSharp'} href='https://pt.wikipedia.org/wiki/C_Sharp' target='_blank'>
            <SiCsharp className='icon'/>
            <span>C#</span>
          </a>

          <a className={theme? 'iconDetails NetD' : 'iconDetails Net'} href='https://dotnet.microsoft.com/pt-br/' target='_blank'>
            <DiDotnet className='icon'/>
            <span>.NET</span>
          </a>

          <a className={theme? 'iconDetails JavaD' : 'iconDetails Java'} href='https://www.java.com/pt-BR/' target='_blank'>
            <FaJava className='icon'/>
            <span>Java</span>
          </a>          
        </div>          

    </section>
  )
}



export default Home
