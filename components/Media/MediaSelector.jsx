import React from 'react'

export default function MediaSelector({selectedMediaType, handleUpdateSelectedMediaType}) {

    //  rounded-xl
    // <button onClick={() => handleUpdateSelectedMediaType('images')} className='h-[80px] flex flex-col items-center justify-center p-4 border-r border-black rounded-l-xl hover:text-4xl duration-150' style={{backgroundColor: selectedMediaType === 'images' ? 'rgb(86 102 50)' : '#A8A8A1', width: selectedMediaType === 'images' ? '160px' : '120px'}}></button>

  return (
    <div id="media-selector" className="flex flex-row justify-center items-center text-3xl sm:mt-16 border-b mobileLandscape:border-0 sm:border-t sm:border-x border-black text-light7 sm:mx-2 w-full sm:w-auto z-10">

          {/* IMAGES BUTTON */}
          <button onClick={() => handleUpdateSelectedMediaType('images')} className={`h-[80px] flex flex-col items-center justify-center p-4 border-r border-black hover:text-4xl transform duration-150`} style={{backgroundColor: selectedMediaType === 'images' ? '#566632' : 'transparent', color: selectedMediaType === 'images' ? '#f8f8f1' : 'black', width: selectedMediaType === 'images' ? '160px' : '120px'}}>
              <i className='flaticon-image-gallery-1'></i>
              <div className='text-lg'>Images</div>
          </button>

          {/* VIDEOS BUTTON */}
          <button onClick={() => handleUpdateSelectedMediaType('videos')} className='h-[80px] flex flex-col items-center justify-center p-4 border-r border-black bg-terracotta hover:text-4xl transform duration-150' style={{backgroundColor: selectedMediaType === 'videos' ? 'rgb(163 71 38)' : 'transparent', color: selectedMediaType === 'videos' ? '#f8f8f1' : 'black', width: selectedMediaType === 'videos' ? '160px' : '120px'}}>
              <i className='flaticon-youtube'></i>
              <div className='text-lg'>Videos</div>
          </button>

          {/* AUDIO BUTTON */}
          <button onClick={() => handleUpdateSelectedMediaType('audio')} className='h-[80px] flex flex-col items-center justify-center p-4 bg-teal2 hover:text-4xl transform duration-150' style={{backgroundColor: selectedMediaType === 'audio' ? 'rgb(62 132 131)' : 'transparent', color: selectedMediaType === 'audio' ? '#f8f8f1' : 'black', width: selectedMediaType === 'audio' ? '160px' : '120px'}}>
              <i className='flaticon-microphone-1'></i>
              <div className='text-lg'>Audio</div>
          </button>
      </div>
  )
}


// UNDERLINES FOR SELECTED CATEGORY
//  style={{textDecoration: selectedMediaType === 'videos' ? 'underline' : 'none'}}
