import React from 'react'

// Estilizações e Icones
import './home.css'
import styled from 'styled-components'
import {Html5} from '@styled-icons/boxicons-logos/Html5'
import {Css3} from '@styled-icons/boxicons-logos/Css3'
import {Javascript} from '@styled-icons/boxicons-logos/Javascript'
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo'
import {LogoAngular} from '@styled-icons/ionicons-solid/LogoAngular'

let PerfImg = '/assets/img/me.jpg'



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
        <div id="iconsDiv"> 
          <a id="iconDetails" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target='_blank'>
            <Html5 id="icon" />
            <span>HTML</span>            
          </a>

          <a id="iconDetails" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
          <Css3 id="icon"/>
          <span>CSS</span>
          </a>

          <a id="iconDetails" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
          <Javascript id="icon"/>
          <span>Javascript</span>
          </a>

          <a id="iconDetails" href="https://react.dev/" target="_blank">
          <ReactLogo id="icon"/>
          <span>React</span>
          </a>

          <a id="iconDetails" href="https://angular.io/" target="_blank">
          <LogoAngular id="icon"/>                   
          <span>Angular</span>
          </a>

        </div>
    </section>
  )
}

export default Home
