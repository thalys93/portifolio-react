import React from 'react'

import Footer from './pages/layout/footer-component/Footer'
import Navbar from './pages/layout/navbar-component/Navbar'

import { Outlet } from 'react-router-dom'

function App() {
  return (    
    <>        
    <Navbar/>
      <main>
        <Outlet />                             
      </main>
      <footer>
        <Footer />
      </footer>
    </>
    
  )
}

export default App

