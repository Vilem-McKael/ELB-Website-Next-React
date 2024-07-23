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
    <div id='image-viewer' className='w-full sm:px-8'>
        
        {/* VIEWER */}
        <div className='flex flex-row justify-center items-center w-full bg-black/10 sm:bg-black/100 relative mb-8 mt-4'>

            {/* PREVIOUS IMAGE BUTTON */}
            <button className='flex flex-col items-center justify-center w-[50px] h-[60px] sm:h-[100px] sm:w-[80px] rounded-r-full bg-black bg-opacity-60 border border-light7/20 sm:hover:bg-opacity-100 absolute left-0' onClick={handleShowPrev}>
                <LeftArrow className='flaticon-left-arrow w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] fill-[#f8f8f1]'/>
            </button>

            {/* MAIN IMAGE BODY */}
            <div className='flex flex-col w-full h-full items-center justify-center cursor-pointer' onClick={handleOnClick}>
                <img src={edieImages[imgIndex].image} className='max-h-[500px] sm:max-h-[600px]'/>
                <div className='absolute bottom-0 text-white py-2 w-full text-center bg-black/80'>{edieImages[imgIndex].description}</div>
            </div>

            {/* NEXT IMAGE BUTTON */}
            <button className='flex flex-col items-center justify-center w-[50px] h-[60px] sm:h-[100px] sm:w-[80px] rounded-l-full bg-black bg-opacity-60 border border-light7/20 sm:hover:bg-opacity-100 absolute right-0' onClick={handleShowNext}>
                <RightArrow className='flaticon-right-arrow w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] fill-[#f8f8f1]'/>
            </button>

        </div>

        
        
    </div>
  )
}
