// React e React DOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// Router
import Routes from './Routes'

// Contexto
import { ThemeProvider } from './services/context/ThemeContext'

// Estilos Globais
import 'animate.css'
import 'react-tooltip/dist/react-tooltip.css'
import './css/global.css'
import './css/fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(    
    <ThemeProvider>
        <Routes/>
    </ThemeProvider>
)
