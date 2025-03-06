import React from 'react'
import RSHero from '../components/RepairServices/RSHero'
import { repairServices } from '../assets/data/repairServices'
import RSCard from '../components/RepairServices/RSCard'
import { Helmet } from 'react-helmet-async'

const RepairServices = () => {
  return (
    <>
      <Helmet>
        <title>Best Tech Repair in Miami - Generationsfix</title>
        <meta
          name="keywords"
          content="Business IT Support Miami, company founders, know about us"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div>
        <RSHero />
        <RSCard repairServices={repairServices} />
      </div>
    </>
  )
}

export default RepairServices
