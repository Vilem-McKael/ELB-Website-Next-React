import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function JobTitleNavigation({selectedIndex}) {

    const scrollWithNavbarOffset = (element, offset) => {
        const scrollLocation = element.offsetTop - offset;
        window.scroll({
            top: scrollLocation,
            left: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className='w-full'>
        <div className='w-full items-center p-8 text-center'>
            Explore Edie's work across various roles:
        </div>
        <div className='flex w-full items-center justify-between h-[60px] text-center  border-darkBlue border-[1px]'>
            <HashLink smooth to='/#vocal-contractor' scroll={element => scrollWithNavbarOffset(element, 50)} className='flex w-full h-full items-center justify-center hover:bg-darkBlue text-black hover:text-white border-darkBlue border-r-[1px] cursor-pointer'>
                Vocal Contractor
            </HashLink>
            <HashLink smooth to='/#singer' scroll={element => scrollWithNavbarOffset(element, 50)} className='flex w-full h-full items-center justify-center hover:bg-darkBlue text-black hover:text-white border-darkBlue border-r-[1px] cursor-pointer'>
                Singer
            </HashLink>
            <HashLink smooth to='/#conductor' scroll={element => scrollWithNavbarOffset(element, 50)} className='flex w-full h-full items-center justify-center hover:bg-darkBlue text-black hover:text-white border-darkBlue border-r-[1px] cursor-pointer'>
                Conductor
            </HashLink>
            <HashLink smooth to='/#vocal-coach' scroll={element => scrollWithNavbarOffset(element, 50)} className='flex w-full h-full items-center justify-center hover:bg-darkBlue text-black hover:text-white border-darkBlue border-r-[1px] cursor-pointer'>
                Vocal Coach
            </HashLink>
            <HashLink smooth to='/#musician' scroll={element => scrollWithNavbarOffset(element, 50)} className='flex w-full h-full items-center justify-center hover:bg-darkBlue text-black hover:text-white border-darkBlue border-r-[1px] cursor-pointer'>
                Musician
            </HashLink>
            <HashLink smooth to='/#something' scroll={element => scrollWithNavbarOffset(element, 50)} className='flex w-full h-full items-center justify-center hover:bg-darkBlue text-black hover:text-white cursor-pointer'>
                One More
            </HashLink>
        </div>
    </div>
  )
}
