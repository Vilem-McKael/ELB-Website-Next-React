'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import Gallery from '@/public/icons/027-image-gallery-1.svg';
import Videos from '@/public/icons/035-video-1.svg';
import Microphone from '@/public/icons/045-microphone-1.svg';

export default function MediaSelector() {

    const [currentPage, setCurrentPage] = useState('images')

    const router = useRouter();

    const handleOnClick = (e, path) => {
        e.preventDefault();
        router.push('/media/' + path);
        setCurrentPage(path)
    }

    //  rounded-xl
    // <button onClick={() => handleUpdateSelectedMediaType('images')} className='h-[80px] flex flex-col items-center justify-center p-4 border-r border-black rounded-l-xl hover:text-4xl duration-150' style={{backgroundColor: selectedMediaType === 'images' ? 'rgb(86 102 50)' : '#A8A8A1', width: selectedMediaType === 'images' ? '160px' : '120px'}}></button>

  return (
    <div id="media-selector" className="flex flex-row justify-center items-center text-3xl sm:mt-16 border-b mobileLandscape:border-0 sm:border-t sm:border-x border-black text-light7 sm:mx-2 w-[100vw] sm:w-[640px] z-10">

          {/* IMAGES BUTTON */}
          <button onClick={(event) => handleOnClick(event, 'images')} className={`h-[100px] flex flex-col items-center justify-center p-4 border-r border-black hover:text-4xl transform duration-150`} style={{backgroundColor: currentPage === 'images' ? '#566632' : 'transparent', color: currentPage === 'images' ? '#f8f8f1' : 'black', width: currentPage === 'images' ? '40%' : '30%', fill: currentPage === 'images' ? '#f8f8f1' : 'black'}}>
              <Gallery className="w-[50px] h-[50px]"/>
              <div className='text-lg'>Images</div>
          </button>

          {/* VIDEOS BUTTON */}
          <button onClick={(event) => handleOnClick(event, 'videos')} className='h-[100px] flex flex-col items-center justify-center p-4 border-r border-black hover:text-4xl transform duration-150' style={{backgroundColor: currentPage === 'videos' ? 'rgb(163 71 38)' : 'transparent', color: currentPage === 'videos' ? '#f8f8f1' : 'black', width: currentPage === 'videos' ? '40%' : '30%', fill: currentPage === 'videos' ? '#f8f8f1' : 'black'}}>
              <Videos className='w-[50px] h-[50px]'/>
              <div className='text-lg'>Videos</div>
          </button>

          {/* AUDIO BUTTON */}
          <button onClick={(event) => handleOnClick(event, 'audio')} className='h-[100px] flex flex-col items-center justify-center p-4 hover:text-4xl transform duration-150' style={{backgroundColor: currentPage === 'audio' ? 'rgb(62 132 131)' : 'transparent', color: currentPage === 'audio' ? '#f8f8f1' : 'black', width: currentPage === 'audio' ? '40%' : '30%', fill: currentPage === 'audio' ? '#f8f8f1' : 'black'}}>
              <Microphone className='w-[50px] h-[50px]'/>
              <div className='text-lg'>Audio</div>
          </button>
      </div>
  )
}


// UNDERLINES FOR SELECTED CATEGORY
//  style={{textDecoration: selectedMediaType === 'videos' ? 'underline' : 'none'}}
