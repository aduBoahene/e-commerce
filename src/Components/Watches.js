import React from 'react'

import watch1 from "../images/watch1.png"
import watch03 from "../images/03.png"
import watch1000 from "../images/watch1000.png"


export default function Watches() {
    return (
        <div className='md:container md:flex md:mx-auto'>

            <div className='md:w-full'>
                <div>
                    <div className=' font-[poppins] flex gap-4 font-bold md:mt-8 md:mr-4 md:p-4 md:flex md:gap-4 md:font-bold md:font-[poppins]'>
                        <span className='text-[#0e2165] font-bold font-[Poppins]'>Popular in Catergory</span>
                        <span className=' font-bold font-[Poppins]'>Watches</span>
                        <span className=' font-bold font-[Poppins]'>Jewels</span>
                        <span className=' font-bold font-[Poppins]'>Ornaments</span>
                    </div>
                </div>

                <div className='md:flex md:p-4 md:mb-5 md:-mt-10'>
                    <ChairCard image={watch1} />
                    <ChairCard image={watch03} />
                    <ChairCard image={watch1000} />
                    <ChairCard image={watch1} />
                </div>

            </div>

        </div>
    )
}

function ChairCard({ image }) {
    return (
        <div className='mb-4 md:mt-6 md:mr-4 md:h-64 md:p-4 md:w-full'>
            <div className='p-2 md:bg-gray-200'>
                <img src={image} className="h-84 w-full md:h-52 md:w-full" />
            </div>

            <div className='p-2 text-left text-[#0e2165] font-[Poppins] font-bold md:mt-4 md:font-[Poppins] md:font-bold'>
                <p>Amazon Brand - Stome & Beam</p>
                <p>West view Extra-deep down</p>
                <p className='text-gray-400 md:text-gray-400'>Best Sales</p>
                <p>$193.00</p>
            </div>
        </div>
    )
}
