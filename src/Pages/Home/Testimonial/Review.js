import React from 'react'

function Review({review}) {
     const {name, img, reviews, location} = review;
  return (
    <div>
     <div className="card bg-base-100 shadow-xl">
     <div className="card-body">
     <p>{reviews}</p>
     <div className="flex items-center">
     <div className="avatar mr-4 mt-4">
     <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
     <img src={img} alt=''/>
     </div>
     </div>
     <div>
          <h5 className="text-lg">{name}</h5>
          <p>{location}</p>
     </div>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Review