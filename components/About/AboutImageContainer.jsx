import Image from 'next/image'
import React from 'react'

export default function AboutImageContainer({image, width, height, twcss, margin, float, description}) {
  return (
    <div className={`h-auto p-3 bg-gradient-to-b from-slate-600 from-20% via-slate-500 via-80% to-slate-300 to-95% mx-auto w-auto sm:w-auto mb-2 sm:float-${float} sm:${margin}`}>
        <Image src={image} width={width} height={height} alt={description} className={twcss}/>

        <div className='text-black bg-light7/50 text-sm text-center mt-2 p-2 font-zilla'>
            {description}
        </div>
    </div>
  )
}
