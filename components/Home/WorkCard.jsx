import React from 'react'

export default function WorkCard({image, title}) {
  return (
    <div className='flex h-[140px] w-[140px] md:h-[110px] md:w-[110px] lg:h-[140px] lg:w-[140px] flex-col items-center relative group z-10 shadow-sm shadow-black aspect-square'>
        
        <img src={image} className='h-[140px] w-[140px] md:w-[110px] md:h-[110px] lg:h-[140px] lg:w-[140px] object-center object-cover'/>
        <div className='absolute inset-0 flex items-center justify-center px-2 h-[140px] md:h-[110px] lg:h-[140px] text-sm bg-transparent text-transparent group-hover:bg-black group-hover:bg-opacity-70 group-hover:text-light7 w-full text-center'>{title}</div>

    </div>
  )
}
