import React, { useEffect, useState } from 'react'
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
import { useParams } from 'react-router';
import { getWorkById } from '../data/workData';

export default function Content() {

    const { id } = useParams();
    const [data, setData] = useState({
        title: '',
        subtitle: '',
        content1: '',
        content2: '',
        image1: [],
        image2: []
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchWorkById(id);
    }, [])

    const fetchWorkById = async(id) => {
        const data = await getWorkById(id);
        setData(data);
        console.log(data)
    }

    return (
        <div>
           <Navbar />

            {/* Introduction */}
            <div className='w-full md:w-8/12 mx-auto md:flex py-10 md:py-30 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] gap-10'>
                <div className='w-full md:w-[30%] px-10 md:px-0'>
                    <p className='font-magnetik-extrabold'>{data?.title}</p>
                    <br />
                    <p className='font-magnetik-light mb-5'>{data?.subtitle}</p>
                </div>
                <div className='w-full md:w-[70%] px-10 md:px-0'>
                    <p className='font-magnetik-light'>
                        {data?.content1}
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

            <ScrollGallery images={data?.image1} />

            {/* Strategy Section */}
            <div className='w-full md:w-8/12 mx-auto md:flex py-20 md:py-30 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] gap-10'>
                <div className='w-full md:w-[30%] px-10 md:px-0'>

                </div>
                <div className='w-full md:w-[70%] px-10 md:px-0'>
                    <p className='font-magnetik-light'>
                        {data?.content2}
                    </p>
                </div>
            </div>

            {/* Image Row 2 */}
            <ScrollGallery images={data?.image2} />

            <Footer />
        </div>
    )
}
