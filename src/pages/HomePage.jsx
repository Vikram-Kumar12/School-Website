import React from 'react'
import LocationImage from '../components/homePage/LocationImage'
import HeroSection from '../components/homePage/HeroSection'
import Welcome from '../components/homePage/Welcome'
import HelpSection from '../components/homePage/HelpSection'
import MissionSection from '../components/homePage/MissionSection'
const HomePage = () => {
  return (
    <div className=''>
      <HeroSection/>
      <Welcome/>
      <HelpSection/>
      <MissionSection/>
      <LocationImage/>
    </div>
  )
}

export default HomePage