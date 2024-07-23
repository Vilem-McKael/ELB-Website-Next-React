'use client'

import MediaSelector2 from "@/components/Media/MediaSelector2";
import AudioViewer from "@/components/Media/Audio/AudioViewer";
import AudioList from "@/components/Media/Audio/AudioList";
import Footer from "@/components/Footer/Footer";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function AudioPage() {

  const params = useParams()

  const [selectedAudioIndex, setSelectedAudioIndex] = useState(0)
  const [timeDisplay, setTimeDisplay] = useState('0:00')
  const [player, setPlayer] = useState(null)

  const updateSelectedAudioIndex = (newVal) => {
    setSelectedAudioIndex(() => newVal)
  }

  const handleSetPlayer = (newPlayer) => {
    setPlayer(() => newPlayer)
  }

  const handleSetTimeDisplay = (newVal) => {
    setTimeDisplay(() => newVal)
  }
  
  useEffect(() => {

    return () => {
      setPlayer(null)
      Howler.stop();
    }
  }, [])

  return (
    <>
      <div className='flex flex-col items-center'>
        <MediaSelector2 />
        <AudioViewer selectedAudioIndex={selectedAudioIndex} updateSelectedAudioIndex={updateSelectedAudioIndex} player={player} handleSetPlayer={handleSetPlayer} timeDisplay={timeDisplay} handleSetTimeDisplay={handleSetTimeDisplay}/>
        {/* key={selectedAudioIndex}  */}
        {/* <MediaSelector handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} /> */}
        <AudioList updateSelectedAudioIndex={updateSelectedAudioIndex} player={player} handleSetPlayer={handleSetPlayer} handleSetTimeDisplay={handleSetTimeDisplay} />
      </div>
      <Footer />
    </>
  );
};