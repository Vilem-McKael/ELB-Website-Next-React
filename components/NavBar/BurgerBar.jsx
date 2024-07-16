'use client';

import React from 'react'
import Link from 'next/link';

import SocialButton from '../SocialButton/SocialButton'

//  player, hadnleSetPlayer

export default function BurgerBar({isShowingSlideOutMenu, updateIsShowingSlideOutMenu}) {


    function handleOnCLick() {
        updateIsShowingSlideOutMenu((prevValue) => !prevValue)
    }

    //  onClick={() => {
    //     if (player) {
    //         player.stop()
    //         hadnleSetPlayer(null)
    //     }
    // }}

  return (
    <div id="top" className='flex w-full h-[150px] justify-between items-end fixed bg-light7 text-black pl-8 pr-4 z-50 border-b-[1px] border-black'>
            
        {/* LEFT SIDE - NAME AND DECORATIVE TILE */}
        <Link href='/' className='flex flex-row items-end pb-4'>
            <img src={'/deruta/deruta tile.webp'} className='w-[80px] h-[80px]'/>
            <div className='flex-col justify-center text-xl text-black text-leading bg-opacity-95 font-normal pl-4 w-full h-[80px]'>
                <div className=''>
                    <span className='text-2xl font-medium text-gold4 leading-[0.9]'>E</span>die
                </div>
                <div className='pl-4'>
                    <span className='text-2xl font-medium text-teal4 leading-[0.9]'>L</span>ehmann
                </div>
                <div className='pl-8'>
                    <span className='text-2xl font-medium text-burntOrange4 leading-[0.9]'>B</span>oddicker
                </div>
            </div>
        </Link>

        {/* RIGHT SIDE - OPEN MENU BUTTON AND SOCIAL BUTTONS */}
        <div className='flex flex-col items-end'>

            {/* SOCIAL BUTTONS */}
            <div className='flex flex-row pb-3'>
                <SocialButton to={"https://www.linkedin.com/in/edie-lehmann-boddicker-31625a14/"} logo={'/socialLogos/linkedInLogo.png'}/>
                <SocialButton to={"https://www.instagram.com/edielehbod/"} logo={'/socialLogos/instagramLogo.png'}/>
                <SocialButton to={"https://www.facebook.com/e.lehbod"} logo={'/socialLogos/facebookLogo.png'}/>
                <SocialButton to={"https://www.imdb.com/name/nm0090798/"} logo={'/socialLogos/imdbLogo.webp'}/>
            </div>

            {/* OPEN MENU BUTTON */}
            <div className='flex flex-row text-lg cursor-pointer pb-4 pr-4 group h-[40px]' onClick={handleOnCLick}>
                <div className='transform group-hover:text-xl duration-100 origin-center'>
                    Menu
                </div>
                <i className='flaticon-menu w-[24px] h-[24px] pl-2 pt-[2px]'></i>
            </div>
        </div>
    </div>
  )
}
