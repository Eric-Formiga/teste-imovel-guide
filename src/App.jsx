import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProfileCard from './components/ProfileCard'
import Message from './components/Message'
import RuleOfThree from './components/RuleOfThree'

function App() {


  return (
    <div >
      <Navbar />
      <div className='App'>
        <ProfileCard />
        <Message />
  <RuleOfThree/>

      </div>
      <Footer />
    </div>
  )
}

export default App
