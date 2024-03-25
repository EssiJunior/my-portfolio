import React from 'react'

import { Outlet } from 'react-router-dom'

// Page style
import './layout.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({themeToggler, theme}) => {
    return (
        <>
            <section className='layout' >
                <Navbar themeToggler={themeToggler} theme={theme} />
                <Outlet className='outlet'/>
                <Footer theme={theme} />
            </section>
        </>
    )
}

export default Layout