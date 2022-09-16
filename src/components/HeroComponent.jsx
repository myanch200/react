import React from 'react'
import photoGrid from '../assets/photo-grid.png'
export default function HeroComponent() {
  return (
    <div className="hero-section">
      <img className='hero-section--photo-grid' src={photoGrid} alt="hero experiences images" />
      <div className="hero-section--content">
      <h1 className='hero-section--title'>Online Experiences</h1>
      <p className="hero-section--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
      </div>
      
    </div>
  )
}
