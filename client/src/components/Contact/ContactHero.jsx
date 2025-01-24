import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { GoArrowUpRight } from "react-icons/go";

const socialLinks = [
  {
    path: "/",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "/",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "/",
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
  },
]

const ContactHero = () => {

  return (
    <section className='container mt-0 md:!mt-10 contactbg py-10 !rounded-xl'>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-center mx-5 h-[70vh] sm:h-[60vh]">

          {/* ================= hero content ================ */}

          <div className="w-full mx-auto">
            
            <div className="text-center">
              <h1 className="text-[35px] leading-[46px] text-white font-[800] md:text-[60px] md:leading-[70px] ">
              Get in Touch with Us
              </h1>
              <p className="text-white max-w-[600px] mx-auto mt-[18px]">
              Whether you're looking to build a stunning website, enhance your SEO, or need expert repair services, we're here to help! Reach out to us today, and let us turn your ideas into reality. Our dedicated team is ready to offer personalized solutions that will meet your needs, from innovative digital marketing strategies to efficient repair services. Contact us now and start your journey toward success!
              </p>

              <div className="flex gap-4 justify-center flex-col sm:flex-row text-white mt-10">
                <Link
                  to='/appointment'
                  className=" bg-transparent border-2 border-solid border-green300 hover:bg-green300 hover:text-white transition-all font-bold p-1 rounded-xl py-2 px-5"
                >
                  Book Appointment
                </Link>
                <Link
                  to='/contact'
                  className=" bg-transparent border-2 border-solid border-green300 hover:bg-green300 hover:text-white transition-all font-bold p-1 rounded-xl py-2 px-5"
                >
                  Send Enquiry
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-4 justify-center">
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index} className='w-9 h-9 border border-white rounded-full flex items-center justify-center group  text-white hover:border-none'>
                  {link.icon}
                </Link>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default ContactHero