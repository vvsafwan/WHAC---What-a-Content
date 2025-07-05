import React, { useState } from "react";
import homeBanner from "../assets/images/WHACLandingPage/homebanner.jpg";
import office from "../assets/images/WHACLandingPage/office.jpg";
import thinkBigger from "../assets/images/WHACLandingPage/thinkbigger.jpg";
import interior from "../assets/images/WHACLandingPage/interior.jpg";
// import work_image_01 from "../assets/images/WHACLandingPage/work_image_01.jpg";
// import work_image_02 from "../assets/images/WHACLandingPage/work_image_02.jpg";
// import work_image_03 from "../assets/images/WHACLandingPage/work_image_03.jpg";
// import work_image_04 from "../assets/images/WHACLandingPage/work_image_04.jpg";
// import work_image_05 from "../assets/images/WHACLandingPage/work_image_05.jpg";
// import work_image_06 from "../assets/images/WHACLandingPage/work_image_06.jpg";
// import work_image_07 from "../assets/images/WHACLandingPage/work_image_07.jpg";
// import work_image_08 from "../assets/images/WHACLandingPage/work_image_08.jpg";
// import work_image_09 from "../assets/images/WHACLandingPage/work_image_09.jpg";
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
// import arrow from "../assets/images/WHACLandingPage/arrow.png";
import scrolldown from "../assets/images/WHACLandingPage/scrolldown.png";
import Footer from "../Components/Footer";
import MenuScreen from "../Components/MenuScreen";
import { useNavigate } from "react-router";
import WorkSection from "../Components/WorkSection";
import video from '../assets/images/WHACLandingPage/video.mp4';
import mask from '../assets/images/WHACLandingPage/mask.png';

