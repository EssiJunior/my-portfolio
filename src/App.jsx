// REACT IMPORTS
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// PAGES
import Home from '@/pages/Home'

// UTILS
import ScrollToTop from '@/utils/ScrollToTop'
import Layout from '@/containers/Layout/Layout'
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import Experience from './pages/Experience';

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
  fontSize: '16px',
  tag: 'light',
  global: {
    subHeading: 'text-secondary',
    headingBox: 'secondary',
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
  fontSize: '16px',
  tag: 'dark',
  global: {
    subHeading: 'text-primary',
    headingBox: 'primary',
  }
};

function App() {
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
          <Route path="/" element={<Layout themeToggler={toggleTheme} theme={theme} />}>
            <Route index element={<Home theme={theme} />} />
            <Route path="experience" element={<Experience theme={theme} />} />
            {/* <Route path="product/:id" element={<SingleProduct />} /> */}
            {/* <Route path="cart" element={<Cart />} /> */}
            {/* <Route path="checkout" element={<Checkout />} /> */}
            {/* <Route path="signup" element={<Signup />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
