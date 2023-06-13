import axios from 'axios';

// exportações da api
const Projetos = 'https://portifolio-backend-pauq.onrender.com/api/projetos';

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

