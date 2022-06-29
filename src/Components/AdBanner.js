import React from 'react'
import Shoe from "../images/adShoe.png"
import RoundButton from './RoundButton'



export default function AdBanner() {
  return (
    <div className='md:container md:flex gap-4 md:mx-auto md:p-6'>
            <AddContentLeft
                image={Shoe} 
                description={`Under Armour Men's \n Running Shoe`} 
                buttonCaption="Buy" 
                background="bg-gray-200" 
                smallTextColor="#0e2165"
                />

                
            <AddContentRight
                image={Shoe} 
                description={`Oculus Quest 2 Virtual Reality Headset`} 
                buttonCaption="View Store" 
                background="bg-[#0e2165]" 
                backColor="bg-gray-200"
                textColor="text-white"
                smallTextColor="text-white"
                />
        </div>

  )
}


function AddContentLeft({description, image, imageClasses, background, buttonCaption, backColor, textColor, smallTextColor}){
    return(
        <div className={`md:w-1/2 md:flex md:items-center md:p-4 md:${background}`}>
            <div className='text-left p-4 md:p-16'>
                <span className={`font-bold text-[#0e2165] md:text-sm md:${smallTextColor} md:font-extrabold md:font-[Poppins]`}>#New Collection</span>
                <h3 className={`text-[#0e2165] font-extrabold text-4xl font-[Poppins] mb-4 md:text-2xl md:${textColor} mt-4 mb-4 md:font-black md:w-3/4`}>{description}</h3>
                <RoundButton caption={buttonCaption} width="1/6 mt-4" backColor={backColor}/>
            </div>

            <img src={image} className="md:h-52" alt=''/>
            
        </div>
    )
}


function AddContentRight({description, image, imageClasses, background, buttonCaption, backColor, textColor, smallTextColor}){
    return(
        <div className={`md:w-1/2 md:flex md:items-center md:p-2 md:${background}`}>
            <div className='text-left p-4 md:p-16'>
                <span className={`font-bold text-[#0e2165] md:text-sm md:${smallTextColor} md:font-extrabold md:font-[Poppins]`}>#New Collection</span>
                <h3 className={`text-[#0e2165] font-extrabold text-4xl font-[Poppins] mb-4 md:text-2xl md:${textColor} mt-4 mb-4 md:font-black md:w-5/6`}>{description}</h3>
                <RoundButton caption={buttonCaption} width="1/6" backColor={backColor}/>
            </div>

            <img src={image} className="mx-auto md:h-52" alt=''/>
            
        </div>
    )
}