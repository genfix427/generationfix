import React from 'react'
import AboutHero from '../components/About/AboutHero'
import Aboutus from '../components/About/Aboutus'
import AboutOfferCard from '../components/About/AboutOfferCard'
import AboutMission from '../components/About/AboutMission'
import AboutContent from '../components/About/AboutContent'
import HomeContent from '../components/HomeComponents/HomeContent'
import WhyChoose from '../components/About/WhyChoose'
import AboutWork from '../components/About/AboutWork'
import OwnerCont from '../components/About/OwnerCont'
import { Helmet } from 'react-helmet-async'

const AboutUs = () => {
  return (
    <>

      <Helmet>
        <title>Know more about us - Generationsfix</title>
        <meta
          name="keywords"
          content="Business IT Support Miami, company founders, know about us"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <AboutHero />
      <OwnerCont />
      <WhyChoose />
      <AboutWork />
      <AboutOfferCard />
      <Aboutus />

      <AboutContent />
      <HomeContent />
      <AboutMission />
    </>
  )
}

export default AboutUs
