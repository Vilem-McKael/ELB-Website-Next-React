'use client';

import ImageFullScreen from '@/components/Media/Images/ImageFullScreen'
import React, { useState } from 'react'

export default function FullScreenPage({}) {

  const [imgIndex, setImgIndex] = useState(0)

  const updateImageIndex = (index) => {
    setImgIndex((oldVal) => index)
  }

  return (
    <div className='w-[100%] h-[100%] flex flex-col items-center justify-center'>
        <ImageFullScreen imgIndex={imgIndex} updateSelectedImageIndex={updateImageIndex}/>
    </div>
  )
}
