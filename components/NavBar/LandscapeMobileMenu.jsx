'use client';

import React from 'react'

import Menu from '@/public/icons/067-menu-2.svg'

export default function LandscapeMobileMenu({isShowingSlideOutMenu, updateIsShowingSlideOutMenu}) {

    function handleOnCLick() {
        updateIsShowingSlideOutMenu((prevValue) => !prevValue)
    }

  return (
    <>
      {!isShowingSlideOutMenu && <div className='fixed top-2 right-2 z-50'>
        <div className='bg-teal4 text-light7 px-2 py-2 rounded-md z-50 relative fill-light7' onClick={handleOnCLick}>
          <Menu className='flaticon-menu-2 z-50 h-[28px] w-[28px] fill-light7'/>
        </div>
      </div>}
    </>
  )
}
