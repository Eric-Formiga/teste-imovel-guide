import React, { useState } from 'react'
import './RuleOfThree.css'
const RuleOfThree = () => {
const [a,setA] = useState('')
const [b,setB] = useState('')
const [c,setC] = useState('')
const [resultado,setResultado] = useState(0)


const handleCalculate =(e)=>{
e.preventDefault()

if(a <= 0  || b <= 0  || c <=0 ){
  return alert("inclua numeros validos!")
}else {
   setResultado((b*c)/a)
}

}




  return (
    <div className='container_message'>
      <h3>Regra de 3</h3>
      <form className='conatiner_input' >
        <div>
          <span className='input_r3'> 
            <input type='number' placeholder='60' value={a} onChange={(e)=>setA(e.target.value)} />
              <hr className='hr' />
            <input type='number' placeholder='100' value={b}  onChange={(e)=>setB(e.target.value)} />
          </span>
        </div>

        <div>
          <span className='input_r3'> 
            <input type='number' placeholder='30' value={c} onChange={(e)=>setC(e.target.value)}  />
              <hr className='hr'/>
            <input type='number'  value={resultado} disabled placeholder='' />
          </span>
        </div>

        <button className='button_r3' onClick={handleCalculate}>calcular</button>
      </form>
    </div>
  )
}

export default RuleOfThree