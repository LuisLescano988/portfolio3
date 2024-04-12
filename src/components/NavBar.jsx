import React, { useEffect, useState } from 'react'


const NavBar = ({ currentSection, setCurrentSection, currentLighted, setCurrentLighted}) => {

    const handleLight = () => {
        setCurrentLighted(!currentLighted);
        console.log(currentLighted)
    };

    const handleClick = (e, section) => {
        console.log(section);
        setCurrentSection(section);
        const targetedSection = document.getElementById(section)
        targetedSection.scrollIntoView({ behavior: 'smooth' })
    };

    return (
        <div className=' fixed h-screen right-[9%] bottom-0 z-40'>
            <div className={`rounded-full   overflow-hidden absolute transition-colors left-0 top-[4%] h-7 w-[4.2rem] ${!currentLighted ? ' bg-blue-200' : ' bg-blue-900'} flex justify-center items-center transition-transform duration-500`}
                onClick={()=>handleLight()}>
                <div className={`h-[85%] w-[36%] rounded-full absolute left-1 transition-all duration-500 ${!currentLighted ? ' translate-x-0' : ' translate-x-9'} ${!currentLighted ? ' bg-yellow-200' : ' bg-gray-400'}`}></div>
            </div>

            <nav className={` absolute bottom-[7%] w-24 flex-col flex text-lg  ${!currentLighted?'text-blue-900':'text-lime-400'}`}>
                <a className={` w-24 ${currentSection === 'home' ? 'font-black' : ''} cursor-default weight-transition hover:font-black `}
                    onClick={(e) => handleClick(e, 'home')}
                >
                    Home
                </a>
                <a className={` w-20 ${currentSection === 'work' ? 'font-black' : ''} cursor-default weight-transition hover:font-black`}
                    onClick={(e) => handleClick(e, 'work')}
                >
                    Work
                </a>
                <a className={` w-24 ${currentSection === 'about' ? 'font-black' : ''} cursor-default weight-transition hover:font-black`}
                    onClick={(e) => handleClick(e, 'about')}
                >
                    About me
                </a>
                <a className={` w-20 ${currentSection === 'contact' ? 'font-black' : ''} cursor-default weight-transition hover:font-black`}
                    onClick={(e) => handleClick(e, 'contact')}
                >
                    Contact
                </a>
            </nav>
        </div>
    )
}

export default NavBar