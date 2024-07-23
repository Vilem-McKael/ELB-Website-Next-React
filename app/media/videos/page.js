'use client';

import { useState } from "react";

import MediaSelector from "@/components/Media/MediaSelector2";
import VideoViewer from "@/components/Media/Videos/VideoViewer";
import VideoList from "@/components/Media/Videos/VideoList";
import Footer from "@/components/Footer/Footer";

import { videoData } from "@/data/mediaData";

export default function VideosPage() {

    const [selectedVideo, setSelectedVideo] = useState(videoData[0])
    const [screenSize, setScreenSize] = useState('mobile')

    const updateSelectedVideo = (newIndex) => {
        setSelectedVideo(() => newIndex)
    }

  return (
    <>
        <MediaSelector />
        <VideoViewer selectedVideo={selectedVideo} screenSize={screenSize}/>
        {/* <MediaSelector handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} /> */}
        <VideoList updateSelectedVideo={updateSelectedVideo} />
        <Footer />
    </>
  );
};