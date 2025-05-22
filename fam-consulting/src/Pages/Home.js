import React from 'react'
import Slider from '../Components/HomeSlider/Slider'
import ConsultingSection from '../Components/HomeScroll/ConsultingSection'
import Homescrolltop from '../Components/HomeScrollTop/Homescrolltop'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Homescrolltop/>
      <ConsultingSection/>
    </div>
  )
}

export default Home
