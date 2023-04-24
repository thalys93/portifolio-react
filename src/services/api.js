import axios from 'axios';

// exportações da api

// projects (para visualização dos projetos)
export const apiProjects = async () => {
    try{
        const response  = await axios.get("https://strapi-production-6edf.up.railway.app/api/projetos?populate=*")
        return response.data
    }catch(error){
        console.error('Falha ao buscar Dados na Api', error);
        throw error;
    }
}


// ID (para visualização do card com o id)
export const apiId = async (id) => {
    try{
        const response = await axios.get(`https://strapi-production-6edf.up.railway.app/api/projetos/${id}?populate=*`)
        return response.data
    }catch(error){
        console.error('Falha ao buscar Dados na Api', error);
        throw error;
    }
}