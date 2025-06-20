import React from 'react'
import LocationImage from '../components/homePage/LocationImage'
import HeroSection from '../components/homePage/HeroSection'
import Welcome from '../components/homePage/Welcome'
const HomePage = () => {
  return (
    <div className=''>
      <HeroSection/>
      <Welcome/>
      <LocationImage/>
    </div>
  )
}

export default HomePage