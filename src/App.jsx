import React, { useState } from 'react';
import Intro from './components/Intro'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'
import NavBar from './components/NavBar';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentLighted, setCurrentLighted] = useState(false);

  return (
    <div className=' App flex flex-col'>
      <div className='snap-y snap-mandatory h-screen overflow-x-hidden '>
        <div id='home' className=' snap-start ' onMouseEnter={() => setCurrentSection('home')}>
          <Intro
            currentLighted={currentLighted} setCurrentLighted={setCurrentLighted}
          />
        </div>
        <div id='work' className=' snap-start ' onMouseEnter={() => setCurrentSection('work')}>
          <Work />
        </div>
        <div id='about' className=' snap-start' onMouseEnter={() => setCurrentSection('about')}>
          <About />
        </div>
        <div id='contact' className=' snap-start' onMouseEnter={() => setCurrentSection('contact')}>
          <Contact />
        </div>
      </div>
      <NavBar
        currentSection={currentSection} setCurrentSection={setCurrentSection}
        currentLighted={currentLighted} setCurrentLighted={setCurrentLighted}
      />
    </div>
  )
}

export default App
