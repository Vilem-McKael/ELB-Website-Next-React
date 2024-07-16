import React, {useCallback, useState} from 'react'
import ImageList from '../../components/Media/Images/ImageList'
import VideoList from '../../components/Media/Videos/VideoList'
import AudioList from '../../components/Media/Audio/AudioList'
import ImageViewer from '../../components/Media/Images/ImageViewer'
import VideoViewer from '../../components/Media/Videos/VideoViewer'
import AudioViewer from '../../components/Media/Audio/AudioViewer'
import Footer from '../../components/Footer/Footer'
import MediaSelector from '../../components/Media/MediaSelector'
import ImageFullScreen from '../../components/Media/Images/ImageFullScreen'

const defaultVideoParams = {
  title: "Edie Lehmann Boddicker - Pensado's Place",
  description: "The golden thread between LA LA Land, Star Wars, 30 Seconds to Mars, Harry Styles, Jimmy Fallon, X-Men, and more? Today's guest fills us in on the art of Session Singing and Vocal Contracting.",
  videoId: "NBTVF8ehlkw"
}

export default function MediaPage({screenSize, player, handleSetPlayer}) {

  const [selectedMediaType, setSelectedMediaType] = useState('images')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState(defaultVideoParams)
  const [selectedAudioIndex, setSelectedAudioIndex] = useState(0)

  const [isShowingAllImages, setIsShowingAllImages] = useState(false)
  const [isShowingImageFullScreen, setIsShowingImageFullScreen] = useState(false)

  const [timeDisplay, setTimeDisplay] = useState('0:00')

  const handleUpdateSelectedMediaType = (newMediaType) => {
    setSelectedMediaType(newMediaType)
    if (player) {
      player.stop()
      handleSetPlayer(null)
    }
  }

  const updateSelectedImageIndex = useCallback((imgIndex) => {
    setSelectedImageIndex(imgIndex)
  }, [])

  const updateSelectedVideo = useCallback((video) => {
    setSelectedVideo({...video})
  }, [])

  const updateSelectedAudioIndex = useCallback((audioIndex) => {
    setSelectedAudioIndex(audioIndex)
  }, [])

  const toggleIsShowingAllImages = () => {
    setIsShowingAllImages(!isShowingAllImages)
  }

  const updateIsShowingImageFullScreen = useCallback((bool) => {
    setIsShowingImageFullScreen(bool)
  }, [isShowingImageFullScreen])

  const handleSetTimeDisplay = useCallback((newTime) => {
    setTimeDisplay(newTime)
  }, [timeDisplay])

  return (
    <div className='flex w-full flex-col items-center'>
      <div id='media-top' className='h-0 w-0 invisible'></div>
      {/* <MediaSelector selectedMediaType={selectedMediaType} handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} /> */}
        <div className='w-full flex flex-col items-center font-barlow'>
            {selectedMediaType === 'images' ?
            <>
              {!isShowingImageFullScreen ?
                <>
                  <div className='flex flex-col items-center sm:w-[640px] md:w-[800px] lg:w-[1000px]'>
                    <MediaSelector selectedMediaType={selectedMediaType} handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} />
                    <ImageViewer imgIndex={selectedImageIndex} updateSelectedImageIndex={updateSelectedImageIndex} updateIsShowingImageFullScreen={updateIsShowingImageFullScreen}/>
                    <button className='w-[200px] hover:bg-black hover:text-light7 py-2 my-8 border-black border rounded-md' onClick={toggleIsShowingAllImages}>{isShowingAllImages ? 'Hide All' : 'Show All'}</button>
                    {isShowingAllImages ?
                      <ImageList updateSelectedImageIndex={updateSelectedImageIndex}/>
                      :
                      <></>
                    }
                    
                  </div>
                  <Footer />
                </>
                :
                <>
                  <ImageFullScreen imgIndex={selectedImageIndex} updateSelectedImageIndex={updateSelectedImageIndex} updateIsShowingImageFullScreen={updateIsShowingImageFullScreen}/>
                </>
              }
              
              </>
            :
            
            selectedMediaType === 'videos' ?
            <div className='flex flex-col items-center w-full'>
              <MediaSelector selectedMediaType={selectedMediaType} handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} />
              <VideoViewer selectedVideo={selectedVideo} screenSize={screenSize}/>
              {/* <MediaSelector handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} /> */}
              <VideoList updateSelectedVideo={updateSelectedVideo} />
              <Footer />
            </div>
            :
            <>
            <div className='flex flex-col items-center'>
              <MediaSelector selectedMediaType={selectedMediaType} handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} />
              <AudioViewer selectedAudioIndex={selectedAudioIndex} updateSelectedAudioIndex={updateSelectedAudioIndex} player={player} handleSetPlayer={handleSetPlayer} timeDisplay={timeDisplay} handleSetTimeDisplay={handleSetTimeDisplay}/>
              {/* key={selectedAudioIndex}  */}
              {/* <MediaSelector handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} /> */}
              <AudioList updateSelectedAudioIndex={updateSelectedAudioIndex} player={player} handleSetPlayer={handleSetPlayer} handleSetTimeDisplay={handleSetTimeDisplay} />
              

            </div>
            <Footer />
            </>
            }
          
        </div>
        {/* <div className='mt-16'></div> */}
    </div>
  )
}
