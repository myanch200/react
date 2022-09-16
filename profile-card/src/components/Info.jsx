import React, { Component } from 'react'
import profilePhoto from '../assets/images/profile-photo.jpeg'
import emailIcon from '../assets/email.svg'
import linkedInIcon from '../assets/linked-in.svg'

export class Info extends Component {
  render() {
    return (
      <section className='info-section'>
        <img src={profilePhoto} alt="" className="info-section--profile-photo" />
        <h1 className="info-section--name">Martin Yanchev</h1>
        <h3 className="info-section--position-title">Software Developer</h3>
        <p className="info-section--website">N/A</p>
        <div className="info-section--social-links">
          <div className="info-section--links info-section--email">
            <img src={emailIcon} alt="email icon" />
            <a>Email</a>
          </div>
          <div className="info-section--links info-section--linkedin">
            <img src={linkedInIcon} alt="email icon" />
            <a>LinkedIn</a>
          </div>
        </div>
      </section>
    )
  }
}

export default Info