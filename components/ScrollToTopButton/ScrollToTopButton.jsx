import classNames from 'classnames'
import React from 'react'

export default function ScrollToTopButton(isShowingScrollToTop) {

    const handleOnClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const doNothing = () => {
        return
    }

  return (
    <div className='fixed bottom-4 right-4'>
        <div className={classNames(
            'bg-teal4 text-light7 flex items-center justify-center h-[45px] w-[45px] pl-[6px] pb-[2px] rounded-full transition-opacity ease-in-out transform duration-300 ',
            {
                'opacity-100 visible scale-100 pointer-events-auto': isShowingScrollToTop,
                'opacity-0 invisible scale-95 pointer-events-none' : !isShowingScrollToTop
            }
        )}
        onClick={isShowingScrollToTop ? handleOnClick : doNothing}>
            <i className='flaticon-right-arrow rotate-[-90deg] text-xl' />
        </div>
    </div>
  )
}
