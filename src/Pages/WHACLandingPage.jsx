import React from "react";
import homeBanner from "../assets/images/WHACLandingPage/homebanner.jpg";
import office from "../assets/images/WHACLandingPage/office.jpg";
import thinkBigger from "../assets/images/WHACLandingPage/thinkbigger.jpg";
import interior from "../assets/images/WHACLandingPage/interior.jpg";
import work_image_01 from "../assets/images/WHACLandingPage/work_image_01.jpg";
import work_image_02 from "../assets/images/WHACLandingPage/work_image_02.jpg";
import work_image_03 from "../assets/images/WHACLandingPage/work_image_03.jpg";
import work_image_04 from "../assets/images/WHACLandingPage/work_image_04.jpg";
import work_image_05 from "../assets/images/WHACLandingPage/work_image_05.jpg";
import work_image_06 from "../assets/images/WHACLandingPage/work_image_06.jpg";
import work_image_07 from "../assets/images/WHACLandingPage/work_image_07.jpg";
import work_image_08 from "../assets/images/WHACLandingPage/work_image_08.jpg";
import work_image_09 from "../assets/images/WHACLandingPage/work_image_09.jpg";
import client_01 from "../assets/images/WHACLandingPage/client_01.png";
import client_02 from "../assets/images/WHACLandingPage/client_02.png";
import client_03 from "../assets/images/WHACLandingPage/client_03.png";
import client_04 from "../assets/images/WHACLandingPage/client_04.png";
import client_05 from "../assets/images/WHACLandingPage/client_05.png";
import client_06 from "../assets/images/WHACLandingPage/client_06.png";
import client_07 from "../assets/images/WHACLandingPage/client_07.png";
import client_08 from "../assets/images/WHACLandingPage/client_08.png";
import logo from "../assets/images/WHACLandingPage/logo_white.png";
import menu from "../assets/images/WHACLandingPage/menu_icon.png";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa";

