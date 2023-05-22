import {React, useState} from 'react'

// React Icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { IoLogoWhatsapp, IoIosPaper } from 'react-icons/io'

// CSS
import './contato.css'
import { Helmet } from 'react-helmet';

function Contato() {  


  // Set States de Icons
  const [GiconTxt, setIconTxt] = useState(true)
  const GMouseClickIconTxt = () => {setIconTxt(!GiconTxt)}     

  const [LiconTxt, setLiconTxt] = useState(true)
  const LMouseClickIconTxt = () => {setLiconTxt(!LiconTxt)}     

  const [IiconTxt, setIiconTxt] = useState(true)
  const IMouseClickIconTxt = () => {setIiconTxt(!IiconTxt)}     


  const [EiconTxt, setEiconTxt] = useState(true)
  const EMouseClickIconTxt = () => {setEiconTxt(!EiconTxt)}


  const [WiconTxt, setWiconTxt] = useState(true)
  const WMouseClickIconTxt = () => {setWiconTxt(!WiconTxt)}


  const [CiconTxt, setCiconTxt] = useState(true)
  const CMouseClickIconTxt = () => {setCiconTxt(!CiconTxt)}      

  return (
    <section id='contactSection'>
      <Helmet>
        <title>Luis Thalys RX - Contato </title>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dh39ahmpj/image/upload/v1682362903/portifolio.dev/icons8-telefone-16_kyuhcm.png" type="image/x-icon" />
      </Helmet>
      
      <div className='tituloDiv'>
        <h3>Minhas Redes Sociais </h3>
        <span> Clique nos Icones</span>
      </div>

    <div id='allIcons'>
      <div id="IconDiv1">
        <figure className='gitFig' onClickCapture={GMouseClickIconTxt}>
          <FaGithub className='contactIcon'/>
          <a id={GiconTxt ? 'iconTxt' : 'iconTxtShow'} href='http://github.com/thalys93/' target='_blank'> Acesse Meu Github </a>
        </figure>

        <figure className="linkFig" onClickCapture={LMouseClickIconTxt}>
          <FaLinkedin className='contactIcon'/>
          <a id={LiconTxt ? 'iconTxt' : 'iconTxtShow'} href='https://www.linkedin.com/in/luis-rodrigues202/' target='_blank'> Meu Perfil No Linkedin</a>
        </figure>

        <figure className='instaFig' onClickCapture={IMouseClickIconTxt} >
          <FaInstagram className='contactIcon'/>
          <a id={IiconTxt ? 'iconTxt' : 'iconTxtShow'} href='https://www.instagram.com/luiss_xavierr/' target='_blank'> Meu Instagram </a>
        </figure>
      </div>

      <div id="IconDiv2">
        <figure className='emailFig' onClickCapture={EMouseClickIconTxt}>
          <AiFillMail className='contactIcon'/>
          <a id={EiconTxt ? 'iconTxt' : 'iconTxtShow'} href='mailto:luisthalys1@hotmail.com,luisthalys@gmail.com' target='_blank'> Me Mande um Email</a> 
        </figure>

        <figure className='whatsFig' onClickCapture={WMouseClickIconTxt}>
          <IoLogoWhatsapp className='contactIcon'/>
          <a id={WiconTxt ? 'iconTxt' : 'iconTxtShow'} href='https://wa.me/555191485593' target='_blank'> Me Mande uma Mensagem</a>
        </figure>

        <figure className='curriculumFig' onClickCapture={CMouseClickIconTxt}>
          <IoIosPaper className='contactIcon'/>
          <a id={CiconTxt ? 'iconTxt' : 'iconTxtShow'} href='https://drive.google.com/file/d/1oZg3J8Ru8UPD3Vazv1jcgFW7rKLbT5r0/view?usp=share_link' target='_blank'> Meu Currículo </a>
        </figure>
      </div>
    </div>
      
    </section>
  )
}

export default Contato
