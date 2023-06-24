import React from 'react'
import './Footer.css'
import Logo from '../assets/logo-imovel-guide-cinza2.webp'

const Footer = () => {
  return (
    <footer>
      <div className='footer-bar1'>
        <ul>
          <li>Termos</li>
          <li>Contatos</li>
          <li>Sobre</li>
        </ul>
      </div>
      <div className='footer-bar1'>
        <ul>
          <li>@copy:Copyright 2022.</li>
          <li>Todos os direitos reservados.</li>
        </ul>
        <span><img src={Logo} alt="Logo-imovel-guide"/></span>
      </div>
    
    </footer>
  )
}

export default Footer