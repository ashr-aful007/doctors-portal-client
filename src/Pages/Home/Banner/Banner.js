import React from 'react'
import chir from '../../../assets/images/chair.png'

function Banner() {
  return (
    <div>
     <div className="hero">
     <div className="hero-content flex-col lg:flex-row-reverse">
     <img src={chir} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
     <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Banner