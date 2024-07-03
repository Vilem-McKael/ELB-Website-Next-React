import React, { useState } from 'react'
import { edieImages } from '../../../data/mediaData'
import { HashLink } from 'react-router-hash-link'

export default function ImageViewer({imgIndex, updateSelectedImageIndex, updateIsShowingImageFullScreen }) {

    // SHOW NEXT IMAGE
    const handleShowNext = () => {
        updateSelectedImageIndex((imgIndex + 1) % edieImages.length )
    }

    // SHOW PREVIOUS IMAGE
    const handleShowPrev = () => {
        updateSelectedImageIndex(((imgIndex - 1) + edieImages.length) % edieImages.length)
      }

    const handleOnClick = () => {
        updateIsShowingImageFullScreen(true)
    }

  return (
    <div id='image-viewer' className=''>
        
        {/* VIEWER */}
        <div className='flex flex-row justify-center items-center w-full h-[500px] sm:w-[800px] sm:h-[600px] bg-black/10 sm:bg-black/100 relative mb-8 mt-4 sm:mt-12'>

            {/* PREVIOUS IMAGE BUTTON */}
            <button className='flex flex-col items-center justify-center w-[50px] h-[60px] sm:h-[100px] sm:w-[80px] rounded-r-full bg-black bg-opacity-60 border border-light7/20 sm:hover:bg-opacity-100 absolute left-0' onClick={handleShowPrev}>
                <i className='flaticon-left-arrow text-2xl sm:text-4xl text-[#f8f8f1]'></i>
            </button>

            {/* MAIN IMAGE BODY */}
            <div className='flex flex-col w-full h-full items-center justify-center cursor-pointer' onClick={handleOnClick}>
                <img src={edieImages[imgIndex].image} className='max-h-[500px] sm:max-h-[600px]'/>
                <div className='absolute bottom-0 text-white py-2 w-full text-center bg-black/80'>{edieImages[imgIndex].description}</div>
            </div>

            {/* NEXT IMAGE BUTTON */}
            <button className='flex flex-col items-center justify-center w-[50px] h-[60px] sm:h-[100px] sm:w-[80px] rounded-l-full bg-black bg-opacity-60 border border-light7/20 sm:hover:bg-opacity-100 absolute right-0' onClick={handleShowNext}>
                <i className='flaticon-right-arrow text-2xl sm:text-4xl text-[#f8f8f1]'></i>
            </button>

        </div>

        
        
    </div>
  )
}
