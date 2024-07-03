import React from 'react'
import CompanyCard from './CompanyCard'

export default function StudioCollaborations() {
  return (
    <div id='studio-collaborations' className='w-full flex flex-col items-center bg-searchlights bg-cover bg-center'>

        {/* SECTION TITLE: STUDIO COLLABORATIONS */}
        <div className='sticky top-[80px] mobileLandscape:top-0 sm:top-[150px] flex py-4 px-4 sm:px-16 w-full items-center justify-center border-b-[8px] border-gold bg-light7 h-full'>
            <div className='h-[20px] w-[20px] rounded-full border-gold border-[2px] bg-gold/50 shrink-0 mr-4'></div>
            <div className='w-full max-w-[1100px] text-3xl sm:text-4xl flex justify-start text-start text-black font-normal'>
                Studio Collaborations
            </div>
        </div>
        <div className='bg-light7/90 bg-opacity-[93%] w-full h-full flex flex-col items-center'>
        {/* LIST OF STUDIOS COLLABORATED WITH */}
          <div className='grid grid-cols-3 sm:grid-cols-4 py-16 w-full md:w-[800px] xl:w-[1100px] gap-y-8'>
              <CompanyCard img={'/studioLogos/netflix2.png'}>Netflix</CompanyCard>
              <CompanyCard img={'/studioLogos/hbo.png'}>HBO</CompanyCard>
              <CompanyCard img={'/studioLogos/activisionBlizzard.png'}>Activision/Blizzard</CompanyCard>
              <CompanyCard img={'/studioLogos/waltDisneyPictures3.png'}>Walt Disney Studios</CompanyCard>
              <CompanyCard img={'/studioLogos/epicGames.png'}>Epic Games</CompanyCard>
              <CompanyCard img={'/studioLogos/warnerBros.png'}>Warner Bros.</CompanyCard>
              <CompanyCard img={'/studioLogos/20thCenturyFox.png'}>20th Century Fox</CompanyCard>
              <CompanyCard img={'/studioLogos/sonyPictures.png'}>Sony Pictures</CompanyCard>
              <CompanyCard img={'/studioLogos/paramountPictures.png'}>Paramount Pictures</CompanyCard>
              <CompanyCard img={'/studioLogos/universalPictures.png'}>Universal Pictures</CompanyCard>
              <CompanyCard img={'/studioLogos/lionsgate.png'}>Lionsgate</CompanyCard>
              <CompanyCard img={'/studioLogos/mgmStudios.png'}>MGM Studios</CompanyCard>
              {/* <CompanyCard>New Line Cinema?</CompanyCard> */}
              <CompanyCard img={'/studioLogos/dreamworks3.png'}>DreamWorks Animation</CompanyCard>
              <CompanyCard img={'/studioLogos/pixar2.png'}>Pixar Studios</CompanyCard>
              <CompanyCard img={'/studioLogos/miramax.webp'}>Miramax Films</CompanyCard>
              <CompanyCard img={'/studioLogos/lucasfilm2.png'}>Lucasfilm</CompanyCard>
              <CompanyCard img={'/studioLogos/marvel.png'}>Marvel Studios</CompanyCard>
              <CompanyCard img={'/studioLogos/formosaGroup.png'}>Formosa Group</CompanyCard>
              <CompanyCard img={'/studioLogos/appleTvPlus.png'}>AppleTV+</CompanyCard>
              <CompanyCard img={'/studioLogos/hannaBarbera.webp'}>Hanna-Barbera</CompanyCard>
              <CompanyCard img={'/studioLogos/studioCanal.png'}>Le Studio Canal</CompanyCard>
              <CompanyCard img={'/studioLogos/dcLogo.png'}>DC Studios</CompanyCard>

          </div>
        </div>
    </div>
  )
}
