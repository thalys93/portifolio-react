import React, { useContext, useEffect } from 'react'

import Footer from './pages/layout/footer-component/Footer'
import Navbar from './pages/layout/navbar-component/Navbar'

import { Outlet } from 'react-router-dom'
import { ThemeContext } from './services/context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    if (theme) {
      document.body.classList.add('lightBody')
    } else {
      document.body.classList.remove('lightBody')
    }
    }, [theme]);


  return (
    <main className='overflow-hidden'>
        <Navbar tema={theme}/>
          <Outlet/>                                         
        <Footer tema={theme}/>      
    </main>

    
  )
}

export default App

