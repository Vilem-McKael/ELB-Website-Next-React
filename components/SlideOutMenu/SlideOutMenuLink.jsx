import React from 'react'
import { useRouter } from 'next/navigation';
import { Howler } from 'howler';

import '../NavBar/NavBar.css'

export default function SlideOutMenuLink({title, to, Icon, tabColor, tabClass, currentPage, updateIsShowingSlideOutMenu}) {

  const router = useRouter();

    function handleOnClick() {
        updateIsShowingSlideOutMenu(false)
        router.push(to)
        window.scroll({
          top: 0,
          left: 0,
        })
        Howler.stop();
    }
    // className='flex flex-row items-center'
    
  return (
    <button className={`font-regular flex flex-row justify-between items-center w-full h-[50px] hover:text-light7 ${tabClass} fill-black hover:fill-light7`} onClick={handleOnClick}>
        <div className='h-[42px]' style={{backgroundColor: tabColor, width: currentPage === title ? '12px' : '4px'}}>
        </div>
        <div className='w-[80px] mr-3'>
          <div className='flex flex-row items-center'>
            <Icon className={`h-[20px] w-[20px] mr-2`}/>
            <div className='transform origin-center'>{title}</div>
          </div>
        </div>
        
        
    </button>
  )
}
