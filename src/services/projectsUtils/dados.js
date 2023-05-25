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
          "Meu Segundo Portifólio usando o React como framework e desta vez com o Strapi como backend.\nMais Optimizado, Responsivo, Minimalista e Bonito. ",
        link: "https://github.com/thalys93/portifolio-react",
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
          "Dabru Ateliê é um Ecommerce de produtos artesanais baseado em fios de malha e derivados.\nnele possui uma interface amigável, e minimalista, onde se é possível, saber sobre a autora e os produtos que a mesma desenvolveu.\nhá planos para no futuro, se tornar o site mais que um portifólio, mas sim um comercio moderno, onde possiveis clientes, só procurem o produto na galeria e assim dando inicio a negociação de um produto, via whatsapp.\nAtualmente o site, está em desenvolvimento.",
        link: "https://github.com/thalys93/dabruatelie",
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
          "Cade meu rango é uma aplicação SPA (single page aplication) que permite aos usuários encontrar receitas e dicas culinárias de acordo com seus interesses e preferências. A aplicação conta com recursos como autenticação, modo escuro, criação de receitas e dicas, categorização por ingredientes, e também uma api que busca dados de receitas em um banco de dados mysql. A aplicação foi desenvolvida usando react no front end e Java no back end.",
        link: "https://github.com/thalys93/CadeMeuRango-FrontEnd",
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
          "O Projeto Cadê Meu Banzo é uma aplicação web inovadora que visa melhorar a experiência dos usuários do transporte público nas cidades de Porto Alegre e Alvorada. Com foco em unificar diferentes aplicativos de transporte e recarga de cartões em um só lugar, a aplicação torna mais fácil e acessível para os usuários gerenciarem suas viagens diárias.",
        link: "https://github.com/thalys93/pcmb",
      },
    ]);
    
        
    return {projetos, setProjetos} 
}