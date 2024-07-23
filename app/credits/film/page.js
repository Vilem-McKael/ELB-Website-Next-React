import MediaGrid from "@/components/Credits/MediaGrid";
import { FeaturedMedia } from "@/data/creditMedia";

export default function FilmCreditPage() {
  return (
    <div>
      <div className='text-5xl mb-6 p-4 px-6 font-bold text-black text-center rounded-lg'>
            Film
        </div>

        <MediaGrid data={FeaturedMedia.Film} />
    </div>
  );
};