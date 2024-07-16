import MediaGrid from "@/components/Credits/MediaGrid";
import { FeaturedMedia } from "@/data/creditMedia";

export default function ComposersMediaPage() {
  return (
    <div>
        <div className='text-5xl mb-6 p-4 px-6 font-bold text-black  rounded-lg'>
            Composers
        </div>

        <MediaGrid data={FeaturedMedia.Composers} />
    </div>
  );
};