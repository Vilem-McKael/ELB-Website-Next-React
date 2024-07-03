import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBarLink({title, to, iconName, tabColor, tabClass, currentPage, updateCurrentPage, updateIsShowingSlideOutMenu, player, handleSetPlayer}) {

  const navigate = useNavigate();

    function handleOnClick() {
        updateIsShowingSlideOutMenu(false)
        if (player) {
          player.stop()
          handleSetPlayer(null)
        }
        updateCurrentPage(title)
        navigate(to)
    }
    // className='flex flex-row items-center'
    
  return (
    <button className={`font-regular flex flex-col justify-between items-center w-full h-[50px] rounded-t-xl ${tabClass}`} onClick={handleOnClick}>
        <div className='flex flex-row items-center mt-2'><i className={`flaticon-${iconName} h-[28px] pt-1 pr-2`}/><div className='transform origin-center'>{title}</div></div>
        <div className={`w-full rounded-t-full`} style={{backgroundColor: tabColor, height: currentPage === title ? '12px' : '4px'}}></div>
    </button>
)}
