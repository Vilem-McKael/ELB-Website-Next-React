import React from 'react'


import HomeHeader from '@/components/Home/HomeHeader'

import Footer from '@/components/Footer/Footer'

import FeaturedCredits from '@/components/Home/FeaturedCredits'
import UpAndComing from '@/components/Home/UpAndComing'
import StudioCollaborations from '@/components/Home/StudioCollaborations'
import RolesAndHighlights from '@/components/Home/RolesAndHighlights'
import QuoteEndOfPage from '@/components/Home/QuoteEndOfPage'

export default function HomePage() {

  return (
    <div className="flex flex-col w-full items-center bg-light7">
        <HomeHeader />
        <UpAndComing />
        <RolesAndHighlights />
        <FeaturedCredits />
        <StudioCollaborations />
        <QuoteEndOfPage />
        {/* <HashLink smooth to="/#home-header" className='text-black bg-gray-100 sm:hover:text-white snm:hover:bg-black w-full h-[80px] flex items-center justify-center border-black border-t-[1px]'>
        Back to Top
        </HashLink> */}
        <Footer />
    </div>
  )
}