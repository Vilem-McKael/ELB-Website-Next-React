import React from 'react'

import vocalContracting from '/edieImages/Angélique Kidjo.jpg'
import musician from '/edieImages/edie3.jpeg'
import vocalCoaching from '/edieImages/edie13.jpeg'
import singing from '/edieImages/elb&giorgio.png'
// import conducting from '/edieImages/edie8.jpeg'
import conducting from '/edieImages/Disney Hall 2sfh.6.14.13_1227.jpg'
// import conducting from '/edieImages/2018-AfrChoir-CR-1458.jpg'
import arranger from '/edieImages/arrangerDraft1.png'

import JobTitleCard from './JobTitleCard'

export default function RolesAndHighlights() {
  return (
    <div id='roles-&-highlights' className='flex flex-col w-full items-center'>

      {/* SECTION TITLE: ROLES & HIGHLIGHTS */}
        <div className='sticky top-[80px] mobileLandscape:top-0 sm:top-[150px] flex py-4 px-4 sm:px-16 w-full justify-center items-center border-b-[8px] border-teal4 bg-light7 z-20'>

            <div className='h-[20px] w-[20px] rounded-full border-teal4 border-[2px] bg-teal4/50 shrink-0 mr-4'></div>
            <div className='w-full max-w-[1100px] text-3xl sm:text-4xl flex justify-start text-start text-black font-normal'>
                Roles & Highlights
            </div>

        </div>
        
        {/* SECTION BODY: INDIVIDUAL ROLE CARDS */}

          <JobTitleCard bgColor={"#5C8E5C"} alignment={'left'} title={"Vocal Contractor"} tag={"vocal-contractor"} description={"Edie organizes custom groups of singers for any and all styles of music; from pop to classical, gospel to gregorian chant. Her deep connection to the vast network of incredible session singers that Los Angeles has to offer to ensure every choir is perfectly tailored for every project."} image={vocalContracting} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'center'}/>
          <JobTitleCard bgColor={"#BB602F"} alignment={'right'} title={"Vocalist"} tag={"vocalist"} description={"Edie's vocals have been featured on best selling albums and live on tour with some of the top artists of all time. Her voice has also contributed to the scores & soundtracks of hundreds of movies, TV shows, and video games."} image={singing} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'left-top'}/>
          <JobTitleCard bgColor={"#45848A"} alignment={'left'} title={"Conductor"} tag={"conductor"} description={"Edie has conducted for dozens of blockbuster films, from small groups to choirs of more than 80 people. She also conducts for live events and has worked in some of the most prestigious venues in Los Angeles, including Disney Hall and the Hollywood Bowl."} image={conducting} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'left'}/>
          <JobTitleCard bgColor={"#D2AD2B"} alignment={'right'} title={"Vocal Coach"} tag={"vocal-coach"} description={"Edie teaches vocal technique and exercises she has mastered over her career to coach actors and singers alike, ensuring their voices are at their best for every performance."} image={vocalCoaching} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'center'}/>
          <JobTitleCard bgColor={"#6EB7B4"} alignment={'left'} title={"Musician"} tag={"musician"} description={"A deep knowledge of music theory and excellent piano technique have seen Edie's musicianship featured on multiple albums and soundtracks."} image={musician} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'left-bottom'}/>
          <JobTitleCard bgColor={"#A1432A"} alignment={'right'} title={"Arranger"} tag={"arranger"} description={"Edie has created vocal arrangements for all types of media; from chart-topping pop songs, to live performances on American Idol & The Voice, and even choral parts for film music, her arrangements c"} image={arranger} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'right'}/>
    </div>
  )
}
