import React from 'react'
import Icon1 from '../../assets/gifIcons/handshake.gif'
import Icon2 from '../../assets/gifIcons/search.gif'
import Icon3 from '../../assets/gifIcons/target.gif'
import Icon4 from '../../assets/gifIcons/expert.gif'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";

const aboutCard = [
  {
    icon: Icon1,
    title: 'Is This You?',
    description: 'Struggling to reach your target audience online? Frustrated with low website traffic and dwindling leads? Feeling overwhelmed by the ever-changing digital landscape?',
    Link: "/about"
  },
  {
    icon: Icon2,
    title: 'Core Values:',
    description: 'Transparency, integrity, and client success are at the heart of everything we do. We believe in building long-term partnerships based on trust and mutual growth.',
    Link: "/about"
  },
  {
    icon: Icon3,
    title: 'Why Choose Us?',
    description: 'We are a data-driven digital marketing agency that delivers measurable results. We combine creativity with cutting-edge technology to help your brand thrive online.',
    Link: "/about"
  },
  {
    icon: Icon4,
    title: 'Google Reviews',
    description: 'See what our clients say about us! Check out our Google Reviews for GenerationFix, and share your experience with us. Your feedback helps us grow and serve you better!',
    Link: "https://www.google.com/maps/place/Generations+Fix/@25.7818982,-80.2280938,15z/data=!4m15!1m8!3m7!1s0x88d9b692e6051e35:0xe2f2e7b3fc0ac9c4!2s821+SW+2nd+St+APT+10,+Miami,+FL+33130,+USA!3b1!8m2!3d25.7720118!4d-80.2081343!16s%2Fg%2F11hcd_9b5b!3m5!1s0x88d9b7cfe233af47:0x2e5171ea7b3daead!8m2!3d25.7720118!4d-80.2081343!16s%2Fg%2F11ybnrkpr5?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D"
  },
]

const HomeAboutCard = () => {
  return (
    <section className='mb-[100px] mx-5'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {aboutCard.map((item, index) => (
            <div key={index} className="flex gap-5 border-2 border-solid p-5 rounded-[10px] hover:shadow-md bg-white hover:bg-textColor">
              <img src={item.icon} alt={item.title} className="w-[100px]
              h-[100px] md:w-[100px] md:h-[100px] object-cover
              rounded-[50%] md:rounded-[100%]"/>

              <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-headingColor">{item.title}</h2>
              <span className="w-[100px] h-1 bg-green300 rounded-full block mt-[-14px] "></span>

              <p className="text-[16px] text-green300">{item.description}</p>

              <div className="">
                <Link to={item.Link}>
                  <GoArrowUpRight className='bg-green300 text-white text-[40px] p-2 rounded-full' />
                </Link>
              </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeAboutCard
