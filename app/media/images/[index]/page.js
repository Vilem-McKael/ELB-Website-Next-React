'use client';

import MediaSelector from "@/components/Media/MediaSelector2";
import ImageViewer from "@/components/Media/Images/ImageViewer";
import ImageList from "@/components/Media/Images/ImageList";
import { useEffect, useState } from "react";
import { edieImages } from "@/data/mediaData";

export default function ImagesPage({params}) {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    const updateSelectedImageIndex = (newIndex) => {
        setSelectedImageIndex(() => newIndex)
    }

    useEffect(() => {
        if (params.index && params.index < edieImages.length) {
            setSelectedImageIndex(() => params.index)
        }
    }, [])

  return (
    <div>
        <div className='flex flex-col items-center w-full h-full min-h-screen max-w-[1000px]'>
            <MediaSelector/>

            <ImageViewer imgIndex={selectedImageIndex} updateSelectedImageIndex={updateSelectedImageIndex}/>

            <ImageList updateSelectedImageIndex={updateSelectedImageIndex}/>

        </div>
    </div>
  );
};