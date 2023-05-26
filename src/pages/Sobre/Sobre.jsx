import React from 'react'

// CSS
import './sobre.css'

// IMG
let Me2 = "/img/me2.jpg"

function Sobre() {
  document.title = 'Luis Thalys RX - Sobre Mim'
  document.head.querySelector('link[rel="icon"]').href = 'https://res.cloudinary.com/dh39ahmpj/image/upload/v1682362799/portifolio.dev/icons8-usu%C3%A1rio-16_mi3fki.png'

  return (
    <section className="SobreSection gap-4 flex-column flex-md-row">

      <article className='imgArticle'>        
          <img src={Me2} className='photo'/>
      </article>

      <article className='container textArticle me-5'>      
            <div className='TituloDiv text-center mb-3'>
              <h1 className='user-select-none'> Luis Thalys Rodrigues</h1>
              <span className='text-light-emphasis user-select-none'> Quem Sou Eu?</span>
            </div>
            <div className='mobileTxtChange'>
        <p> Eu Sou um desenvolvedor <b>Front-end</b> com conhecimento
         Intermediário em 
         <b id='htmlTxt'> HTML </b>
         e Frameworks como : <b id='reactTxt'>React  </b> ,
        <b id='angularTxt'> Angular </b> </p>

         <p> Especialista em desenvolvimento de aplicações web responsivas e interativas
         Como Desenvolvedor do Site de Receitas<b><a href='https://cade-meu-rango-front.web.app' target='_blank' className='atelie'> Cadê Meu Rango</a></b>, 
         onde estou constantemente aprimorando         
         a Plataforma e trabalhando no desenvolvimento de novos recursos. </p>

         <p>Bem como Criando um portifólio para mostrar minhas habilidades e contribuições
         para projetos Futuros. sou capaz de oferecer soluções criativas e eficazes para problemas complexos de desenvolvimento web. 
          </p>
          </div>
            
      </article>
    </section>
  )
}

export default Sobre
