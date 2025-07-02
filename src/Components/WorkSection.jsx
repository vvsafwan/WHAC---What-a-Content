import React from 'react'
import work_image_01 from "../assets/images/WHACLandingPage/work_image_01.jpg";
import work_image_02 from "../assets/images/WHACLandingPage/work_image_02.jpg";
import work_image_03 from "../assets/images/WHACLandingPage/work_image_03.jpg";
import work_image_04 from "../assets/images/WHACLandingPage/work_image_04.jpg";
import work_image_05 from "../assets/images/WHACLandingPage/work_image_05.jpg";
import work_image_06 from "../assets/images/WHACLandingPage/work_image_06.jpg";
import work_image_07 from "../assets/images/WHACLandingPage/work_image_07.jpg";
import work_image_08 from "../assets/images/WHACLandingPage/work_image_08.jpg";
import work_image_09 from "../assets/images/WHACLandingPage/work_image_09.jpg";
import arrow from "../assets/images/WHACLandingPage/arrow.png";
import { useNavigate } from 'react-router';

export default function WorkSection() {

    const navigate = useNavigate();

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

         const handleWorkClick = (index) => {
        navigate(`/content/${index}`);
    }

    return (
        < section id="our-works" className="bg-white text-black pt-25 flex flex-col md:flex-row" >
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
        </section >
    )
}
