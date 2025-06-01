import React, { useState } from 'react'
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';
import logo from "../assets/images/WHACLandingPage/logo_white.png";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

export default function MenuScreen({ setMenuOpen }) {

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-[#0b0b1c] text-white z-50 flex flex-col justify-center items-center space-y-6">
                <div className="bg-[#0b0b1c] p-6 flex items-center justify-between absolute top-0 left-0 w-full">
                    <img src={logo} className='w-40 md:w-60' alt="Logo" />
                    <div className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                        <ImCross size={30} />
                    </div>
                </div>

                <nav className="text-center text-[2rem]/10 md:text-[3rem]/15 lg:text-[4rem]/20 font-bold space-y-4 font-magnetik-bold mb-10">
                    <div>
                        <Link to={'/'}>Home</Link>
                    </div>
                    <div>
                        <Link to={'/about'}>About Us</Link>
                    </div>
                    <div>
                        <HashLink smooth to="/#our-works" onClick={() => setMenuOpen(false)}>Our Works</HashLink>
                    </div>
                    <div>
                        <Link to={'/contact'}>Contact Us</Link>
                    </div>
                </nav>

                <div>
                    <p className="font-magnetik-semibold text-lg mb-5 text-center text-[1rem] md:text-[1.5rem] lg:text-[2rem]">CONNECT</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a className="border border-white p-3 md:p-5 rounded-full" href="#"><FaInstagram /></a>
                        <a className="border border-white p-3 md:p-5 rounded-full" href="#"><FaFacebookF /></a>
                        <a className="border border-white p-3 md:p-5 rounded-full" href="#"><FaLinkedinIn /></a>
                        <a className="border border-white p-3 md:p-5 rounded-full" href="#"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
