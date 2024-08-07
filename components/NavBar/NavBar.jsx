'use client';

import React from 'react'
import NavBarLink from './NavBarLink'
import SocialButton from '../SocialButton/SocialButton'
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar({updateIsShowingSlideOutMenu, player, handleSetPlayer}) {
  return (
    <div className='flex w-full h-[150px] justify-between items-end fixed bg-gradient-to-b from-light7 from-60% to-[#f4f4eb] to-95% border-b-[1px] border-black text-black pl-8 pr-7 z-50'>
        
        {/* LEFT SIDE - NAME AND DECORATIVE TILE */}
        <Link href='/' className='flex flex-row items-end pb-4' onClick={() => {
            if (player) {
                player.stop()
                handleSetPlayer(null)
            }
        }}>
            <Image src='/deruta/deruta tile.webp' alt='A colorful tile icon' width={1024} height={1009} className='w-[80px] h-[80px]' priority quality={100}/>
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

        {/* RIGHT SIDE - NAV BUTTONS AND SOCIAL BUTTONS */}
        <div className='flex flex-col items-end'>

            {/* SOCIAL BUTTONS */}
            <div className='flex flex-row pb-3'>
                <SocialButton to={"https://www.linkedin.com/in/edie-lehmann-boddicker-31625a14/"} siteName={'LinkedIn'} logo={'/socialLogos/linkedInLogo.png'}/>
                <SocialButton to={"https://www.instagram.com/edielehbod/"} siteName={'Instagram'} logo={'/socialLogos/instagramLogo.png'}/>
                <SocialButton to={"https://www.facebook.com/e.lehbod"} siteName={'Facebook'} logo={'/socialLogos/facebookLogo.png'}/>
                <SocialButton to={"https://www.imdb.com/name/nm0090798/"} siteName={'IMDB'} logo={'/socialLogos/imdbLogo.webp'}/>
            </div>

            {/* NAV LINKS */}
            <div className='flex flex-row w-full gap-2'>

                {/* HOME */}
                <div className='w-[92px] hover:bg-yellow rounded-t-lg hover:text-light7/90 hover:fill-light7'>
                    <NavBarLink title={"Home"} to={"/"} iconName={"/icons/001-home.svg"} tabColor={'#D2AD25'} tabClass={'bgYellow'}updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
                </div>

                {/* ABOUT */}
                <div className='w-[92px] hover:bg-gold rounded-t-lg hover:text-light7/90 hover:fill-light7'>
                    <NavBarLink title={"About"} to={"/about"} iconName={"/icons/024-info-1.svg"} tabColor={'#D2912D'} tabClass={'bgGold'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
                </div>

                {/* CREDITS */}
                <div className='w-[92px] hover:bg-terracotta rounded-t-lg hover:text-light7/90 hover:fill-light7'>
                    <NavBarLink title={"Credits"} to={"/credits"} iconName={"/icons/030-person-1.svg"} tabColor={'#A34726'} tabClass={'bgTerracotta'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
                </div>

                {/* MEDIA */}
                <div className='w-[92px] hover:bg-teal4 rounded-t-lg hover:text-light7/90 hover:fill-light7'>
                    <NavBarLink title={"Media"} to={"/media"} iconName={"/icons/045-microphone-1.svg"} tabColor={'#3E8483'} tabClass={'bgTeal'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
                </div>

                <div className='w-[92px] hover:bg-darkBlue3 rounded-t-lg hover:text-light7/90 hover:fill-light7'>
                    <NavBarLink title={"Contact"} to={"/contact"} iconName={"/icons/016-contact-mail.svg"} tabColor={'#263053'} tabClass={'bgDarkBlue'} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
                </div>
            </div>
        </div>
    </div>
  )
}
