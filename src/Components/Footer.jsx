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
                <div className="text-[0.8rem] md:text-[1rem] text-center md:text-left mb-6 md:mb-0">
                    <p className="font-magnetik-extrabold">WHAC CREATIVE AGENCY</p>
                    <br />
                    <p className="font-magnetik-extralight pb-10 md:pb-0">BEACH RD, OPP. LIONS PARK, VELLAYIL, KOZHIKODE, KERALA 673032</p>
                </div>
                <div>
                    <p className="font-magnetik-semibold text-lg mb-5 text-center md:text-left">CONNECT</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a className="border border-white p-3 rounded-full" target='_blank' href="https://www.instagram.com/what.a_content?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
                        <a className="border border-white p-3 rounded-full" target='_blank' href="https://www.facebook.com/profile.php?id=61574158830016"><FaFacebookF /></a>
                        <a className="border border-white p-3 rounded-full" target='_blank' href="https://www.linkedin.com/company/107503856/admin/dashboard/"><FaLinkedinIn /></a>
                        <a className="border border-white p-3 rounded-full" target='_blank' href="https://www.youtube.com/@WHACwhatacontent"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
