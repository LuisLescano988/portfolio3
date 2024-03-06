import React, {  useEffect, useState } from 'react'


const NavBar = ({currentSection, setCurrentSection}) => {

    const handleClick = (e, section) => {
        console.log(section);
        setCurrentSection(section);
        const targetedSection = document.getElementById(section)
        targetedSection.scrollIntoView({behavior:'smooth'})
      };
    
    return (
        <div className=' fixed right-0 bottom-0 mb-20 mr-12 z-40'>
            <nav className=' w-24 flex-col flex text-lg  text-blue-900'>
                <a className={` w-24 ${currentSection === 'home' ? 'font-marcher' : ''} hover:cursor-pointer transition-all hover:font-marcher`}
                    onClick={(e) => handleClick(e, 'home')}
                >
                    Home
                </a>
                <a className={` w-20 ${currentSection === 'work' ? 'font-marcher' : ''} hover:cursor-pointer transition-all hover:font-marcher`}
                    onClick={(e) => handleClick(e, 'work')}
                >
                    Work
                </a>
                <a className={` w-24 ${currentSection === 'about' ? 'font-marcher' : ''} hover:cursor-pointer transition-all hover:font-marcher`}
                    onClick={(e) => handleClick(e, 'about')}
                >
                    About me
                </a>
                <a className={` w-20 ${currentSection === 'contact' ? 'font-marcher' : ''} hover:cursor-pointer transition-all hover:font-marcher`}
                    onClick={(e) => handleClick(e, 'contact')}
                >
                    Contact
                </a>
            </nav>
        </div>
    )
}

export default NavBar