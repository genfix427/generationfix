import React from 'react'
import OSHero from '../components/OnlineServices/OSHero'
import OSServiceCard from '../components/OnlineServices/OSServiceCard'
import { onlineServices } from '../assets/data/services'
import { Helmet } from 'react-helmet-async'

const OnlineServices = () => {
  return (
    <>

      <Helmet>
        <title>Affordable Digital Marketing Services Miami - Generationsfix</title>
        <meta
          name="keywords"
          content="Business IT Support Miami, company founders, know about us"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div>
        <OSHero />
        <OSServiceCard onlineServices={onlineServices} />
      </div>
    </>
  )
}

export default OnlineServices
