
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/Intro'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import './App.css'

function App() {


  return (
    <div className='h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden'>
      <NavBar />
      <div className=' snap-center'>
        <Intro />
      </div>
      <div className=' snap-center'>
        <Work />
      </div>
      <div className=' snap-center'>
        <About />
      </div>
      <div className=' snap-center'>
        <Contact />
      </div>
    </div>
  )
}

export default App
