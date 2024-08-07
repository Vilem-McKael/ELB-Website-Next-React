'use client';

import React, {useState, useEffect, useCallback} from 'react'
import NavBar from './NavBar'
import BurgerBar from './BurgerBar'
import LandscapeMobileMenu from './LandscapeMobileMenu'
import MobileBurgerMenu from './MobileBurgerMenu'
import SlideOutMenu from '../SlideOutMenu/SlideOutMenu'

export default function UniversalNavbar() {

    // STATE

    const [isShowingSlideOutMenu, setIsShowingSlideOutMenu] = useState(false)
    const [screenSize, setScreenSize] = useState(null)


    // SCREEN SIZE CONSTANTS
    const burgerWidthBoundary = 800
    const mobileWidthBoundary = 640
    const mobileLandscapeHeightBoundary = 500

    const updateIsShowingSlideOutMenu = useCallback((bool) => {
        setIsShowingSlideOutMenu(bool)
    }, [])

    function closeSlideOutMenu() {
        if (isShowingSlideOutMenu) {
            setIsShowingSlideOutMenu(false)
        }
    }

    const checkScreenSize = useCallback(() => {
        const width = document.documentElement.clientWidth
        const height = document.documentElement.clientHeight
        // console.log("Window sizes: ", window.innerWidth, window.innerHeight)
        // console.log("CSS sizes: ", document.documentElement.clientWidth, document.documentElement.clientHeight)
        // console.log("Device pixel ratio: ", window.devicePixelRatio)
        // console.log("Effective css width: ", width / window.devicePixelRatio)
        if (height < mobileLandscapeHeightBoundary && screenSize != 'mobileLandscape') {
            setScreenSize('mobileLandscape')
        } else if (height >= mobileLandscapeHeightBoundary) {
            if (width > burgerWidthBoundary && screenSize != 'large') {
            setScreenSize('large')
            if (isShowingSlideOutMenu) {
                
                setIsShowingSlideOutMenu(false)
            }
            } else if (width <= burgerWidthBoundary && width > mobileWidthBoundary && height > mobileLandscapeHeightBoundary && screenSize != 'medium')  {
            setScreenSize('medium')
            } else if (width <= mobileWidthBoundary && screenSize != 'mobile') {
            setScreenSize('mobile')
            }
        }
    }, [burgerWidthBoundary, mobileWidthBoundary, mobileLandscapeHeightBoundary])

    useEffect(() => {

        const resizeListener = () => checkScreenSize()
        window.addEventListener('resize', resizeListener)
    
        checkScreenSize()
    
        return () => {
          window.removeEventListener('resize', resizeListener)
        }
      }, [checkScreenSize])

    const NavBarComponent = () => {

        switch(screenSize) {
          case 'large':
            closeSlideOutMenu()
            return <NavBar updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
          case 'medium':
            return <BurgerBar isShowingSlideOutMenu={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
          case 'mobileLandscape':
            return <LandscapeMobileMenu isShowingSlideOutMenu={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
          case 'mobile':
            return <MobileBurgerMenu isShowingSlideOutMenu={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
          default:
            return null
        }
       
      }

  return (
    <div className='bg-gradient-to-b from-light7 to-[#e1e1d7]'>
        <NavBarComponent />
        <SlideOutMenu isVisible={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} />
    </div>
  )
}
 