'use client';

import React from 'react'

export default function LandscapeMobileMenu({currentPage, updateCurrentPage, isShowingSlideOutMenu, updateIsShowingSlideOutMenu}) {

    function handleOnCLick() {
        updateIsShowingSlideOutMenu((prevValue) => !prevValue)
    }

  return (
    <div className='w-full h-[80px] bg-transparent fixed flex flex-row justify-between items-center px-2'>
      <div></div>
      <div className='' onClick={handleOnCLick}>
        <div className='bg-teal4 text-light7 px-2 pt-1 rounded-md z-50'>
          <i className='flaticon-menu-2 z-50 text-xl'></i>
        </div>
      </div>
    </div>
  )
}
