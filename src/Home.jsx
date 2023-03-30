import React from 'react'
import SmallWithSocial from './components/Footer'
import WithSubnavigation from './components/Navbar'
import Category from './components/Category'
import CaptionCarousel from './components/Slider'

const Home = () => {
  return (
    <div>
        <WithSubnavigation />
      <CaptionCarousel />
      <Category />
      <SmallWithSocial /> 
    </div>
  )
}

export default Home