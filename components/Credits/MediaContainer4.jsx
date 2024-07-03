import React from 'react'

const colors = [
  'rgb(210, 48, 28, 0.7)',
  'rgb(187, 96, 47, 0.7)',
  'rgb(204, 157, 32, 0.7)',
  'rgb(86, 102, 50, 0.7)',
  'rgb(86, 162, 154, 0.7)',
  'rgb(82, 102, 147, 0.7)',
  'rgb(46, 37, 75, 0.7)'
]

export default function MediaContainer4({title, img, roles, notes, index}) {
  return (
    <div className='flex flex-col justify-start items-center w-[300px] h-[420px] text-wrap text-center'>

      {/* TITLE */}
      

      {/* IMAGE */}
      <img src={img} className='w-[300px] h-[300px] shrink-0 object-cover rounded-t-xl border-x border-t border-black'/>

      <div className='h-[180px] w-full flex flex-col items-center justify-between rounded-b-xl' style={{background: colors[index % 7]}}>
        <div className='h-[80px] w-full text-3xl text-light7 flex flex-col items-center justify-center p-2 font-zilla font-bold italic' style={{textShadow: '1px 2px 2px #000000'}}>
            <div>{title}</div>
            <div className='text-base font-barlow'>{notes}</div>
        </div>
            
        {/* ROLES WORKED */}
        <div className='h-[40px] w-full text-md flex font-barlow justify-center items-center text-light7 italic p-4 text-wrap' style={{textShadow: '1px 1px 1px #000000'}}>

                {roles.length ? 
                roles.map((role, index) =>
                <div key={index}>{index === roles.length - 1 ? role : role + '\u00A0\u00A0' + '||' + '\u00A0\u00A0'}</div>
                )
                :
                <></>
                }
        </div>

      </div>

    </div>
  )
}
