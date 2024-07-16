import React from 'react'
import { useRouter } from 'next/navigation';

import '../NavBar/NavBar.css'

export default function SlideOutMenuLink({title, to, iconName, tabColor, tabClass, currentPage, updateCurrentPage, updateIsShowingSlideOutMenu, screenSize, player, handleSetPlayer}) {

  const router = useRouter();

    function handleOnClick() {
        updateIsShowingSlideOutMenu(false)
        if (player) {
          player.stop()
          handleSetPlayer(null)
        }
        router.push(to)
        window.scroll({
          top: 0,
          left: 0,
        })
    }
    // className='flex flex-row items-center'
    
  return (
    <button className={`font-regular flex flex-row justify-between items-center w-full h-[50px] hover:text-light7 ${tabClass}`} onClick={handleOnClick}>
        <div className='h-[42px]' style={{backgroundColor: tabColor, width: currentPage === title ? '12px' : '4px'}}>
        </div>
        <div className='w-[80px] mr-3'>
          <div className='flex flex-row items-center'><i className={`flaticon-${iconName} h-[28px] pt-1 pr-2`}/>
            <div className='transform origin-center'>{title}</div>
          </div>
        </div>
        
        
    </button>
  )
}
