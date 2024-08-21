import React from 'react'
import { edieImages } from '../../../data/mediaData'

import { useRouter } from 'next/navigation';

import RightArrow from '@/public/icons/056-right-arrow.svg'
import LeftArrow from '@/public/icons/057-left-arrow.svg'

export default function ImageViewer({imgIndex, updateSelectedImageIndex }) {

    const router = useRouter();

    // SHOW NEXT IMAGE
    const handleShowNext = () => {
        updateSelectedImageIndex((imgIndex + 1) % edieImages.length )
    }

    // SHOW PREVIOUS IMAGE
    const handleShowPrev = () => {
        updateSelectedImageIndex(((imgIndex - 1) + edieImages.length) % edieImages.length)
      }

    const handleOnClick = () => {
        router.push('/media/images/fullscreen/' + imgIndex)
    }

  return (
    <div id='image-viewer' className='w-screen h-[500px] sm:h-[600px] mobileLandscape:h-[400px] md:h-[600px] sm:px-16 flex flex-row items-center justify-between mb-8 mt-4'>
        
        {/* PREVIOUS IMAGE BUTTON */}
        <button className='flex flex-col items-center justify-center w-[36px] h-[50px] rounded-r-full border-r border-y border-black sm:border-none sm:rounded-none sm:h-full sm:w-[80px] bg-[#f8f8f1] sm:bg-transparent sm:hover:bg-black/20 group absolute left-0 sm:static z-10' onClick={handleShowPrev}>
            <LeftArrow className='flaticon-left-arrow w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] fill-black sm:group-hover:scale-110 transition duration-100'/>
        </button>

        {/* VIEWER */}
        <div className='flex flex-row justify-center items-center w-[100%] h-[100%] bg-black/10 sm:bg-black/100 relative'>

            {/* MAIN IMAGE BODY */}
            <div className='flex flex-col w-[100%] h-[100%] items-center justify-center cursor-pointer' onClick={handleOnClick}>
                <img src={edieImages[imgIndex].image} className='max-h-[500px] sm:max-h-[600px]'/>
                <div className='absolute bottom-0 text-white py-2 w-full text-center bg-black/80'>{edieImages[imgIndex].description}</div>
            </div>

            

        </div>
        
        {/* NEXT IMAGE BUTTON */}
        <button className='flex flex-col items-center justify-center w-[36px] h-[50px] rounded-l-full bg-[#f8f8f1] border-l border-y border-black sm:rounded-none sm:h-full absolute right-0 sm:static sm:w-[80px] sm:hover:scale-110 sm:bg-transparent sm:hover:bg-black/20 transition duration-150' onClick={handleShowNext}>
                <RightArrow className='flaticon-right-arrow w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] fill-black'/>
            </button>

        
        
    </div>
  )
}
