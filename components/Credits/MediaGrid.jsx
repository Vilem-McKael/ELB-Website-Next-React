import React, { useState } from 'react'
import MediaContainer from './MediaContainer'
import MediaContainer2 from './MediaContainer2'
import MediaContainer3 from './MediaContainer3'
import MediaContainer4 from './MediaContainer4'
import MediaContainer5 from './MediaContainer5'
import NewMediaContainer from './NewMediaContainer'

export default function MediaGrid({data}) {

    const [creditData, setCreditData] = useState(data)

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start-center gap-[4px]'>
        {typeof data === "object" && data.length > 0 ? 
          data.map((dataItem, index) => (
            <div className='mb-2'>
            <NewMediaContainer key={index} image={dataItem.img} title={dataItem.title} roles={dataItem.roles} work={dataItem.notes} index={index}/>
            </div>
          ))
          
          :
          <>
          </>
        }

        {/* <MediaContainer key={index} title={dataItem.title} img={dataItem.img} roles={dataItem.roles} notes={dataItem.notes} index={index}/> */}
    </div>
  )
}
