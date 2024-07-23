'use client';


import React, { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'


import Gallery from '@/public/icons/027-image-gallery-1.svg';
import Videos from '@/public/icons/034-video.svg';
import Microphone from '@/public/icons/045-microphone-1.svg';

export default function MediaSelector() {

    const [currentCategory, setCurrentCategory] = useState(null)

    const router = useRouter();
    const params = useParams();

    useEffect(() => {

      const checkIsCurrentCategory = () => {
        const pathname = window.location.pathname
        let splitname = pathname.split('/')
        if (splitname.length > 2 && splitname[2]) {
          setCurrentCategory(splitname[2])
        } else {
          setCurrentCategory(splitname[2])
        }
      }

      checkIsCurrentCategory()

    }, [params])

    const handleOnClick = (e, path) => {
        e.preventDefault();
        router.push('/media/' + path);
        Howler.stop();
    }

    //  rounded-xl
    // <button onClick={() => handleUpdateSelectedMediaType('images')} className='h-[80px] flex flex-col items-center justify-center p-4 border-r border-black rounded-l-xl hover:text-4xl duration-150' style={{backgroundColor: selectedMediaType === 'images' ? 'rgb(86 102 50)' : '#A8A8A1', width: selectedMediaType === 'images' ? '160px' : '120px'}}></button>

  return (
    <div id="media-selector" className="flex flex-row justify-center items-center text-3xl sm:mt-8 text-black sm:mx-2 w-[100vw] sm:w-[640px] z-10">

        {/* IMAGES BUTTON */}
        <button className={`w-[100px] flex flex-col sm:w-[120px] h-[60px] text-black text-xl sm:rounded-b-xl items-center justify-start origin-top group mx-4`} style={{ fontWeight: currentCategory === 'audio' ? 'normal' : 'lighter', boxSizing: 'border-box', maxWidth: '100%'}} onClick={(event) => handleOnClick(event, 'images')}>
            <div className='flex items-center'>
                <Gallery className='w-[20px] h-[20px] mr-2'/>
                <div className=' transform sm:group-hover:scale-105 sm:group-hover:font-medium duration-150'>Images</div>
            </div>
            <div className='w-full h-[4px] rounded-b-xl transform duration-150' style={{borderBottom: 'solid #CC9D20', borderBottomWidth: currentCategory === 'images' ? '12px' : '4px'}}></div>
        </button>

        {/* VIDEOS BUTTON */}
        <button className={`w-[100px] flex flex-col sm:w-[120px] h-[60px] text-black text-xl sm:rounded-b-xl items-center justify-start origin-top group mx-4`} style={{ fontWeight: currentCategory === 'audio' ? 'normal' : 'lighter', boxSizing: 'border-box', maxWidth: '100%'}} onClick={(event) => handleOnClick(event, 'videos')}>
            <div className='flex items-center'>
                <Videos className='w-[24px] h-[24px] mr-2' />
                <div className=' transform sm:group-hover:scale-105 sm:group-hover:font-medium duration-150'>Videos</div>
            </div>
            <div className='w-full h-[4px] rounded-b-xl transform duration-150' style={{borderBottom: 'solid #A34726', borderBottomWidth: currentCategory === 'videos' ? '12px' : '4px'}}></div>
        </button>

        {/* AUDIO BUTTON */}
        <button className={`w-[100px] flex flex-col sm:w-[120px] h-[60px] text-black text-xl sm:rounded-b-xl items-center justify-start origin-top group mx-4`} style={{ fontWeight: currentCategory === 'audio' ? 'normal' : 'lighter', boxSizing: 'border-box', maxWidth: '100%'}} onClick={(event) => handleOnClick(event, 'audio')}>
            <div className='flex items-center'>
                <Microphone className='w-[24px] h-[24px] mr-2' />
                <div className=' transform sm:group-hover:scale-105 sm:group-hover:font-medium duration-150'>Audio</div>
            </div>
            <div className='w-full h-[4px] rounded-b-xl transform duration-150' style={{borderBottom: 'solid #3E8483', borderBottomWidth: currentCategory === 'audio' ? '12px' : '4px'}}></div>

        </button>
      </div>
  )
}


// UNDERLINES FOR SELECTED CATEGORY
//  style={{textDecoration: selectedMediaType === 'videos' ? 'underline' : 'none'}}
