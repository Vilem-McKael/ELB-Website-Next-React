'use client';

import MediaSelector from "@/components/Media/MediaSelector2";
import ImageViewer from "@/components/Media/Images/ImageViewer";
import ImageList from "@/components/Media/Images/ImageList";
import { useState } from "react";

export default function ImagesPage() {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    const updateSelectedImageIndex = (newIndex) => {
        setSelectedImageIndex(() => newIndex)
    }

  return (
    <div>
        <div className='flex flex-col items-center w-full max-w-[1000px]'>
            <MediaSelector/>

            <ImageViewer imgIndex={selectedImageIndex} updateSelectedImageIndex={updateSelectedImageIndex}/>

            <ImageList updateSelectedImageIndex={updateSelectedImageIndex}/>

        </div>
    </div>
  );
};