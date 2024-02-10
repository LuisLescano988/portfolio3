import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const NavBar = () => {
    const location = useLocation();


    return (
        <div className=' fixed right-0 bottom-0 mb-20 mr-16'>
            <ul className=' w-20'>
                <li className={`${location.pathname === '/' ? 'font-extrabold' : ''} transition-all`}>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li className={`${location.pathname === '/work' ? 'font-extrabold' : ''} transition-all`}>
                    <NavLink to='work'>
                        Work
                    </NavLink>
                </li>
                <li className={`${location.pathname === '/about' ? 'font-extrabold' : ''} transition-all`}>
                    <NavLink to='about'>
                        About me
                    </NavLink>
                </li>
                <li className={`${location.pathname === '/contact' ? 'font-extrabold' : ''} transition-all`}>
                    <NavLink to='contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar