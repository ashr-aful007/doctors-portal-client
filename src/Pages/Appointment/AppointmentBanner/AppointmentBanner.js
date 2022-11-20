import React, { useState } from 'react'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import background from '../../../assets/images/bg.png'


function AppointmentBanner({setSelectedDate,selectedDate}) {
     
  return (
    <div style={{background: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
     <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
    <div>
     <DayPicker 
      mode='single'
      selected={selectedDate}
      onSelect={setSelectedDate}
     />
    </div>
  </div>
</div>
    </div>
  )
}

export default AppointmentBanner