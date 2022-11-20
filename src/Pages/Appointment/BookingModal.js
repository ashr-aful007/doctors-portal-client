import { format } from 'date-fns'
import React from 'react'

function BookingModal({treatment,selectedDate,setTreatment}) {
     const {name, slots} = treatment //treatment is appoinment option just different name
     const date = format(selectedDate, 'PP');

     const handleBooking = event =>{
          event.preventDefault();
          const form = event.target;
          const slot = form.slot.value;
          const name = form.name.value;
          const email = form.name.value;
          const phone = form.name.value;

          const booking ={
            appointmentDate: date,
            treatment: name,
           patient: name,
            slot,
            email,
            phone,

          }
          //TODO: send data to the server 
          //and once data is saved then close the modal and display sucess toast
          console.log(booking)
          setTreatment(null);    
     }
  return (
    <>
          <input type="checkbox" id="Booking-madal" className="modal-toggle" />
          <div className="modal">
          <div className="modal-box relative">
          <label htmlFor="Booking-madal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
            <input type="text" disabled value={date} className="input w-full" />
            <select name='slot' className="select select-bordered w-full ">             
              {
                slots?.map((slot, i) => <option key={i}>{slot}</option>)
              }
            </select>
            <input name='name' type="text" placeholder='Your Name' className="input w-full input-bordered" />
            <input name='email' type="text" placeholder='Email Address' className="input w-full input-bordered" />
            <input name='phone' type="text" placeholder='Phone Number' className="input w-full input-bordered" />
            <br/>
            <input className='btn btn-accent w-full ' type='submit' value='Submit'/>
          </form>
      </div>
     </div>
    </>
  )
}

export default BookingModal