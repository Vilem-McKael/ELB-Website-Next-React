'use client';

import React from 'react'
import SlideOutMenuLink from './SlideOutMenuLink'

import Home from '@/public/icons/001-home.svg'
import About from '@/public/icons/024-info-1.svg'
import Credits from '@/public/icons/030-person-1.svg'
import Media from '@/public/icons/045-microphone-1.svg'
import Contact from '@/public/icons/016-contact-mail.svg'
import CloseMenu from '@/public/icons/062-next-1.svg'

export default function SlideOutMenu({isVisible, updateIsShowingSlideOutMenu}) {

    function handleCloseMenu() {
        updateIsShowingSlideOutMenu(false)
    }

  return (
    
    <div className={`h-full w-[150px] bg-light7 flex flex-col px-4 text-black pt-[150px]  mobileLandscape:pt-0 fixed right-0 z-40 border-l-[1px] border-black transform transition-transform duration-200 ${isVisible ? 'translate-x-0' : 'translate-x-full' }`}>
        <div className='mt-8 border-y-[1px] border-black w-full'>
            <SlideOutMenuLink title={"Home"} to={"/"} Icon={Home} tabColor={'#D2AD25'} tabClass={'bgYellow'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <SlideOutMenuLink title={"About"} to={"/about"} Icon={About} tabColor={'#D2912D'} tabClass={'bgGold'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <SlideOutMenuLink title={"Credits"} to={"/credits"} Icon={Credits} tabColor={'#A34726'} tabClass={'bgTerracotta'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <SlideOutMenuLink title={"Media"} to={"/media"} Icon={Media} tabColor={'#3E8483'} tabClass={'bgTeal'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <SlideOutMenuLink title={"Contact"} to={"/contact"} Icon={Contact} tabColor={'#263053'} tabClass={'bgDarkBlue'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='text-center flex flex-col items-center pt-8 landscape:pt-4 cursor-pointer group' onClick={handleCloseMenu}>
            <CloseMenu className='fill-black w-[28px] h-[28px] transform group-hover:scale-110 duration-75'/>
            <div className='text-black text-sm mt-1'>Close Menu</div>
        </div>
    </div>

  )
}
