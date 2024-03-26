import { useRef } from 'react'
import {useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const {pathname} = useLocation()
    useEffect(() => {
      window.scrollTo(0,0)
    }, [pathname])
}

const ScrollToRef = (ref) => ref.current.scrollIntoView()

// const ScrollToRef = ({ref}) => {

//   const executeScroll = () => ref.current.scrollIntoView()    
//   // run this function from an event handler or an effect to execute scroll 

//   return (
//     <> 
//       <div ref={myRef}>Element to scroll to</div> 
//       <button onClick={executeScroll}> Click to scroll </button> 
//     </>
//   )
// }

export { ScrollToTop, ScrollToRef}
