import React from 'react'
import './sobre.css'

let Me2 = "assets/img/me2.jpg"

function Sobre() {
  return (
    <section className="SobreSection">
      <div id="photo">
        <img src={Me2}/>
      </div>

      <div className='TituloDiv'>
        <h1> Luis Thalys Rodrigues</h1>
        <h2> Quem Sou Eu?</h2>
      </div>

      <div className='TxtDiv'>
        <p> Eu Sou um desenvolvedor Front-end com conhecimento </p>
        <p> avançado em Html e Tecnologias como React, Angular </p>
        <p> Especialista em desenvolvimento de aplicações web responsivas e interativas</p>
        <p> Como Desenvolvedor do Ecommerce de fios Dabruatelie, estou constantemente Aprimorando</p>
        <p> a Plataforma e trabalhando no desenvolvimento de novos recursos, bem como</p>
        <p> Criando um portifólio para mostrar minhas habilidades e contribuições</p>
        <p> para projetos Futuros. sou capaz de oferecer soluções criativas e eficazes para problemas complexos de desenvolvimento web</p> 


      </div>
    </section>
  )
}

export default Sobre
