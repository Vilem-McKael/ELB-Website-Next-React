import React from 'react'
import { Link } from 'react-router-dom'
import SocialButton from './SocialButton/SocialButton'
import facebook from '../../assets/socialLogos/facebookLogo.png'
import instagram from '../../assets/socialLogos/instagramLogo.png'
import linkedIn from '../../assets/socialLogos/linkedInLogo.png'
import imdb from '../../assets/socialLogos/imdbLogo.webp'
import mail from '../../assets/socialLogos/mail.png'
import NavLink from './NavLink'

export default function SideBar2({currentPage, updateCurrentPage}) {

  return (
    <div className='flex flex-col justify-top h-full w-[160px] text-black border-black border-r-[1px] bg-gradient-to-b from-white to-gray-200 fixed'>

      <div className='flex flex-col items-center mt-8'>
          <Link to="/"><img src="/logo.png" className='w-[80px] h-[80px]'/></Link>
          <div className='text-center mt-2'>Edie Lehmann Boddicker</div>
          <div className='flex flex-row mt-4'>
            <SocialButton to={"https://www.linkedin.com/in/edie-lehmann-boddicker-31625a14/"} logo={linkedIn}/>
            <SocialButton to={"https://www.facebook.com/e.lehbod"} logo={facebook}/>
            <SocialButton to={"https://www.instagram.com/edielehbod/"} logo={instagram}/>
            <SocialButton to={"https://www.imdb.com/name/nm0090798/"} logo={imdb}/>
            {/* <SocialButton name={"mailto:elbsing@aol.com?"} logo={mail}/> */}
          </div>
        {/* <div className='text-2xl'>
          Edie LB
        </div> */}
        {/* <div className='text-xl'>
          Lehmann Boddicker
        </div> */}
        {/* <div className='text-xs italic'>
          Contractor / Conductor / Vocalist
        </div> */}
      </div>

        <div className='flex flex-col items-start mt-8'>
            <div className='w-full border-y-[1px] pl-8 py-2 bg-gradient-to-b border-black from-white via-white to-gray-100 hover:text-white hover:bg-black'>
                <NavLink title={"Home"} to={"/"} iconName={"home"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className='w-full border-b-[1px] pl-8 py-2 bg-gradient-to-b border-black from-white to-gray-200 hover:text-white hover:bg-black'>
                <NavLink title={"About"} to={"/about"} iconName={"info-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className='w-full border-b-[1px] pl-8 py-2 bg-gradient-to-b border-black from-white to-gray-200 hover:text-white hover:bg-black'>
                <NavLink title={"Credits"} to={"/credits"} iconName={"person-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className='w-full border-b-[1px] pl-8 py-2 bg-gradient-to-b border-black from-white to-gray-200 hover:text-white hover:bg-black'>
                <NavLink title={"Listen"} to={"/listen"} iconName={"microphone-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className='w-full border-b-[1px] pl-8 py-2 bg-gradient-to-b border-black from-white to-gray-200 hover:text-white hover:bg-black'>
                <NavLink title={"Watch"} to={"/watch"} iconName={"online-video"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className='w-full border-b-[1px] pl-8 py-2 bg-gradient-to-b border-black from-white to-gray-200 hover:text-white hover:bg-black'>
                <NavLink title={"Look"} to={"/look"} iconName={"image-gallery-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className='w-full pl-8 py-2 border-b-[1px]  border-black bg-gradient-to-b from-white to-gray-200 hover:text-white hover:bg-black'>
                <NavLink title={"Contact"} to={"/contact"} iconName={"contact-mail"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
        </div>
      {/* <div className='flex flex-col items-left px-2 mt-8 text-xl font-medium bg-gray-400 mx-4 py-2 rounded-lg border-black border-[2px]'>
        <div className={`border-gray-400 border-b-[1px] pl-3 rounded-t-md ${currentPage === "Home" ? "text-[ivory] bg-blue-900" : "text-black bg-gray-100 hover:bg-gray-300"}`} >
          <NavLink title={"Home"} to={"/"} iconName={"home"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
        </div>
        <div className={`border-gray-400 border-b-[1px] pl-3 ${currentPage === "About" ? "text-[ivory] bg-blue-900" : "text-black bg-gray-100 hover:bg-gray-300"}`}>
          <NavLink title={"About"} to={"/about"} iconName={"info-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
        </div>
        <div className={`border-gray-400 border-b-[1px] pl-3 ${currentPage === "Credits" ? "text-[ivory] bg-blue-900" : "text-black bg-gray-100 hover:bg-gray-300"}`}>
          <NavLink title={"Credits"} to={"/credits"} iconName={"person-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
        </div>
        <div className={`border-gray-400 border-b-[1px] pl-3 ${currentPage === "Listen" ? "text-[ivory] bg-blue-900" : "text-black bg-gray-100 hover:bg-gray-300"}`}>
          <NavLink title={"Listen"} to={"/listen"} iconName={"microphone-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
        </div>
        <div className={`border-gray-400 border-b-[1px] pl-3 ${currentPage === "Watch" ? "text-[ivory] bg-blue-900" : "text-black bg-gray-100 hover:bg-gray-300"}`}>
          <NavLink title={"Watch"} to={"/watch"} iconName={"online-video"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
        </div>
        <div className={`border-gray-400 border-b-[1px] pl-3 ${currentPage === "Look" ? "text-[ivory] bg-blue-900" : "text-black bg-gray-100 hover:bg-gray-300"}`}>
          <NavLink title={"Look"} to={"/look"} iconName={"image-gallery-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
        </div>
        <div className={`pl-3 rounded-b-md ${currentPage === "Contact" ? "text-[ivory] bg-blue-900" : "text-black bg-gray-100 hover:bg-gray-300"}`}>
          <NavLink title={"Contact"} to={"/contact"} iconName={"contact-mail"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
        </div>
      </div> */}
    </div>
  )
}
