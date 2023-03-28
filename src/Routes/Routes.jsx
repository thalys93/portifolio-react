// Router e React
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Import das Paginas
import App from '../App'
import Home from '../Pages/Home/Home'
import Sobre from '../Pages/Sobre/Sobre'
import Projetos from '../pages/Projetos/Projetos'
import Contato from '../Pages/Contato/Contato'
import Experiência from '../Pages/Experiencia/Experiencia'
// Página de Error
import Error from '../Pages/Error/Error'


function Routes() {
    const Router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <Error />,
            children: [
                {
                    path: '/Inicio',
                    element: <Home />
                },
                {
                    path: 'sobre',
                    element: <Sobre />
                },
                {
                    path: 'projetos',
                    element: <Projetos />
                },
                {
                    path: 'contato',
                    element: <Contato />
                },
                {
                    path: 'experiencia',
                    element: <Experiência />
                }
            ]
        }
    ])
    
    return (
        <RouterProvider router={Router} />
    )

}

export default Routes
