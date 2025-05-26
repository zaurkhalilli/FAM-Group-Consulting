import React from 'react'
import Slider from '../Components/HomeSlider/Slider'
import ConsultingSection from '../Components/HomeScroll/ConsultingSection'
import Homescrolltop from '../Components/HomeScrollTop/Homescrolltop'
import Homemap from '../Components/HomeMap/Homemap'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Homescrolltop/>
      <ConsultingSection/>
      <Homemap/>
    </div>
  )
}

export default Home
