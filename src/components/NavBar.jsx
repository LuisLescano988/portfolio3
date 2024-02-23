import React, {  useEffect, useState } from 'react'


const NavBar = ({currentSection, setCurrentSection}) => {
    // const [targetElement, setTargetElement] = useState('');
    
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     const targetId = e.target.getAttribute('href').slice(1);
    //     const element = document.getElementById(targetId);
    //     if (targetElement) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //         setTargetElement(element.id);
    //         currentSection = targetElement
    //         console.log(currentSection)
    //     }
    // };
    
    // useEffect(() => {
    //     console.log(targetElement)
    // }, []);

    const handleClick = (e, section) => {
        // e.preventDefault();
        console.log('1')
        setCurrentSection(section);
      };
    
    return (
        <div className=' fixed right-0 bottom-0 mb-20 mr-16'>
            <nav className=' w-20 flex-col flex'>
                <a className={` w-20 ${currentSection === 'home' ? 'font-bold' : ''} transition-all hover:font-bold`}
                    href='#home'
                    onClick={(e) => handleClick(e, 'home')}
                >
                    Home
                </a>
                <a className={` w-20 ${currentSection === 'work' ? 'font-bold' : ''} transition-all hover:font-bold`}
                    href='#work'
                    onClick={(e) => handleClick(e, 'work')}
                >
                    Work
                </a>
                <a className={` w-20 ${currentSection === 'about' ? 'font-bold' : ''} transition-all hover:font-bold`}
                    href='#about'
                    onClick={(e) => handleClick(e, 'about')}
                >
                    About me
                </a>
                <a className={` w-20 ${currentSection === 'contact' ? 'font-bold' : ''} transition-all hover:font-bold`}
                    href='#contact'
                    onClick={(e) => handleClick(e, 'contact')}
                >
                    Contact
                </a>
            </nav>
        </div>
    )
}

export default NavBar