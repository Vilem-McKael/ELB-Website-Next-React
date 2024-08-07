// 'use client';

import Loading from '@/public/loading/loading1.svg'

export default function LoadingPage() {

  return (
    <div className="h-screen w-screen bg-light7/50 flex flex-col items-center justify-center">
      <object type='image/svg+xml' data={<Loading />} className={'w-[64px] h-[64px]'}></object>
    </div>
  );
};