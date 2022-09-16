import { useState } from 'react'
import Navbar from './components/Navbar'
import Location from './components/Location'
import locations from './models/locations'

function App() {
  let locationCards = locations.map(location => {
    return <Location key={location.item} item={location} />
  });

  return (
    <div className="App">
      <Navbar />
      <section className='locations-list'>
      {locationCards}

      </section>
    </div>
  )
}

export default App
