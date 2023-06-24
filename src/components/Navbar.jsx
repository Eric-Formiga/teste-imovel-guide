import React from 'react'
import './Navbar.css'
import Logo from '../assets/logo-imovel-guide-cinza2.webp'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-bar1'>
      <div><img src={Logo} alt="Logo-Imóvel-guide" /></div>
      <ul>
     <li>Condomínios</li>
        <li>Forúm</li>
        <li>Guia</li>
        <li>Artigos</li>
        <li>Ferramentas</li>
      </ul>
      </div>
      <div className='nav-br2'>
        <ul>
          <li>Cotar Imóvel</li>
          <li>Planos</li>
          <li>Entrar</li>
        </ul>
        <span><button className='button-navbar'>CADASTRE-SE</button></span>
      </div>
    </nav>
    )
}

export default Navbar