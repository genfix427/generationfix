import React from 'react'
import Raza from '../../assets/images/raza.png'
import Ruhaan from '../../assets/images/ruhaan.png'
import { PiGlobeStandFill } from "react-icons/pi";

const OwnerCont = () => {
  return (
    <section className='mt-[100px]'>
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mx-5">
              <div className="w-full rounded-xl overflow-hidden !bg-[#edf2f4] text-center">
                <img src={Ruhaan} className='w-[400px] h-[400px] object-cover rounded-xl hover:scale-[1.1] transition' alt="" />
                <div className="pt-1 text-black text-xl">Ruhaan</div>
                <div className="pt-1 pb-2 text-black text-md">Founder</div>
              </div>
    
              <div className="w-full flex flex-col gap-5">
                <div className="flex items-center gap-2 text-green300 bg-textColor p-2 w-[200px] rounded-[20px]">
                  <PiGlobeStandFill className='text-[20px] ' />
                  <p className="text-[14px] font-semibold ">Your Trusted Parteners</p>
                </div>
                <h2 className='text-2xl md:text-4xl font-bold text-headingColor'>What We Do at Generations Fix</h2>
                <p className="text-green300 text-[18px]">At Generations Fix, we specialize in providing comprehensive Managed IT Services and Digital Marketing solutions for small to medium-sized businesses and end customers.
                Our goal is to keep your business running smoothly, ensuring that your computers, servers, printers, and other essential devices operate seamlessly without disruption.</p>
    
                =
              </div>

              <div className="w-full rounded-xl overflow-hidden !bg-[#edf2f4] text-center">
                <img src={Raza} className='w-[400px] h-[400px] object-cover rounded-xl hover:scale-[1.1] transition' alt="" />
                <div className="pt-1 text-black text-xl">Raza</div>
                <div className="pt-1 pb-2 text-black text-md">Co-Founder</div>
              </div>
            </div>
          </div>
        </section >
  )
}

export default OwnerCont
