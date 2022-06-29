import React from 'react'

export default function RoundButton({caption, width, backColor}) {
  return (
    <div className={`w-1/2 mt-2 border-2 border-[#0e2165] rounded-full p-2 text-center md:${backColor} md:font-bold md:rounded-full md:border-2 md:border-[#0e2165] md:p-2 md:${width} md:text-center md:font-extrabold md:text-[#0e2165] md:font-[Poppins]`}>
        {caption}
    </div>
  )
}
