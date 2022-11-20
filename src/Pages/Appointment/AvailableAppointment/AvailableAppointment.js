import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import BookingModal from '../BookingModal'
import AppointmentOption from './AppointmentOption'

function AvailableAppointment({selectedDate}) {
     const [appoinmentOptions, SetappoinmentOptions] = useState([])
     const [treatment, setTreatment] = useState({});
     useEffect(() =>{
          fetch('appointmentOption.json')
          .then(res => res.json())
          .then(data => SetappoinmentOptions(data))
     },[])
  return (
    <section className='my-16'>
     <p className='mb-16 text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-9'>
          {
               appoinmentOptions.map(option => <AppointmentOption
               key={option._id}
              appointmentOption={option}
              setTreatment={setTreatment}
              treatment={treatment}
               ></AppointmentOption>)
          }
     </div>
     {
          treatment &&
               <BookingModal
               treatment={treatment}
               selectedDate={selectedDate}
               setTreatment={setTreatment}
              ></BookingModal>
     }
    </section>
  )
}

export default AvailableAppointment