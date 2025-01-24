import React from 'react'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    path: "/",
    icon: <AiFillInstagram className='group-hover:text-black w-4 h-5' />
  },
  {
    path: "/",
    icon: <FaFacebookSquare className='group-hover:text-black w-4 h-5' />
  },

  {
    path: "/",
    icon: <RiLinkedinFill className='group-hover:text-black w-4 h-5' />
  },
]

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3 mt-4 justify-center">
      {socialLinks.map((link, index) => (
        <Link to={link.path} key={index} className='w-10 h-10 border border-white rounded-full flex items-center justify-center group  text-white hover:border-black hover:translate-y-2 transition-all'>
          {link.icon}
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
