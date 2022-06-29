import React from 'react'
import Decor from "../images/decor.jpg"
import Sofa2 from "../images/sofa2.png"
import Sofa3 from "../images/sofa3.png"
import Sofa11 from "../images/sofa11.png"

import Sofa4 from "../images/4.png"
import Sofa5 from "../images/5.png"
import Sofa6 from "../images/6.png"
import kente from "../images/kentee.png"

import kenteCh from "../images/123.png"

import bread from "../images/00.png"





export default function ProductList() {
  return (
    <div className='mt-8 md:container md:flex md:mx-auto md:p-6'>
        <div className='mb-8 md:w-1/5'>
            <AdvertCard one="NEW ARRIVALS" two="Bedroom Sets" three="Temport sem finibus" four="$299.00"/>
            <AdvertCard one="BEST OFFERS" two="SOFT Chairs" three="Temport sem finibus" four="$179.00"/>
        </div>

        <div className='md:w-full'>
            <div className='p-8 font-[poppins] flex gap-4 font-bold md:mt-8 md:mr-4 md:p-4 md:flex md:gap-4 md:font-bold md:font-[poppins]'>
                <span className='text-[#0e2165] font-bold font-[Poppins]'>Best Sales</span>
                <span className='font-bold font-[Poppins]'>New Arrivals</span>
                <span className='font-bold font-[Poppins]'>Featured</span>

            </div>
            <div className='container mx-auto md:flex md:p-4 md:mb-5 md:-mt-10'>
                <ChairCard image={Sofa11}/>
                <ChairCard image={Sofa2}/>
                <ChairCard image={Sofa3}/>
            </div>

            <div className='md:flex md:p-4 md:mb-5'>
                <ChairCard image={Sofa4}/>
                <ChairCard image={Sofa5}/>
                <ChairCard image={Sofa6}/>
            </div>

        </div>
        
    </div>
  )
}



function AdvertCard({one, two, three, four}){
    return(
        <div className="w-full mt-8 mb-4 h-60 md:flex md:mb-8 md:h-96" style={{backgroundImage: `url(${Decor})`, backgroundSize:'cover'}}>
            <div className=" top-4 m-auto text-white font-bold text-center md:m-auto md:text-white md:font-bold md:text-center">
                <h3>{one}</h3>
                <h3>{two}</h3>
                <p>{three}</p>
                <p>{four}</p>
            </div>
        </div>
    )
}

function ChairCard({image}){
    return(
        <div className='mb-4 md:mt-6 md:mr-4 md:h-64 md:p-4 md:w-full'>
            <div className='p-2 md:bg-gray-200'>
                <img src={image} className="h-66 md:h-52 md:w-full"/>
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