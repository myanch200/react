import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <section className="about-section">
        <h2 className="about-section--title">About</h2>
        <p className="about-section--description">
          I am software developer and 4 <sup>th</sup> year student.
          Based in Glasgow, Scotland, interested in Web development (FE & BE),
          Machine Learning and Big Data.
        </p>
      </section>
    )
  }
}

export default About