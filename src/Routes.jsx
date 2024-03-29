// Router e React
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Import das Paginas

// Import da App
import App from './App.jsx'

// Inicio
import Home from './pages/Home/Home.jsx'

// Página Sobre
import Sobre from './pages/Sobre/Sobre.jsx'

// Projetos e Projeto
import Projetos from './pages/Projetos/Projetos.jsx'
import Projeto from './pages/Projetos/Projeto.jsx'

// Contato
import Contato from './pages/Contato/Contato.jsx'

// Página de Error
import Error from './pages/Error/Error.jsx'

const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <Error/>,
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
