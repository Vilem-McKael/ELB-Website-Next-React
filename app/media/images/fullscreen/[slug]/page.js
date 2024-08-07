'use client';

import ImageFullScreen from '@/components/Media/Images/ImageFullScreen'
import React, { useEffect, useState } from 'react'

export default function FullScreenSlugPage({params}) {

  const [imgIndex, setImgIndex] = useState(0)

  const updateImageIndex = (index) => {
    setImgIndex(() => index)
  }

  useEffect(() => {
    setImgIndex(params.slug)
  }, [])

  return (
    <>
        <ImageFullScreen imgIndex={imgIndex} updateSelectedImageIndex={updateImageIndex}/>
    </>
  )
}