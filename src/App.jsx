// REACT IMPORTS
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// PAGES
import Home from '@/pages/Home'

// UTILS
import ScrollToTop from '@/utils/ScrollToTop'
import Layout from '@/containers/Layout/Layout'
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

const lightTheme = {
  colors: {
    navbar:'#fff',
    navbarText:'#0e1217',
    tag: 'light',
    bg: '#fff',
    text: '#333',
    grey: '#aaa',
  },
  fontSize: '16px',
  tag: 'light',
};

const darkTheme = {
  colors: {
    navbar:'#0e1217',
    navbarText:'#fff',
    bg: '#333',
    text: '#fff',
    grey: '#555',
  },
  fontSize: '16px',
  tag: 'dark',
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
            <Route index element={<Home />} />
            {/* <Route path="search" element={<Search />} /> */}
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
