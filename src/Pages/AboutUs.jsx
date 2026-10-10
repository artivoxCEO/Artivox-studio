import React from 'react'
import { motion } from "motion/react";
import Pages_Header from '../Components/Pages_Header'
import { assets } from '../assets/assets'
import { FaBehance, FaLinkedin } from "react-icons/fa";
import AboutCEO_Card from '../Components/AboutCEO_Card';
import { BiLogoAdobe } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaWebflow } from "react-icons/fa6";
import { SiFramer } from "react-icons/si";
import FAQs from '../Components/FAQs';
import CTA from '../Components/CTA';
import { useAppContext } from '../Context/AppContext';


const AboutUs = () => {
  const {navigate} = useAppContext()
  let discription = 'Strategy-led, design-driven, and technically precise, we partner with businesses to create digital products that look great and perform even better.'

  const toolsAndTech = [
    {
      icon: <BiLogoAdobe className='text-orange-600 w-6 h-6' />,
      Title: 'Adobe',
      define: 'Your visual foundation, built to last.',
      description: 'Your visual foundation, built to last. We use Adobe to craft brand identities, logos, and marketing assets that hold up across every format and touchpoint. From concept to final file, every visual is built with precision and purpose.'
    },
    {
      icon: <FaFigma className='text-purple-700 w-6 h-6' />,
      Title: 'Figma',
      define: 'Where every great product starts.',
      description: 'Where every great product starts. Figma is our primary workspace for UI/UX design, wireframing, and prototyping. We use it to design, collaborate, and hand off pixel-perfect work that developers can build from without guesswork.'
    },
    {
      icon: <SiFramer className='text-black w-6 h-6' />,
      Title: 'Framer',
      define: 'Design that moves, sites that perform.',
      description: 'Design that moves, sites that perform. We build high-fidelity, interactive websites in Framer that are fast, responsive, and production-ready. Smooth animations, clean layouts, and zero compromise on quality.'
    },
    {
      icon: <FaWebflow className='text-purple-600 w-6 h-6' />,
      Title: 'WebFlow',
      define: 'No-code power, full-scale results.',
      description: 'No-code power, full-scale results. Webflow lets us build scalable, SEO-friendly websites with full CMS control, giving clients the freedom to manage their content without touching a single line of code.'
    },
    {
      icon: <VscVscode className='text-[#2196F3] w-6 h-6' />,
      Title: 'VS Code',
      define: 'Clean code, built to last.',
      description: 'Clean code, built to last. For custom development projects, VS Code is where we write clean, efficient, and maintainable code, from full-stack web apps to complex integrations and custom builds.'
    },
    {
      icon: <BiLogoAdobe className='text-orange-600 w-6 h-6' />,
      Title: 'Adobe',
      define: 'The full creative suite, fully utilized.',
      description: 'The full creative suite, fully utilized. From Photoshop to Illustrator to InDesign, we use the entire Adobe ecosystem for high-quality visual production, brand assets, print materials, and everything in between.'
    },
  ]


  // ============================================================
  // ANIMATION VARIANTS
  // ============================================================

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };


  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  const imageReveal = {
    hidden: {
      opacity: 0,
      scale: 0.96,
      y: 25,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  const cardReveal = {
    hidden: {
      opacity: 0,
      y: 40,
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


  const viewportSettings = {
    once: true,
    amount: 0.15,
  };


  return (
    <div className='text-white'>

      {/* ============================================================
          PAGE HEADER
          ============================================================ */}

      <Pages_Header
        badge_text={'The Story Behind Artivox'}
        heading1={'The People And Purpose'}
        heading2={'Behind Artivox'}
        discription={discription}
        button_text={'start a Project'}
      />


      {/* ============================================================
          ABOUT ARTIVOX — SECTION 1
          ============================================================ */}

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className='flex flex-col md:flex-row gap-10 lg:gap-24 justify-center md:items-start md:justify-start mx-6 lg:mx-14 lg:mt-28'
        >

        {/* LEFT SIDE */}

        <motion.div
          variants={imageReveal}
          className='w-full md:w-1/2 overflow-hidden'
        >
          <motion.img
            src={assets.About_img2}
            alt=""
            className='rounded-4xl'
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        </motion.div>


        {/* RIGHT SIDE */}

        <motion.div
          variants={sectionVariants}
          className='w-full md:w-1/2 flex items-start justify-start flex-col'
        >

          {/* Badge */}

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 px-3 py-2 border-t border-blue-700 rounded-md bg-[#0b0b18] w-fit"
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className='text-white'>About Artivox</span>
          </motion.div>


          {/* Heading */}

          <motion.div
            variants={fadeUp}
            className='mt-7'
            >

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              An Agency With Classic
            </h1>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/40 leading-tight mt-2">
              Skills and a Modern Edge
            </h1>

          </motion.div>


          {/* Content */}

          <motion.h2
            variants={fadeUp}
            className='text-lg mt-16'
          >
            Your Success. Our Priority
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className='text-sm text-[#6D7792] mt-3 max-w-xl'
            >
            We're a creative and technical studio that partners with businesses to build digital products that don't just look good, they work, convert, and scale.
          </motion.p>


          <motion.h2
            variants={fadeUp}
            className='text-lg mt-5'
          >
            Smart Process. Better results
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className='text-sm text-[#6D7792] mt-3 max-w-xl'
          >
            Every project we take on gets our full attention; strategy, design, and development treated as one connected discipline, not three separate jobs.
          </motion.p>


          {/* Button */}

          <motion.button onClick={()=> navigate('/contact')}
            variants={fadeUp}
            whileHover={{
              y: -3,
              scale: 1.02,
              boxShadow: "0 15px 40px rgba(48,48,242,0.20)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
  inline-flex
  items-center
  justify-center
  px-8
  py-3
  rounded-full
  bg-[#3030f2]
  hover:bg-[#3030f2]/70
  transition-all
  duration-300
  text-white
  whitespace-nowrap
  mt-12
  border
  border-[#5183FF]
  mb-10
  lg:mb-0
  mx-auto
  lg:mx-0
"
          >
            Book an Appointment
          </motion.button>

        </motion.div>

      </motion.div>





      {/* ============================================================
          TEAM MEMBERS
          ============================================================ */}

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="w-full text-white pt-8 relative overflow-hidden px-4 sm:px-10 lg:px-14 mt-16"
        >
        {/* center glow */}
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
        {/* Left glow */}

        <motion.div
          animate={{
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          hidden
          lg:block
          absolute
          left-5
          top-60
          w-76.25
          h-42.25
          bg-[linear-gradient(230deg,rgba(48,48,242,0.20),rgba(0,0,29,0.3),#000)]
          rounded-tr-4xl
          pointer-events-none
          blue-[2px]
          "
        />


        {/* Right glow */}

        <motion.div
          animate={{
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          
          className="
          hidden
          lg:block
          absolute
          right-5
          top-60
          w-75.5
          h-42
          -scale-x-100
          bg-[linear-gradient(230deg,rgba(48,48,242,0.20),rgba(0,0,29,0.3),#000)]
          rounded-tr-4xl
          pointer-events-none
          blur-[2px]
          "
          />


        {/* Content */}

        <motion.div
          variants={sectionVariants}
          className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10"
        >

          {/* Badge */}

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            className="flex items-center gap-2 px-3 py-2 border-t border-blue-700 rounded-md bg-[#0b0b18]"
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>Team Members</span>
          </motion.div>


          {/* Heading */}

          <motion.div variants={fadeUp}>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3">
              The Minds Making Things
            </h1>

            <h1 className="text-4xl md:text-6xl font-bold text-white/40">
              Hppens Every Day
            </h1>

          </motion.div>


          {/* Text */}

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-center text-md max-w-xl"
          >
            A tight-knit team of designers, developers, and strategists, each one obsessed with doing great work.
          </motion.p>

        </motion.div>

      </motion.div>


      {/* ============================================================
          CEO CARD
      ============================================================ */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={viewportSettings}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <AboutCEO_Card />
      </motion.div>


      {/* ================= ANIMATED AURORA BOTTOM GLOW ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
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

        {/* Flame lick — center, brighter, sways more */}
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

        {/* Fine highlight rim — reads as premium, not literal fire */}
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
        {/* Flicker overlay — slow, subtle brightness pulse */}
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

      {/* ============================================================
          ABOUT ARTIVOX — SECTION 2
      ============================================================ */}

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className='flex flex-col md:flex-row gap-10 lg:gap-24 justify-center md:items-start md:justify-start mx-6 lg:mx-14 my-20 lg:my-0 lg:mt-28 lg:mb-14'
      >

        {/* LEFT SIDE */}

        <motion.div
          variants={sectionVariants}
          className='w-full md:w-1/2 flex items-start justify-start flex-col'
          >

          {/* Badge */}

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 px-3 py-2 border-t border-blue-700 rounded-md bg-[#0b0b18] w-fit"
            >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className='text-white'>About Artivox</span>
          </motion.div>


          {/* Heading */}

          <motion.div
            variants={fadeUp}
            className='mt-7'
          >

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              We Work Smarter on
            </h1>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/40 leading-tight mt-2">
              Every Project
            </h1>

          </motion.div>


          {/* Content */}

          <motion.h2
            variants={fadeUp}
            className='text-lg mt-16'
          >
            We put Strategy Before Everything
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className='text-sm text-[#6D7792] mt-3 max-w-xl'
            >
            Clear timelines, honest communication, and decisions backed by real thinking, so projects move fast without cutting corners.
          </motion.p>


          <motion.h2
            variants={fadeUp}
            className='text-lg mt-5'
            >
            Craft and Code, Working as One
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className='text-sm text-[#6D7792] mt-3 max-w-xl'
          >
            Creative thinking and technical execution combined, delivering work that holds up not just at launch, but long after.
          </motion.p>


          {/* Button */}

          <motion.button onClick={()=> navigate('/contact')}
            variants={fadeUp}
            whileHover={{
              y: -3,
              scale: 1.02,
              boxShadow: "0 15px 40px rgba(48,48,242,0.20)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
            inline-flex
  items-center
  justify-center
  px-8
  py-3
  rounded-full
  bg-[#3030f2]
  hover:bg-[#3030f2]/70
  transition-all
  duration-300
  text-white
  whitespace-nowrap
  mt-12
  border
  border-[#5183FF]
  mb-10
  lg:mb-0
  mx-auto
  lg:mx-0
  "
  >
            Book an Appointment
          </motion.button>

        </motion.div>


        {/* RIGHT SIDE */}

        <motion.div
          variants={imageReveal}
          className='w-full md:w-1/2 overflow-hidden'
        >

          <motion.img
            src={assets.AboutUs_image}
            alt=""
            className='rounded-4xl'
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />

        </motion.div>

      </motion.div>
      {/* ============================================================
          TOOLS HEADER
      ============================================================ */}

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="w-full text-white pt-8 relative overflow-hidden px-4 sm:px-10 lg:px-14 mt-16"
        >
        {/* center glow for below lg */}
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

        {/* Left glow */}

        <motion.div
          animate={{
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          hidden
          lg:block
          absolute
          left-5
    top-60
    w-76.25
    h-42.25
    bg-[linear-gradient(230deg,rgba(48,48,242,0.20),rgba(0,0,29,0.3),#000)]
    rounded-tr-4xl
    pointer-events-none
    blue-[2px]
    "
        />


        {/* Right glow */}

        <motion.div
          animate={{
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="
          hidden
    lg:block
    absolute
    right-5
    top-60
    w-75.5
    h-42
    -scale-x-100
    bg-[linear-gradient(230deg,rgba(48,48,242,0.20),rgba(0,0,29,0.3),#000)]
    rounded-tr-4xl
    pointer-events-none
    blur-[2px]
    "
    />


        {/* Content */}

        <motion.div
          variants={sectionVariants}
          className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10"
          >

          {/* Badge */}

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            className="flex items-center gap-2 px-3 py-2 border-t border-blue-700 rounded-md bg-[#0b0b18]"
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>Tools</span>
          </motion.div>


          {/* Heading */}

          <motion.div variants={fadeUp}>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3">
              Tools and Technologies
            </h1>

            <h1 className="text-4xl md:text-6xl font-bold text-white/40">
              Powering Our Work
            </h1>

          </motion.div>


          {/* Text */}

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-center text-md max-w-xl"
            >
            We use industry-leading tools to design, build, and deliver products that perform at every level.
          </motion.p>




        </motion.div>

      </motion.div>


      {/* ============================================================
          TOOL CARDS
          ============================================================ */}

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="grid grid-cols-1 md:grid-cols-3 mx-6 lg:mx-14 gap-7 mt-24"
      >

        {toolsAndTech.map((item, i) => (
          
          <motion.div
          key={i}
          variants={cardReveal}
            whileHover={{
              y: -8,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
            group
            relative
              overflow-hidden
              flex flex-col items-start justify-start
              p-6
              rounded-2xl
              border
              border-white/10
              bg-linear-to-t
              from-[#000C23]
              to-[#08090A]
              transition-all
              duration-500
              hover:border-[#3B82F6]/40
              hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
              "
              >

            {/* Gradient Glow */}

            <div
              className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
                transition-opacity
                duration-500
                bg-linear-to-br
                from-blue-500/10
                via-transparent
                to-cyan-400/10
                pointer-events-none
                "
                />


            {/* Icon */}

            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 2,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
              relative
                z-10
                bg-white/90
                flex
                items-center
                justify-center
                w-10.5
                h-10.5
                rounded-full
                transition-all
                duration-500
                group-hover:bg-white
                group-hover:shadow-lg
                "
                >
              {item.icon}
            </motion.div>


            {/* Title */}

            <h2
              className="
              relative
              z-10
              text-2xl
              mt-3
                transition-all
                duration-500
                group-hover:text-white
                group-hover:translate-x-1
                "
            >
              {item.Title}
            </h2>


            {/* Define */}

            <p
              className="
              relative
              z-10
              text-sm
              text-[#6D7792]
                mt-1
                transition-colors
                duration-500
                group-hover:text-[#9AA7C7]
                "
                >
              {item.define}
            </p>


            {/* Description */}

            <p
              className="
                relative
                z-10
                text-sm
                text-[#6D7792]
                mt-10
                transition-colors
                duration-500
                group-hover:text-[#B8C3DD]
                "
            >
              {item.description}
            </p>

          </motion.div>

))}

      </motion.div>


      {/* ============================================================
          FAQ
      ============================================================ */}

      <FAQs />

      {/* ============================================================
          CTA
          ============================================================ */}

      <CTA />
      {/* Component-scoped keyframes */}
      <style>{`
        @keyframes flameSwayA {
          0%   { transform: translate(0px, 0px) scaleY(1); }
          25%  { transform: translate(5px, -5px) scaleY(1.06); }
          50%  { transform: translate(-3px, 3px) scaleY(0.96); }
          75%  { transform: translate(3px, -2px) scaleY(1.03); }
          100% { transform: translate(0px, 0px) scaleY(1); }
          }
          @keyframes flameSwayB {
            0%   { transform: translate(0px, 0px) scaleY(1); }
            30%  { transform: translate(-6px, -3px) scaleY(1.08); }
          60%  { transform: translate(4px, 4px) scaleY(0.94); }
          100% { transform: translate(0px, 0px) scaleY(1); }
        }
        @keyframes flameSwayC {
          0%   { transform: translate(-50%, 0px) scaleY(1) scaleX(1); }
          20%  { transform: translate(-50%, -8px) scaleY(1.12) scaleX(0.96); }
          45%  { transform: translate(-50%, 2px) scaleY(0.92) scaleX(1.04); }
          70%  { transform: translate(-50%, -5px) scaleY(1.08) scaleX(0.98); }
          100% { transform: translate(-50%, 0px) scaleY(1) scaleX(1); }
          }
          @keyframes flameFlicker {
            0%, 100% { opacity: 0.5; }
            20% { opacity: 0.75; }
            40% { opacity: 0.42; }
            60% { opacity: 0.8; }
          80% { opacity: 0.55; }
          }
          @keyframes pingSlow {
            0%   { transform: scale(1); opacity: 0.75; }
            75%, 100% { transform: scale(2.4); opacity: 0; }
            }
            .flame-a { animation: flameSwayA 4.2s ease-in-out infinite; }
            .flame-b { animation: flameSwayB 5s ease-in-out infinite; }
            .flame-c {
              left: 50%;
              animation: flameSwayC 3.2s ease-in-out infinite;
              }
              .flame-flicker { animation: flameFlicker 2.2s ease-in-out infinite; }
              .animate-ping-slow { animation: pingSlow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite; }
              
              @media (prefers-reduced-motion: reduce) {
                .flame-a, .flame-b, .flame-c, .flame-flicker, .animate-ping-slow {
                  animation: none;
                  }
                  }
                  `}</style>

    </div>
              
  )
}

export default AboutUs

