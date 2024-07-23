import MediaGrid from "@/components/Credits/MediaGrid";
import { FeaturedMedia } from "@/data/creditMedia";

export default function ComposersCreditPage() {
  return (
    <div>
        <div className='text-5xl mb-6 p-4 px-6 font-bold text-black text-center rounded-lg'>
            Composers
        </div>

        <MediaGrid data={FeaturedMedia.Composers} />
    </div>
  );
};