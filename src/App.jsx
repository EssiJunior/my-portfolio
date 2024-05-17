// REACT COMPONENTS IMPORTS
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Worker } from '@react-pdf-viewer/core';

// PAGES
import Home from '@/pages/Home'
import Experience from '@/pages/Experience';
import InProgress from '@/pages/InProgress';
import Contact from '@/pages/Contact';
import Resume from '@/pages/Resume';
import NotFound from '@/pages/NotFound';
import Projects from '@/pages/Projects';

// CUSTOMIZED CONTAINERS
import Layout from '@/containers/Layout/Layout'

// UTILS
import { ScrollToTop } from '@/utils/Scroll';
import { darkTheme, lightTheme } from '@/utils/theme';


function App() {
  // Utility refs
  const skillsRef = useRef()
  const languageRef = useRef()
  const educationRef = useRef()

  // Theme state
  const [theme, setTheme] = useState(lightTheme);

  // Theme toggler
  const toggleTheme = () => {
    console.log(theme.tag)
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Navigate to="/notfound" replace />} />
          <Route path="/notfound" element={<NotFound />}></Route>
          <Route path="/" element={<Layout themeToggler={toggleTheme} theme={theme} languageRef={languageRef} skillsRef={skillsRef} educationRef={educationRef}   />}>
            <Route index element={<Home theme={theme} skillsRef={skillsRef} educationRef={educationRef} />} />
            <Route path="experience" element={<Experience theme={theme} />} />
            <Route path="about" element={<InProgress theme={theme} />} />
            <Route path="contact" element={<Contact theme={theme} />} />
            <Route path="projects" element={<Projects theme={theme} />} />
            <Route path="resume" element={<Resume theme={theme} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
    </ThemeProvider>
  )
}

export default App
