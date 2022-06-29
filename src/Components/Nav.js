import React from 'react'
import {SocialMediaIconsReact} from 'social-media-icons-react';


export default function Nav() {

  return (
    <div className='bg-[#0e2165] md:w-full'>

        <div className='md:mx-auto md:flex md:justify-between md:items-center pt-2 pb-2'>

            <div className='w-full text-xs text-center text-white font-bold md:text-white md:text-sm md:font-bold md:font-[Poppins] md:w-3/5'>
                FREE SHIPPING FOR ALL ORDERS ABOVE $150
            </div>

            
            <div className="hidden md:block md:flex md:justify-center md:gap-4 md:w-2/3">
                <div className=" md:text-white">
                    <div className='flex gap-2 justify-center md:flex md:gap-1'>
                        <SocialMediaIconsReact borderColor="#09143C" 
                         iconColor="#e2e2e2" 
                         backgroundColor="#09143C"
                        icon="messenger" 
                        url="https://some-website.com/my-social-media-url" 
                        size="20" />
                         <SocialMediaIconsReact borderColor="#09143C" 
                        icon="linkedin" 
                        iconColor="#e2e2e2" 
                        url="https://some-website.com/my-social-media-url" 
                        size="20" />
                         <SocialMediaIconsReact borderColor="#09143C" 
                        icon="facebook" 
                                               backgroundColor="#09143C"
                        url="https://some-website.com/my-social-media-url" 
                        size="20" />
                        <SocialMediaIconsReact borderColor="#09143C" 
                        icon="instagram" 
                        iconColor="#e2e2e2" 
                        backgroundColor="#09143C" 
                        url="https://some-website.com/my-social-media-url" 
                        size="20" />
                    </div>
                   
                </div>
                <div className='justify-center flex gap-2 md:flex md:gap-4 md:font-[Poppins] md:text-sm md:font-bold'>
                    <div className=" text-white">NEWS LETTER</div>
                    <div className=" text-white">CONTACT</div>
                    <div className=" text-white">FAQS</div>
                    <div className=" text-white">HELP</div>
                </div>
               
            </div>

        </div>
        
    </div>
  )
}
