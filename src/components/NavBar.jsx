import React from 'react'
import airBnbIcon from '../assets/airbnb-logo.png'
export default function NavBar() {
  return (
    <nav className='header--nav-bar'>
      <div>
        <img className='nav-bar--logo' src={airBnbIcon} alt="" />
      </div>
    </nav>
  )
}
