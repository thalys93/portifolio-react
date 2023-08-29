import {useState, useEffect} from 'react'
// import { apiProjects } from '../api';
import apiLocal from './projects.json'

export function ProjectUtils() {
        
    const [carregou, setCarregou] = useState(false);
    const [contador, setContador] = useState(0);
    const [dados, setDados] = useState([]);
    
    // Busca Dados na api
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await apiProjects();
                setDados(apiLocal);
                setTimeout(() => {                    
                    setCarregou(true);
                }, 1500);
            } catch (error) {
                console.log(error);
            }
        };        

        fetchData();
    }, []);

    // Animação de Carregamento
    useEffect(() => {
        if(carregou) {
            const timer = setInterval(() => {
                setContador((contador) => contador + 1);                                
            }, 120);

            return() => {
                clearInterval(timer);
            };
        }
    }, [carregou]);

        
        
    return {        
        carregou,
        contador,
        dados,       
    }

}