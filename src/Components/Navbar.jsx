import React from 'react'
import logo from '../assets/images/WHACLandingPage/logo_white.png'
import menu from '../assets/images/WHACLandingPage/menu_icon.png'

export default function Navbar() {
    return (
        <div className="bg-[#0D0D2B] p-6 flex items-center justify-between">
            <img src={logo} className='w-40 md:w-60' alt="Logo" />
            <img src={menu} className='w-10' alt="Menu Icon" />
        </div>

    )
}
