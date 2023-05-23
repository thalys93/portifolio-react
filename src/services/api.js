import axios from 'axios';

// exportações da api

const Projetos = 'https://strapi-production-6edf.up.railway.app/api/projetos?populate=*';
const ProjetosId =  `https://strapi-production-6edf.up.railway.app/api/projetos/`;

// projects (para visualização dos projetos)
export const apiProjects = async () => {
    try{
        const response  = await axios.get(Projetos)
        return response.data
    }catch(error){
        console.error('Falha ao buscar Dados na Api', error);
        throw error;
    }
}


// ID (para visualização do card com o id)
export const apiId = async (id) => {
    try{
        const response = await axios.get(ProjetosId + id + "?populate=*");
        return response.data
    }catch(error){
        console.error('Falha ao buscar Dados na Api', error);
        throw error;
    }
}
