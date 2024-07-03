import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({title, to, iconName, currentPage, updateCurrentPage}) {

    function handleOnClick() {
        updateCurrentPage(title)
    }
    // className='flex flex-row items-center'
    
  return (
    <div className='py-2 font-medium'>
        <Link to={to} onClick={handleOnClick} className='flex flex-row'><i className={`flaticon-${iconName} w-[28px] h-[28px]`}/><div className='transform origin-center hover:scale-[1.05] duration-100 pl-3'>{title}</div></Link>
    </div>
  )
}
