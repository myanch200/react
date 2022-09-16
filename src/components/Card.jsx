import React from 'react'

import starIcon from '../assets/star.svg'
export default function Card(props) {
  let item = props.item
  let badgeText
  if (item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (item.location === "Online") {
      badgeText = "ONLINE"
  }
  
  return (
    <div className='event-card'>
      <img className="card--image" src={item.coverImg} alt={item.title} />
      {badgeText && <div className="card--status-badge">{badgeText}</div>}
      <div className="card-raiting">
        <img src={starIcon} alt="star" />
        <p>{item.stats.rating}</p>
        <p>{item.stats.reviewCount}</p>
        <p>{item.country}</p>
      </div>
      <div className="card-details">
        <p className="card--description">
         {item.title}
        </p>
        <p className="card--price"><strong>From ${item.price}</strong>/ person</p>
      </div>
    </div>
  )
}
