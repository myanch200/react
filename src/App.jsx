import React, { useState } from 'react'
import NavBar from './components/NavBar'
import HeroComponent from './components/HeroComponent'
function App() {

  return (
    <React.Fragment>
        <NavBar />
        <main>

        <HeroComponent />
        </main>

    </ React.Fragment>
  )
}

export default App
