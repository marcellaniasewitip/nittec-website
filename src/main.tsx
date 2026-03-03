// Inside src/main.tsx or your main entry file
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App' // or Index

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ADD THE BASENAME HERE */}
    <BrowserRouter basename="/nittec-website">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)