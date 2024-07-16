import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NavLink({title, to, iconName, updateCurrentPage, player, handleSetPlayer}) {

    const navigate = useNavigate();

    function handleOnClick() {
        if (player) {
          player.stop()
          handleSetPlayer(null)
        }
        updateCurrentPage(title)
        navigate(to)
        window.scroll({
          top: 0,
          left: 0,
        })
    }
    // className='flex flex-row items-center'
    
  return (
    <div className='py-2 font-medium'>
        <Link to={to} onClick={handleOnClick} className='flex flex-row'><img src={iconName} className={`w-[28px] h-[28px]`}/><div className='transform origin-center hover:scale-[1.05] duration-100 pl-3'>{title}</div></Link>
    </div>
  )
}
