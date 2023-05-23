import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProjectDados() {

    const { id } = useParams();
    
    const [projetos, setProjetos] = useState([
      {
        id: 1,
        nome: "Portifólio em React",
        nomespace: "portifolio-react",
        imageURL: "",
        tipo: "Portifólio",
        sobre:
          "Meu Portifólio em React, Desenvolvido com react, e usando um banco de dados.",
        link: "exemplo.com.br",
      },
      {
        id: 2,
        nome: "Dabru Ateliê",
        nomespace: "dabruatelie",
        imageURL: "",
        tipo: "Comercial",
        sobre:
          "Projeto Experimental de um comércio de fios , que ainda está em desenvolvimento",
        link: "exemplo.com.br",
      },
      {
        id: 3,
        nome: "Cadê Meu Rango",
        nomespace: "cademeurango",
        imageURL: "",
        tipo: "Curso",
        sobre:
          "Projeto Mais Recente, baseado em um site de receitas, e com diversas tecnologias, usando react para front e java para back",
        link: "exemplo.com.br",
      },
      {
        id: 4,
        nome: "Testador de Nacionalidade",
        nomespace: "nacionalidadeTester",
        imageURL: "",
        tipo: "Experimental",
        sobre:
          "Aplicativo Experimental baseado em If Else, que Testa a nacionalidade das Pessoas. construido em cima de uma interface simples usando o bootstrap",
        link: "exemplo.com.br",
      },
      {
        id: 5,
        nome: "Cadê Meu Banzo",
        nomespace: "cademeuBanzo",
        imageURL: "",
        tipo: "Curso",
        sobre:
          "Primeiro Projeto Desenvolvido, ainda utilizando a ide do bootstrap studio.",
        link: "exemplo.com.br",
      },
    ]);
    
        
    return {projetos, setProjetos} 
}