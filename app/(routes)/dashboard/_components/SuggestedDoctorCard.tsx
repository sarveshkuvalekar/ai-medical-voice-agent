import React from 'react'
import { doctorAgent } from './DoctorAgentCard'
import Image from 'next/image';

type props = {
  doctorAgent: doctorAgent,
  setSelectedDoctor: any,
  selectedDoctor: doctorAgent,
}

function SuggestedDoctorCard({ doctorAgent, setSelectedDoctor, selectedDoctor }: props) {
  return (
    <div
      className={`flex flex-col items-center justify-between border 
      rounded-2xl shadow p-5 bg-lime-50 hover:border-lime-600 cursor-pointer
      ${selectedDoctor?.id === doctorAgent?.id && 'border-lime-600'}`}
      onClick={() => setSelectedDoctor(doctorAgent)}
    >
      <div className="relative w-[80px] h-[120px] mb-2">
        {/* {doctorAgent.image ? (
          <Image
            src={doctorAgent.image}
            alt={doctorAgent.specialist || 'Doctor'}
            fill
            className="object-cover rounded-xl border border-lime-100"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-500">
            No Image
          </div>
        )} */}
        <Image
            src={doctorAgent.image}
            alt={doctorAgent.specialist || 'Doctor'}
            fill
            className="object-cover rounded-xl border border-lime-100"
          />
      </div>
      <h2 className='text-lime-900 font-bold text-sm text-center'>{doctorAgent?.specialist}</h2>
      <p className='text-xs text-center line-clamp-2'>{doctorAgent?.description}</p>
    </div>
  );
}

export default SuggestedDoctorCard
