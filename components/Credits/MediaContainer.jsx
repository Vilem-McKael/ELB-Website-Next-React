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

export default function MediaContainer({title, img, roles, notes, index}) {
  return (
    <div className='flex flex-col justify-start items-center w-[300px] h-[480px] text-wrap text-center'>

      {/* TITLE */}
      <div className='h-full max-h-[120px] w-full text-3xl text-light7 flex items-center justify-center p-2 font-zilla font-bold italic rounded-t-xl' style={{background: colors[index % 7], textShadow: '1px 2px 2px #000000'}}>
          {title}
      </div>

      {/* IMAGE */}
      <img src={img} className='w-[300px] h-[300px] object-cover'/>
        
      {/* ROLES WORKED */}
      <div className='h-[60px] w-full text-md flex font-barlow justify-center items-center text-light7 italic p-1 rounded-b-xl' style={{background: colors[index % 7], textShadow: '1px 1px 1px #000000'}}>
        {roles.length ? 
        roles.map((role, index) =>
          <div key={index}>{index === roles.length - 1 ? role : role + '\u00A0\u00A0' + '||' + '\u00A0\u00A0'}</div>
        )
        :
        <></>
        }
      </div>

    </div>
  )
}
