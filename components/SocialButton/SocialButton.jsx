import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SocialButton({to, siteName, logo}) {
  return (
    <div className='mx-1'>
      <Link href={to} target="_blank" rel="noopener noreferrer">
          <div className='flex flex-col justify-center items-center transform hover:scale-110 duration-100 '>
              <Image src={logo} alt={siteName} width={28} height={28} className='w-[28px] h-[28px]' priority/>
              {/* <div className='text-xs'>{name}</div> */}
          </div>
      </Link>
    </div>
  )
}
