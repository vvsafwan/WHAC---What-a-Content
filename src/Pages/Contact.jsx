import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { IoIosArrowForward } from "react-icons/io";
import MenuScreen from '../Components/MenuScreen';

export default function Contact() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            {menuOpen && (
                <MenuScreen setMenuOpen={setMenuOpen} />
            )}

            {/* Content Section */}
            <section className="w-10/12 md:w-9/12 lg:w-8/12 py-12 mx-auto">
                <div className='md:flex'>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-[3rem] md:text-[4rem] font-bold mb-6 font-magnetik-extrabold">Let’s Talk</h2>
                    </div>
                    <div className="mb-6 w-full md:w-1/2 font-magnetik-extralight text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]">
                        <p className="mb-4">Have a story to tell? <br /> We’d love to help you shape it.</p>
                        <p className="mb-4">
                            Whether you’re starting something new or refining something great, let’s talk content, strategy, and everything in between.
                        </p>
                        <p className="font-magnetik-extrabold">Reach out. Let’s create something meaningful.</p>
                    </div>
                </div>

                <div className="w-full py-10 filter grayscale">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.019462796582!2d75.76654207584217!3d11.259978350086733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6592a367c97f9%3A0xc7d6a987916777f3!2sWHAC%20what%20a%20content!5e0!3m2!1sen!2sin!4v1748724665105!5m2!1sen!2sin" width="100%" height="300" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>


                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className='text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] mt-5'>
                        <h3 className="font-magnetik-extrabold">WHAC Creative Agency</h3>
                        <p className='font-magnetik-extralight'>Beach Rd, opp. Lions Park<br />
                            Vellayil, Kozhikode,<br />
                            Kerala 673032
                        </p>
                        <p className="mt-4 font-magnetik-extralight">
                            +91 96678 24808<br />
                            +91 97468 88251
                        </p>
                    </div>
                    <div>
                        <div className='flex items-center justify-between p-4 hover:bg-gray-100 transition-all duration-300 cursor-pointer border-b border-gray-400'>
                            <div className='text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]'>
                                <p className='font-magnetik-extrabold'>General Enquiries</p>
                                <p className='font-magnetik-extralight'>info@whatacoconut.net</p>
                            </div>
                            <div>
                                {/* <img src={arrow} alt="Arrow" /> */}
                                <IoIosArrowForward />
                            </div>
                        </div>
                        <div className='flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-all duration-300 cursor-pointer border-b border-gray-400'>
                            <div className='text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]'>
                                <p className='font-magnetik-extrabold'>General Enquiries</p>
                                <p className='font-magnetik-extralight'>muneeb@whatacoconut.net</p>
                            </div>
                            <div>
                                {/* <img src={arrow} alt="Arrow" /> */}
                                <IoIosArrowForward />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-4 hover:bg-gray-100 transition-all duration-300 cursor-pointer'>
                            <div className='text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]'>
                                <p className='font-magnetik-extrabold'>PR</p>
                                <p className='font-magnetik-extralight'>muhammedali@whatacoconut.net</p>
                            </div>
                            <div>
                                {/* <img src={arrow} alt="Arrow" /> */}
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
