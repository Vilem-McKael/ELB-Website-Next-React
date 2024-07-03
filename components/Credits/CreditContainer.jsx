import React, { useEffect, useState } from 'react'



export default function CreditContainer({credit}) {

  return (
    <tr className='w-full h-[44px] border-b-[1px] sm:border-x-[1px] border-black/80 text-wrap'>

        {/* MEDIA TYPE */}
        <td className='w-auto sm:w-[200px] sm:p-2 border-r-[1px] border-r-black'>
            {credit.type ? credit.type : ""}
        </td>

        {/* TITLE */}
        <td className='w-auto sm:w-[400px] p-1 sm:p-2 border-r-[1px] border-r-black'>
            {credit.title ? credit.title : ""}
        </td>

        {/* ARTIST */}
        <td className='w-auto sm:w-[200px] sm:p-2 border-r-[1px] border-r-black'>
            {credit.artist ? credit.artist : ""}
        </td>

        {/* YEAR */}
        <td className='w-auto sm:w-[100px] sm:p-2 border-r-[1px] border-r-black'>
            {credit.year ? credit.year : ""}
        </td>

        {/* ROLES WORKED */}
        <td className='w-auto sm:w-[200px] p-1 sm:p-2 sm:border-r-[1px] border-r-black'>
            {credit.role.length > 0 && credit.role[0] !== "nan" ? credit.role.join(', ') : ""}
        </td>
        
    </tr>
  )
}
