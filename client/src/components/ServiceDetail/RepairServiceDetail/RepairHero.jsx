import React from 'react'
import { Helmet } from 'react-helmet-async'

const RepairHero = ({ repServices }) => {
  return (
    <>
      <Helmet>
        <title>{repServices.heading}</title>
        <meta
          name="keywords"
          content="Phone Repair Miami, Printer Setup and Repair Miami, Laptop Repair Miami"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="servicebg py-20">
        <div className="container">
          <div className="flex flex-col gap-5 justify-between items-center mx-5 text-center">
            <p className="text-[14px] md:text-[16px] text-white text-bold">{repServices.slogan}</p>
            <h1 className='text-xl sm:text-2xl md:text-4xl text-white font-bold'>{repServices.heading}</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default RepairHero
