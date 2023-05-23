import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProjectDados() {

    const { id } = useParams();
    
    const [projetos, setProjetos] = useState([
      {
        id: 1,
        nome: "Portifólio em React",
        nomespace: "portifolio-react",
        imageURL:
          "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682300440/portifolio_09bceec19f.png",
        tipo: "Portifólio",
        sobre:
          "Meu portifolio é um site feito em React, que mostra meus projetos de desenvolvimento web. Nele, eu apresento os trabalhos que realizei, as tecnologias que utilizei e as soluções que propus. Meu objetivo é demonstrar minhas habilidades como desenvolvedor web e atrair novas oportunidades de trabalho.",
        link: "exemplo.com.br",
      },
      {
        id: 2,
        nome: "Dabru Ateliê",
        nomespace: "dabruatelie",
        imageURL:
          "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682300187/dabruatelie_1b730933fc.png",
        tipo: "Comercial",
        sobre:
          "Projeto Experimental de um comércio de fios , que ainda está em desenvolvimento",
        link: "exemplo.com.br",
      },
      {
        id: 3,
        nome: "Cadê Meu Rango",
        nomespace: "cademeurango",
        imageURL:
          "https://res.cloudinary.com/dh39ahmpj/image/upload/v1684280950/Cad%C3%AA%20Meu%20Rango/thumb_do_site_knjbzn.png",
        tipo: "Curso",
        sobre:
          "Projeto Mais Recente, baseado em um site de receitas, e com diversas tecnologias, usando react para front e java para back",
        link: "exemplo.com.br",
      },    
      {
        id: 4,
        nome: "Cadê Meu Banzo",
        nomespace: "cademeuBanzo",
        imageURL:
          "https://res.cloudinary.com/dh39ahmpj/image/upload/v1682300443/pcmb_3099711580.png",
        tipo: "Curso",
        sobre:
          "Primeiro Projeto Desenvolvido, ainda utilizando a ide do bootstrap studio.",
        link: "exemplo.com.br",
      },
    ]);
    
        
    return {projetos, setProjetos} 
}