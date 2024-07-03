import React from 'react'
import { videoData } from '../../../data/mediaData'
import { animateScroll } from 'react-scroll'

export default function VideoList({updateSelectedVideo}) {

    // HANDLE SELECT VIDEO
    const handleOnClick = (video) => {
        updateSelectedVideo(video)

        const scrollOptions = {
            duration: 300,
            smooth: true
        }
        animateScroll.scrollToTop(scrollOptions)
    }

  return (
    <table className='w-full h-full font-barlow sm:w-[800px] lg:w-[1000px] border-t border-black'>

        {/* VIDEO LIST */}
        <tbody>
        {videoData.map((video, index) => {

            return <tr className='w-full h-full cursor-pointer border-b border-black hover:bg-black/10' key={index} onClick={() => handleOnClick(video)}>

                {/* TITLE */}
                <td className='flex items-center h-full sm:w-[200px] md:w-[400px] text-sm font-medium p-8'>
                    {/* <div className='w-[10px] h-[10px] bg-black rounded-full mr-4 shrink-0'></div>  */} {/* BULLET POINT */}
                    <div className='text-md  sm:text-lg'>{video.title}</div>
                </td>

                {/* DESCRIPTION */}
                <td className='p-2 h-full text-sm'>
                    {video.description}
                </td>

            </tr>
        })}
        </tbody>
    </table>
  )
}
