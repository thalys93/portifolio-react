import React from 'react'
import './sobre.css'

let Me2 = "assets/img/me2.jpg"

function Sobre() {
  return (
    <section className="SobreSection">
      <div id="photo">
        <img src={Me2} className='animate__animated animate__fadeInLeftBig'/>
      </div>

      <div className='TitTxtDiv'>
        <div id='TituloDiv' className='animate__animated animate__fadeInDownBig'>
          <h1> Luis Thalys Rodrigues</h1>
          <h2> Quem Sou Eu?</h2>
        </div> 

        <div id='TxtDiv' className='animate__animated animate__fadeInRightBig'>
          <p>Eu Sou um desenvolvedor <b>Front-end</b> com conhecimento
         avançado em <b>Html</b> e Tecnologias como <b>React</b>, <b>Angular</b>.<br />
         Especialista em desenvolvimento de aplicações web responsivas e interativas
         Como Desenvolvedor do Ecommerce de fios <b><a href='https://github.com/thalys93/dabruatelie' target='_blank' className='atelie'>Dabruatelie</a></b>, onde estou constantemente Aprimorando
         a Plataforma e trabalhando no desenvolvimento de novos recursos, bem como
         Criando um portifólio para mostrar minhas habilidades e contribuições
         para projetos Futuros. sou capaz de oferecer soluções criativas e eficazes para problemas complexos de desenvolvimento web. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sobre
