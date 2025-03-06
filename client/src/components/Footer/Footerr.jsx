"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'

const Footerr = () => {
  return (
    <Footer container className="mt-[100px] border-t-[4px] border-solid border-green300">
      <div className="container">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="md:max-w-[500px]">
            <div className="flex justify-center md:justify-start"><img src={Logo} className="w-[200px]" alt="" /></div>
            <p className="mt-5 text-center text-green300 text-[14px] mb-5">We make IT happen</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Services" />
              <Footer.LinkGroup col>
                <Link to='/digital-marketing-services' ><Footer.Link>Digital Marketing</Footer.Link></Link>
                <Link to='/it-solutions' ><Footer.Link>IT Services</Footer.Link></Link>
                <Link to='/repair-services' ><Footer.Link>Repair Services</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Link to='/' ><Footer.Link>Home</Footer.Link></Link>
                <Link to='/about' ><Footer.Link>About</Footer.Link></Link>
                <Link to='/contact' ><Footer.Link>Contact</Footer.Link></Link>
                <Link to='/appointment' ><Footer.Link>Free Consultation</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Link to='/faq' ><Footer.Link>FAQ</Footer.Link></Link>
                <Link to='/privacy-policy' ><Footer.Link>Privacy Policy</Footer.Link></Link>
                <Link to='/terms-and-conditions' ><Footer.Link>Terms &amp; Conditions</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="GenerationsFix. All right reserved" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Link to='https://www.facebook.com/genfix247' ><Footer.Icon icon={BsFacebook} /></Link>
            <Link to='https://www.instagram.com/generationsfix_miami/' ><Footer.Icon icon={BsInstagram} /></Link>
            <Link to='https://www.linkedin.com/company/generations-fix/?viewAsMember=true' ><Footer.Icon icon={BsLinkedin} /></Link>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Footerr
