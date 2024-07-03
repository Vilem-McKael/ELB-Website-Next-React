import React from 'react'

const colors = [
  'rgb(193, 61, 28, 0.7)',
  'rgb(187, 96, 47, 0.7)',
  'rgb(204, 157, 32, 0.7)',
  'rgb(86, 102, 50, 0.7)',
  'rgb(86, 162, 154, 0.7)',
  'rgb(82, 102, 147, 0.7)',
  'rgb(46, 37, 75, 0.7)'
]

export default function MediaContainer3({title, img, roles, notes, index}) {
  return (
    <div className='flex flex-col justify-start items-center w-[300px] h-[420px] text-wrap text-center'>

      {/* TITLE */}
      
      <div className='h-full max-h-[120px] w-full text-light7 flex flex-col items-center justify-center p-2 font-zilla font-bold italic rounded-t-xl bg-black'>
        <div className='text-3xl' style={{textShadow: '1px 2px 2px #000000'}}>
            {title}
        </div>
        {/* ROLES WORKED */}
        <div className='w-full text-md font-medium flex font-barlow justify-center items-center italic p-1 rounded-b-xl' style={{background: '#000000', textShadow: '1px 1px 1px #000000'}}>
            {roles.length ? 
            roles.map((role, index) =>
            <div className='text-md' key={index}>{index === roles.length - 1 ? role : role + '\u00A0\u00A0' + '||' + '\u00A0\u00A0'}</div>
            )
            :
            <></>
            }
        </div>
      </div>

      {/* IMAGE */}
      <img src={img} className='w-[300px] h-[300px] object-cover rounded-b-xl border-x border-b border-black'/>
        
      

    </div>
  )
}
