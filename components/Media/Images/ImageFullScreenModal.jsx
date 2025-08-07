'use client';

import React, { useEffect, useState } from 'react'
import { edieImages } from '../../../data/mediaData'
import { useRouter } from 'next/navigation';

import RightArrow from '@/public/icons/056-right-arrow.svg'
import LeftArrow from '@/public/icons/057-left-arrow.svg'

export default function ImageFullScreenModal({imgIndex, updateSelectedImageIndex, toggleIsShowingImageModal}) {

    const router = useRouter();

    const handleShowNext = () => {
        updateSelectedImageIndex((imgIndex + 1) % edieImages.length )
    }

    // SHOW PREVIOUS IMAGE
    const handleShowPrev = () => {
        updateSelectedImageIndex(((imgIndex - 1) + edieImages.length) % edieImages.length)
      }

    const handleOnClick = () => {
        router.push('/media/images/' + imgIndex)
    }

    // const updateDimensions = () => {
    //     const width = window.innerWidth
    //     const height = window.innerHeight
    //     setDeviceWidth(width)
    //     setDeviceHeight(height)
    //     if (height < 500) {
    //         setHeightOffset(0)
    //     } else if (width < 640) {
    //         setHeightOffset(80)
    //     } else {
    //         setHeightOffset(150)
    //     }
    // }

    // useEffect(() => {
    //     updateDimensions()

    //     const listener = () => updateDimensions()
    //     window.addEventListener('resize', listener)

    //     return () => window.removeEventListener('resize', listener)
    // })
    
//  style={{minHeight: deviceHeight, width: deviceWidth}}
    
    const handleClickImage = () => {
        return
    }

    const handleClickBackground = () => {
        toggleIsShowingImageModal()
    }
    
  return (
    <div className='h-[100%] w-[100%] top-0 left-0 right-0 bottom-0 fixed z-40 flex items-center justify-center'>
        <div className='w-[100%] h-[100%] absolute top-0 left-0 right-0 bottom-0 z-40 bg-black/90' onClick={handleClickBackground}></div>
        <div className='relative w-[85%] h-[85%] flex items-center justify-center z-40 bg-black'>
            <div className='absolute right-[50%] top-0 bottom-0 left-0 bg-red z-50' onClick={handleShowPrev}></div>
            <div className='absolute top-0 bottom-0 right-0 left-[50%] bg-blue z-50' onClick={handleShowNext}></div>
            <img src={edieImages[imgIndex].image} className='h-full w-full object-contain z-40'/>
            <div className='absolute bottom-0 w-full py-2 text-center text-white bg-black/80 z-40'>{edieImages[imgIndex].description} </div>
        </div>
        
    </div>
  )
}

//  style={{maxWidth: deviceWidth, maxHeight: deviceHeight - heightOffset}}

{/* <button className='bg-white text-black p-2 px-4 absolute right-0 rounded-lg z-10' onClick={handleOnClick} style={{top: 4 + heightOffset, right: 4}}>Close</button>
        <div className='w-full h-full flex items-center justify-between'>
            <button className='flex flex-col items-center justify-center w-[80px] h-[100px] sm:h-[100px] sm:w-[80px] rounded-r-full bg-black bg-opacity-60 border border-light7/20 sm:hover:bg-opacity-100 text-light7 absolute left-0 top-[50%] z-10 group' onClick={handleShowPrev}>
                <LeftArrow className='w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] transform group-hover:scale-125 duration-[125ms]'/>
            </button>
            <div className='relative w-full h-full flex items-center justify-center'>
                <img src={edieImages[imgIndex].image} className='h-full w-full object-contain -z-10'  style={{maxWidth: deviceWidth, maxHeight: deviceHeight - heightOffset}}/>
                <div className='absolute bottom-0 w-full py-2 text-center text-white bg-black/80'>{edieImages[imgIndex].description}</div>
            </div>
            <button className='flex flex-col items-center justify-center w-[80px] h-[100px] sm:h-[100px] sm:w-[80px] rounded-l-full bg-black bg-opacity-60 border border-light7/20 sm:hover:bg-opacity-100 text-light7 absolute right-0 top-[50%] z-10 group' onClick={handleShowNext}>
                <RightArrow className='w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] transform group-hover:scale-125 duration-[125ms]'/>
            </button>
        </div> */}
