import React from 'react'

import MediaGrid from "@/components/Credits/MediaGrid";
import { FeaturedMedia } from '@/data/creditMedia';

export default function LiveMediaPage() {
  return (
    <div>
        <div className='text-5xl mb-6 p-4 px-6 font-bold text-black  rounded-lg'>
          Live
        </div>

        <MediaGrid data={FeaturedMedia.Live} />
    </div>
  )
}
