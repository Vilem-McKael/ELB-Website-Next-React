import React, { useEffect, useState } from 'react'
import { edieImages } from '../../../data/mediaData'

export default function ImageFullScreen({imgIndex, updateSelectedImageIndex, updateIsShowingImageFullScreen}) {

    const [deviceWidth, setDeviceWidth] = useState(null)
    const [deviceHeight, setDeviceHeight] = useState(null)
    const [heightOffset, setHeightOffset] = useState(null)

    const handleShowNext = () => {
        updateSelectedImageIndex((imgIndex + 1) % edieImages.length )
    }

    // SHOW PREVIOUS IMAGE
    const handleShowPrev = () => {
        updateSelectedImageIndex(((imgIndex - 1) + edieImages.length) % edieImages.length)
      }

    const handleOnClick = () => {
        updateIsShowingImageFullScreen(false)
    }

    const updateDimensions = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        setDeviceWidth(width)
        setDeviceHeight(height)
        if (height < 500) {
            setHeightOffset(0)
        } else if (width < 640) {
            setHeightOffset(80)
        } else {
            setHeightOffset(150)
        }
    }

    useEffect(() => {
        updateDimensions()

        const listener = () => updateDimensions()
        window.addEventListener('resize', listener)

        return () => window.removeEventListener('resize', listener)
    })
    
//  style={{minHeight: deviceHeight, width: deviceWidth}}
  return (
    <div className='h-full w-full flex justify-center items-center bg-black z-10'>
        <button className='bg-white text-black p-2 px-4 absolute right-0 rounded-lg z-10' onClick={handleOnClick} style={{top: 4 + heightOffset, right: 4}}>X</button>
        <div className='w-full h-full flex items-center justify-between'>
            <button className='flex flex-col items-center justify-center w-[80px] h-[100px] sm:h-[100px] sm:w-[80px] rounded-r-full bg-black bg-opacity-60 border border-light7/20 sm:hover:bg-opacity-100 text-light7 absolute left-0 top-[50%] z-10' onClick={handleShowPrev}>
                <i className='flaticon-left-arrow text-2xl sm:text-4xl'></i>
            </button>
            <div className='relative w-full h-full flex items-center justify-center'>
                <img src={edieImages[imgIndex].image} className='h-full w-full object-contain -z-10'  style={{maxWidth: deviceWidth, maxHeight: deviceHeight - heightOffset}}/>
                <div className='absolute bottom-0 w-full py-2 text-center text-white bg-black/80'>{edieImages[imgIndex].description}</div>
            </div>
            <button className='flex flex-col items-center justify-center w-[80px] h-[100px] sm:h-[100px] sm:w-[80px] rounded-l-full bg-black bg-opacity-60 border border-light7/20 sm:hover:bg-opacity-100 text-light7 absolute right-0 top-[50%] z-10' onClick={handleShowNext}>
                <i className='flaticon-right-arrow text-2xl sm:text-4xl'></i>
            </button>
        </div>
    </div>
  )
}
