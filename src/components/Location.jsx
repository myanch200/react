import React from 'react'
import locationIcon from '../assets/location.svg'

export default function Location(props) {
  let item = props.item;

  let credits = item.coverImg.credits
  return (

    <section className='location-card'>
     <img className="location-thubnail" src={item.coverImg.src} alt="asdasd" />
     <div className="location-card--content">
        <div className="location-info">
          <img  className='location-icon' src={locationIcon} alt="" />
          <p className='location-country'>{item.location}</p>
          <a className='link' href={item.googleMapsLink} target="_blank">View on Google Maps</a>
        </div>
        <h2 className='location-name'>{item.name}</h2>
        <span className='dates'>{item.startDate} - {item.endDate}</span>
        <p className='location-description'>{item.description}</p>
        <div className='credit'>
          <p>Photo taken by:</p>
          <a className="link" target='_blank' href={credits.link}>{credits.name}</a>
        </div>
        
     </div>
    </section>

  )
}
