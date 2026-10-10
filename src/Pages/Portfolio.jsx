import React from 'react'
import Pages_Header from '../Components/Pages_Header'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import FAQs from '../Components/FAQs'
import CTA from '../Components/CTA'
import { motion } from 'motion/react'


const Portfolio = () => {
  let navigate = useNavigate();

  let portfolioData = [
    {
      name: 'Nova Graph',
      slug: 'novagraph',
      image: assets.Portfolio_image_1,
      year: '2025'
    },
    {
      name: 'Mood AI',
      slug: 'mood_ai',
      image: assets.Portfolio_image_2,
      year: '2025'
    },
    {
      name: 'CompHealth',
      slug: 'Comp-Health',
      image: assets.Portfolio_image_3,
      year: '2025'
    },
    {
      name: 'PropVista',
      slug: 'Prop-Vista',
      image: assets.Portfolio_image_4,
      year: '2025'
    },
    {
      name: 'Antiqo',
      slug: 'Antiqo',
      image: assets.Portfolio_image_5,
      year: '2025'
    },
    {
      name: 'EON Night',
      slug: 'EON-Night',
      image: assets.Portfolio_image_6,
      year: '2025'
    },
    {
      name: 'Travios',
      slug: 'Travios',
      image: assets.Portfolio_image_7,
      year: '2025'
    },
    {
      name: 'Adynra AI',
      slug: 'Adynra-AI',
      image: assets.Portfolio_image_8,
      year: '2025'
    },
    {
      name: 'Orbatric',
      slug: 'Orbatric',
      image: assets.Portfolio_image_9,
      year: '2025'
    },
    {
      name: 'Nibotech',
      slug: 'Nibotech',
      image: assets.Portfolio_image_10,
      year: '2025'
    }
  ]

  let discription =
    'From startups to established brands, we create tailored solutions that drive success and make a real impact.'

  return (
    <div className='text-white'>

      <Pages_Header
        badge_text={'Explore Our Portfolio'}
        heading1={'Check Out Some'}
        heading2={'Extra-Ordinary Work'}
        discription={discription}
        button_text={'Build Your Product'}
      />


      {/* =====================================================
          PORTFOLIO GRID
      ===================================================== */}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-6 lg:mx-14 lg:mt-28'>

        {portfolioData.map((data, i) => (

          <motion.div
            onClick={() => navigate(`/portfolio/${data.slug}`)}
            key={i}

            initial={{
              opacity: 0,
              y: 60,
              scale: 0.97
            }}

            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }}

            viewport={{
              once: true,
              amount: 0.15
            }}

            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}

            whileHover={{
              y: -6
            }}

            className='group relative cursor-pointer overflow-hidden rounded-2xl'
          >

            {/* IMAGE */}

            <motion.img
              src={data.image}
              alt={data.name}

              initial={{
                scale: 1.04
              }}

              whileInView={{
                scale: 1
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}

              className="
                w-full
                aspect-629/560
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />


            {/* IMAGE OVERLAY */}

            <motion.div
              className="
                absolute
                inset-0
                bg-black/0
                pointer-events-none
                transition-colors
                duration-500
                group-hover:bg-black/10
              "
            />


            {/* PROJECT INFO */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}

              className='
              h-12.5
               lg:h-[73.78px]
                bg-linear-to-t
                from-[#00004C]
                to-black
                absolute
                bottom-4
                lg:bottom-10
                left-3
                right-3
                lg:left-7
                lg:right-7
                flex
                justify-between
                items-center
                px-6
                py-2
                border
                border-white/30
                rounded-2xl
                transition-all
                duration-500
                group-hover:border-white/50
                group-hover:shadow-[0_15px_50px_rgba(48,48,242,0.18)]
              '
            >

              {/* PROJECT NAME */}

              <h2
                className='
                  font-bold
                  text-[20px]
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:translate-x-1
                '
              >
                {data.name}
              </h2>


              {/* YEAR */}

              <motion.div
                whileHover={{
                  scale: 1.06
                }}

                transition={{
                  duration: 0.3
                }}

                className="
                  w-17.5
                  h-8
                  rounded-xl
                  bg-[#1E1E4E]
                  shadow-[4px_4px_20px_rgba(48,48,242,0.2)]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:bg-[#3030F2]
                  group-hover:shadow-[4px_4px_25px_rgba(48,48,242,0.35)]
                "
              >
                {data.year}
              </motion.div>

            </motion.div>

          </motion.div>

        ))}

      </div>


      {/* FAQs */}

      <FAQs />


      {/* CTA */}

      <CTA />

    </div>
  )
}

export default Portfolio                                 
