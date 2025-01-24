"use client";

import React from "react";
import { Card } from "flowbite-react";
import Image1 from "../../assets/images/mobile.jpg";
import Image2 from "../../assets/images/laptop.jpg";
import Image3 from "../../assets/images/ipad.jpg";
import Image4 from "../../assets/images/tablet.jpg";
import Image5 from "../../assets/images/pchardware.jpg";
import Image6 from "../../assets/images/computer.jpg";
import Image7 from "../../assets/images/pcupgrade.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { repairServices } from "../../assets/data/repairServices";

const BlogCard = () => {
  const scrollContainer = React.useRef(null);

  const scrollLeft = () => {
    const containerWidth = scrollContainer.current.offsetWidth;
    scrollContainer.current.scrollBy({
      left: -containerWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const containerWidth = scrollContainer.current.offsetWidth;
    scrollContainer.current.scrollBy({
      left: containerWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="my-[55px] mx-3 md:mx-0 relative">
      <div className="container">

        <div className="flex flex-wrap justify-between mb-8 mx-3">
          <div className="">
            <p className="text-[14px] text-green300 font-bold">Our Repair Services</p>
            <h2 className="text-3xl text-headingColor font-bold">Make Your Devices <span className="text-green300">Run</span> Like <span className="text-green300">New Again!</span></h2>
          </div>
          <div className="">
            <Link to="/repair-services">
              <GoArrowUpRight className='bg-green300 text-[40px] text-white font-bold p-2 rounded-full hover:bg-white hover:text-green300 hover:border hover:border-solid hover:border-green300 transition-all' />
            </Link>
          </div>
        </div>

        <div
          ref={scrollContainer}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {repairServices.map((item, index) => (

            <Card
              className="min-w-[100%] h-[500px] md:min-w-[300px] max-w-[350px] flex-shrink-0 shadow-md snap-center hover:bg-textColor mx-3"
              key={index}
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={item.contImg}
            >
              <Link to={`/repair-services/${item.id}`}>
                <p className="text-green300 text-md md:text-lg">{item.name}</p>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.heading}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.shortDescription}
                </p>
              </Link>
            </Card>

          ))}
        </div>
        {/* Arrows positioned below */}
        <div className="flex justify-start mt-4 gap-5 mx-3">
          <button
            onClick={scrollLeft}
            className="p-2 bg-green300 text-white rounded-full shadow-lg hover:bg-white hover:text-green300 hover:border hover:border-solid hover:border-green300"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-green300 text-white rounded-full shadow-lg hover:bg-white hover:text-green300 hover:border hover:border-solid hover:border-green300"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
