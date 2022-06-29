import React from 'react'

export default function Header() {
  return (
    <div className='md:container mx-auto'>
         <div className='md:mx-auto md:flex md:justify-between md:items-center md:pt-2'>
            <HeaderLogo/>
            <HeaderCenter/>
            <HeaderOptions />
        </div>
    </div>
   
  )
}

function HeaderCenter(){
    return(
        <div className='w-full md:flex md:items-center md:w-1/2'>
                <div className='p-2 md:border-gray-400 md:flex md:flex-1 md:justify-between md:pt-4 md:pb-4 md:px-2 md:rounded-lg md:border-2'>

                    <select className="w-full rounded-lg border-2 p-2 font-[Poppins] bg-gray-100 md:text-gray-400 md:w-2/5 md:font-[Poppins] md:border-2">
                        <option className='md:w-full'>Select Category</option>
                        <option>Hello</option>
                        <option>Hello</option>
                    </select>
                    <div className='w-full flex justify-between p-2 rounded-lg md:flex md:items-center md:w-3/5 md:justify-between md:p-2 border-2'>
                        <input type="text" placeholder="Search your product" className='w-full outline-0 bg-gray-100 md:text-left md:w-full md:font-[Poppins]'/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                
        </div>
    )
}


function HeaderLogo(){
    return(
        <div className='p-4 flex justify-between sm:hidden md:flex md:items-center md:pt-2 md:cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>

            <div className='hidden md:block'>
                <h3 className=' md:text-xl md:font-black md:font-[Poppins]'>Multimart</h3>
                <span className='md:text-gray-400 md:text-sm md:fomt-bold'>Since 1997</span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>


        </div>
    )
}

function HeaderOptions(){
    return(
        <div className='md:flex gap-x-4'>
            <div className='hidden md:block md:font-[Poppins] font-bold'>
                 <span className='md:cursor-pointer'>LOGIN</span><span className='md:cursor-pointer'>/REGISTER</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="hidden h-6 w-6 md:block md:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="hidden h-6 w-6 md:block md:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

            <span className='hidden md:font-bold font-[Poppins]'>$0.00</span>

           
        </div>
    )
}