export default function WHACLandingPage() {

    const works = [
        {
            title: "Futureace Hospital Academy",
            image: work_image_01
        },
        {
            title: "Flufftopia: Cotton Candy",
            image: work_image_02
        },
        {
            title: "Seaman Tours: Your Travel Partner",
            image: work_image_03
        },
        {
            title: "FALAQ: Coaching Centre",
            image: work_image_04
        },
        {
            title: "WIC: Arts & Science College",
            image: work_image_05
        },
        {
            title: "Mamma Mimmo's: The Kids Store",
            image: work_image_06
        },
        {
            title: "Serene Minds: Psychiatric Hospital",
            image: work_image_07
        },
        {
            title: "Grace Public School",
            image: work_image_08
        },
        {
            title: "Wandoor Islamic College",
            image: work_image_09
        }
    ]

    const clients = [ client_01, client_02, client_03, client_04, client_05, client_06, client_07, client_08]

    return (
        <div className="bg-black text-white">
            {/* Hero Section */}
            <div
                className="relative h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${homeBanner})` }}
            >
                <div className="flex justify-between items-center w-full h-48 px-5 md:px-15">
                    <img src={logo} alt="Logo" />
                    <img src={menu} alt="Menu" />
                </div>
                {/* <img className="h-full w-full object-cover" src={homeBanner} alt="" /> */}
            </div>

            {/* About Section */}
            <div className="w-full h-screen bg-[#00001A] px-5 md:px-15 py-20 flex gap-10 justify-center items-center flex-col md:flex-row">
                <div className="font-magnetik-extrabold">
                    <div className="w-[55vw] flex">
                        <div className="w-[60%]">
                            <p className="text-[9vw] font-extrabold leading-tight">WE ARE</p>
                        </div>
                        <div className="w-[40%] flex items-center justify-center">
                            <img className="rounded object-cover w-full" src={interior} alt="" />
                        </div>
                    </div>
                    <div className="w-[55vw] flex">
                        <div className="w-[50%] flex items-center justify-start">
                            <img className="rounded object-cover w-full" src={office} alt="" />
                        </div>
                        <div className="w-[50%] flex justify-end">
                            <p className="text-[9vw] font-extrabold leading-tight">WHAC</p>
                        </div>
                    </div>
                    <div className="w-[55vw] flex justify-between">
                        <div className="w-[20%] flex items-center justify-start">
                            <img className="rounded object-cover w-full" src={thinkBigger} alt="" />
                        </div>
                        <div className="w-[75%] flex justify-end">
                            <p className="text-[9vw] font-extrabold leading-tight">CONTENT <br /> MATTERS</p>
                        </div>
                    </div>
                </div>
                <div className="text-[4vw] md:text-[2vw] font-magnetik-thin text-center md:text-left">
                    <p>We solve big problems with strategy and creative that make a big impact.</p>
                    <br />
                    <p>We work with brands and marketers that have the biggest ambitions.</p>
                    <br />
                    <p>We hire big talent and bring them big opportunities that build boundless careers.</p>
                    <br />
                    <p>Want to Do Content That Matters?</p>
                    <button className="border-3 border-white py-4 px-20 md:px-15 lg:px-20 mt-10 rounded-full font-magnetik-semibold">CONTACT US</button>
                </div>
            </div>

            {/* Work Section */}
            <div className="bg-white text-black pt-25 flex flex-col md:flex-row">
                <div>
                    <h3 className="font-magnetik-extrabold text-[5vw] md:text-[3vw] font-bold mb-8 md:rotate-270 md:mt-5 px-10 text-center md:text-left">Work.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                    {works.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden transition w-full h-full relative px-20 md:px-0 pt-2 md:pt-0"
                        >
                            <div className="bg-gray-300">
                                <img
                                    className="w-full h-full object-cover"
                                    src={item.image}
                                    alt="Work Image"
                                />
                            </div>
                            <div className="p-4 font-medium absolute bottom-0">
                                <p className="text-[3.5vw] md:text-[1.2vw] text-white font-magnetik-bold md:px-3">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Network Section */}
            <div className="bg-white text-black py-30 flex flex-col md:flex-row">
                <div>
                    <h3 className="font-magnetik-extrabold text-[5vw] md:text-[3vw] font-bold md:rotate-270 md:mt-10 lg:mt-20 px-1 text-center md:text-left">Network.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full">
                    {clients.map((src, index) => (
                        <div key={index} className="text-lg font-semibold pt-10 flex justify-center items-center">
                            <img src={src} alt="Client Image" />
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="bg-white text-black px-6 md:px-20 py-16">
                <h3 className="text-3xl font-bold mb-8">Network.</h3>
                <div className="flex flex-wrap gap-10 items-center justify-center">
                    {[
                        "Futureace Healthcare Academy",
                        "Flufftopia",
                        "Seamantours",
                        "FALAQ",
                        "Mamma Mimmo's",
                        "Serene Minds",
                        "Grace Public School"
                    ].map((name, index) => (
                        <div key={index} className="text-center text-lg font-semibold">
                            {name}
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Footer */}
            <footer className="bg-[#00001A] text-white py-8">
                <div className="flex flex-col md:flex-row items-center justify-between w-6/9 mx-auto">
                    <div className="text-sm">
                        <p className="font-magnetik-bold">WHAC CREATIVE AGENCY</p>
                        <br />
                        <p className="font-magnetik-regular pb-10 md:pb-0">BEACH ROAD, CALICUT</p>
                        </div>
                    <div>
                        <p className="font-magnetik-semibold text-sm mb-5 text-center md:text-left">CONNECT</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                        <a className="border border-white p-3 rounded-full" href="#"><FaInstagram /></a>
                        <a className="border border-white p-3 rounded-full" href="#"><FaFacebookF /></a>
                        <a className="border border-white p-3 rounded-full" href="#"><FaLinkedinIn /></a>
                        <a className="border border-white p-3 rounded-full" href="#"><FaYoutube /></a>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
