// REACT IMPORTS
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

// ROUTING CONTAINER
import App from './App.jsx'

// GLOBAL APP STYLE
import './index.scss'

// const helmetContext = {};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelmetProvider context={helmetContext}> */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
