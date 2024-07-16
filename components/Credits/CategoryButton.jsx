'use client';

import React, { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function CategoryButton({title, bgColor}) {

    const [isCurrentCategory, setIsCurrentcategory] = useState(false)

    const router = useRouter();
    const params = useParams();

    useEffect(() => {

      const checkIsCurrentCategory = () => {
        const pathname = window.location.pathname
        let splitname = pathname.split('/')
        if (splitname.length > 2 && splitname[2] === title.toLowerCase()) {
          setIsCurrentcategory(true)
        } else {
          setIsCurrentcategory(false)
        }
      }

      checkIsCurrentCategory()

    }, [params])

    function handleOnClick(category) {
        router.push('/credits/' + title.toLowerCase())
    }

  return (
    <button className={`w-[100px] flex-col sm:w-[120px] h-[60px] text-black text-xl sm:rounded-b-xl flex items-center justify-start origin-top group`} style={{ fontWeight: isCurrentCategory ? 'normal' : 'lighter', boxSizing: 'border-box', maxWidth: '100%'}} onClick={() => handleOnClick(title)}>
        <div className=' transform sm:group-hover:scale-105 sm:group-hover:font-medium duration-150'>{title}</div>
        <div className='w-full h-[4px] rounded-b-xl transform duration-150' style={{borderBottom: 'solid' + bgColor, borderBottomWidth: isCurrentCategory ? '12px' : '4px'}}></div>
    </button>
  )
}
