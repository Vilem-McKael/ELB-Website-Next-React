'use client';

import React, { useEffect, useState } from 'react'

import RightArrow from '@/public/icons/056-right-arrow.svg'

export default function ScrollToTopButton() {

    const [isShowingScrollToTop, setIsShowingScrollToTop] = useState(false)

    const handleOnClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const doNothing = () => {
        return
    }

    const updateIsShowingScrollToTop = () => {
        if (!isShowingScrollToTop && window.scrollY > 200) {
          setIsShowingScrollToTop(true)
        } else if (window.scrollY < 200) {
          setIsShowingScrollToTop(false)
        }
      }

    useEffect(() => {

        
        const scrollListener = () => updateIsShowingScrollToTop()
        window.addEventListener('scroll', scrollListener)
        
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }

    }, [])

  return (
    <>
    
    {isShowingScrollToTop &&
        <div className='fixed bottom-4 right-4 z-20'>
            <button className={
                'bg-gradient-to-b from-gold2/90 to-yellow3/70 text-light7 flex items-center justify-center h-[40px] w-[40px] pb-[2px] rounded-full transition-transform border-light7 border shadow-md shadow-black/50 scale-100 hover:scale-110'}
            onClick={isShowingScrollToTop ? handleOnClick : doNothing}>
                <RightArrow className='rotate-[-90deg] w-[20px] h-[20px] fill-light7' />
            </button>
        </div>
    }
    
    </>
  )
}
