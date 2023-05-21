// React e React DOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// Router
import Routes from './Routes'

// Estilos Globais
import 'react-tooltip/dist/react-tooltip.css'
import 'animate.css'
import './css/global.css'
import './css/fonts.css'
import './css/respon.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
)
