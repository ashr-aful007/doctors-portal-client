import React from 'react'

function AppointmentOption({appointmentOption,setTreatment}) {
     const {name, slots} = appointmentOption;
  return (
    <div>
     <div className="card  bg-base-100 shadow-xl">
     <div className="card-body text-center">
     <h2 className="text-2xl text-primary text-center">{name}</h2>
     <p>{ slots.length > 0 ? slots[0] : 'Try Another day'}</p>
     <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
     <div className="card-actions justify-center">
          <label 
            disabled={slots.length === 0}
          htmlFor="Booking-madal" 
          className="btn btn-primary text-white"
          onClick={() => setTreatment(appointmentOption)}
          >Book Appoinment</label>
     </div>
     </div>
     </div>
    </div>
  )
}

export default AppointmentOption