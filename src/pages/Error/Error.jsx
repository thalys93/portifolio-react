  // React +

import { Helmet } from 'react-helmet'
import Navbar from '../layout/navbar-component/Navbar.jsx'
import { ThemeContext } from '../../services/context/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './error.css'



function Error() {

  const {theme} = useContext(ThemeContext);  

    useEffect(() => {
    if (theme) {
      document.body.classList.add('lightBody')
    } else {
      document.body.classList.remove('lightBody')
    }
    }, [theme]);

  return (
    <>    
    <Helmet>
      <title>Opa! Algo deu Errado </title>
      <link rel="shortcut icon" href="https://res.cloudinary.com/dh39ahmpj/image/upload/v1682364473/portifolio.dev/icons8-erro-16_dvxo8h.png" type="image/x-icon" />
    </Helmet>
    <Navbar tema={theme}/>
    <section className='container errorContainer user-select-none'>
      <div className={theme? 'errorWhite p-3' : 'error p-3'}>
        <h3> Ops! <br/> A Página que você está procurando não Existe!</h3>
        <hr className={theme? 'lineColorD' : 'lineColor'}/>
        <div className='text-center'>
          <Link to='/' className={theme? 'btn btn-outline-dark' : 'btn btn-outline-light'}>
            <h3 className='mt-2'> Deseja Retornar?</h3>
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Error
