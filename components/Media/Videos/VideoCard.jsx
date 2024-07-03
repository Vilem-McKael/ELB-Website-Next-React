import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

export default function VideoCard({title, description, videoId, screenSize}) {

  const [opts, setOpts] = useState(null)

    // ON PLAYER READY * REQUIRED FUNCTION FOR YOUTUBE API
    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }

    // YOUTUBE PLAYER OPTIONS
    useEffect(() => {
      console.log(screenSize)
      if (screenSize === 'mobile' || screenSize === 'mobileLandscape') {
        setOpts(
          {
            height: '300',
            width: '350',
            playerVars: {
              autoplay: 1,
            }
          }
        )
      } else { 
        setOpts(
        {
          height: '500',
          width: '792',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        })
      }
    }, [])

    // opts = {
    //     height: '500',
    //     width: '792',
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 1,
    //     },
    //   };

  return (
    <div className='flex flex-col items-center w-full sm:w-[640px] md:w-[800px] text-center bg-black'>

        {/* VIDEO TITLE */}
        <div className='w-full p-4 bg-black text-light7 sm:text-xl font-medium'>
            {title}
        </div>

        {/* YOUTUBE VIDEO */}
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady}/>

        {/* VIDEO DESCRIPTION */}
        <div className='w-full p-2 bg-gray-700 text-light7 text-sm font-barlow'>
            {description}
        </div>
    </div>
  )
}
