import React, { useContext } from 'react'
import { ThemeContext } from '../../services/context/ThemeContext'

// CSS
import './sobre.css'
import { Helmet } from 'react-helmet'

// IMG
let Me2 = "/img/me2.png"

function Sobre() {    

  const {theme} = useContext(ThemeContext)

  return (
    <section className="SobreSection gap-4 flex-column flex-md-row">
      <Helmet>
        <title> Sobre Mim </title>
        <link rel="icon" href="https://www.svgrepo.com/show/490949/people.svg" />
      </Helmet>

      <article className='imgArticle user-select-none'>        
          <img src={Me2} className='photo'/>
      </article>

      <article className='container textArticle me-5'>      
            <div className='TituloDiv mb-3'>              
              <h1 className='user-select-none'> Luis Thalys Rodrigues</h1>
              <span className={theme? 'text-dark user-select-none' : 'text-light-emphasis user-select-none'}> Quem Sou Eu?</span>
            </div>
            <div className='mobileTxtChange'>
        <p> Eu Sou um desenvolvedor <b>Web</b> com conhecimento
         Intermediário em 
         <b id='htmlTxt'> HTML </b>
         e Frameworks como : <b id='reactTxt'>React  </b> ,
        <b id='angularTxt'> Angular </b> </p>        

         <p> Atualmente, estou trabalhando no projeto <b><a href='https://github.com/thalys93/gestao-e-lanche' target='_blank' className={theme? 'text-dark bold' : 'text-light bold'}> Gestão e Lanche </a></b>, 
         um empreendimento em desenvolvimento com foco em auxiliar pequenos restaurantes. <br/>
         Minha experiência nesse projeto envolve o desenvolvimento de aplicações web responsivas e interativas, 
         buscando criar soluções eficazes para problemas complexos de desenvolvimento web. <br/> 
         Estou empenhado em aprimorar constantemente a plataforma, 
         além de trabalhar no desenvolvimento de novos recursos para melhorar a experiência dos usuários.
         </p>

         <p>Meu portfólio web destaca projetos diversos que demonstram minhas habilidades em desenvolvimento web,
           buscando soluções personalizadas para desafios complexos. <br/>
           Reflete minha experiência em design responsivo, UX, integração de APIs, front-end e back-end, 
           sempre buscando aprender e aprimorar minhas habilidades para projetos inovadores em equipes colaborativas.
          </p>
          </div>
            
      </article>
    </section>
  )
}

export default Sobre
