import React from 'react'

import thelmaTheUnicorn from '/creditImages/thelmaTheUnicorn.jpeg'
import theAcolyte from '/creditImages/theAcolyte.webp'
import kingdom from '/creditImages/kingdom2.webp'

export default function UpAndComing() {
  return (
    <div id='up-and-coming' className='flex flex-col w-full items-center'>

        {/* SECTION TITLE: UP & COMING */}
        <div className='sticky top-[80px] mobileLandscape:top-0 sm:top-[150px] w-full border-b-[8px] flex justify-center items-center px-4 py-4 sm:px-16 border-green bg-light7 mb-8 md:mb-16'>
            
            <div className='h-[20px] w-[20px] rounded-full border-green bg-green/50 border-[2px] mr-4'></div>
            <div className='w-full max-w-[1100px] text-3xl sm:text-4xl text-start text-black font-normal'>
            Up & Coming / Current
            </div>

        </div>
        
        {/* 1: THE ACOLYTE */}
        <div className='flex flex-col w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] items-center'>
            <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] pb-8'>
                
                <img src={theAcolyte} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover object-top'/>
                <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 '>
                    <div className='text-4xl font-semibold'>
                        The Acolyte
                    </div>
                    <div className='pt-1 text-xl italic font-medium md:ml-4'>
                        Vocalist & Vocal Contractor
                    </div>
                    <div className='pt-2 text-md italic md:ml-8'>
                        <span className='font-bold'>IMDB: </span>Star Wars series that takes viewers into a galaxy of shadowy secrets and emerging dark-side powers in the final days of the High Republic era.
                    </div>
                    <div className='md:ml-8 text-sm pt-4 flex flex-col md:flex-row w-full items-center'>
                        Episode I premieres June 4, 2024 only on
                        <img src={'/studioLogos/disneyPlus.png'} className='w-[100px] pt-2 md:pt-0 md:pl-2'/>
                    </div>
                </div>
            </div>

            {/* 2: KINGDOM OF THE PLANET OF THE APES */}
            <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] pb-8'>
                <img src={kingdom} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover object-top'/>
                <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-top'>
                    <div className='text-4xl font-semibold'>
                        Kingdom of the Planet of the Apes
                    </div>
                    <div className='pt-1 text-xl italic font-medium md:ml-4'>
                        Vocal Contractor, Conductor, & Vocalist
                    </div>
                    <div className='pt-2 text-md italic md:ml-8'>
                        <span className='font-bold'>IMDB: </span>Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make choices that will define a future for apes and humans alike.
                    </div>
                    <div className='md:ml-8 text-sm pt-4'>
                        In theaters nationwide on May 10, 2024
                    </div>
                </div>
            </div>

            {/* 3: THELMA THE UNICORN */}
            <div className='flex flex-col items-center md:flex-row text-wrap w-full sm:w-[640px] md:w-full lg:w-[900px] xl:w-[1100px] md:h-[500px] pb-8'>
                <img src={thelmaTheUnicorn} className='h-full w-full sm:w-[400px] md:w-[400px] object-cover object-top'/>
                <div className='flex flex-col w-full sm:w-[400px] md:w-full h-full justify-center items-start p-4 sm:px-0 md:py-0 md:px-8 object-left-top'>
                    <div className='text-4xl font-semibold'>
                        Thelma the Unicorn
                    </div>
                    <div className='pt-1 text-xl italic font-medium md:ml-4'>
                        Vocal Contractor & Vocalist
                    </div>
                    <div className='pt-2 text-md italic md:ml-8'>
                        <span className='font-bold'>IMDB: </span>When a rare pink and glitter-filled moment of fate makes Thelma the Pony's wish of being a unicorn come true, she rises to instant international pop-superstar stardom, but at an unexpected cost.
                    </div>
                    <div className='w-full md:ml-8 text-sm pt-4 flex flex-col md:flex-row items-center'>
                        <div className=''>Released on May 17, 2024, in theaters and on</div>
                        <img src={'/studioLogos/netflix2.png'} className='w-[100px] pt-2 md:pt-0 md:pl-2'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
