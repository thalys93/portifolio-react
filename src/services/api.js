import axios from 'axios';

// exportações da api

// field (para visualização do card vazio)
export const apiField = async () => {
    try{
        const response = await axios.get('http://26.79.95.70:1337/api/projetos?fields[0]');
        return response.data;
    }catch(error){
        console.error('Falha ao buscar Dados na Api', error);
    throw error;
    }
};


// projects (para visualização dos projetos)
export const apiProjects = async () => {
    try{
        const response  = await axios.get("http://26.79.95.70:1337/api/projetos?populate=*")
        return response.data
    }catch(error){
        console.error('Falha ao buscar Dados na Api', error);
        throw error;
    }
}


// ID (para visualização do card com o id)
export const apiId = async (id) => {
    try{
        const response = await axios.get(`http://26.79.95.70:1337/api/projetos/${id}?populate=*`)
        return response.data
    }catch(error){
        console.error('Falha ao buscar Dados na Api', error);
        throw error;
    }
}