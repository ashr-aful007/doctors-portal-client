import React from 'react'

function InfoCard({card}) {
     const {name, description,icon, bgClass} = card
  return (
    <div>
     <div className={`card md:card-side mt-8 text-white p-5 shadow-xl ${bgClass}`}>
     <figure><img src={icon} alt="Movie"/></figure>
     <div className="card-body">
     <h2 className="card-title">{name}</h2>
     <p>{description}</p>
     </div>
     </div>
    </div>
  )
}

export default InfoCard