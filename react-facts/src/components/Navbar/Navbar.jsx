import React from 'react'
import reactLogo from "../../assets/react.svg"
function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo-wrapper">
        <img className="nav-react-logo" src={reactLogo} alt="" />
        <h1 className='blue logo-title'>React Facts</h1>
      </div>

      <p className='extra-title'>React Course - Project 1</p>

    </nav>
  )
}

export default Navbar