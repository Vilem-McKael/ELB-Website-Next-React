import React from 'react'

export default function FeaturedWorkCardHome({image, title, work, roles}) {
  return (
    <div className='flex flex-col w-full sm:w-[240px] md:w-[280px] justify-start items-center font-medium'>

      {/* WORK IMAGE */}
      <img src={image} className='sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-square object-cover'/>

      {/* WORK DESCRIPTION */}
      <div className='my-4 w-full pl-4 md:pl-0'>

        {/* TITLE */}
        <div className='font-semibold text-2xl'>
          {title}
        </div>

        {/* WORK (ALBUM OR SONG) */}
        {work ? 
        <div className='text-lg italic'>
          {work}
        </div>
        :
        <></>
        }

        {/* ROLES FOR THIS WORK */}
        <div className='w-[300px] sm:w-[240px] md:w-[280px] text-sm font-light flex gap-1 justify-start text-wrap'>
          <div>{roles.map((role, index) => index !== roles.length - 1 ? role + ' / ' : role)}</div>
        </div>
        
      </div>
      
    </div>
  )
}
