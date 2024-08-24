import React from 'react'
import Carousel from '../component/main/Carousel'
import Notice from '../component/main/Notice'
import Service from '../component/main/Services'
import Stepper from '../component/main/Stepper'
import Testimonial from '../component/main/Testimonial'
import BarPage from '../component/main/Barpage'
import Ourclient from '../component/main/OurClient'

const Home = () => {
  return (
   <>
   <Carousel/>
   <Notice />
   <Service />
    <Stepper />
    <Testimonial />
    <BarPage />
    <Ourclient />
   </>
  )
}

export default Home