import React from 'react'
import { HashLink } from 'react-router-hash-link'
import RoleHashLink from './RoleHashLink';
import HomeSectionHashLink from './HomeSectionHashLink';

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
    <div id="home-header" className='w-full md:h-[850px] sm:min-w-[640px] md:min-w-[800px] max-w-[1100px] flex flex-col items-center bg-light7'> {/* TOP OF PAGE */}
        <div className='flex flex-col-reverse md:flex-row w-full h-full md:h-[650px] items-center justify-center mb-8'> {/* HEADER BODY // ROW */}

            {/* HEADSHOT & IMAGE DESCRIPTION // COL */}
            <div className='w-full h-full flex justify-center md:justify-end' style={{backgroundImage: "linear-gradient(135deg, rgba(80,102,50,0.6) 50%, rgba(217,217,196,1) 100%)"}}>
                <div className='w-auto flex flex-col justify-start items-center md:items-end'>
                    <img src={'/edieImages/elbHeadshot2.jpeg'} className='object-cover object-left-top w-full h-full mt-12 px-12 md:px-8 md:max-h-[70%]'/>
                    <div className='font-light text-md text-black/60 w-auto italic mt-4 text-center md:text-end pb-4 md:pb-0 mx-12 md:mx-8'>Edie Lehmann Boddicker in her backyard<br />Photo by Cody Burdette</div>
                </div>
            </div>

            {/* MAIN HEADER BODY // COL */}
            <div className='w-full h-full sm:flex-col items-start justify-start'>
                <div className='w-full md:w-[500px] lg:w-[700px] flex flex-col items-center justify-center md:justify-center px-8 sm:px-16 pt-4'>

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
                    <div className='w-full h-[120px] grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-base lg:text-lg font-medium mb-8 lg:mb-16 text-black'>

                        {/* VOCAL CONTRACTOR */}
                        <RoleHashLink to={'/#vocal-contractor'} role={"Vocal Contractor"} color={'#D2AD25'}/>

                        {/* VOCALIST */}
                        <RoleHashLink to={'/#vocalist'} role={'Vocalist'} color={'#BB6F24'}/>

                        {/* CONDUCTOR */}
                        <RoleHashLink to={'/#conductor'} role={'Conductor'} color={'#A34726'} />

                        {/* VOCAL COACH */}
                        <RoleHashLink to={'/#vocal-coach'} role={'Vocal Coach'} color={'#3E8483'}/>

                        {/* MUSICIAN */}
                        <RoleHashLink to={'/#musician'} role={'Musician'} color={'#566632'}/>

                        {/* ARRANGER */}
                        <RoleHashLink to={'/#arranger'} role={'Arranger'} color={'#2A3659'}/>

                    </div>

                    {/* HEADER BIO */}

                    <div className=' font-barlow text-[14px] md:text-[16px] w-full font-normal text-justify mt-16 sm:mt-0 mb-8'>
                        <span className='font-medium'>One of LA&apos;s foremost vocal contractors,</span> Edie Lehmann Boddicker&apos;s career includes <span className='font-medium'>over one thousand credits</span>, including hundreds of films & albums, dozens of TV Shows and numerous live performances. She has collaborated with some of the biggest names in the industry, having worked on scores with <span className='font-medium'>John Powell</span>, <span className='font-medium'>Hans Zimmer</span>, <span className='font-medium'>Germaine Franco</span>, and <span className='font-medium'>Michael Abels</span>, and sung backing vocals for the likes of <span className='font-medium'>Michael Jackson</span>, <span className='font-medium'>Aretha Franklin</span>, and <span className='font-medium'>Madonna</span>.
                    </div>

                </div>
            </div>
        </div>

        {/* HASHLINKS TO SECTIONS OF HOMEPAGE */}
        <div style={{backgroundImage: 'url("/backgrounds/cream background3.jpeg")', backgroundSize: "cover", backgroundRepeat: 'repeat-x'}} className='w-full sm:h-[150px] md:h-[150px] max-w-[1100px] gap-4 flex flex-col sm:flex-row md:flex-row items-center justify-evenly text-sm font-barlow py-4 font-default px-4'>

            {/* UP & COMING */}
            <HomeSectionHashLink to={'/#up-and-coming'} title={'Up & Coming'} color={'#56A29A'}/>

            {/* ROLES & HIGHLIGHTS */}
            <HomeSectionHashLink to={'/#roles-&-highlights'} title={'Roles & Highlights'} color={'#BB6F24'} />

            {/* RECENT WORK */}
            <HomeSectionHashLink to={'/#recent-work'} title={'Recent Work'} color={'#CC9D20'}/>

            {/* CLASSIC CREDITS */}
            <HomeSectionHashLink to={'/#classic-credits'} title={'Classic Credits'} color={'#566632'}/>

            {/* ROLES & HIGHLIGHTS */}
            <HomeSectionHashLink to={'/#studio-collaborations'} title={'Studio Collaborations'} color={'#A34726'}/>

        </div>

    </div>
  )
}