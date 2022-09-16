import React, { useState } from 'react'
import NavBar from './components/NavBar'
import HeroComponent from './components/HeroComponent'
import Card from './components/Card'
import data from './repository/data'
function App() {

  let cards = data.map(card => {
    return <Card key={card.id} item={card} />
  })
  return (
    <React.Fragment>
      <NavBar />
      <main>

        <HeroComponent />
        <section className="cards-list">
          {cards}
        </section>
      </main>

    </ React.Fragment>
  )
}

export default App
