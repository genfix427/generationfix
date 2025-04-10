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
          content="it services miami, it consulting miami, advanced network and computer services"
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
