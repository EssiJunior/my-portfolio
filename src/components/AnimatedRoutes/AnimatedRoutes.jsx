// REACT COMPONENTS IMPORTS
import { useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

// PAGES
import Home from '@/pages/Home'
import Experience from '@/pages/Experience';
import Contact from '@/pages/Contact';
import Resume from '@/pages/Resume';
import NotFound from '@/pages/NotFound';
import Projects from '@/pages/Projects';
import About from '@/pages/About';

// CUSTOMIZED CONTAINERS
import Layout from '@/containers/Layout/Layout'

// UTILS
import { toggleThemeProps } from '../../utils/prop-types';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = ({ toggle }) => {
    const location = useLocation()

    // Utility refs
    const skillsRef = useRef()
    const languageRef = useRef()
    const educationRef = useRef()

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="*" element={<Navigate to="/notfound" replace />} />
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path="/" element={<Layout themeToggler={toggle} languageRef={languageRef} skillsRef={skillsRef} educationRef={educationRef} />}>
                    <Route index element={<Home skillsRef={skillsRef} educationRef={educationRef} />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="resume" element={<Resume />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

AnimatedRoutes.propTypes = toggleThemeProps;
export default AnimatedRoutes