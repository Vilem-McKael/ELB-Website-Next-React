import React from 'react'
import { edieImages } from '../../../data/mediaData'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'


export default function ImageList({updateSelectedImageIndex}) {

    const [isShowingAllImages, setIsShowingAllImages] = useState(false)

    const toggleIsShowingAllImages = () => {
        setIsShowingAllImages((prevValue) => !prevValue)
    }

    // HANDLE CLICK
    const handleOnClick = (imgIndex) => {
        updateSelectedImageIndex(imgIndex)
        scrollWithNavbarOffset(0)
    }

    // SCROLL FUNCTION
    const scrollWithNavbarOffset = (offset) => {
        window.scroll({
            top: window.top - offset,
            left: 0,
            behavior: "smooth"
        })
    }

  return (
    <>
        <button className='w-[200px] hover:bg-black hover:text-light7 py-2 my-8 border-black border rounded-md' onClick={toggleIsShowingAllImages}>{isShowingAllImages ? 'Hide All' : 'Show All'}</button>
        {isShowingAllImages && <div className='grid grid-cols-2 landscape:grid-cols-3 sm:grid-cols-3 w-full sm:gap-y-6 sm:gap-2 place-items-center mb-12'>

            {/* IMAGES MAP */}
            {edieImages.map((img, index) => {

                {/* IMAGE HASHLINK */}
                return <Link href='/media/images/#image-viewer' key={index} onClick={() => handleOnClick(index)} className='w-[100%] aspect-square md:h-[200px] md:w-[200px] relative'>
                    <Image src={img.image} alt={'description' ?? "No description found."} fill sizes='(max-width: 640px) 160px, 200px' className='object-cover'/>
                </Link>
            })}
        </div>
        }
    </>
  )
}
