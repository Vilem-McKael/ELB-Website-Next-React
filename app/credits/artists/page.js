import { FeaturedMedia } from "@/data/creditMedia";
import MediaGrid from "@/components/Credits/MediaGrid";

export default function ArtistsCreditPage() {
  return (
    <div>
        <div className='text-5xl mb-6 p-4 px-6 font-bold text-black text-center rounded-lg'>
            Artists
        </div>

        <MediaGrid data={FeaturedMedia.Artists} />
    </div>
  );
};