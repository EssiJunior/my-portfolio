// REACT IMPORTS
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// PAGES
import Home from '@/pages/Home'

// UTILS
import ScrollToTop from '@/utils/ScrollToTop'
import Layout from '@/containers/Layout/Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="search" element={<Search />} /> */}
            {/* <Route path="product/:id" element={<SingleProduct />} /> */}
            {/* <Route path="cart" element={<Cart />} /> */}
            {/* <Route path="checkout" element={<Checkout />} /> */}
            {/* <Route path="signup" element={<Signup />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
