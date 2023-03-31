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
        <p> Nascido em Lugar Tal sobre Tal Informação <br/>
        Eu já Fiz Tais Coisas, de Forma Assincrona <br/> 
        Criando Descrição para Definir a Persona <br/>
        e Assim Gerar um Resultado Definido Sobre <br/>
        e Terminar falando da motivação por ter criado um portifólio
        </p>
      </div>
    </section>
  )
}

export default Sobre
