'use client';

import classes from './VideoCard.module.css'

import React from 'react'
import ReactPlayer from 'react-player/youtube';

export default function VideoCard({title, description, videoId}) {

  return (
    <div className='player-wrapper text-center bg-black relative aspect-video max-w-[800px] xl:max-w-[1000px]'>

        {/* VIDEO TITLE */}
        <div className='w-full p-4 bg-black text-light7 sm:text-xl font-medium absolute top-0'>
            {title}
        </div>

        {/* YOUTUBE VIDEO */}
        <ReactPlayer width='100%' height='100%' controls muted url={`https://www.youtube.com/watch?v=${videoId}`} config={{youtube: {showInfo: 1}}} />

        {/* VIDEO DESCRIPTION */}
        <div className='w-full p-2 bg-gray-700 text-light7 text-sm font-barlow abolute bottom-0'>
            {description}
        </div>
    </div>
  )
}
