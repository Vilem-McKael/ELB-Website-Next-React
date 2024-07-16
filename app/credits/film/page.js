import MediaGrid from "@/components/Credits/MediaGrid";
import { FeaturedMedia } from "@/data/creditMedia";

export default function FilmMediaPage() {
  return (
    <div>
      <div className='text-5xl mb-6 p-4 px-6 font-bold text-black  rounded-lg'>
            Film
        </div>

        <MediaGrid data={FeaturedMedia.Film} />
    </div>
  );
};