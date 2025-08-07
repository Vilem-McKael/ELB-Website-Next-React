'use client';

import MediaSelector from "@/components/Media/MediaSelector2";
import ImageViewer from "@/components/Media/Images/ImageViewer";
import ImageList from "@/components/Media/Images/ImageList";
import { useState } from "react";
import { createPortal } from "react-dom";
import ImageFullScreenModal from "@/components/Media/Images/ImageFullScreenModal";

export default function ImagesPage() {

    const [isShowingImageModal, setIsShowingImageModal] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    const updateSelectedImageIndex = (newIndex) => {
        setSelectedImageIndex(() => newIndex)
    }

    const toggleIsShowingImageModal = () => {
      setIsShowingImageModal((prev) => !prev)
    }

  return (
    <div>
        <div className='flex flex-col items-center h-full min-h-screen w-full max-w-[1000px]'>
            <MediaSelector/>

            {isShowingImageModal && 
            createPortal(<ImageFullScreenModal imgIndex={selectedImageIndex} updateSelectedImageIndex={updateSelectedImageIndex} toggleIsShowingImageModal={toggleIsShowingImageModal} />, document.body)
            }

            <ImageViewer 
              imgIndex={selectedImageIndex} 
              updateSelectedImageIndex={updateSelectedImageIndex} 
              toggleIsShowingImageModal={toggleIsShowingImageModal}
            />

            <ImageList updateSelectedImageIndex={updateSelectedImageIndex}/>

        </div>
    </div>
  );
};