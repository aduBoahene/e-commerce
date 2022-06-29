import React from 'react'

import Sofa2 from "../images/sofa2.png"
import Sofa3 from "../images/sofa3.png"
import Sofa11 from "../images/sofa11.png"

export default function HeadPhones() {
  return (
    <div className='w-full mb-8 md:gap-4 md:flex md:w-5/6 mx-auto md:items-center'>
        <div className='text-center p-4 md:text-center md:p-4'>
            <h5 className='font-poppins font-bold text-[#0e2165]'>LIMITED TIME OFFER</h5>
            <h4 className='font-poppins font-[Poppins]'>PREMIUM AUDIO</h4>
            <h3 className='font-poppins font-extrabold text-[#0e2165]'>QUALITY HEADPHONES</h3>

            <div className='flex p-4 md:flex md:gap-2'>
                <span className='font-[Poppins]'>03<br/>Days</span><br/>
                <span className='font-[Poppins]'>33<br/>Hours</span><br/>
                <span className='font-[Poppins]'>30<br/>Minutes</span><br/>
                <span className='font-[Poppins]'>43<br/>Seconds</span>
            </div>

            <button className='text-white bg-[#0e2165] mt-4 pt-2 pb-2 pl-5 pr-5 rounded-full'>
                View Store
            </button>
        </div>

        
        <div className='md:w-full'>
            <div className='text-center md:flex md:p-4 md:mb-5 md:-mt-10'>
                <ChairCard image={Sofa11}/>
                <ChairCard image={Sofa2}/>
                <ChairCard image={Sofa3}/>
            </div>
        </div>

    </div>
  )
}


function ChairCard({image}){
    return(
        <div className='mb-4 h-auto md:mt-6 md:mr-4 md:h-64 md:p-4 md:w-full'>
            <div className='p-2 md:bg-gray-200'>
                <img src={image} className="h-66 md:h-52 md:w-full" alt=''/>
            </div>

            <div className='p-2 text-left text-[#0e2165] font-[Poppins] font-bold md:mt-4 md:font-[Poppins] md:font-bold'>
                <p>Amazon Brand - Stome & Beam</p>
                {/* <p>West view Extra-deep down</p>
                <p className='text-gray-400 md:text-gray-400'>Best Sales</p>
                <p>$193.00</p> */}
            </div>
        </div>
    )
}
