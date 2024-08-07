import React from 'react';
import {SpeedInsights} from '@vercel/speed-insights';

import { CreditCategory } from '../../data/creditMedia'
import Footer from '../../components/Footer/Footer'
import CategoryButton from '@/components/Credits/CategoryButton';

export const metadata = {
  title: "Edie Lehmann Boddicker - Credits",
  description: "A selected list of Edie Lehmann Boddicker's top credits",
  keywords: "edie lehmann boddicker credits, edie lehmann credits, edie lehmann boddicker movies, edie lehmann boddicker discography, edie lehmann discography"
};

export default function CreditsLayout({children}) {

  return (
    <div id="credits-top" className='flex flex-col w-full items-center'>
        
        {/* CREDIT CATEGORY SELECTOR */}
        <div className='grid grid-cols-3 md:flex items-center sm:flex-row w-full justify-center mt-8 gap-4 px-2 place-items-center'>
            <CategoryButton title={CreditCategory.Artists} bgColor={'#CC9D20'}/>
            <CategoryButton title={CreditCategory.Composers} bgColor={'#BB602F'}/>
            <CategoryButton title={CreditCategory.Film} bgColor={'#A34726'}/>
            <CategoryButton title={CreditCategory.TV} bgColor={'#566632'}/>
            <CategoryButton title={CreditCategory.Games} bgColor={'#526693'}/>
            <CategoryButton title={CreditCategory.Live} bgColor={'#2E254B'}/>
        </div>

        {children}
        <Footer />
    </div>
  )
}
