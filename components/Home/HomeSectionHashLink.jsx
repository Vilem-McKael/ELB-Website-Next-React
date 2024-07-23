'use client';
import React from 'react'

import RightArrow from '@/public/icons/056-right-arrow.svg'

// import { HashLink } from 'react-router-hash-link';
import Link from 'next/link';

export default function HomeSectionHashLink({to, title, color}) {

    const scrollWithNavbarOffset = (element, offset) => {
        const scrollLocation = element.offsetTop - offset;
        window.scroll({
            top: scrollLocation,
            left: 0,
            behavior: "smooth"
        })
    }
// scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)}
  return (
    <Link href={to}  className='flex flex-col items-center justify-center sm:text-base md:text-lg group text-center' style={{fill: color}}>
        <div className='transform duration-100 sm:group-hover:text-xl object-center'>{title}</div>
        <div className='border-b-[4px] w-full rounded-b-full' style={{borderColor: color}}></div>
        <RightArrow className='w-[20px] h-[20px] mt-1 flaticon-right-arrow rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90  duration-200 hidden sm:inline-block'/>
    </Link>
  )
}

// sm:group-hover:text-teal4
