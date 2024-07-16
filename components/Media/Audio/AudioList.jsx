import React, { useCallback } from 'react'
import { audioData } from '../../../data/mediaData'
import { HashLink } from 'react-router-hash-link'

export default function AudioList({updateSelectedAudioIndex, player, handleSetPlayer, handleSetTimeDisplay}) {

    const handleOnClick = useCallback((index) => {
        if (player) {
            player.stop()
            handleSetPlayer(null)
        }
        updateSelectedAudioIndex(index)
        handleSetTimeDisplay('0:00')
    }, [])

  return (
    <table className='h-full w-full font-barlow justify-start sm:w-[640px] lg:w-[1000px] border-t mt-16 border-black'>
        <tbody>

        {/* AUDIO DATA MAP */}
        {audioData.map((audio, index) => {
            return <tr className='w-full h-full cursor-pointer text-lg sm:text-sm sm:text-md border-b border-black hover:bg-black/10' key={index} onClick={() => handleOnClick(index)}>
                <HashLink smooth to={'#media-top'} className='flex flex-col items-center text-center sm:flex-row w-full h-full'>
                {/* TITLE */}
                <td className='p-2 w-full sm:text-lg font-semibold sm:w-[160px]'>
                    {audio.title}
                </td>

                {/* ARTIST */}
                <td className='p-2 w-full sm:w-[160px]'>
                    {audio.artist}
                </td>

                {/* ALBUM */}
                <td className='p-2 w-full sm:w-[160px]'>
                    {audio.album}
                </td>

                {/* DESCRIPTION */}
                <td className='p-2 text-xs sm:text-sm w-full sm:w-[300px]'>
                    {audio.description}
                </td>
                </HashLink>
            </tr>
        })}
        </tbody>
    </table>
  )
}
