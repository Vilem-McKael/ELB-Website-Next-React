import Footer from '@/components/Footer/Footer'
import React from 'react'

export default function ContactLayout({children}) {
  return (
    <div className='w-full flex min-h-[80vh] flex-col items-center'>
        <div className='text-center text-2xl sm:text-4xl mt-16 font-bold'>
        Get In Touch
      </div>
      {children}
    </div>
  )
}
