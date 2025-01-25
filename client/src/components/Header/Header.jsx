"use client";

import { useState } from "react";
import { Drawer, Navbar, Dropdown } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Logo from '../../assets/images/logo.png'
import Call  from '../../assets/gifIcons/phone.gif'
import Chat  from '../../assets/gifIcons/chat.gif'

const Header = ({ onlineServices, repairServices, itServices }) => {
  const [isCompanyDrawerOpen, setIsCompanyDrawerOpen] = useState(false);
  const [isResourcesDrawerOpen, setIsResourcesDrawerOpen] = useState(false);
  const [isRepairDrawerOpen, setIsRepairDrawerOpen] = useState(false);

  const closeOtherDrawers = (drawer) => {
    if (drawer === 'company') {
      setIsCompanyDrawerOpen(true);
      setIsResourcesDrawerOpen(false);
      setIsRepairDrawerOpen(false);
    } else if (drawer === 'resources') {
      setIsCompanyDrawerOpen(false);
      setIsResourcesDrawerOpen(true);
      setIsRepairDrawerOpen(false);
    } else if (drawer === 'repair') {
      setIsCompanyDrawerOpen(false);
      setIsResourcesDrawerOpen(false);
      setIsRepairDrawerOpen(true);
    } else {
      setIsCompanyDrawerOpen(false);
      setIsResourcesDrawerOpen(false);
      setIsRepairDrawerOpen(false);
    }
  };


  return (
    <>
      <nav className="border-gray-200 border-b-[1px] bg-textColor">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2 px-4 ">
          <div className="flex items-center gap-3">
            <Link to='https://www.instagram.com/genfix247/#' className="text-green300 hover:text-headingColor transition text-lg sm:text-xl">
              <FaSquareInstagram />
            </Link>
            <Link to='https://www.facebook.com/genfix247' className="text-green300 hover:text-headingColor transition text-lg sm:text-xl">
              <FaFacebookSquare />
            </Link>
            <Link to='https://www.linkedin.com/company/generations-fix/?viewAsMember=true' className="text-green300 hover:text-headingColor transition text-lg sm:text-xl">
              <FaLinkedin />
            </Link>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-green300 font-semibold dark:text-white hover:underline hidden md:block">
              (+1 (786) 505-6525)
            </p>

            <Link to="tel:+17865056525">
              <button className="flex gap-2 items-center ml-4 bg-green300 text-white hover:!bg-white hover:text-black hover:border-2 hover:border-solid hover:border-green300 py-1 px-2 rounded-md mt-1 md:px-3 md:py-2 transition-all"> <img src={Call} className="w-5 rounded-full" alt="" />Call </button>
            </Link>
            <Link to="/contact">
              <button className="flex gap-2 items-center ml-4 bg-green300 text-white hover:!bg-white hover:text-black hover:border-2 hover:border-solid hover:border-green300 py-1 px-2 rounded-md mt-1 md:px-3 md:py-2 transition-all"> <img src={Chat} className="w-5 rounded-full" alt="" />Enquiry </button>
            </Link>

          </div>
        </div>
      </nav>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar fluid={true} className="text-white mx-auto max-w-screen-xl p-4">
          <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-lg sm:text-md font-semibold text-black">
              <img src={Logo} className="w-[100px] md:w-[120px]" alt="" />
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Link to='/appointment'>
              <button className=" ml-4 bg-green300 text-white hover:!bg-white hover:text-black hover:border-2 hover:border-solid hover:border-green300 p-1 rounded-md mt-1 md:p-3 transition-all">Free Consultation</button>
            </Link>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
          <Link to="/"><Navbar.Link>Home</Navbar.Link></Link>
          <Link to="/about"><Navbar.Link>About Us</Navbar.Link></Link>
            <Navbar.Link>
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  closeOtherDrawers('repair');
                  setIsRepairDrawerOpen(!isRepairDrawerOpen);
                }}
              >
                <span className="flex items-center">
                  Repair Services <HiChevronDown className="ml-2" />
                </span>
              </div>
            </Navbar.Link>
            <Navbar.Link>
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  closeOtherDrawers('company');
                  setIsCompanyDrawerOpen(!isCompanyDrawerOpen);
                }}
              >
                <span className="flex items-center">
                  Online Services <HiChevronDown className="ml-2" />
                </span>
              </div>
            </Navbar.Link>
            <Navbar.Link>
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  closeOtherDrawers('resources');
                  setIsResourcesDrawerOpen(!isResourcesDrawerOpen);
                }}
              >
                <span className="flex items-center">
                  IT Services <HiChevronDown className="ml-2" />
                </span>
              </div>
            </Navbar.Link>

            <Link to="/contact"><Navbar.Link>Contact</Navbar.Link></Link>
          </Navbar.Collapse>
        </Navbar>
      </header>

      {/* Company Drawer */}
      <Drawer open={isCompanyDrawerOpen} onClose={() => setIsCompanyDrawerOpen(false)} className="z-[9999] shadow-xl">
        <Drawer.Header title="Online Services" titleIcon={() => <></>} />
        <Drawer.Items className="flex flex-col gap-5 mt-5 overflow-y-auto">
          <Link className="text-gray-600 font-[600] hover:bg-textColor transition hover:text-black border-b p-2 rounded-xl" to={`/digital-marketing-services`} onClick={() => setIsCompanyDrawerOpen(false)}>
            All Digital Marketing Services
          </Link>
        </Drawer.Items>
        <Drawer.Items className="flex flex-col gap-5 mt-5 overflow-y-auto">
          {
            onlineServices.map((onlserv, index) => (

              <Link key={index} className="text-green300 hover:bg-textColor transition hover:text-black border-b p-2 rounded-xl" to={`/services/${onlserv.slug}`} onClick={() => setIsCompanyDrawerOpen(false)}>
                {onlserv.name}
              </Link>
            ))
          }
        </Drawer.Items>
      </Drawer>

      {/* Resources Drawer */}
      <Drawer open={isResourcesDrawerOpen} onClose={() => setIsResourcesDrawerOpen(false)} className="z-[9999] shadow-xl">
        <Drawer.Header title="IT Services" titleIcon={() => <></>} />
        <Drawer.Items className="flex flex-col gap-5 mt-5 overflow-y-auto">
          <Link className="text-gray-600 font-[600] hover:bg-textColor transition hover:text-black border-b p-2 rounded-xl" to={`/it-solutions`} onClick={() => setIsResourcesDrawerOpen(false)}>
            All It Solution Services
          </Link>
        </Drawer.Items>
        <Drawer.Items className="flex flex-col gap-5 mt-5">
          {
            itServices.map((itsolserv, index) => (
              <Link key={index} className="text-green300 hover:bg-textColor transition hover:text-black border-b p-2 rounded-xl" to={`/it-services/${itsolserv.slug}`} onClick={() => setIsResourcesDrawerOpen(false)}>
                {itsolserv.name}
              </Link>
            ))
          }
        </Drawer.Items>
      </Drawer>

      {/* Resources Drawer */}
      <Drawer open={isRepairDrawerOpen} onClose={() => setIsRepairDrawerOpen(false)} className="z-[9999] shadow-xl">
        <Drawer.Header title="Repair Services" titleIcon={() => <></>} />
        <Drawer.Items className="flex flex-col gap-5 mt-5 overflow-y-auto">
          <Link className="text-gray-600 font-[600] hover:bg-textColor transition hover:text-black border-b p-2 rounded-xl" to={`/repair-services`} onClick={() => setIsRepairDrawerOpen(false)}>
            All Repair Services
          </Link>
        </Drawer.Items>
        <Drawer.Items className="flex flex-col gap-5 mt-5">
          {
            repairServices.map((itserv, index) => (
              <Link key={index} className="text-green300 hover:bg-textColor transition hover:text-black border-b p-2 rounded-xl" to={`/repair-services/${itserv.slug}`} onClick={() => setIsRepairDrawerOpen(false)}>
                {itserv.name}
              </Link>
            ))
          }
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Header;
