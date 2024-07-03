import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileBurgerMenu({currentPage, updateCurrentPage, isShowingSlideOutMenu, updateIsShowingSlideOutMenu, player, handleSetPlayer}) {

    function handleOnCLick() {
        let toggleVal = !isShowingSlideOutMenu
        updateIsShowingSlideOutMenu(toggleVal)
    }

  return (
    // <div id="top" className='flex w-full justify-start items-center relative bg-transparent text-black bg-light7 border-b-[1px]-black'>
    //     <div className='top-8 left-8 h-[30px] w-[30px] flex flex-row text-xl items-center justify-center text-center bg-teal4 rounded-xl cursor-pointer z-50 absolute'>
    //         <i className='flaticon-menu text-light7' onClick={handleOnCLick}></i>
    //     </div>
    // </div>//nice
    <div className='w-full h-[80px] bg-light7 fixed flex flex-row justify-between items-center px-2 z-50 border-b border-black'>
      <Link to='/' className='flex flex-row items-end' onClick={() => {
        if (player) {
          player.stop()
          handleSetPlayer(null)
        }
      }}>
            <img src={'/deruta/deruta tile.webp'} className='w-[58px] h-[58px]'/>
            <div className='flex-col justify-end text-md text-black text-leading leading-[0.7] bg-opacity-95 font-normal pl-4 w-full h-[55px]'>
                <div className=''>
                    <span className='text-xl font-medium text-gold4 leading-[0.9]'>E</span>die
                </div>
                <div className='pl-4'>
                    <span className='text-xl font-medium text-teal4 leading-[0.9]'>L</span>ehmann
                </div>
                <div className='pl-8'>
                    <span className='text-xl font-medium text-burntOrange4 leading-[0.9]'>B</span>oddicker
                </div>
            </div>
        </Link>
      <div className='w-' onClick={handleOnCLick}>
        <div className='bg-teal4 text-light7 px-2 pt-1 rounded-md'>
          <i className='flaticon-menu-2 z-50 text-xl'></i>
        </div>
      </div>
    </div>
  )
}
