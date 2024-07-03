import React from 'react'
import WorkCard from './WorkCard'

export default function SelectedWorks({works}) {
  return (
    <div className='grid grid-cols-3 w-full sm:grid-cols-6 md:grid-cols-3 my-2 place-items-center'>
        <WorkCard image={works[0].image} title={works[0].title}/>
        <WorkCard image={works[1].image} title={works[1].title}/>
        <WorkCard image={works[2].image} title={works[2].title}/>
        <WorkCard image={works[3].image} title={works[3].title}/>
        <WorkCard image={works[4].image} title={works[4].title}/>
        <WorkCard image={works[5].image} title={works[5].title}/>
    </div>
  )
}
