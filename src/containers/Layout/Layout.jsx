import React from 'react'

import { Outlet } from 'react-router-dom'

// Page style
import './layout.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <>
            <section className='layout'>
                <Navbar  />
                <Outlet />
                <Footer />
            </section>
        </>
    )
}

export default Layout