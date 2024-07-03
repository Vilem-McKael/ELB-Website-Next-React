import React from 'react'
import SelectedWorks from './SelectedWorks'
import {selectedWorks} from '../../data/homePageCredits.js'

export default function JobTitleCard2({bgColor, alignment, title, tag, description, image, imageDescription, featuredWorks, imageOrigin}) {
  return (
    <div id={tag} className={`flex flex-row md:h-[560px] w-full max-w-[1200px]`}>

        <div className='w-full h-[100px]'>
            <div>
                {title}
            </div>
        </div>
        
        <div className='flex flex-col-reverse md:flex-row h-full w-full'> 

            {/* LEFT SIDE ALIGNMENT */}

            {/* DESCRIPTION BODY */}
            <div className='w-full flex justify-end'>
                <div className='flex flex-col h-full w-full flex-shrink-0 justify-between items-center p-8 mb-16 sm:mb-0'>

                    {/* ROLE TITLE AND DESCRIPTION */}


                    <div className='text-4xl font-normal text-black px-4 py-2'>
                        {title}
                    </div>
                    <div className='text-sm pb-4 text-justify'>
                        {description}
                    </div>


                    {/* SELECTED WORKS FOR THIS ROLE */}
                    <div className='flex flex-col items-center w-full'>
                        <SelectedWorks works={selectedWorks[tag]} />
                    </div>
                </div>
            </div>

            {/* FEATURED IMAGE */}
            <div className='w-full h-full' style={{backgroundColor: bgColor}}>
                <div className='flex flex-col justify-evenly items-center w-full h-full'>
                    <img src={image} className={`object-cover h-full w-full object-${imageOrigin}`}/>
                </div>
            </div>
        </div>
    </div>
  )
}
