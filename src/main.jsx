// Importing React
import { useState } from 'react'
import React from 'react'

import ReactDOM from 'react-dom/client'

// Importing Pages
import App from './App/App'

//* Importing Styles
import './root.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
