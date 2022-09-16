import React, { Component } from 'react'
import twitterIcon from '../assets/twitter.svg'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import githubIcon from '../assets/github.svg'


function Footer() {
  const icons = [twitterIcon, facebookIcon, instagramIcon, githubIcon]
  return (
    <footer>
      {icons.map((icon)=>{return(
        <img className="footer--icon" src={icon} key={icon} />
      )})}
    </footer>
  )
}


export default Footer