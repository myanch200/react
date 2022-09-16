import { useState } from 'react'

import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <main className="App">
      <Info/>
      <About />
      <Interests />
      <Footer />
    </main>
  )
}

export default App
