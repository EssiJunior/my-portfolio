// REACT COMPONENTS IMPORTS
import { useState, useEffect, useRef } from 'react';
import { cancelFrame, frame } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from 'styled-components';
import { Worker } from '@react-pdf-viewer/core';

// CUSTOMISED COMPONENT
import AnimatedRoutes from '@/containers/AnimatedRoutes';

// UTILS
import { darkTheme, lightTheme } from '@/utils/theme';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    function update(data) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AnimatedRoutes toggle={toggleTheme} />
      </BrowserRouter>

      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
    </ThemeProvider>
  )
}

export default App
