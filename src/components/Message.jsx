import React, { useState } from 'react'
import './Message.css'
import InputMask from 'react-input-mask'
const Message = () => {

  const [cpf,setCpf] = useState('')
  const [phone,setPhone] = useState('')
  const [text,setText] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if(cpf.length || phone.length || text.length <= 0){
      return alert("Preencha os campos e tente novamente!")

    }else{
    alert(`Seu Cpf é:  ${cpf}`)
    alert(`Seu telefone é:  ${phone}`)
    alert(`Seu mensagem é:  ${text}`)
    setCpf('')
    setPhone('')
    setText('')
    }
  }

  return (
    <div className='container_message'>
      <h2>Mande uma mensagem:</h2>
      <form onSubmit={handleSubmit} className='conatiner_input' >
        <InputMask className='input' mask="999.999.999-99" value={cpf} placeholder='Digite seu CPF' onChange={(e)=>setCpf(e.target.value)} />
        <InputMask className='input' mask="(99)99999-9999" value={phone} placeholder='Digite seu telefone' onChange={(e)=>setPhone(e.target.value)}/>
        <textarea  className='textearea input' value={text} placeholder='digite um assunto' onChange={(e)=>setText(e.target.value)}/>
        <button className='button_message'>Enviar Mensagem</button>
      </form>
    </div>
  )
}

export default Message