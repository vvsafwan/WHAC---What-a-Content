import React from 'react'
import about01 from '../assets/images/About/about01.png'
import about02 from '../assets/images/About/about02.png'
import client_01 from "../assets/images/WHACLandingPage/client_01.png";
import client_02 from "../assets/images/WHACLandingPage/client_02.png";
import client_03 from "../assets/images/WHACLandingPage/client_03.png";
import client_04 from "../assets/images/WHACLandingPage/client_04.png";
import client_05 from "../assets/images/WHACLandingPage/client_05.png";
import client_06 from "../assets/images/WHACLandingPage/client_06.png";
import client_07 from "../assets/images/WHACLandingPage/client_07.png";
import client_08 from "../assets/images/WHACLandingPage/client_08.png";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function About() {

    const clients = [client_01, client_02, client_03, client_04, client_05, client_06, client_07, client_08]

    return (
        <div className="font-sans text-gray-900">
            <Navbar />

            <section>
                <div className="bg-white text-black py-10 flex flex-col md:flex-row">
                    <div className='hidden md:block'>
                        <h3 className="font-magnetik-extrabold text-[5vw] md:text-[3vw] font-bold md:rotate-270 md:mt-10 lg:mt-20 px-1 text-center md:text-left text-white">Welcome.</h3>
                    </div>
                    <div>
                        <div className='w-full md:w-1/2'>
                            <h2 className="text-[8vw]/[9.5vw] md:text-[3.8vw]/[4.5vw] font-bold mb-4 font-magnetik-extrabold px-5">Welcome to the home of CreativeContent!</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 w-ful px-5 gap-10">
                            <div>
                                <div className='font-magnetik-extralight text-[5vw] md:text-[1.5vw]'>
                                    <p className="py-5">
                                        At WHAC, we believe everything begins with content. It’s the voice behind every brand, the emotion behind every message, and the fuel for every digital experience.
                                    </p>
                                    <p>
                                        We’re not just a digital agency—we’re a content-first creative partner. Whether it’s strategy, storytelling, design, or delivery, we craft content that connects, informs, and inspires. Our work is grounded in the idea that great content doesn’t just fill space—it drives action, builds trust, and shapes perception.
                                    </p>    
                                </div>
                            </div>
                            <img className="w-full h-auto" src={about01} alt="About_01" />
                        </div>
                    </div>
                </div>
                <div className="bg-white text-black flex flex-col md:flex-row">
                    <div>
                        <h3 className="font-magnetik-extrabold text-[5vw] md:text-[3vw] font-bold md:rotate-270 md:mt-10 lg:mt-20 px-1 text-center md:text-left text-white">Welcome.</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-ful px-5 gap-10">
                        <img className="w-full h-auto" src={about02} alt="About_01" />
                        <div className='py-5'>
                            {/* <h2 className="text-[3vw] font-bold mb-4 font-magnetik-extrabold">Welcome to the home of CreativeContent!</h2> */}
                            <div className='font-magnetik-extralight text-[5vw] md:text-[1.5vw]'>
                                <p className="mb-4">
                                    From social media to campaigns and brand narratives, we design content ecosystems that are as purposeful as they are powerful. We help businesses find their voice—and then make sure it’s heard, loud and clear.
                                </p>
                                <p>
                                    Because in a world full of noise, what you say—and how you say it—makes all the difference.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Network Section */}
            <section className="bg-white text-black py-30 flex flex-col md:flex-row">
                <div>
                    <h3 className="font-magnetik-extrabold text-[5vw] md:text-[3vw] font-bold md:rotate-270 md:mt-20 lg:mt-30 text-center md:text-left">Our&nbsp;Clients.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full">
                    {clients.map((src, index) => (
                        <div key={index} className="text-lg font-semibold pt-10 flex justify-center items-center">
                            <img src={src} alt="Client Image" className="filter grayscale" />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    )
}
