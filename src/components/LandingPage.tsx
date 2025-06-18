import React from 'react'
import Hero from './Hero'
import Services from './Services'
import AboutUs from './AboutUs'

import Demand from './Demand'
import EcoFleet from './Ecofleet'
import ContactSection from './Contact'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
        <Hero/>
           <Services/>
           <AboutUs/>
        
           <Demand/>
           <EcoFleet/>
           <ContactSection/>
           <Footer/>

    </div>
  )
}

export default LandingPage