import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function HomeHeader() {

    const scrollWithNavbarOffset = (element, offset) => {
        const scrollLocation = element.offsetTop - offset;
        window.scroll({
            top: scrollLocation,
            left: 0,
            behavior: "smooth"
        })
    }

  return (
    <div id="home-header" className='w-full md:h-[850px] sm:min-w-[640px] md:min-w-[800px] xl:min-w-[1100px] flex flex-col items-center bg-light7'> {/* TOP OF PAGE */}
        <div className='flex flex-col-reverse md:flex-row w-full h-full md:h-[650px] items-center justify-center'> {/* HEADER BODY // ROW */}

            {/* HEADSHOT & IMAGE DESCRIPTION // COL */}
            <div className='w-full h-full flex justify-center md:justify-end bg-green/25 px-8'>
                <div className='w-full sm:w-[400px] md:w-[300px] flex flex-col justify-start items-center md:items-end'>
                    <img src={'/edieImages/elbHeadshot2.jpeg'} className='object-cover object-left-top h-[500px] w-[400px] md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-[400px]  mt-12'/>
                    <div className='font-light text-md text-gray-500 italic mt-4 sm:w-[400px] text-center md:text-end pb-4 md:pb-0'>Edie Lehmann Boddicker in her backyard<br />photo by Cody Burdette</div>
                </div>
            </div>

            {/* MAIN HEADER BODY // COL */}
            <div className='w-full h-full sm:flex-col items-start justify-start'>
                <div className='w-full md:w-[500px] lg:w-[700px] flex flex-col items-center justify-center md:justify-start px-8 sm:px-16 pt-4'>

                    {/* STYLIZED NAME AND DECORATIVE TILE */}
                    <div className='flex w-full flex-row justify-center sm:justify-between items-center mb-8'>
                        <div className='flex flex-col sm:pl-0 text-3xl sm:text-2xl lg:text-4xl text-black text-leading font-normal mt-8'>
                            <div className=''>
                                <span className='text-4xl lg:text-5xl font-semibold text-gold4'>E</span>die
                            </div>
                            <div className='pl-12 lg:pl-16'>
                                <span className='text-4xl lg:text-5xl font-semibold text-teal4'>L</span>ehmann
                            </div>
                            <div className='pl-24 lg:pl-32'>
                                <span className='text-4xl lg:text-5xl font-semibold text-burntOrange4'>B</span>oddicker
                            </div>
                        </div>
                        <img src={'/deruta/deruta tile3.jpeg'} className='hidden sm:block h-[140px] w-[140px] lg:h-[160px] lg:w-[160px] '/>
                    </div>

                    {/* LIST OF ROLES & LINKS TO ROLE SECTIONS */}
                    <div className='w-full h-[120px] grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-base lg:text-lg font-medium mb-8 lg:mb-24 text-black'>

                        {/* VOCAL CONTRACTOR */}
                        <HashLink to={'/#vocal-contractor'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-yellow2 border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Vocal Contractor</HashLink>

                        {/* CONDUCTOR */}
                        <HashLink to={'/#vocalist'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-gold2 border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Vocalist</HashLink>

                        {/* MUSICIAN */}
                        <HashLink to={'/#conductor'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-terracotta border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Conductor</HashLink>

                        

                        {/* VOCALIST */}
                        <HashLink to={'/#vocal-coach'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-teal2 border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Vocal Coach</HashLink>

                        {/* VOCAL COACH */}
                        <HashLink to={'/#musician'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-green border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Musician</HashLink>

                        {/* ARRANGER */}
                        <HashLink to={'/#arranger'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-darkBlue3 border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Arranger</HashLink>

                    </div>

                    {/* HEADER BIO */}
                    <div className=' font-barlow text-[14px] md:text-[16px] w-full font-light text-justify mt-16 sm:mt-0 mb-8'>
                        A multifaceted vocalist, vocal contractor and musician residing in Los Angeles, California, Edie Lehmann Boddicker's credits include over one thousand works, including hundreds of films & albums, as well as dozens of TV Shows and live performances. She has worked with some of the biggest names in the industry; whether working on scores for  Hans Zimmer, Danny Elfman, or Michael Abels, or singing background vocals for Michael Jackson, Aretha Franklin, or Madonna, you most likely hear the impact Edie has had - and continues to have - on the music industry more often than you'd think.
                    </div>

                </div>
            </div>
        </div>

        {/* HASHLINKS TO SECTIONS OF HOMEPAGE */}
        <div className='w-full sm:h-[150px] md:h-[150px] max-w-[1100px] gap-4 flex flex-col sm:flex-row md:flex-row items-center justify-evenly text-sm font-barlow pt-4 font-default mb-8 px-2'>

            {/* STUDIO COLLABORATIONS */}
            <HashLink to={'/#up-and-coming'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='border-teal4 border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90 sm:group-hover:text-teal4 duration-200'></i>
                <div className='transform duration-100 sm:group-hover:text-xl object-center'>Up & Coming</div>
            </HashLink>

            {/* UP & COMING */}
            <HashLink to={'/#roles-&-highlights'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='border-burntOrange5 border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90 sm:group-hover:text-burntOrange5 duration-200'></i>
                <div className='transform duration-100 sm:group-hover:text-[20px] object-center'>Roles & Highlights</div>
            </HashLink>

            {/* RECENT WORK */}
            <HashLink to={'/#recent-work'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='border-gold border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90 sm:group-hover:text-gold duration-200'></i>
                <div className='transform duration-100 sm:group-hover:text-xl object-center'>Recent Work</div>
            </HashLink>

            {/* CLASSIC CREDITS */}
            <HashLink to={'/#classic-credits'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='border-green border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90 sm:group-hover:text-green duration-200'></i>
                <div className='transform duration-100 sm:group-hover:text-xl object-center'>Classic Credits</div>
            </HashLink>

            {/* ROLES & HIGHLIGHTS */}
            <HashLink to={'/#studio-collaborations'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='border-terracotta border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90 sm:group-hover:text-terracotta duration-200'></i>
                <div className='transform duration-100 sm:group-hover:text-xl object-center'>Studio Collaborations</div>
            </HashLink>

        </div>

    </div>
  )
}
