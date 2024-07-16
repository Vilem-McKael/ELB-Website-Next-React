'use client';
import React from 'react'

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
    <Link href={to}  className='border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' style={{borderColor: color}}>
        <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90  duration-200'></i>
        <div className='transform duration-100 sm:group-hover:text-xl object-center'>{title}</div>
    </Link>
  )
}

// sm:group-hover:text-teal4
