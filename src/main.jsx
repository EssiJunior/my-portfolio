// REACT IMPORTS
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

// REACT PLUGIN STYLE
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "react-vertical-timeline-component/style.min.css";

// ROUTING CONTAINER
import App from './App.jsx'

// GLOBAL APP STYLE
import './index.css'

const helmetContext = {};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
