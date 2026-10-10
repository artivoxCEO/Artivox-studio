import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { assets } from '../assets/assets';



const AboutCEO_Card = () => {
   const teamMembers = [
  {
    name: "Nayamat A",
    role: "Founder & CEO (UI/UX designer)",
    image: assets.About_CEO,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Abdullah",
    role: "Web Developer",
    image: assets.Team_1,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Bisma",
    role: "Web Developer (MERN stack)",
    image: assets.Team_2,
    linkedin: "https://linkedin.com",
  },
  
];

  return (
   <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mx-6 lg:mx-14 mt-32">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Card */}
      <div
        className="
          mt-5
          w-full
          rounded-[18px]
          border
          border-white/10
          bg-linear-to-t
          from-[#00002E]
          to-black
          p-6
          transition-all
          duration-500
          group-hover:border-blue-500/40
          group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
        "
      >
        <div className="flex items-end justify-between">
          <div>
            <h3
              className="
              text-[15px]
                lg:text-[20px]
                font-bold
                text-white
                leading-none
                transition-colors
                duration-300
                group-hover:text-blue-400
              "
            >
              {member.name}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-white/60
                transition-colors
                duration-300
                group-hover:text-white/80
              "
            >
              {member.role}
            </p>
          </div>

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white/40
              transition-all
              duration-500
              group-hover:rotate-6
              hover:scale-110
              hover:border-blue-500
              hover:bg-blue-600
              hover:text-white
            "
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
  )
}

export default AboutCEO_Card
