// REACT COMPONENTS IMPORTS
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

// CONTAINERS
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

// COMPONENTS
import BackToTop from '@/components/BackToTop/BackToTop.jsx'

// UTILS
import { themeProps } from '@/utils/prop-types.js'

const Layout = memo(function Layout({themeToggler, languageRef, skillsRef,  educationRef}) {
    
    return (
        <>
            <section className='w-full h-full relative' >
                <BackToTop />

                <Navbar themeToggler={themeToggler} languageRef={languageRef} skillsRef={skillsRef} educationRef={educationRef} />
                <Outlet className='outlet'/>
                <Footer languageRef={languageRef} />
            </section>
        </>
    )
})

Layout.propTypes = themeProps
export default Layout