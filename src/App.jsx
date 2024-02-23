import React, { useState } from 'react';
import Intro from './components/Intro'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'
import NavBar from './components/NavBar';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className=' App flex flex-col'>
      <div className='snap-y snap-mandatory h-screen overflow-x-hidden '>
        <div id='home' className=' snap-center' onMouseOver={() => setCurrentSection('home')}>
          <Intro />
        </div>
        <div id='work' className=' snap-center' onMouseOver={() => setCurrentSection('work')}>
          <Work />
        </div>
        <div id='about' className=' snap-center' onMouseOver={() => setCurrentSection('about')}>
          <About />
        </div>
        <div id='contact' className=' snap-center' onMouseOver={() => setCurrentSection('contact')}>
          <Contact />
        </div>
      </div>
      <NavBar currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </div>
  )
}

export default App
