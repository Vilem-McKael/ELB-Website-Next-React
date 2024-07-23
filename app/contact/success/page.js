import React from 'react'

import Footer from '@/components/Footer/Footer'

export default function Success() {
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='mx-16 mt-4 text-sm sm:text-base mobileLandscape:w-[400px] sm:w-[600px]'>
            Thank you for your message. Edie will be in touch with you as soon as possible!
        </div>

        <div className='absolute bottom-0 w-full'>
            <Footer />
        </div>
    </div>
  )
}
