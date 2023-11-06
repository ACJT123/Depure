import { useState } from 'react'
import HighLights from '../components/home/highlights'
import HomeServices from '../components/home/HomeServices'
import AboutUs from '../components/home/AboutUs'
import Location from '../components/home/Location'

function Home() {

    return (
        <>
            <HighLights />
            <HomeServices />
            <AboutUs />
            <Location />
        </>
    )
}

export default Home