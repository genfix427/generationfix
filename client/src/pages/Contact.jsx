import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactHighlight from '../components/Contact/ContactHighlight'
import ContactLocation from '../components/Contact/ContactLocation'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>24/7 IT Support in Miami - Generationsfix</title>
        <meta
          name="keywords"
          content="Business IT Support Miami, company founders, know about us"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div>
        <ContactHero />
        <ContactHighlight />
        <ContactLocation />
      </div>
    </>
  )
}

export default Contact
