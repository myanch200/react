import React, { useState } from 'react'
import NavBar from './components/NavBar'
import HeroComponent from './components/HeroComponent'
import Card from './components/Card'
function App() {

  return (
    <React.Fragment>
        <NavBar />
        <main>

        <HeroComponent />
        <Card />
        </main>

    </ React.Fragment>
  )
}

export default App
