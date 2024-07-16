'use client';
import React from 'react'
import Link from 'next/link';
// import { HashLink } from 'react-router-hash-link';

export default function RoleHashLink({to, role, color}) {

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
    <Link href={to} className='w-full h-[60px] border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top' style={{borderColor: color}}>{role}</Link>
  )
}
