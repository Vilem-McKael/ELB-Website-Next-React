import MediaGrid from "@/components/Credits/MediaGrid";
import { FeaturedMedia } from "@/data/creditMedia";

export default function TVCreditPage() {
  return (
    <div>
        <div className='text-5xl mb-6 p-4 px-6 font-bold text-black text-center rounded-lg'>
            TV
        </div>

        <MediaGrid data={FeaturedMedia.TV}/>
    </div>
  );
};