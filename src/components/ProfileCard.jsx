import React, { useState } from 'react'
import './ProfileCard.css'

import HomemImg from '../assets/homem.jpg'
import MulherImg from '../assets/mulher.jpg'

const ProfileCard = () => {

  const [corretoraNumber, setCorretoraNumber] = useState(false)
  const [corretorNumber, setCorretorNumber] = useState(false)

const ShowNumbeMan =()=>{
  setCorretorNumber(true)
}

const ShowNumbeWoman =()=>{
  setCorretoraNumber(true)
}

  return (
    <div className='container'>

       <div className='individual-card'>
       <div className='card indivual-backgroundM' >
          <img src={MulherImg} alt='imagem-corretora' />
        </div>
        <div className='information-cards'>
          <h3>Nome Corretora</h3>
          <p>3.000 pontos</p>
          {corretoraNumber ? <span>(21) 99999-9999.</span> : <u onClick={ShowNumbeWoman}>Ver telefone </u>}
        </div>
       </div>


       <div className='individual-card'>
        <div className='card indivual-backgroundH'>
          <img src={HomemImg} alt="imagem-corretor" />
        </div>
        <div className='information-cards'>
          <h3>Nome Corretor</h3>
          <p>1.260 pontos</p>
          {corretorNumber ? <span>(21) 99999-9999.</span> : <u onClick={ShowNumbeMan}>Ver telefone </u>}
        </div>
        </div>

      </div>

  )
}

export default ProfileCard