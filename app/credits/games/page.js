import MediaGrid from "@/components/Credits/MediaGrid";
import { FeaturedMedia } from "@/data/creditMedia";

export default function GamesCreditPage() {
  return (
    <div>
        <div className='text-5xl mb-6 p-4 px-6 font-bold text-black text-center  rounded-lg'>
            Games
        </div>

        <MediaGrid data={FeaturedMedia.Games} />
    </div>
  );
};