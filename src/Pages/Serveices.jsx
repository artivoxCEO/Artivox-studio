import React from 'react'
import Pages_Header from '../Components/Pages_Header'
import { assets } from '../assets/assets'
import UIservices from '../Components/UIservices'
import FAQs from '../Components/FAQs'
import CTA from '../Components/CTA'
import { motion } from 'motion/react'
import { useAppContext } from '../Context/AppContext'




const Serveices = () => {
const {navigate} = useAppContext()
const uiuxServices = [
  { id: '01', title: 'UI/UX Design' },
  { id: '02', title: 'UI/UX Consulting' },
  { id: '03', title: 'AI Product Design' },
  { id: '04', title: 'SaaS Product Design' },
  { id: '05', title: 'User Research' },
  { id: '06', title: 'Wireframe & UI Prototyping' },
]

const brandingServices = [
  { id: '01', title: 'Logo Design' },
  { id: '02', title: 'Brand Identity' },
  { id: '03', title: 'Brand Style Guidelines'},
  { id: '04', title: 'Typography' },
  { id: '05', title: 'Colour Palette' },
  { id: '06', title: 'Design System' },
]

const webServices = [
  { id: '01', title: 'Website Design' },
  { id: '02', title: 'Frontend Development' },
  { id: '03', title: 'Backend Development' },
  { id: '04', title: 'Full-Stack Development' },
  { id: '05', title: 'Framer Website' },
  { id: '06', title: 'Webflow Website' },
]

const shopifyServices = [
  { id: '01', title: 'Shopify Store Design' },
  { id: '02', title: 'E-Commerce UX' },
  { id: '03', title: 'Shopify Develpment' },
  { id: '04', title: 'Store Customization' },
  { id: '05', title: 'Product Page Design' },
  // { id: '06', title: 'Store Optimization' },
]
// Reusable entrance animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  const discription =
    'Landin is your go-to agency for creative thinking and marketing ideas. We specialize in digital business solutions.'


  // Smooth reveal animation for content
  const revealLeft = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }


  const revealRight = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }


  const imageReveal = {
    hidden: {
      opacity: 0,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }


  return (
    <div className="text-white overflow-hidden">

      {/* ================= HEADER ================= */}

      <Pages_Header
        badge_text="Dig Dive About Us"
        heading1="Digital Product Design"
        heading2="& Consulting Services"
        discription={discription}
        button_text="Start a Project"
      />


      {/* ================= SERVICES CONTAINER ================= */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">


        {/* ================= 1st ROW ================= */}

        <section className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 lg:gap-20 mt-16 sm:mt-20 lg:mt-32">


          {/* LEFT IMAGE */}

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="w-full md:w-1/2"
          >
            <img
              src={assets.Services_image1}
              alt="UI UX Design"
              className="
                w-full
               h-150
                object-cover
                transition-transform
                duration-700
                ease-out
                rounded-4xl
                hover:scale-[1.02]
              "
            />
          </motion.div>


          {/* RIGHT CONTENT */}

          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="w-full md:w-1/2"
          >

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
              UI/UX and AI Product Design
            </h1>

            <p className="text-sm sm:text-base text-[#6D7792] leading-5 max-w-lg mt-5 sm:mt-7">
              We design intuitive digital products and AI-powered experiences that are clear, scalable, and built around real user needs.
            </p>

            <div className="mt-6 sm:mt-8">
           <UIservices services={uiuxServices} />
            </div>

          </motion.div>

        </section>


        {/* ================= 2nd ROW ================= */}

        <section className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 lg:gap-20 mt-20 sm:mt-24 lg:mt-32">


          {/* LEFT CONTENT */}

          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
              Logo & Brand Identity
            </h1>

            <p className="text-sm sm:text-base text-[#6D7792] leading-5 max-w-lg mt-5 sm:mt-12">
              We create distinctive brand identities that give businesses a clear visual language, memorable presence, and consistent personality.
            </p>

            <div className="mt-6 sm:mt-4">
             <UIservices services={brandingServices} />
            </div>

          </motion.div>


          {/* RIGHT IMAGE */}

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <img
              src={assets.Services_image2}
              alt="Branding"
              className="
                w-157.25
               h-138.75
                object-cover
                rounded-3xl
                transition-transform
                duration-700
                ease-out
                hover:scale-[1.02]
              "
            />
          </motion.div>

        </section>


        {/* ================= 3rd ROW ================= */}

        <section className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 lg:gap-20 mt-20 sm:mt-24 lg:mt-32">


          {/* LEFT IMAGE */}

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="w-full md:w-1/2"
          >
            <img
              src={assets.Services_image3}
              alt="Web Design"
              className="
                w-full
               h-145
                object-cover
                transition-transform
                duration-700
                rounded-3xl
                ease-out
                hover:scale-[1.02]
              "
            />
          </motion.div>


          {/* RIGHT CONTENT */}

          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="w-full md:w-1/2"
          >

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
             Website Design & Development
            </h1>

            <p className="text-sm sm:text-base text-[#6D7792] leading-5 max-w-lg mt-5 sm:mt-8">
              We design and develop modern websites that look exceptional, perform smoothly, and turn visitors into customers.
            </p>

            <div className="mt-6 sm:mt-8">
            <UIservices services={webServices} />
            </div>

          </motion.div>

        </section>


        {/* ================= 4th ROW ================= */}

        <section className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 lg:gap-20 mt-20 sm:mt-24 lg:mt-32">


          {/* LEFT CONTENT */}

          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
              Shopify Store Design
            </h1>

            <p className="text-sm sm:text-base text-[#6D7792] leading-5 max-w-lg mt-5 sm:mt-12">
              We design high-converting online stores that make products easier to discover, trust, and purchase.
             
            </p>

            <div className="mt-6 sm:mt-8">
             <UIservices services={shopifyServices} />
            </div>

          </motion.div>


          {/* RIGHT IMAGE */}

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <img
              src={assets.Services_image4}
              alt="Mobile App Design"
              className="
                w-full
                h-125
                object-cover
                rounded-3xl
                transition-transform
                duration-700
                ease-out
                hover:scale-[1.02]
              "
            />
          </motion.div>
        </section>
        <div className='flex items-center justify-center'>

          <motion.button onClick={()=> navigate('/contact')}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.04,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      className="
                        mt-20
                        flex
                        items-center
                        justify-center
                        whitespace-nowrap
                        rounded-full
                        border
                        border-[#5183FF]
                        bg-[#3030f2]
                        px-8
                        py-3
                        text-white
                        transition-colors
                        duration-300
                        hover:bg-[#3030f2]/80
                        
                      "
                    >
                      Design My Product Now
                    </motion.button>
                        </div>

      </div>


      {/* ================= FAQ ================= */}

      <FAQs />


      {/* ================= CTA ================= */}

      <CTA />

    </div>
  )
}

export default Serveices



