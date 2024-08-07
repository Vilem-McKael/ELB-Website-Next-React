'use client';

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';

import Home from '@/public/icons/001-home.svg'
import About from '@/public/icons/024-info-1.svg'
import Credits from '@/public/icons/030-person-1.svg'
import Media from '@/public/icons/045-microphone-1.svg'
import Contact from '@/public/icons/016-contact-mail.svg'

export default function NavBarLink({title, to, tabColor, tabClass, updateIsShowingSlideOutMenu, player, handleSetPlayer}) {

  const params = useParams();
  const router = useRouter();

  const [isCurrentPage, setIsCurrentPage] = useState(checkTitleEqualsPathName)

    function handleOnClick() {
        updateIsShowingSlideOutMenu(false)
        if (player) {
          player.stop()
          handleSetPlayer(null)
        }
        router.push(to)
        window.scroll({
          top: 0,
          left: 0,
        })
        Howler.stop();
    }
    // className='flex flex-row items-center'

    const svgOptions = {
      "Home": Home,
      "About": About,
      "Credits": Credits,
      "Media": Media,
      "Contact": Contact
    }

    useEffect(() => {
      const handleRouteChange = () => {
        setIsCurrentPage(() => checkTitleEqualsPathName())
      }

      handleRouteChange()
      
       
    }, [params])

    function checkTitleEqualsPathName() {
      let pathname = window.location.pathname
      if (title === "Home" && pathname.split('/')[1] === "") {

        return true
      } else {

        return pathname.split('/')[1] === title.toLowerCase()
      }
    }

    const SvgComponent = svgOptions[title]
    
  return (
    <button className={`nav-link font-regular flex flex-col justify-between items-center w-full h-[50px] rounded-t-xl ${tabClass}`} onClick={handleOnClick}>
        <div className='flex flex-row items-center mt-2'><SvgComponent className={"h-[19px] w-[19px] mr-2 g"}/><div className='transform origin-center'>{title}</div></div>
        <div className={`w-full rounded-t-full`} style={{backgroundColor: tabColor, height: isCurrentPage ? '12px' : '4px'}}></div>
    </button>
)}
