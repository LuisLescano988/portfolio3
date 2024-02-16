
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Intro from './components/Intro'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <Router>
      <div className='h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden'>
        <NavBar />
        {/* <ScrollToTop /> */}
        {/* <div className='snap-container'> */}
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        {/* </div> */}
      </div>
    </Router>
    // <div className=' h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden'>
    //   <NavBar />
    //   <div className=' snap-center'>
    //     <Intro />
    //   </div>
    //   <div className=' snap-center'>
    //     <Work />
    //   </div>
    //   <div className=' snap-center'>
    //     <About />
    //   </div>
    //   <div className=' snap-center'>
    //     <Contact />
    //   </div>
    // </div>
  )
}

export default App
