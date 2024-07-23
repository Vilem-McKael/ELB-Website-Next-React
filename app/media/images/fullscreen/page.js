'use client';

import ImageFullScreen from '@/components/Media/Images/ImageFullScreen'
import React, { useEffect, useState } from 'react'

export default function page({}) {

  const [imgIndex, setImgIndex] = useState(0)

  const updateImageIndex = (index) => {
    setImgIndex((oldVal) => index)
  }

  return (
    <>
        <ImageFullScreen imgIndex={imgIndex} updateSelectedImageIndex={updateImageIndex}/>
    </>
  )
}
