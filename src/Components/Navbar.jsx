import React, { useState } from 'react'
import logo from '../assets/images/WHACLandingPage/logo_white.png'
import menu from '../assets/images/WHACLandingPage/menu_icon.png'
import MenuScreen from './MenuScreen';
import { useNavigate } from 'react-router';

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleMenuClick = () => {
        setMenuOpen(true);
    };
    return (
        <div className="bg-[#0D0D2B] p-6 flex items-center justify-between">
            <img src={logo} className='w-40 md:w-60' alt="Logo" onClick={() => navigate('/')} />
            {/* <img src={menu} className='w-10' alt="Menu Icon" onClick={handleMenuClick} /> */}
            <img
                src={menu}
                className={`w-10 cursor-pointer transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-180' : ''}`}
                alt="Menu Icon"
                onClick={handleMenuClick}
            />

            {menuOpen && (
                <MenuScreen setMenuOpen={setMenuOpen} />
            )}

        </div>

    )
}
