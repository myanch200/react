import React from 'react'
import planetIcon from '../assets/planet.svg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <img src={planetIcon} alt="planet icon" />
      <p>my travel journal.</p>
    </nav>
  )
}
