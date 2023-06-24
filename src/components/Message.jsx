import React, { useState } from 'react'
import InputMask from 'react-input-mask'
const Message = () => {

const [cpf,setCpf] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='container_message'>
      <h2>Mande uma mensagem:</h2>
      <form onSubmit={handleSubmit} className='conatiner-input' >
        <InputMask mask="999.999.999-99" placeholder='Digite seu CPF' />
        <InputMask mask="(21)99999-9999" placeholder='Digite seu telefone' />
        <input type="textarea" maxLength={50} />
        <button className='button_message'>Enviar Mensagem</button>
      </form>

    </div>
  )
}

export default Message