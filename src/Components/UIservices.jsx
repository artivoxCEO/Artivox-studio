import { ArrowRight } from 'lucide-react'
import React from 'react'

const UIservices = ({ services }) => {

  return (
    <div className="flex flex-col gap-2 mt-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="grid grid-cols-[150px_1fr_40px] items-center mb-6"
        >
          <div className="text-white/40 text-2xl">
            {service.id}
          </div>

          <div className="text-white/90  text-[24px]">
            {service.title}
          </div>

          <div className="flex justify-end">
            <ArrowRight />
          </div>
        </div>
      ))}
    </div>
  )
}

export default UIservices

