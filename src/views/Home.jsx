import React, { useEffect, useRef, useState } from 'react';
import Intro from '../components/Intro'
import Work from '../components/Work'
import About from '../components/About'
import Contact from '../components/Contact'
import '../App.css'
import NavBar from '../components/NavBar';

function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentLighted, setCurrentLighted] = useState(false);
  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.current.forEach((section) => observer.observe(section));

    return () => {
      sections.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className=' App flex flex-col'>
      <div className='snap-y snap-mandatory h-screen overflow-x-hidden '>
        <div id='home' className=' snap-start ' ref={(el) => sections.current[0] = el}>
          <Intro
          currentLighted={currentLighted} setCurrentLighted={setCurrentLighted}
          />
        </div>
        <div id='work' className=' snap-start ' ref={(el) => sections.current[1] = el}>
          <Work
          currentLighted={currentLighted} setCurrentLighted={setCurrentLighted}
          />
        </div>
        <div id='about' className=' snap-start' ref={(el) => sections.current[2] = el}>
          <About
          currentLighted={currentLighted} setCurrentLighted={setCurrentLighted}
          />
        </div>
        <div id='contact' className=' snap-start' ref={(el) => sections.current[3] = el}>
          <Contact
          currentLighted={currentLighted} setCurrentLighted={setCurrentLighted}
          />
        </div>
      </div>
      <NavBar
        currentSection={currentSection} setCurrentSection={setCurrentSection}
        currentLighted={currentLighted} setCurrentLighted={setCurrentLighted}
      />
    </div>
  )
}

export default Home