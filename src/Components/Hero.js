import React from 'react'
import RoundButton from './RoundButton'
import Bose from "../images/boseHero.png"


export default function Hero() {

    const menuItemList = [
        "Furniture",
        "ELectronics",
        "Fashion",
        "Beauty and Personal Care",
        "Computers",
        "Books",
        "Arts",
        "Smart Home",
        "Baby Care",
        "Movies & Television",
        "Accesories"
    ]

  return (
    <div className='md:container md:flex md:mx-auto md:p-6'>

      <div className='md:w-1/5'>
        <div className='w-full p-4 bg-[#0e2165] flex text-white md:bg-[#0e2165] md:flex md:p-4 justify-between'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className='md:text-white md:font-[Poppins] md:font-bold'>Browse By Category</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        

        <div className=''>
            {menuItemList.map((item,index)=>(<SideBarItem key={index} menuLabel={item}/>))}
        </div>
      </div>

      <div className='md:border-2 md:border-gray-200 md:w-4/5'> 

        <div className='md:flex md:justify-between md:p-4'>
             <div className='hidden md:flex md:justify-between md:font-[Poppins] font-bold'>
                <div className='md:border-r-2 p-2'>Home</div>
                <div className='md:border-r-2 p-2'>Shop</div>
                <div className='md:border-r-2 p-2'>Blog</div>
                <div className='md:border-r-2 p-2'>About</div>
                <div className='md:border-r-2 p-2'>Buy</div>
            </div>

            <div className='hidden md:flex md:font-[Poppins] font-bold'>
                <div className='md:border-r-2 p-2'>SPECIAL OFFERS</div>
                <div className='md:border-r-2 p-2'>ENGLISH</div>
            </div>
        </div>

        <div className='p-4 mt-4 md:p-16 md:flex gap-4'>
            <div>
                <span className='text-[#0e2165] font-bold md:font-bold md:text-[#0e2165]'>#Top Quality</span>
                <h3 className='text-5xl mt-2 text-[#0e2165] font-bold md:text-7xl md:font-black md:font-[Poppins]'>Beats Studio3</h3>
                <h3 className='text-3xl mt-2 text-[#0e2165] font-bold md:text-7xl md:font-black md:font-[Poppins]'>Wireless</h3>

                <p className='p-2 mt-4 font-[Poppins] font-bold md:mt-8 md:mb-8 md:font-[Poppins]'>
                    A sleek, streamlined and foldable design plus seamless setup via the Apple W1 chip 
                    means these are durable and portable enough to stay on-the-move with you.
                </p>

                <RoundButton caption="Buy Now" width="1/3"/>
            </div>

            <div className='text-center mt-8'>
                <img src={Bose} className="md: -mt-8"alt='' />
            </div>
            
        </div>
          

            
      </div>

    </div>
  )
}



function SideBarItem({menuLabel}){
    return(
        <div className='w-full flex justify-between p-4 md:flex md:justify-between md:p-2'>
            <span className='md:font-[Poppins] md:font-bold text-gray-400'>{menuLabel}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    )
}