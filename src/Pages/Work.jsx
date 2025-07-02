import React from 'react'
import WorkSection from '../Components/WorkSection'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Work() {
    return (
        <div>
            <Navbar />
            <div className="pb-30">
                <WorkSection />
            </div>
            <Footer />
        </div>
    )
}
