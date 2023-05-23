import {useState, useEffect} from 'react'
import { ProjectDados } from './dados';


export function ProjectUtils() {
        
    const [carregou, setCarregou] = useState(false);
    const [contador, setContador] = useState(0);

    const {projetos} = ProjectDados()

    useEffect(() => {
        setTimeout(() => {
            setCarregou(true)
        } , 500)

        if(carregou) {
            const timer = setInterval(() => {
                setContador((contador) => contador + 1);
                projetos;
            }, 500);

            return() => {
                clearInterval(timer);
            };
        }
    }, [carregou]);

    return {        
        carregou,
        contador,
        projetos,
    }

}