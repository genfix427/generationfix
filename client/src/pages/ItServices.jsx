import React from 'react'
import ISHero from '../components/ItServices/ISHero'
import ISCard from '../components/ItServices/ISCard'
import { itServices } from '../assets/data/itServices'
import { Helmet } from 'react-helmet-async'

const ItServices = () => {
  return (
    <>
      <Helmet>
        <title>Affordable IT Services Miami - Generationsfix</title>
        <meta
          name="keywords"
          content="it services miami, it support miami, managed it services miami fl"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div>
        <ISHero />
        <ISCard itServices={itServices} />
      </div>
    </>
  )
}

export default ItServices
