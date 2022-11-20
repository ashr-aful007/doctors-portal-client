import React from 'react'
import MakeAppointment from '../../MakeAppointment/MakeAppointment'
import Banner from '../Banner/Banner'
import HomeIntro from '../HomeIntro/HomeIntro'
import InfoCards from '../InfoCard/InfoCards'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'

function Home() {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <HomeIntro></HomeIntro>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home