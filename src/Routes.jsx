// Router e React
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Import das Paginas
import App from './App'

import Home from './pages/Home/Home'

import Sobre from './pages/Sobre/Sobre'

import Projetos from './pages/Projetos/Projetos'
import Projeto from './pages/Projetos/Projeto'

import Contato from './pages/Contato/Contato'

// Página de Error
import Error from './Pages/Error/Error'

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
        },

        {
            path: 'Projetos/:id/:nome'  ,
            element: <Projeto />
        },
    ])

function Routes() {        
    return (
        <RouterProvider router={router} />
    )

}

export default Routes
