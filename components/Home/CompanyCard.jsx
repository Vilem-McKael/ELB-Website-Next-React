import React from 'react'

export default function CompanyCard({children, img}) {
  return (
    <div className='flex flex-col items-center justify-center sm:mx-4'>
        <img src={img} className='w-[100px] h-[80px] sm:w-[160px] sm:h-[120px] object-contain' alt={children} title={children} />
    </div>
  )
}
