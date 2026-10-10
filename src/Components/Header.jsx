import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useAppContext } from "../Context/AppContext";

const Header = () => {

  const {navigate} = useAppContext()
  
  // Parent controls the timing of all children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

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

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#071525] text-white">

      {/* ================================================= */}
     {/* ================= VIDEO BACKGROUND ================= */}
<div className="absolute inset-0 z-0 overflow-hidden">

  <motion.video
    className="absolute inset-0 h-full w-full object-cover"
    src={assets.Header_image}
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    initial={{
      scale: 1.08,
      opacity: 0,
    }}
    animate={{
      scale: 1,
      opacity: 1,
    }}
    transition={{
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    }}
  />

 

</div>


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Navbar */}
        <Navbar />


        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        {/* <div className="flex flex-1 items-center justify-center px-5 sm:px-6 lg:px-8"> */}
           <div className="flex flex-1 justify-start items-start pt-36 md:pt-0 md:items-center md:justify-center px-5 sm:px-6 lg:px-8">
          <motion.div
            className="w-full max-w-5xl text-center md:mt-14"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* ================= BADGE ================= */}

            <motion.div
              variants={itemVariants}
              className="
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/10
                px-3
                py-2
                backdrop-blur-md
                mt-5
              "
            >

              <span className="text-[11px] text-white/75 sm:text-sm">
                We Design Websites That Matter, Users Can't Resist
              </span>

              <div
                className="
                  flex
                  h-6
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#3030f2]
                "
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </div>

            </motion.div>


            {/* ================= HEADING ================= */}

            <motion.h1
              variants={itemVariants}
              className="
                mt-8
                font-bold
                tracking-tight
                text-white
                text-[42px]
                leading-[1.16]
                sm:text-[56px]
                lg:text-[81.47px]
              "
            >

              Design That Powers

              <br />

              <motion.span
                className="mt-4 inline-block sm:mt-0"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Real Business Growth
              </motion.span>

            </motion.h1>


            {/* ================= DESCRIPTION ================= */}

            <motion.p
              variants={itemVariants}
              className="
                mx-auto
                mt-6
                max-w-125
                leading-7
                text-[#CBD5E1]
                text-sm
                sm:text-base
                md:max-w-3xl
                md:text-lg
              "
            >
              Artivox is an independent design studio creating identities,
              digital products, and websites for businesses ready to look as
              good as they think.
            </motion.p>


            {/* ================= CTA ================= */}

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
                mt-9
                inline-flex
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
              Start a Project
            </motion.button>


            {/* ================= AVAILABILITY ================= */}

            <motion.div
              variants={itemVariants}
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-green-500"
                animate={{
                  opacity: [1, 0.45, 1],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span className="text-sm text-white/60">
                4 Slots Left
              </span>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Header;