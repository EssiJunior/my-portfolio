// REACT COMPONENTS IMPORTS
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

// PAGES
import Home from '@/pages/Home'
import Experience from '@/pages/Experience';
import InProgress from '@/pages/InProgress';

// CUSTOMIZED CONTAINERS
import Layout from '@/containers/Layout/Layout'

// UTILS
import { ScrollToTop } from '@/utils/Scroll';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { Worker } from '@react-pdf-viewer/core';
import { darkTheme, lightTheme } from './utils/theme';


function App() {
  const skillsRef = useRef()
  const languageRef = useRef()
  const educationRef = useRef()

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    console.log(theme.tag)
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout themeToggler={toggleTheme} theme={theme} languageRef={languageRef} skillsRef={skillsRef} educationRef={educationRef}   />}>
            <Route index element={<Home theme={theme} skillsRef={skillsRef} educationRef={educationRef} />} />
            <Route path="experience" element={<Experience theme={theme} />} />
            <Route path="about" element={<InProgress theme={theme} />} />
            <Route path="contact" element={<Contact theme={theme} />} />
            <Route path="projects" element={<InProgress theme={theme} />} />
            <Route path="resume" element={<Resume theme={theme} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
    </ThemeProvider>
  )
}

export default App
