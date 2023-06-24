import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProfileCard from './components/ProfileCard'
import Message from './components/Message'

function App() {


  return (
    <div >
      <Navbar/>
      <div className='App'>
        <ProfileCard/>
        <Message/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
