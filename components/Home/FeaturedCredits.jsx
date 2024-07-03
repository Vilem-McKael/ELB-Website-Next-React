import React from 'react'
import FeaturedWorkCardHome from './FeaturedWorkCardHome'

// recents
import dune2 from '/creditImages/dune2.webp'
import michaelBuble from '/creditImages/smile.png'
import harryStyles from '/creditImages/signOfTheTimes2.webp'
import avatar2 from '/creditImages/avatar2.webp'
import rosalia from '/creditImages/rosalia.jpeg'
import katyPerry from '/creditImages/pendulum.jpeg'
import thirtySeconds from '/creditImages/walkOnWater.jpeg'
import nope from '/creditImages/nope2.jpeg'
import encanto from '/creditImages/encanto.webp'
import endgame from '/creditImages/endgame.jpeg'

// classics

import madonna from '/creditImages/trueBlue.jpg'
import quincyJones from '/creditImages/backOnTheBlock.png'
import michaelJackson from '/creditImages/invincible.jpg'
import belindaCarlisle from '/creditImages/heavenOnEarth.webp'
import arethaFranklin from '/creditImages/unitedTogether.png'
import barbraStreisand from '/creditImages/memories.jpg'
import lindaRonstadt from '/creditImages/getCloser.jpeg'
import billWithers from '/creditImages/watchingYouWatchingMe.jpeg'
import herbieHancock from '/creditImages/liteMeUp.jpg'
import matthewWilder from '/creditImages/matthewWilder.webp'


import {r} from '../../data/creditMedia'


export default function FeaturedCredits() {
  return (
    <div className='w-full flex flex-col justify-start items-center'>
    
        {/* RECENT WORK SECTION // COL */}
        <div id='recent-work' className='flex flex-col w-full items-center text-black'>

            {/* SECTION TITLE: RECENT WORK */}
            <div className='sticky top-[80px] mobileLandscape:top-0 sm:top-[150px] flex px-4 sm:px-16 py-4 mb-12 w-full items-center justify-center border-b-[8px] bg-light7 border-terracotta'>
                <div className='h-[20px] w-[20px] rounded-full border-terracotta border-[2px] bg-terracotta/50 shrink-0 mr-4'></div>
                <div className='w-full max-w-[1100px] text-3xl sm:text-4xl flex justify-start text-start text-black font-normal'>
                    Recent Work
                </div>
            </div>

            {/* RECENT WORK CARDS */}
            <div className='w-full md:w-[750px] lg:w-[1000px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-start pb-12 gap-y-8 place-items-center'>
                <FeaturedWorkCardHome key={0} image={dune2} title={'Dune 2'} roles={[r.Vocalist, r.Contractor]}/>
                <FeaturedWorkCardHome key={1} image={avatar2} title={'Avatar: The Way of Water'} roles={[r.Vocalist, r.Contractor, r.Contractor]}/>
                <FeaturedWorkCardHome key={2} image={harryStyles} title={'Harry Styles'} work={'Sign of the Times'}  roles={[r.Contractor, r.Conductor]}/>
                <FeaturedWorkCardHome key={3} image={rosalia} title={'Rosalía'} roles={[r.Contractor, r.Conductor]}/>
                <FeaturedWorkCardHome key={4} image={michaelBuble} title={'Michael Bublé'} work={'Smile'}  roles={[r.Vocalist, r.Contractor]}/>
                <FeaturedWorkCardHome key={5} image={katyPerry} title={'Katy Perry'} work={'Pendulum'}  roles={[r.Contractor, r.Arranger, r.Vocalist, r.Conductor]}/>
                <FeaturedWorkCardHome key={6} image={thirtySeconds} title={'30 Seconds to Mars'} work={'Walk on Water'}  roles={[r.Contractor, r.Vocalist, r.Arranger]}/>
                <FeaturedWorkCardHome key={7} image={nope} title={'Nope'} roles={[r.Contractor, r.Conductor]}/>
                <FeaturedWorkCardHome key={8} image={encanto} title={'Encanto'} roles={[r.Contractor, r.Conductor]}/>
            </div>
        </div>

        {/* CLASSIC CREDITS SECTION // COL */}
        <div id='classic-credits' className='w-full flex flex-col items-center text-black'>

            {/* SECTION TITLE: CLASSIC CREDITS */}
            <div className='sticky top-[80px] mobileLandscape:top-0 sm:top-[150px] flex px-4 sm:px-16 py-4 mb-12 w-full items-center justify-center border-b-[8px] border-darkBlue3 bg-light7'>
                <div className='h-[20px] w-[20px] rounded-full border-darkBlue3 border-[2px] bg-darkBlue3/50 shrink-0 mr-4'></div>
                <div className='w-full max-w-[1100px] text-3xl sm:text-4xl flex justify-start text-start text-black font-normal'>
                    Classic Credits
                </div>
            </div>

            {/* CLASSIC CREDITS CARDS */}
            <div className='w-full md:w-[750px] lg:w-[1000px] justify-center items-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-12 gap-y-8 place-items-center'>
                <FeaturedWorkCardHome key={0} image={madonna} title={'Madonna'} work={'True Blue'} roles={[r.Vocalist, r.Arranger]}/>
                <FeaturedWorkCardHome key={1} image={quincyJones} title={'Quincy Jones'} work={'Back On the Block'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome key={2} image={michaelJackson} title={'Michael Jackson'} work={'Invincible'}  roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome key={3} image={belindaCarlisle} title={'Belinda Carlisle'} work={'Heaven is a Place on Earth'}  roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome key={4} image={arethaFranklin} title={'Aretha Franklin'} work={'United Together'}  roles={[r.Vocalist, r.Contractor, r.Arranger]}/>
                <FeaturedWorkCardHome key={5} image={barbraStreisand} title={'Barbra Streisand'} work={'Memories'}  roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome key={6} image={lindaRonstadt} title={'Linda Ronstadt'} work={'Get Closer'}  roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome key={7} image={billWithers} title={'Bill Withers'} work={'Watching You Watching Me'}  roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome key={8} image={herbieHancock} title={'Herbie Hancock'} work={'Lite Me Up'}  roles={[r.Vocalist, r.Vocoder]}/>
                {/* <FeaturedWorkCardHome image={matthewWilder} title={'Matthew Wilder'} roles={[r.Vocalist]}/> */}
            </div>
        </div>
    </div>
  )
}
