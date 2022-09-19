import React from 'react'
import trollFace from '../assets/troll-face.svg'
export default function Navbar() {
  return (
    <nav className="nav-bar bg-purple-gradient">
    <div className="nav-logo-wrapper">
      <img className="nav-react-logo" src={trollFace} alt="" />
      <h3 className='nav-logo-title'>Meme Generator</h3>
    </div>

    <p className='extra-title'>React Course - Project 3</p>

  </nav>
  )
}
