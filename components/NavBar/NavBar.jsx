import React from 'react'
import NavBarLink from './NavBarLink'
import { Link } from 'react-router-dom'
import SocialButton from '../SideBar/SocialButton/SocialButton'

import facebook from '../../assets/socialLogos/facebookLogo.png'
import instagram from '../../assets/socialLogos/instagramLogo.png'
import linkedIn from '../../assets/socialLogos/linkedInLogo.png'
import imdb from '../../assets/socialLogos/imdbLogo.webp'

export default function NavBar({currentPage, updateCurrentPage, updateIsShowingSlideOutMenu, player, handleSetPlayer}) {
  return (
    <div className='flex w-full h-[150px] justify-between items-end fixed bg-light7 border-b-[1px] border-black text-black pl-8 pr-7 z-50'>
        
        {/* LEFT SIDE - NAME AND DECORATIVE TILE */}
        <Link to='/' className='flex flex-row items-end pb-4' onClick={() => {
            if (player) {
                player.stop()
                handleSetPlayer(null)
            }
        }}>
            <img src={'/deruta/deruta tile.webp'} className='w-[80px] h-[80px]'/>
            <div className='flex-col justify-center text-xl text-black text-leading bg-opacity-95 font-normal pl-4 w-full h-[80px]'>
                <div className=''>
                    <span className='text-2xl font-medium text-gold4 leading-[0.9]'>E</span>die
                </div>
                <div className='pl-4'>
                    <span className='text-2xl font-medium text-teal4 leading-[0.9]'>L</span>ehmann
                </div>
                <div className='pl-8'>
                    <span className='text-2xl font-medium text-burntOrange4 leading-[0.9]'>B</span>oddicker
                </div>
            </div>
        </Link>

        {/* RIGHT SIDE - NAV BUTTONS AND SOCIAL BUTTONS */}
        <div className='flex flex-col items-end'>

            {/* SOCIAL BUTTONS */}
            <div className='flex flex-row pb-3'>
                <SocialButton to={"https://www.linkedin.com/in/edie-lehmann-boddicker-31625a14/"} logo={linkedIn}/>
                <SocialButton to={"https://www.instagram.com/edielehbod/"} logo={instagram}/>
                <SocialButton to={"https://www.facebook.com/e.lehbod"} logo={facebook}/>
                <SocialButton to={"https://www.imdb.com/name/nm0090798/"} logo={imdb}/>
            </div>

            {/* NAV LINKS */}
            <div className='flex flex-row w-full gap-2'>

                {/* HOME */}
                <div className='w-[92px] hover:bg-yellow rounded-t-lg hover:text-light7/90'>
                    <NavBarLink title={"Home"} to={"/"} iconName={"home"} tabColor={'#D2AD25'} tabClass={'bgYellow'} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
                </div>

                {/* ABOUT */}
                <div className='w-[92px] hover:bg-gold rounded-t-lg hover:text-light7/90'>
                    <NavBarLink title={"About"} to={"/about"} iconName={"info-1"} tabColor={'#D2912D'} tabClass={'bgGold'} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
                </div>

                {/* CREDITS */}
                <div className='w-[92px] hover:bg-terracotta rounded-t-lg hover:text-light7/90'>
                    <NavBarLink title={"Credits"} to={"/credits"} iconName={"person-1"} tabColor={'#A34726'} tabClass={'bgTerracotta'} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
                </div>

                {/* MEDIA */}
                <div className='w-[92px] hover:bg-teal4 rounded-t-lg hover:text-light7/90'>
                    <NavBarLink title={"Media"} to={"/media"} iconName={"microphone-1"} tabColor={'#3E8483'} tabClass={'bgTeal'} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
                </div>
                
                {/* <div className='w-[92px] hover:bg-teal4 rounded-t-lg hover:text-light7/90'>
                    <NavBarLink title={"Audio"} to={"/audio"} iconName={"microphone-1"} tabColor={'#3E8483'} tabClass={'bgTeal'} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
                </div>
                <div className='w-[92px] hover:bg-green rounded-t-lg hover:text-light7/90'>
                    <NavBarLink title={"Videos"} to={"/videos"} iconName={"online-video"} tabColor={'#566632'} tabClass={'bgGreen'} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
                </div>
                <div className='w-[92px] hover:bg-blue1 rounded-t-lg hover:text-light7/90'>
                    <NavBarLink title={"Gallery"} to={"/gallery"} iconName={"image-gallery-1"} tabColor={'#526693'} tabClass={'bgBlue'} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
                </div> */}

                {/* CONTACT */}
                <div className='w-[92px] hover:bg-darkBlue3 rounded-t-lg hover:text-light7/90'>
                    <NavBarLink title={"Contact"} to={"/contact"} iconName={"contact-mail"} tabColor={'#263053'} tabClass={'bgDarkBlue'} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} player={player} handleSetPlayer={handleSetPlayer}/>
                </div>
            </div>
        </div>
    </div>
  )
}
