import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../assets/assets'
import { useAppContext } from '../Context/AppContext'

// ================= PROJECT DATA ================= //


const projects = [
  {
    slug: 'Orbatric',
    desktopImage: assets.project1,
    mobileImage: assets.Portfolio_image_9,
    name: 'Orbatric',
    description:
      "Orbatric's design language is bold and futuristic — dark, immersive backgrounds with sharp UI elements that feel cutting-edge without sacrificing readability. Typography is modern and confident, built for strong visual hierarchy across every section",
    category: 'SAAS',

  },
  {
    slug: 'Nibotech',
    desktopImage: assets.project2,
    mobileImage: assets.Portfolio_image_10,
    name: 'NiboTech',
    description:
      'The visual language is sharp, structured, and technical. A dark-dominant palette with high-contrast accents communicates precision and forward-thinking without feeling cold.',
    category: 'Tech Niche',
  },
  {
    slug: 'novagraph',
    desktopImage: assets.project3,
    mobileImage: assets.Portfolio_image_1,
    name: 'NovaGraph',
    description:
      'Ellipy’s design follows a clean, modern, and user-friendly aesthetic, with a focus on dark mode for a sleek and professional feel.',
    category: 'SAAS',
  },
]

// ================= IMAGE ANIMATION =================

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.97,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function ProjectSection() {
  const { navigate } = useAppContext()

  return (
    <section
      className="
        w-full
        text-white
        pt-8 lg:pt-16
        relative
        overflow-hidden
        px-5
        sm:px-8
        lg:px-14
      "
    >

      {/* ================= FINE GRID TEXTURE ================= */}

      <div
        className="
    absolute inset-0
    pointer-events-none
    opacity-[0.05]
    bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)]
    bg-size-[64px_64px]
    mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]
  "
      />



      {/* ================= CENTER GLOW — BELOW LG ================= */}

      <div
        className="
          lg:hidden
          absolute
          left-1/2
          -translate-x-1/2
          top-32
          w-70
          sm:w-100
          h-40
          sm:h-50
          rounded-full
          bg-[radial-gradient(ellipse,rgba(48,48,242,0.22)_0%,rgba(48,48,242,0.10)_40%,rgba(48,48,242,0)_75%)]
          blur-2xl
          pointer-events-none
        "
      />

      {/* ================= LEFT GLOW — LG+ ================= */}

      <div
        className="
          hidden
          lg:block
          absolute
          left-0
          top-40
          w-76.25
          h-42.25
          bg-[linear-gradient(230deg,rgba(48,48,242,0.20),rgba(0,0,29,0.3),#000)]
          rounded-tr-4xl
          pointer-events-none
          blur-[2px]
        "
      />

      {/* ================= RIGHT GLOW — LG+ ================= */}

      <div
        className="
          hidden
          lg:block
          absolute
          right-0
          top-40
          w-75.5
          h-42
          -scale-x-100
          bg-[linear-gradient(230deg,rgba(48,48,242,0.20),rgba(0,0,29,0.3),#000)]
          rounded-tr-4xl
          pointer-events-none
          blur-[2px]
        "
      />

      {/* ================= HEADER CONTENT ================= */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="
          relative
          max-w-5xl
          mx-auto
          flex
          flex-col
          items-center
          text-center
          gap-6
          sm:gap-7
        "
      >

        {/* ================= BADGE ================= */}

        <div
          className="
            flex
            items-center
            gap-2
            px-3
            py-2
            border-t
            border-blue-700
            rounded-md
            bg-[#0b0b18]
          "
        >
          <span className="w-2 h-2 bg-white rounded-full shrink-0" />

          <span className="text-sm sm:text-base">
            Portfolio
          </span>
        </div>

        {/* ================= HEADING ================= */}

        <div className="w-full">

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[4.5rem]
              font-medium
              leading-[1.05]
              tracking-tight
              mb-2
              sm:mb-3
              bg-clip-text
              text-transparent
              bg-[linear-gradient(180deg,#FFFFFF_0%,#C7C9FF_100%)]
            "
          >
            Projects That Speak
          </h1>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[4.5rem]
              font-medium
              leading-[1.05]
              tracking-tight
              text-white/25
            "
          >
            For Themselves
          </h1>

          <div
            className="
              mx-auto
              mt-6
              h-px
              w-24
              bg-[linear-gradient(90deg,transparent,rgba(138,138,255,0.7),transparent)]
            "
          />

        </div>

        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            text-white/45
            text-sm
            sm:text-base
            leading-6
            sm:leading-7
            max-w-lg
            px-2
            font-light
          "
        >
          A selection of brands, interfaces, and products we've designed
          and built for clients across industries.
        </p>

        {/* ================= BUTTON ================= */}

        <motion.button
          onClick={() => navigate('/portfolio')}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 20,
          }}
          className="
            group
            relative
            mt-1
            px-6
            sm:px-7
            py-3
            sm:py-3.5
            rounded-full
            font-semibold
            text-sm
            sm:text-base
            text-white
            bg-[linear-gradient(180deg,#4747F5_0%,#2A2AD1_100%)]
            border
            border-white/15
            shadow-[0_0_0_1px_rgba(48,48,242,0.4),0_8px_24px_-4px_rgba(48,48,242,0.55),inset_0_1px_0_rgba(255,255,255,0.25)]
            overflow-hidden
            transition-shadow
            duration-300
            hover:shadow-[0_0_0_1px_rgba(90,90,255,0.6),0_10px_32px_-4px_rgba(48,48,242,0.75),inset_0_1px_0_rgba(255,255,255,0.3)]
          "
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            View All Projects


          </span>

          {/* Shine sweep */}

          <span
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-1/2
              w-1/2
              bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.35)_50%,transparent_100%)]
              -skew-x-12
              transition-transform
              duration-700
              ease-out
              group-hover:translate-x-[220%]
            "
          />

        </motion.button>

      </motion.div>

      {/* ================= PROJECTS ================= */}

      <div
        className="
          relative
          mt-16
          sm:mt-20
          lg:mt-32
          max-w-7xl
          mx-auto
        "
      >

        <div className="flex flex-col gap-7 sm:gap-10 lg:gap-12">

          {projects.map((project, i) => (

            <motion.div
              key={project.name}
              variants={imageVariants}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                delay: i * 0.1,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
              "
            >

              {/* ================= PROJECT IMAGE ================= */}

              {/* <div
                className="
                  relative
                  rounded-4xl
                  overflow-hidden
                  border
                  border-white/10
                  shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]
                  transition-shadow
                  duration-500
                  hover:border-white/20
                  hover:shadow-[0_0_0_1px_rgba(90,90,255,0.35),0_24px_70px_-16px_rgba(48,48,242,0.35)]
                "
              > */}

              <button
                type="button"
                onClick={() => navigate(`/portfolio/${project.slug}`)}
                aria-label={`View ${project.name} project details`}
                className="block w-full cursor-pointer text-left"
              >
                <div
                  className="
      relative
      rounded-4xl
      overflow-hidden
      border
      border-white/10
      shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]
      transition-all
      duration-500
      hover:border-white/20
      hover:shadow-[0_0_0_1px_rgba(90,90,255,0.35),0_24px_70px_-16px_rgba(48,48,242,0.35)]
    "
                >

                  <picture>
                    <source
                      media="(max-width: 1023px)"
                      srcSet={project.mobileImage}
                    />

                    <img
                      src={project.desktopImage}
                      alt={project.name}
                      className="w-full h-auto object-cover  
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.03]"
                    />
                  </picture>

                  {/* Subtle top sheen */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,transparent_18%)]
                    pointer-events-none
                  "
                  />

                  {/* Desktop hover gradient */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.55)_100%)]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                  />

                  {/* Desktop arrow */}

                  <div
                    className="
                    absolute
                    bottom-4
                    right-4
                    sm:bottom-5
                    sm:right-5
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    border
                    border-white/20
                    text-white
                    opacity-0
                    translate-y-2
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-400
                  "
                  >
                    ↗
                  </div>

                </div>
 </button>

                {/* ================================================= */}
                {/* MOBILE / TABLET PROJECT INFORMATION */}
                {/* HIDDEN ON LG AND ABOVE */}
                {/* ================================================= */}

                <div
                  className="
                  lg:hidden
                  pt-5
                  sm:pt-6
                  px-1
                "
                >

                  {/* Project number + category */}

                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    mb-3
                  "
                  >

                    <span
                      className="
                      text-[11px]
                      sm:text-xs
                      uppercase
                      tracking-[0.18em]
                      text-white/35
                    "
                    >
                      0{i + 1}
                    </span>

                    <span
                      className="
                      text-[11px]
                      sm:text-xs
                      uppercase
                      tracking-[0.12em]
                      text-[#7777ff]
                    "
                    >
                      {project.category}
                    </span>

                  </div>


                  {/* Project name */}

                  <h2
                    className="
                    text-xl
                    sm:text-2xl
                    font-medium
                    tracking-tight
                    text-white
                    mb-2
                  "
                  >
                    {project.name}
                  </h2>


                  {/* Project description */}

                  <p
                    className="
                    text-sm
                    sm:text-base
                    leading-6
                    sm:leading-7
                    text-white/45
                    font-light
                    max-w-2xl
                  "
                  >
                    {project.description}
                  </p>


                  {/* Tech stack */}

                  <div
                    className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    mt-4
                  "
                  >



                  </div>






                </div>

            </motion.div>

          ))}

        </div>


        {/* ================= ANIMATED AURORA BOTTOM GLOW ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            h-45
            sm:h-55
            lg:h-60
            mt-3
            lg:mt-16
            overflow-hidden
          "
        >

          {/* Flame core — left */}

          <div
            className="
              flame-blob flame-a
              absolute
              left-[-10%]
              sm:left-[2%]
              bottom-2
              w-[65%]
              sm:w-[48%]
              h-22.5
              sm:h-30
              rounded-full
              bg-[radial-gradient(ellipse_at_bottom,rgba(80,90,255,0.7)_0%,rgba(48,48,242,0.35)_40%,rgba(48,48,242,0)_75%)]
              blur-[45px]
              sm:blur-[55px]
            "
          />

          {/* Flame core — right */}

          <div
            className="
              flame-blob flame-b
              absolute
              right-[-10%]
              sm:right-[2%]
              bottom-2
              w-[58%]
              sm:w-[42%]
              h-21.25
              sm:h-27.5
              rounded-full
              bg-[radial-gradient(ellipse_at_bottom,rgba(120,90,255,0.65)_0%,rgba(48,48,242,0.3)_40%,rgba(48,48,242,0)_75%)]
              blur-[45px]
              sm:blur-[55px]
            "
          />

          {/* Flame lick — center */}

          <div
            className="
              flame-blob flame-c
              absolute
              left-1/2
              -translate-x-1/2
              bottom-0
              w-[40%]
              sm:w-[30%]
              h-27.5
              sm:h-37.5
              rounded-full
              bg-[radial-gradient(ellipse_at_bottom,rgba(160,165,255,0.75)_0%,rgba(60,60,242,0.4)_45%,rgba(48,48,242,0)_80%)]
              blur-[35px]
              sm:blur-[45px]
            "
          />

          {/* Fine highlight rim */}

          <div
            className="
              flame-blob flame-c
              absolute
              left-1/2
              -translate-x-1/2
              bottom-6
              w-[22%]
              sm:w-[16%]
              h-12.5
              sm:h-17.5
              rounded-full
              bg-[radial-gradient(ellipse_at_bottom,rgba(220,225,255,0.5)_0%,rgba(220,225,255,0)_75%)]
              blur-[20px]
              opacity-70
            "
          />

          {/* Flicker overlay */}

          <div
            className="
              flame-flicker
              absolute
              inset-x-0
              bottom-0
              h-full
              bg-[radial-gradient(ellipse_at_bottom,rgba(90,100,255,0.28)_0%,rgba(48,48,242,0)_70%)]
              pointer-events-none
            "
          />

          {/* Bottom mask */}

          <div
            className="
              absolute
              bottom-0
              left-0
              w-full
              h-17.5
              sm:h-24.5
              bg-black
            "
          />

        </motion.div>

      </div>


      {/* ================= COMPONENT-SCOPED KEYFRAMES ================= */}

      <style>{`

        @keyframes flameSwayA {
          0% {
            transform: translate(0px, 0px) scaleY(1);
          }

          25% {
            transform: translate(5px, -5px) scaleY(1.06);
          }

          50% {
            transform: translate(-3px, 3px) scaleY(0.96);
          }

          75% {
            transform: translate(3px, -2px) scaleY(1.03);
          }

          100% {
            transform: translate(0px, 0px) scaleY(1);
          }
        }


        @keyframes flameSwayB {
          0% {
            transform: translate(0px, 0px) scaleY(1);
          }

          30% {
            transform: translate(-6px, -3px) scaleY(1.08);
          }

          60% {
            transform: translate(4px, 4px) scaleY(0.94);
          }

          100% {
            transform: translate(0px, 0px) scaleY(1);
          }
        }


        @keyframes flameSwayC {
          0% {
            transform: translate(-50%, 0px) scaleY(1) scaleX(1);
          }

          20% {
            transform: translate(-50%, -8px) scaleY(1.12) scaleX(0.96);
          }

          45% {
            transform: translate(-50%, 2px) scaleY(0.92) scaleX(1.04);
          }

          70% {
            transform: translate(-50%, -5px) scaleY(1.08) scaleX(0.98);
          }

          100% {
            transform: translate(-50%, 0px) scaleY(1) scaleX(1);
          }
        }


        @keyframes flameFlicker {
          0%,
          100% {
            opacity: 0.5;
          }

          20% {
            opacity: 0.75;
          }

          40% {
            opacity: 0.42;
          }

          60% {
            opacity: 0.8;
          }

          80% {
            opacity: 0.55;
          }
        }


        @keyframes pingSlow {
          0% {
            transform: scale(1);
            opacity: 0.75;
          }

          75%,
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }


        .flame-a {
          animation: flameSwayA 4.2s ease-in-out infinite;
        }


        .flame-b {
          animation: flameSwayB 5s ease-in-out infinite;
        }


        .flame-c {
          left: 50%;
          animation: flameSwayC 3.2s ease-in-out infinite;
        }


        .flame-flicker {
          animation: flameFlicker 2.2s ease-in-out infinite;
        }


        .animate-ping-slow {
          animation: pingSlow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }


        @media (prefers-reduced-motion: reduce) {

          .flame-a,
          .flame-b,
          .flame-c,
          .flame-flicker,
          .animate-ping-slow {
            animation: none;
          }

        }

      `}</style>

    </section>
  )
}

export default ProjectSection