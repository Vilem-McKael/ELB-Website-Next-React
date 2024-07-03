import React from 'react'

export default function QuoteEndOfPage() {
  return (
    <div className='w-full h-[300px] mt-16 flex flex-col justify-center items-center'>

        {/* QUOTE CONTENTS */}
        <div className='mobileLandscape:top-0 sm:top-[150px] flex items-center justify-center text-lg sm:text-xl italic px-8 md:px-0 w-full md:w-[500px] bg-derutaBg1 bg-contain bg-center rounded-xl border'>
          <div className='flex items-center justify-center w-full h-full bg-light7/30'>
            <div className='bg-light7 mx-8 my-8 px-6 py-6 rounded-md font-medium'>
              "Beautiful music is the art of the prophets that can calm the agitations of the soul; it is one of the most magnificent and delightful presents God has given us."
            </div>
          </div>
        </div>
    </div>
  )
}
