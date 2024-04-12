import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import CVLuis from './views/CVLuis';
import ProvResume from './views/ProvResume';

function App() {

  return (
    <div className=' cursor-default'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="https://portfolio3-ruddy.vercel.app/resume" element={<ProvResume/>} />
        <Route path="/curriculum" element={<CVLuis/>} />
      </Routes>
    </div>
  )
}

export default App
