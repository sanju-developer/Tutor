import React from 'react'
import './App.css'
import { Routing } from './Routes'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Routing />
    </ErrorBoundary>
  )
}

export default App
