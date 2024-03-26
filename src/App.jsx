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

const lightTheme = {
  colors: {
    navbar:'#fff',
    navbarText:'#0e1217',
    footer:'#11998e',
    bg: '#F2F2F2',
    text: '#333',
    grey: '#aaa',
  },
  hero:{
    gradient:'primary-gradient'
  },
  experience:{
    cardBackground:'#078a65',
    cardDot:'#11998e',
  },
  skills:{
    divider:'via-secondary',
  },
  contact:{
    bg:'contact-bloc',
    bgPage:'contact-bloc-contact',
  },
  fontSize: '16px',
  tag: 'light',
  global: {
    subHeading: 'text-secondary',
    headingBox: 'bg-secondary',
  }
};

const darkTheme = {
  colors: {
    navbar:'#0e1217',
    navbarText:'#fff',
    footer:'#111111',
    bg: '#171717',
    text: '#fff',
    grey: '#555',
  },
  hero:{
    gradient:'black-gradient'
  },
  experience:{
    cardBackground:'#11998e',
    cardDot:'#078a65',
  },
  skills:{
    divider:'via-primary',
  },
  contact:{
    bg:'contact-bloc-dark',
    bgPage:'contact-bloc-contact-dark',
  },
  fontSize: '16px',
  tag: 'dark',
  global: {
    subHeading: 'text-primary',
    headingBox: 'bg-primary',
  }
};

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
