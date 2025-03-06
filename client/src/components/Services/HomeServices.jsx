import React, { useState } from 'react';
import ServiceTimeline from './ServiceTimeline';
import OnlineServiceTimeline from './OnlineServiceTimeline';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const HomeServices = () => {
  const [tab, setTab] = useState('home');
  const userData = { name: 'John Doe' }; // Example user data.

  return (
    <section className="mb-[100px] mx-5">
      <div className="container">
        <div className="flex flex-wrap justify-between mb-8 pb-2">
          <div className="">
            <p className="text-[14px] text-green300 font-bold">Our Services</p>
            <h2 className="text-3xl text-headingColor font-bold">Check Out <span className="text-green300">Our</span> Popular <span className="text-green300">Services</span></h2>
          </div>
          <div className="">
            <Link to="/about">
              <GoArrowUpRight className='bg-green300 text-[40px] text-white font-bold p-2 rounded-full hover:bg-white hover:text-green300 hover:border hover:border-solid hover:border-green300 transition-all' />
            </Link>
          </div>
        </div>

        {/* Tabs Container with Horizontal Scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <Tabs aria-label="Tabs with icons" variant="underline" className="flex-nowrap whitespace-nowrap">
            <Tabs.Item active title="Manage IT Services" icon={MdDashboard} className="text-sm md:text-base">
              <ServiceTimeline />
            </Tabs.Item>

            <Tabs.Item title="Digital Marketing" icon={HiUserCircle} className="text-sm md:text-base">
              <OnlineServiceTimeline />
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;