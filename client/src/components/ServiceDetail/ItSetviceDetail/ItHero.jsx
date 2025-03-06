import React from 'react'
import { Helmet } from 'react-helmet-async'

const ItHero = ({ itsolServices }) => {
  return (
    <>
      <Helmet>
        <title>{itsolServices.heading}</title>
        <meta
          name="keywords"
          content="Business IT Support Miami, IT Support Miami, Remote IT Support Miami"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="servicebg py-20">
        <div className="container">
          <div className="flex flex-col gap-5 justify-between items-center mx-5 text-center">
            <p className="text-[14px] md:text-[16px] text-white text-bold">{itsolServices.slogan}</p>
            <h1 className='text-xl sm:text-2xl md:text-4xl text-white font-bold'>{itsolServices.heading}</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default ItHero
