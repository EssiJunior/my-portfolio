// REACT COMPONENTS IMPORTS
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Worker } from '@react-pdf-viewer/core';

// CUSTOMISED COMPONENT
import AnimatedRoutes from '@/containers/AnimatedRoutes';

// UTILS
import { ScrollToTop } from '@/utils/Scroll';
import { darkTheme, lightTheme } from '@/utils/theme';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes toggle={toggleTheme} />
      </BrowserRouter>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
    </ThemeProvider>
  )
}

export default App
