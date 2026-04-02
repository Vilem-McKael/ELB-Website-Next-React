import React from 'react'

export default function UpAndComing() {
  return (
    <div id='news' className='flex flex-col w-full items-center mx-8'>

        {/* SECTION TITLE: UP & COMING */}
        <div className='sticky top-[80px] mobileLandscape:top-0 sm:top-[120px] w-full border-b-[8px] flex justify-center items-center px-4 py-4 sm:px-16 border-green bg-light7 mb-8 md:mb-16'>
            
            <div className='h-[20px] w-[20px] rounded-full border-green bg-green/50 border-[2px] mr-4'></div>
            <div className='w-full max-w-[1000px] text-3xl sm:text-4xl text-start text-black font-normal'>
            News
            </div>

        </div>

        <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] mb-8 md:shadow-lg md:shadow-gray-500'>
            <img src={'/creditImages/theHandThatRocksTheCradle.webp'} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover shrink-0 object-bottom'/>
            <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-top'>
                <div className='text-4xl font-semibold'>
                    The Hand That Rocks the Cradle
                </div>
                <div className='pt-1 text-xl italic font-medium md:ml-4 font-barlow'>
                    Solo Vocalist
                </div>
                <div className='pt-2 text-md italic md:ml-8 font-barlow'>
                    <span className='font-bold'>IMDB: </span>An upscale suburban mom brings a new nanny, Polly Murphy, into her home, only to discover she is not the person she claims to be.
                </div>
                <div className='md:ml-8 text-sm pt-4 font-barlow'>
                    Watch now on Hulu
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] mb-8 md:shadow-lg md:shadow-gray-500'>
            <img src={'/creditImages/inYourDreamsPoster.jpg'} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover shrink-0 object-bottom'/>
            <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-top'>
                <div className='text-4xl font-semibold'>
                    In Your Dreams
                </div>
                <div className='pt-1 text-xl italic font-medium md:ml-4 font-barlow'>
                    Vocal Contractor & Conductor
                </div>
                <div className='pt-2 text-md italic md:ml-8 font-barlow'>
                    <span className='font-bold'>IMDB: </span>Stevie and her little brother Elliot journey into the wildly absurd landscape of their own dreams to ask the Sandman to grant them the perfect family.
                </div>
                <div className='md:ml-8 text-sm pt-4 font-barlow'>
                    Watch now on Netflix
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] mb-8 md:shadow-lg md:shadow-gray-500'>
            <img src={'/creditImages/avatar3.webp'} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover shrink-0 object-bottom'/>
            <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-top'>
                <div className='text-4xl font-semibold'>
                    Avatar: Fire and Ash
                </div>
                <div className='pt-1 text-xl italic font-medium md:ml-4 font-barlow'>
                    Vocal Contractor & Vocalist
                </div>
                <div className='pt-2 text-md italic md:ml-8 font-barlow'>
                    <span className='font-bold'>IMDB: </span>Jake and Neytiri&apos;s family grapples with grief after Neteyam&apos;s death, encountering a new, aggressive Na&apos;vi tribe, the Ash People, who are led by the fiery Varang, as the conflict on Pandora escalates and a new moral focus emerges.
                </div>
                <div className='md:ml-8 text-sm pt-4 font-barlow'>
                    Premiered in theaters on December 1, 2025
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] mb-8 md:shadow-lg md:shadow-gray-500'>
            <img src={'/creditImages/wickedForGood1 copy.jpg'} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover shrink-0 object-top'/>
            <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-top'>
                <div className='text-4xl font-semibold'>
                    Wicked: For Good
                </div>
                <div className='pt-1 text-xl italic font-medium md:ml-4 font-barlow'>
                    Vocal Contractor & Vocalist
                </div>
                <div className='pt-2 text-md italic md:ml-8 font-barlow'>
                    <span className='font-bold'>IMDB: </span>Elphaba, the future Wicked Witch of the West and her relationship with Glinda, the Good Witch of the North. The second of a two-part feature film adaptation of the Broadway musical.
                </div>
                <div className='md:ml-8 text-sm pt-4 font-barlow'>
                    In theaters November 21, 2025
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] mb-8 md:shadow-lg md:shadow-gray-500'>
            <img src={'/edieImages/Kimmel pic copy.jpeg'} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover shrink-0 object-bottom'/>
            <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-top'>
                <div className='text-4xl font-semibold'>
                    Jimmy Kimmel Live!
                </div>
                <div className='pt-1 text-xl italic font-medium md:ml-4 font-barlow'>
                    Vocal Contractor, Coach & Conductor
                </div>
                <div className='pt-2 text-md italic md:ml-8 font-barlow'>
                    Contracted & conducted a group of girls between ages 5 and 8, who sang backing vocals for The Marias&apos; appearance on JKL! for the live performance of their hauntingly beautiful song, Sienna.
                </div>
                <div className='md:ml-8 text-sm pt-4 font-barlow'>
                    <a href='https://www.youtube.com/watch?v=PsDHm58iwcA' className='text-blue-600 underlined'>Watch the full performance on YouTube</a>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] mb-8 md:shadow-lg md:shadow-gray-500'>
            <img src={'/creditImages/httydla2.webp'} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover shrink-0 object-bottom'/>
            <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-top'>
                <div className='text-4xl font-semibold'>
                    How To Train Your Dragon (2025)
                </div>
                <div className='pt-1 text-xl italic font-medium md:ml-4 font-barlow'>
                    Vocal Contractor & Vocalist
                </div>
                <div className='pt-2 text-md italic md:ml-8 font-barlow'>
                    A live action remake of the beloved classic. <span className='font-bold'>IMDB: </span>As an ancient threat endangers both Vikings and dragons alike on the isle of Berk, the friendship between Hiccup, an inventive Viking, and Toothless, a Night Fury dragon, becomes the key to both species forging a new future together.
                </div>
                <div className='md:ml-8 text-sm pt-4 font-barlow'>
                    Rent or Buy it today on Amazon Prime Video
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] mb-8 md:shadow-lg md:shadow-gray-500'>
            <img src={'/creditImages/americanSymphony2.png'} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover shrink-0 object-bottom'/>
            <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-top'>
                <div className='text-4xl font-semibold'>
                    American Symphony: The Album
                </div>
                <div className='pt-1 text-xl italic font-medium md:ml-4 font-barlow'>
                    Vocal Contractor & Vocalist
                </div>
                {/* <div className='pt-2 text-md italic md:ml-8 font-barlow'>
                    <span className='font-bold'>IMDB: </span>After two decades as one of the most beloved and enduring musicals on the stage, Wicked makes its long-awaited journey to the big screen as a spectacular, generation-defining two-part cinematic event this holiday season.
                </div> */}
                <div className='md:ml-8 text-sm pt-4 font-barlow'>
                    Coming Soon
                </div>
            </div>
        </div>

        

        {/* <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] mb-8 md:shadow-lg md:shadow-gray-500'>
            <img src={'/creditImages/dannyElfmanFromB2B.jpg'} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover shrink-0 object-center'/>
            <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-bottom'>
                <div className='text-4xl font-semibold'>
                    Danny Elfman: From Boingo to Batman to Big Mess & Beyond
                </div>
                <div className='pt-1 text-xl italic font-medium md:ml-4 font-barlow'>
                    Vocal Contractor & Vocalist
                </div>
                <div className='pt-2 text-md italic md:ml-8 font-barlow'>
                    <span className='font-bold'>DE Official Website: </span>&quot;Join us for our Halloween weekend extravaganza along with special guests Johnny Jewel x DESIRE. See you there!&quot;
                </div>
                <div className='md:ml-8 text-sm pt-4 font-barlow'>
                    Nov 2nd at the Hollywood Bowl & Nov 3rd at the Shoreline Amphitheatre in San Francisco
                </div>
            </div>
        </div>
        
        <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] mb-8 md:shadow-lg md:shadow-gray-500'>
            <img src={'/creditImages/ffviiWorldTour.png'} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover object-top'/>
            <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-top'>
                <div className='text-4xl font-semibold'>
                    Final Fantasy VII Rebirth Orchestra World Tour
                </div>
                <div className='pt-1 text-xl italic font-medium md:ml-4 font-barlow'>
                    Vocalist
                </div>
                <div className='pt-2 text-md italic md:ml-8 font-barlow'>
                    <span className='font-bold'>Official Site: </span>Experience all new symphonic arrangements of the music of FINAL FANTASY VII REBIRTH including beloved scores by Nobuo Uematsu and exciting new contributions from Mitsuto Suzuki, Masashi Hamauzu, and many other esteemed composers and arrangers, performed by an orchestra and chorus of over 100 musicians led by renowned conductors Arnie Roth and Eric Roth.
                </div>
                <div className='w-full md:ml-8 text-sm pt-4 flex flex-col lg:flex-row items-center md:items-start font-barlow'>
                    <div className=''>August 10th at the Shrine Auditorium</div>
                    <img src={'/studioLogos/netflix2.png'} className='w-[100px] pt-2 lg:pt-0 md:pl-2'/> 
                </div>
            </div>
        </div>

        {/* 1: THE ACOLYTE */}

        {/*
        <div className='flex flex-col w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] items-center' style={{animation: '3s slide-in'}}>
            <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] mb-8 md:shadow-lg md:shadow-gray-500'>
                
                <img src={'/creditImages/theAcolyte.webp'} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover object-top'/>
                <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 '>
                    <div className='text-4xl font-semibold'>
                        The Acolyte
                    </div>
                    <div className='pt-1 text-xl italic font-medium md:ml-4 font-barlow'>
                        Vocalist & Vocal Contractor
                    </div>
                    <div className='pt-2 text-md italic md:ml-8 font-barlow'>
                        <span className='font-bold'>IMDB: </span>Star Wars series that takes viewers into a galaxy of shadowy secrets and emerging dark-side powers in the final days of the High Republic era.
                    </div>
                    <div className='md:ml-8 text-sm pt-4 flex flex-col lg:flex-row w-full items-center md:items-start font-barlow'>
                        Episode I premieres June 4, 2024 only on
                        <img src={'/studioLogos/disneyPlus.png'} className='w-[100px] pt-2 lg:pt-0 lg:pl-2'/>
                    </div>
                </div>
            </div> */}

            {/* 2: KINGDOM OF THE PLANET OF THE APES */}
            

            {/* 3: THELMA THE UNICORN */}
            
        {/* </div> */}
    </div>
  )
}
