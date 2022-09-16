import React from 'react'
import zaferesPhoto from '../assets/zaferes.png'
import starIcon from '../assets/star.svg'
export default function Card() {
  return (
    <div className='event-card'>
      <img src={zaferesPhoto} alt="" />
      <div className="card--status-badge">SOLD OUT</div>
      <div className="card-raiting">
        <img src={starIcon} alt="star" />
        <p>5</p>
        <p>(6)</p>
        <p>USA</p>
      </div>
      <div className="card-details">
        <p className="card--description">
          Life lessons with Katie Zaferes
        </p>
        <p className="card--price"><strong>From $136</strong>/ person</p>
      </div>
    </div>
  )
}
