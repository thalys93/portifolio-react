// Imports do React e React DOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import do Router
import Routes from './Routes'

// Import de Estilos Globais
import 'animate.css'
import './css/global.css'
import './css/fonts.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
)
