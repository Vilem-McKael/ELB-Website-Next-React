import React from 'react'

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

          <JobTitleCard bgColor={"#5C8E5C"} alignment={'left'} title={"Vocal Contractor"} tag={"vocal-contractor"} description={"Edie organizes custom groups of singers for any and all styles of music; from pop to classical, gospel to gregorian chant. She harnesses the talent of the vast network of session singers that Los Angeles has to offer, ensuring that every choir is perfectly tailored for the project at hand."} image={'/edieImages/Angélique Kidjo.jpg'} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'center'}/>
          <JobTitleCard bgColor={"#BB602F"} alignment={'right'} title={"Vocalist"} tag={"vocalist"} description={"Edie's vocals have been featured on best selling albums and live on tour with some of the top artists of all time. Her voice has also contributed to the scores & soundtracks of hundreds of movies, TV shows, and video games."} image={'/edieImages/elb&giorgio.png'} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'left-top'}/>
          <JobTitleCard bgColor={"#45848A"} alignment={'left'} title={"Conductor"} tag={"conductor"} description={"Edie has conducted for dozens of blockbuster films, from small groups to choirs of more than 80 people. She also conducts for live events and has worked in some of the most prestigious venues in Los Angeles, including Disney Hall and the Hollywood Bowl."} image={'/edieImages/Disney Hall 2sfh.6.14.13_1227.jpg'} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'left'}/>
          <JobTitleCard bgColor={"#D2AD2B"} alignment={'right'} title={"Vocal Coach"} tag={"vocal-coach"} description={"Edie teaches vocal technique and exercises she has mastered over her career to coach actors and singers alike, ensuring their voices are at their best for every performance."} image={'/edieImages/edie13.jpeg'} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'center'}/>
          <JobTitleCard bgColor={"#6EB7B4"} alignment={'left'} title={"Musician"} tag={"musician"} description={"A deep knowledge of music theory and excellent piano technique have seen Edie's musicianship featured on multiple albums, soundtracks, and as a part of many live performances. Her playing additionally landed her a role on the hit soap opera General Hospital."} image={'/edieImages/ELB The Voice Piano.jpeg'} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'left-bottom'}/>
          <JobTitleCard bgColor={"#A1432A"} alignment={'right'} title={"Arranger"} tag={"arranger"} description={"From chart-topping pop songs, to live performances on American Idol & The Voice, and even choral parts for film music, Edie can write the perfect arrangement for any kind of music."} image={'/edieImages/arrangerDraft1.png'} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} imageOrigin={'right'}/>
    </div>
  )
}
