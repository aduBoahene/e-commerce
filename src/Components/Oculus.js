import React from 'react'
import Ocu from "../images/q2.png"


export default function Oculus() {//md:container md:flex md:mx-auto
    return (
        <div className='p-4 mt-8 md:p-8 md:mx-auto md:mt-40 md:mb-20 bg-[#0e2165] border-2'>
            <div className='md:flex md:items-center md:gap-32 md:w-4/5 md:mx-auto'>
                <div className='md: md:text-center'>
                    <img src={Ocu} style={{ width: '364px', height: '151px' }} alt=""/>
                </div>
                <div className='mt-8'>
                    <h3 className='text-center text-3xl text-white font-bold font-[Poppins] md:text-3xl md:text-white md:text-left md:font-bold md:font-[Poppins]'>The next level of VR gaming</h3>
                    <p className='text-lg text-white mt-6 mb-6 font-[Poppins] md:mt-4 md:font-bold md:text-sm md:text-white md:font-[Poppins]'>
                        Hundresd of hit games, one of a kind experiences, live events,<br />
                        new ways to sat fit and a growing community of users await you on Quest 2
                    </p>

                    <div className={`text-center bg-gray-300 text-white w-full mt-2 border-2 font-bold rounded-full font-[Poppins]
                                p-2 md:text-white md:rounded-full md:mt-8 md:bg-gray-300
                             md:p-2 md:w-1/4 md:text-center md:font-extrabold  md:font-[Poppins]`}>
                        View More
                    </div>
                </div>
            </div>

        </div>
    )
}
