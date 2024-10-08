import React from 'react'
import NewMediaContainer from './NewMediaContainer'

export default function MediaGrid({data}) {

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start-center gap-[4px]'>
        {typeof data === "object" && data.length > 0 ? 
          data.map((dataItem, index) => (

            <div key={index} className='mb-2'>
              <NewMediaContainer image={dataItem.img} title={dataItem.title} roles={dataItem.roles} work={dataItem.notes} index={index}/>
            </div>
          ))
          
          :
          <>
          </>
        }

    </div>
  )
}
