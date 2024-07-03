import React, { useState } from 'react'

export default function CategoryButton({title, selectedCategory, updateSelectedCategory, bgColor}) {

    function handleOnClick(category) {
        updateSelectedCategory(category)
    }

  return (
    <button className={`w-[100px] flex-col sm:w-[120px] h-[60px] text-black text-xl sm:rounded-b-xl flex items-center justify-start bg-light7 origin-top group`} style={{ fontWeight: title === selectedCategory ? 'normal' : 'lighter', boxSizing: 'border-box', maxWidth: '100%'}} onClick={() => handleOnClick(title)}>
        <div className=' transform sm:group-hover:scale-105 sm:group-hover:font-medium duration-150'>{title}</div>
        <div className='w-full h-[4px] rounded-b-xl transform duration-150' style={{borderBottom: 'solid' + bgColor, borderBottomWidth: title === selectedCategory ? '12px' : '4px'}}></div>
    </button>
  )
}
