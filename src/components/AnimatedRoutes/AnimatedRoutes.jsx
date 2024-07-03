import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const AnimatedRoutes = () => {
    return (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="*" element={<Navigate to="/notfound" replace />} />
            <Route path="/notfound" element={<NotFound />}></Route>
            <Route path="/" element={<Layout themeToggler={toggleTheme} theme={theme} languageRef={languageRef} skillsRef={skillsRef} educationRef={educationRef}   />}>
              <Route index element={<Home theme={theme} skillsRef={skillsRef} educationRef={educationRef} />} />
              <Route path="experience" element={<Experience theme={theme} />} />
              <Route path="about" element={<About theme={theme} />} />
              <Route path="contact" element={<Contact theme={theme} />} />
              <Route path="projects" element={<Projects theme={theme} />} />
              <Route path="resume" element={<Resume theme={theme} />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default AnimatedRoutes