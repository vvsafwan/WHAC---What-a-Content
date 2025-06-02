import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import work1 from '../assets/images/Content/W01/fha01.jpg';
import work2 from '../assets/images/Content/W01/fha02.jpg';
import work3 from '../assets/images/Content/W01/fha03.jpg';
import work4 from '../assets/images/Content/W01/fha04.jpg';
import work5 from '../assets/images/Content/W01/fha05.jpg';
import work6 from '../assets/images/Content/W01/fha06.jpg';
import work7 from '../assets/images/Content/W01/fha07.jpg';
import work8 from '../assets/images/Content/W01/fha08.jpg';
import ScrollGallery from '../Components/ScrollGallery';

export default function Content() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
           <Navbar />

            {/* Introduction */}
            <div className='w-full md:w-8/12 mx-auto md:flex py-10 md:py-30 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] gap-10'>
                <div className='w-full md:w-[30%] px-10 md:px-0'>
                    <p className='font-magnetik-extrabold'>Futureace Healthcare Academy</p>
                    <br />
                    <p className='font-magnetik-light mb-5'>Education</p>
                </div>
                <div className='w-full md:w-[70%] px-10 md:px-0'>
                    <p className='font-magnetik-light'>
                        The challenge began with building brand awareness for a newly established healthcare academy. With limited assets and no prior history, launching the campaign was no small task. We started by focusing on brand visibility, gradually expanding into a strong online presence that highlighted the academy's unique selling points. This strategic approach ultimately led to excellent visibility and measurable results.
                    </p>
                </div>
            </div>

            {/* Image Row 1 */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 pb-8">
                <img src={work1} alt="Kochi Image 1" className="w-full h-full object-cover" />
                <img src={work2} alt="Kochi Image 2" className="w-full" />
                <img src={work3} alt="Kochi Image 3" className="w-full" />
                <img src={work4} alt="Kochi Image 4" className="w-full" />
            </div> */}

            {/* <div className="overflow-x-auto pb-8 no-scrollbar">
                <div className="flex w-max">
                    <img src={work1} alt="Kochi Image 1" className="w-[full] h-[550px] object-cover flex-shrink-0" />
                    <img src={work2} alt="Kochi Image 2" className="w-[full] h-[550px] object-cover flex-shrink-0" />
                    <img src={work3} alt="Kochi Image 3" className="w-[full] h-[550px] object-cover flex-shrink-0" />
                    <img src={work4} alt="Kochi Image 4" className="w-[full] h-[550px] object-cover flex-shrink-0" />
                </div>
            </div> */}

            <ScrollGallery images={[work1, work2, work3, work4]} />

            {/* Strategy Section */}
            <div className='w-full md:w-8/12 mx-auto md:flex py-20 md:py-30 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] gap-10'>
                <div className='w-full md:w-[30%] px-10 md:px-0'>

                </div>
                <div className='w-full md:w-[70%] px-10 md:px-0'>
                    <p className='font-magnetik-light'>
                        A key focus of our strategy was creating impactful social content that
                        resonated with the target audience. From informative posts and engaging
                        visuals to student testimonials and expert insights, every piece was
                        crafted to build trust and community. By maintaining a consistent voice
                        and showcasing the academy’s values, we turned their social media
                        channels into a hub of credibility, engagement, and growth.
                    </p>
                </div>
            </div>

            {/* Image Row 2 */}
            <ScrollGallery images={[work5, work6, work7, work8]} />

            <Footer />
        </div>
    )
}
