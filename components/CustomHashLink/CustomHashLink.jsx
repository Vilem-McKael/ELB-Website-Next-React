import React from 'react'

export default function CustomHashLink({to, children}) {

    

  return (
    <a href={to} onClick={handleOnClick}>
        {children}
    </a>
  )
}
