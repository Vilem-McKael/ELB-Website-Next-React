import React from 'react'

export default function MediaLayout({children}) {
  return (
    <div className='flex flex-col items-center'>
      {children}
    </div>
  )
}
