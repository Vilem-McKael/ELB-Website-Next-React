import React from 'react'

export default function NewMediaContainer({image, title, work, roles}) {
  return (
    <div className='flex flex-col w-[180px] sm:w-[200px] md:w-[240px] justify-center items-center gap-[1px] font-medium'>

      {/* WORK IMAGE */}
      <img src={image} className='w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] object-cover sm:rounded-lg shadow-md shadow-gray-500'/>

      {/* WORK DESCRIPTION */}
      <div className='py-4 w-[180px] sm:w-[200px] md:w-[240px] px-4 pb-4 font-zilla font-bold'>

        {/* TITLE */}
        <div className='font-semibold flex justify-center text-center text-xl'>
          {title}
        </div>

        {/* WORK (ALBUM OR SONG) */}
        {/* {work ? 
        <div className='text-lg italic'>
          {work}
        </div><></>
        :
        <></>
        } */}

        {/* ROLES FOR THIS WORK */}
        <div className='w-full text-sm font-light flex gap-1 justify-center text-center text-wrap'>
          <div>{roles.map((role, index) => index !== roles.length - 1 ? role + ' / ' : role)}</div>
        </div>
        
      </div>
      
    </div>
  )
}

{/* <div className='flex flex-col w-full sm:w-[360px] lg:w-[300px] justify-center items-center font-medium'>

{/* WORK IMAGE */}
{/* <img src={image} className='w-[360px] h-[360px] lg:h-[300px] lg:w-[300px] object-cover'/> */}

{/* WORK DESCRIPTION */}
{/* <div className='my-4 flex flex-col items-center w-[360px] md:w-[360px] lg:w-[300px]'> */}

  {/* TITLE */}
  {/* <div className='font-semibold text-2xl'>
    {title}
  </div> */}

  {/* WORK (ALBUM OR SONG) */}
  {/* {work ? 
  <div className='text-lg italic'>
    {work}
  </div><></>
  :
  <></>
  } */}

  {/* ROLES FOR THIS WORK */}
  {/* <div className='w-[300px] sm:w-[240px] lg:w-[300px] text-sm font-light flex gap-1 justify-center text-wrap'>
    <div>{roles.map((role, index) => index !== roles.length - 1 ? role + ' / ' : role)}</div>
  </div>
  
</div>

</div> */}
