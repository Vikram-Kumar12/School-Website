import React from 'react'
import LocationImage from '../components/homePage/LocationImage'
import HeroSection from '../components/homePage/HeroSection'
import Welcome from '../components/homePage/Welcome'
import HelpSection from '../components/homePage/HelpSection'
import MissionSection from '../components/homePage/MissionSection'
import GetStarted from '../components/homePage/GetStarted'
import OurPrograme from '../components/homePage/OurPrograme'
import Testimonals from '../components/homePage/Testimonals'
import OurStaff from '../components/homePage/OurStaff'
const HomePage = () => {
  return (
    <div className=''>
      <HeroSection/>
      <Welcome/>
      <HelpSection/>
      <MissionSection/>
      <GetStarted/>
      <OurPrograme/>
      <Testimonals/>
      <OurStaff/>
      <LocationImage/>
    </div>
  )
}

export default HomePage