import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProjectDados() {

    const { id } = useParams();

    
    
    const [projetos, setProjetos] = useState([
      {
        id: 1,
        nome: "Portifólio em React",
        nomespace: "portifolio-react",
        projectIMG:
          "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682300440/medium_portifolio_09bceec19f.png",
        projectThumbail: "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682300440/thumbnail_portifolio_09bceec19f.png",
        tipo: "Portifólio",
        sobre:
          "Meu Segundo Portifólio usando o React como framework e usando técnicas e responsividade e cleanCode.\nMais Optimizado, Responsivo, Minimalista e Bonito. ",
        link: "https://github.com/thalys93/portifolio-react",
        cor: 'cyan'
      },
      {
        id: 2,
        nome: "Dabru Ateliê",
        nomespace: "Dabruatelie",
        projectIMG:
          "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682300187/medium_dabruatelie_1b730933fc.png",
        projectThumbail: "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682300187/thumbnail_dabruatelie_1b730933fc.png",
        tipo: "Comercial",
        sobre:
          "Dabru Ateliê é um Ecommerce de produtos artesanais baseado em fios de malha e derivados.\nAtualmente o site, está em pausado do desenvolvimento.",
        link: "https://github.com/thalys93/dabruatelie",
        cor: 'chartreuse'
      },
      {
        id: 3,
        nome: "Cadê Meu Rango",
        nomespace: "cademeurango",
        projectIMG:
          "https://res.cloudinary.com/dh39ahmpj/image/upload/v1684280950/Cad%C3%AA%20Meu%20Rango/thumb_do_site_knjbzn.png",
        projectThumbail: "https://res.cloudinary.com/dh39ahmpj/image/upload/v1684280950/Cad%C3%AA%20Meu%20Rango/thumb_do_site_knjbzn.png",
        tipo: "Curso",
        sobre:
          "Cade meu rango é uma aplicação SPA (single page aplication) que permite aos usuários encontrar receitas e dicas culinárias de acordo com seus interesses e preferências.",
        link: "https://github.com/thalys93/CadeMeuRango-FrontEnd",
        cor: 'yellow'
      },
      {
        id: 4,
        nome: "Testador de Nacionalidade",
        nomespace: "nacionalidadeTester",
        projectIMG:
          "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682226731/medium_nacio_eafe15ca46.png",
        projectThumbail: "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682300429/thumbnail_nacio_24ce973937.png",
        tipo: "Experimental",
        sobre:
          "O Testador de Nacionalidade é uma aplicação de teste inovadora que foi desenvolvida para ajudar a verificar a nacionalidade de uma pessoa. Através do uso do método if else, a aplicação pode verificar se a pessoa é estrangeira ou não, com base em informações fornecidas pelo usuário.",
        link: "https://github.com/thalys93/Testador-De-Nacionalidade",
        cor: 'red'
      },
      {
        id: 5,
        nome: "Cadê Meu Banzo",
        nomespace: "cademeuBanzo",
        projectIMG:
          "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682226730/medium_pcmb_2e65d00351.png",       
        projectThumbail: "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682300443/thumbnail_pcmb_3099711580.png",
        tipo: "Curso",
        sobre:
          "O Projeto Cadê Meu Banzo é uma aplicação web inovadora que visa melhorar a experiência dos usuários do transporte público nas cidades de Porto Alegre e Alvorada.",
        link: "https://github.com/thalys93/pcmb",
        cor: 'orange'
      },
    ]);
    
        
    return {projetos, setProjetos} 
}