import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Router'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
