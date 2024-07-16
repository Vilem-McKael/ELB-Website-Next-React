'use client';

import React from 'react'
import SlideOutMenuLink from './SlideOutMenuLink'

export default function SlideOutMenu({isVisible, updateIsShowingSlideOutMenu, player, handleSetPlayer}) {

    function handleCloseMenu() {
        updateIsShowingSlideOutMenu(false)
    }

  return (
    
    <div className={`h-full w-[150px] bg-light7 flex flex-col px-4 text-black pt-[150px]  mobileLandscape:pt-0 fixed right-0 z-40 border-l-[1px] border-black transform transition-transform duration-200 ${isVisible ? 'translate-x-0' : 'translate-x-full' }`}>
        <div className='mt-8 border-y-[1px] border-black w-full'>
            <SlideOutMenuLink title={"Home"} to={"/"} iconName={"home"} tabColor={'#D2AD25'} tabClass={'bgYellow'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <SlideOutMenuLink title={"About"} to={"/about"} iconName={"info-1"} tabColor={'#D2912D'} tabClass={'bgGold'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <SlideOutMenuLink title={"Credits"} to={"/credits"} iconName={"person-1"} tabColor={'#A34726'} tabClass={'bgTerracotta'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <SlideOutMenuLink title={"Media"} to={"/media"} iconName={"microphone-1"} tabColor={'#3E8483'} tabClass={'bgTeal'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <SlideOutMenuLink title={"Contact"} to={"/contact"} iconName={"contact-mail"} tabColor={'#263053'} tabClass={'bgDarkBlue'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
        </div>
        <div className='text-center pt-8 landscape:pt-4 cursor-pointer group' onClick={handleCloseMenu}>
            <i className='flaticon-next-1 text-black text-2xl transform group-hover:text-3xl duration-100'></i>
            <div className='text-black text-sm'>Close Menu</div>
        </div>
    </div>

  )
}
