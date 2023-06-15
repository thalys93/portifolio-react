// Router e React
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Import das Paginas

// Import da App
import App from './App'

// Inicio
import Home from './pages/Home/Home'

// Página Sobre
import Sobre from './pages/Sobre/Sobre'

// Projetos e Projeto
import Projetos from './pages/Projetos/Projetos'
import Projeto from './pages/Projetos/Projeto'

// Contato
import Contato from './pages/Contato/Contato'

// Página de Error
// import Error from './pages/Error/Error'

const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            // errorElement: <Error/>,
            children: [
                // Inicio
                {
                    path: '/',
                    element: <Home />
                },
                // Sobre
                {
                    path: 'Sobre',
                    element: <Sobre />
                },                                                                             
                // Contato        
                {
                    path: 'Contato',
                    element: <Contato />
                },                
            ]
        },

            // Projetos
        {
            path: 'Projetos',
            element: <Projetos />,
            children: [
                {
                    path: ':id/:nome',
                    element: <Projeto />
                }
            ]
        },

        {
            path: 'projeto/:id/:nome'  ,
            element: <Projeto />
        },
    ])

function Routes() {        
    return (
        <RouterProvider router={router} />
    )

}

export default Routes
