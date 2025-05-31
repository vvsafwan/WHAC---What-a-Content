import React from 'react'
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#00001A] text-white py-8">
            <div className="flex flex-col md:flex-row items-center justify-between w-6/9 mx-auto">
                <div className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] text-center md:text-left mb-6 md:mb-0">
                    <p className="font-magnetik-extrabold">WHAC CREATIVE AGENCY</p>
                    <br />
                    <p className="font-magnetik-extralight pb-10 md:pb-0">BEACH RD, OPP. LIONS PARK, VELLAYIL, KOZHIKODE, KERALA 673032</p>
                </div>
                <div>
                    <p className="font-magnetik-semibold text-lg mb-5 text-center md:text-left">CONNECT</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a className="border border-white p-3 rounded-full" href="#"><FaInstagram /></a>
                        <a className="border border-white p-3 rounded-full" href="#"><FaFacebookF /></a>
                        <a className="border border-white p-3 rounded-full" href="#"><FaLinkedinIn /></a>
                        <a className="border border-white p-3 rounded-full" href="#"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
