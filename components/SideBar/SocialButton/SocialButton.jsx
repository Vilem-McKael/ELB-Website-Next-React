import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SocialButton({to, logo}) {
  return (
    <div className='mx-1'>
      <Link to={to} target="_blank" rel="noopener noreferrer">
          <div className='flex flex-col justify-center items-center transform hover:scale-110 duration-100 '>
              <img src={logo} className='w-[28px] h-[28px]'/>
              {/* <div className='text-xs'>{name}</div> */}
          </div>
      </Link>
    </div>
  )
}
