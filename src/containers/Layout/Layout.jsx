import React, { useRef } from 'react'

import { Outlet } from 'react-router-dom'

// Page style
import './layout.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../../components/BackToTop/BackToTop.jsx'

const Layout = ({themeToggler, theme, languageRef, skillsRef,  educationRef}) => {
    // console.log(languageRef)
    // console.log(skillsRef)
    // console.log(educationRef)
    return (
        <>
            <section className='layout' >
                <BackToTop theme={theme}/>

                <Navbar themeToggler={themeToggler} theme={theme} languageRef={languageRef} skillsRef={skillsRef} educationRef={educationRef} />
                <Outlet className='outlet'/>
                <Footer theme={theme} languageRef={languageRef} />
            </section>
        </>
    )
}

export default Layout