export default function WHACLandingPage() {

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    // const works = [
    //     {
    //         title: "Futureace Hospital Academy",
    //         image: work_image_01
    //     },
    //     {
    //         title: "Flufftopia: Cotton Candy",
    //         image: work_image_02
    //     },
    //     {
    //         title: "Seaman Tours: Your Travel Partner",
    //         image: work_image_03
    //     },
    //     {
    //         title: "FALAQ: Coaching Centre",
    //         image: work_image_04
    //     },
    //     {
    //         title: "WIC: Arts & Science College",
    //         image: work_image_05
    //     },
    //     {
    //         title: "Mamma Mimmo's: The Kids Store",
    //         image: work_image_06
    //     },
    //     {
    //         title: "Serene Minds: Psychiatric Hospital",
    //         image: work_image_07
    //     },
    //     {
    //         title: "Grace Public School",
    //         image: work_image_08
    //     },
    //     {
    //         title: "Wandoor Islamic College",
    //         image: work_image_09
    //     }
    // ]

    const clients = [client_01, client_02, client_03, client_04, client_05, client_06, client_07, client_08];

    // const handleWorkClick = (index) => {
    //     navigate(`/content/${index}`);
    // }

    return (
        <div className="bg-black text-white">
            {/* Hero Section */}
            {/* <section
                className="relative h-screen w-full bg-cover bg-center"
                // style={{ backgroundImage: `url(${homeBanner})` }}
            >
                <div className="absolute bottom-15 left-1/2 ms-8 transform -translate-x-1/2 animate-jump">
                    <img src={scrolldown}  alt="Scroll Down" className="w-8 sm:w-12 md:w-15" />
                </div>
                <div className="flex justify-between items-center w-full h-48 px-5 md:px-15">
                    <img src={logo} alt="Logo" className="w-40 md:w-60 lg:w-70" onClick={() => navigate('/')} />
                    <img
                        src={menu}
                        alt="Menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`cursor-pointer transition-transform duration-300 w-10 md:w-15 lg:w-16 ${menuOpen ? 'rotate-180' : ''
                            }`}
                    />
                </div>

                {menuOpen && (
                    <MenuScreen setMenuOpen={setMenuOpen} />
                )}
            </section> */}

            {/* <section className="relative h-screen w-full overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <img
                    src={mask}
                    alt="Overlay Mask"
                    className="absolute top-0 left-0 w-full h-full object-cover z-10"
                />

                <div className="relative z-20 flex justify-between items-center w-full h-48 px-5 md:px-15">
                    <img
                    src={logo}
                    alt="Logo"
                    className="w-40 md:w-60 lg:w-70"
                    onClick={() => navigate('/')}
                    />
                    <img
                    src={menu}
                    alt="Menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`cursor-pointer transition-transform duration-300 w-10 md:w-15 lg:w-16 ${
                        menuOpen ? 'rotate-180' : ''
                    }`}
                    />
                </div>

                <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 animate-jump z-20">
                    <img src={scrolldown} alt="Scroll Down" className="w-8 sm:w-12 md:w-15" />
                </div>

                {menuOpen && <MenuScreen setMenuOpen={setMenuOpen} />}
            </section> */}

            <section className="relative w-full h-fit max-h-screen overflow-hidden flex items-center justify-center bg-black">
                {/* Shared wrapper */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Video */}
                    <video
                        className="relative z-0 w-full h-full object-contain"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Mask Image */}
                    <img
                        src={mask}
                        alt="Overlay Mask"
                        className="absolute top-0 left-0 w-full h-full object-contain z-10 pointer-events-none"
                    />
                </div>

                {/* Header Bar */}
                <div className="absolute top-0 left-0 w-full flex justify-between items-center px-5 md:px-15 h-20 md:h-30 lg:h-40 z-20">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-40 md:w-60 lg:w-70"
                        onClick={() => navigate('/')}
                    />
                    <img
                        src={menu}
                        alt="Menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`cursor-pointer transition-transform duration-300 w-10 md:w-15 lg:w-16 ${menuOpen ? 'rotate-180' : ''
                            }`}
                    />
                </div>

                {/* Scroll Down */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-jump z-20">
                    <img src={scrolldown} alt="Scroll Down" className="w-8 sm:w-12 md:w-15 lg:w-18" />
                </div>

                {/* Menu */}
                {menuOpen && <MenuScreen setMenuOpen={setMenuOpen} />}
            </section>




            {/* About Section */}
            <section className="w-full min-h-screen max-h-fit bg-[#00001A] px-5 md:px-15 py-20 flex gap-10 justify-center items-center flex-col md:flex-row">
                <div className="font-magnetik-extrabold w-full">
                    <div className="w-[100%] md:w-[55vw] flex">
                        <div className="w-[65%] md:w-[60%]">
                            <p className="text-[15vw] md:text-[9vw] font-extrabold leading-tight">WE ARE</p>
                        </div>
                        <div className="w-[35%] md:w-[40%] flex items-center justify-center">
                            <img className="rounded object-cover w-full" src={interior} alt="" />
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[55vw] flex">
                        <div className="w-[50%] flex items-center justify-start">
                            <img className="rounded object-cover w-full" src={office} alt="" />
                        </div>
                        <div className="w-[50%] flex justify-end">
                            <p className="text-[15vw] md:text-[9vw] font-extrabold leading-tight">WHAC</p>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[55vw] flex justify-between">
                        <div className="w-[20%] flex items-center justify-start">
                            <img className="rounded object-cover w-full" src={thinkBigger} alt="" />
                        </div>
                        <div className="w-[75%] flex justify-end">
                            <p className="text-[15vw] md:text-[9vw] font-extrabold leading-tight">CONTENT <br /> <span className="tracking-widest">MAKERS</span></p>
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
                    <button className="border-3 border-white py-4 px-20 md:px-10 lg:px-20 mt-10 rounded-full font-magnetik-semibold hover:bg-white hover:text-black hover:scale-105 transition-all ease-in-out duration-300 hover:cursor-pointer text-[1rem] lg:text-[1.5rem]" onClick={() => navigate('/contact')}>CONTACT US</button>
                </div>
            </section>

            {/* Work Section */}
            {/* <section id="our-works" className="bg-white text-black pt-25 flex flex-col md:flex-row">
                <div>
                    <h3 className="font-magnetik-extrabold text-[5vw] md:text-[3vw] font-bold mb-8 md:rotate-270 md:mt-5 px-10 text-center md:text-left">Work.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                    {works.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden w-full h-full px-10 md:px-0 pt-2 md:pt-0 hover:opacity-80 cursor-pointer"
                            onClick={() => handleWorkClick(index)}
                        >
                            <div className="bg-gray-300 hover:scale-105 transition-all ease-in-out duration-300">
                                <img
                                    className="w-full h-full object-cover"
                                    src={item.image}
                                    alt="Work Image"
                                />
                            </div>
                            <div className="relative">
                                <div className="p-4 font-medium absolute bottom-0 flex items-center justify-between w-full">
                                    <p className="text-[3.5vw] md:text-[1.2vw] text-white font-magnetik-bold md:px-3">{item.title}</p>
                                    <img src={arrow} alt="Arrow btn" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            <WorkSection />

            {/* Network Section */}
            <section className="bg-white text-black py-30 flex flex-col md:flex-row">
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
            </section>

            <Footer />
        </div>
    );
}
