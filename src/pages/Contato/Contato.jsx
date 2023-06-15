import {React, useContext, useState} from 'react'
import SobreUtils from '../../services/contactUtils/iconsStates'

// React Icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { IoLogoWhatsapp, IoIosPaper } from 'react-icons/io'
import { ThemeContext } from '../../services/context/ThemeContext';

// CSS
import './contato.css'
import { Helmet } from 'react-helmet';

function Contato() {  


  // Set States de Icons

  const {
    GiconTxt, 
    LiconTxt, 
    IiconTxt, 
    EiconTxt, 
    WiconTxt, 
    CiconTxt,
    GMouseClickIconTxt, 
    LMouseClickIconTxt, 
    IMouseClickIconTxt, 
    EMouseClickIconTxt, 
    WMouseClickIconTxt, 
    CMouseClickIconTxt
  } = SobreUtils();

  const { theme } = useContext(ThemeContext)
  

  return (
  <section className='contactSection'>

    <Helmet>
      <title>Contato</title>
      <link rel="shortcut icon" href="https://www.svgrepo.com/show/444350/gui-contacts.svg" type="image/x-icon" />
    </Helmet>

<article className='contactArticle'>
      <div className='tituloDiv'>
        <h3>Minhas Redes Sociais </h3>
        <span className={theme? 'text-dark' : 'text-light-emphasis'}> Clique nos Icones</span>
      </div>

    <div className='allIcons'>
      <ol className="IconDiv1 list-group list-group-horizontal">
        <li className='gitFig' onClickCapture={GMouseClickIconTxt}>
          <FaGithub className='contactIcon'/>
          <a id={GiconTxt ? 'iconTxt' : 'iconTxtShow'} href='http://github.com/thalys93/' className={theme? 'text-dark' : 'text-light'} target='_blank'> Acesse Meu Github </a>
        </li>

        <li className="linkFig" onClickCapture={LMouseClickIconTxt}>
          <FaLinkedin className='contactIcon'/>
          <a id={LiconTxt ? 'iconTxt' : 'iconTxtShow'} href='https://www.linkedin.com/in/luis-rodrigues202/' className={theme? 'text-dark' : 'text-light'} target='_blank'> Meu Perfil No Linkedin</a>
        </li>

        <li className='instaFig' onClickCapture={IMouseClickIconTxt} >
          <FaInstagram className='contactIcon'/>
          <a id={IiconTxt ? 'iconTxt' : 'iconTxtShow'} href='https://www.instagram.com/luiss_xavierr/' className={theme? 'text-dark' : 'text-light'} target='_blank'> Meu Instagram </a>
        </li>
      </ol>

      <ol className="IconDiv2 list-group list-group-horizontal">
        <li className='emailFig' onClickCapture={EMouseClickIconTxt}>
          <AiFillMail className='contactIcon'/>
          <a id={EiconTxt ? 'iconTxt' : 'iconTxtShow'} href='mailto:luisthalys1@hotmail.com,luisthalys@gmail.com' className={theme? 'text-dark' : 'text-light'} target='_blank'> Me Mande um Email</a> 
        </li>

        <li className='whatsFig' onClickCapture={WMouseClickIconTxt}>
          <IoLogoWhatsapp className='contactIcon'/>
          <a id={WiconTxt ? 'iconTxt' : 'iconTxtShow'} href='https://wa.me/555191485593' className={theme? 'text-dark' : 'text-light'} target='_blank'> Me Mande uma Mensagem</a>
        </li>

        <li className='curriculumFig' onClickCapture={CMouseClickIconTxt}>
          <IoIosPaper className='contactIcon'/>
          <a id={CiconTxt ? 'iconTxt' : 'iconTxtShow'} href='https://drive.google.com/file/d/1oZg3J8Ru8UPD3Vazv1jcgFW7rKLbT5r0/view?usp=share_link' className={theme? 'text-dark' : 'text-light'}  target='_blank'> Meu Currículo </a>
        </li>
      </ol>
    </div>
  </article>
    </section>
  )
}

export default Contato
