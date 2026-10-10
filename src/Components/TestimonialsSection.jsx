import React from "react";
import { assets } from "../assets/assets";
import TestimonialData from "./TestimonialData";
import { motion } from "motion/react";

const TestimonialsSection = () => {

  // ================= SECTION ANIMATION =================

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // ================= FADE UP =================

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
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

  // ================= LOGO ANIMATION =================

  const logoVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="
        w-full
        text-white
        pt-8
        relative
        overflow-hidden
        px-2
        lg:px-14
      "
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={sectionVariants}
    >

      {/* ================================================= */}
      {/* CENTER GLOW — BELOW LG */}
      {/* ================================================= */}

      <motion.div
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
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================================================= */}
      {/* LEFT GLOW — LG+ */}
      {/* ================================================= */}

      <motion.div
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
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================================================= */}
      {/* RIGHT GLOW — LG+ */}
      {/* ================================================= */}

      <motion.div
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
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />


      {/* ================================================= */}
      {/* HEADER CONTENT */}
      {/* ================================================= */}

      <motion.div
        className="
          max-w-5xl
          mx-auto
          flex
          flex-col
          items-center
          text-center
          gap-7
          sm:gap-10
          relative
          z-10
        "
        variants={sectionVariants}
      >

        {/* ================= BADGE ================= */}

        <motion.div
          variants={fadeUp}
          whileHover={{
            y: -2,
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
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
          <span className="w-2 h-2 bg-white rounded-full shrink-0"></span>

          <span className="text-sm sm:text-base">
            Testimonials
          </span>
        </motion.div>


        {/* ================= HEADING ================= */}

        <motion.div
          variants={fadeUp}
          className="w-full"
        >

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              mb-3
              sm:mb-5
            "
          >
            What Our Clients Say
          </h1>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-white/40
            "
          >
            About Working With Us
          </h1>

        </motion.div>


        {/* ================= DESCRIPTION ================= */}

        <motion.p
          variants={fadeUp}
          className="
            text-white/40
            text-sm
            sm:text-base
            leading-6
            max-w-2xl
            px-2
          "
        >
          Real feedback from real Partners, brands we have helped design,
          build and grow.
        </motion.p>


        {/* ================= CLIENT LOGOS ================= */}

        <motion.div
          variants={sectionVariants}
          className="
            w-full
            flex
            flex-wrap
            items-center
            justify-center
            gap-6
            sm:gap-10
            md:gap-16
            mt-2
            sm:mt-4
          "
        >

          {/* Logo 1 */}

          <motion.img
            variants={logoVariants}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            src={assets.Testimonial_Logo_1}
            alt="Client logo"
            className="
              w-auto
              max-w-25
              sm:max-w-32.5
              md:max-w-none
              object-contain
            "
          />


          {/* Logo 2 */}

          <motion.img
            variants={logoVariants}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            src={assets.Testimonial_Logo_2}
            alt="Client logo"
            className="
              w-auto
              max-w-25
              sm:max-w-32.5
              md:max-w-none
              object-contain
            "
          />


          {/* Logo 3 */}

          <motion.img
            variants={logoVariants}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            src={assets.Testimonial_Logo_3}
            alt="Client logo"
            className="
              w-auto
              max-w-25
              sm:max-w-32.5
              md:max-w-none
              object-contain
            "
          />

        </motion.div>

      </motion.div>


      {/* ================================================= */}
      {/* TESTIMONIAL CARD */}
      {/* ================================================= */}

      <motion.div
        className="
          relative
          z-10
          mt-10
          sm:mt-14
        "
        variants={fadeUp}
      >
        <TestimonialData />
      </motion.div>


      {/* ================================================= */}
      {/* BOTTOM GLOW */}
      {/* ================================================= */}

      <motion.div
        className="
          relative
          h-40
          sm:h-50
          lg:h-55
          mt-5
          overflow-hidden
        "
        variants={fadeUp}
      >

        {/* ================= LEFT BLUR ================= */}

        <motion.div
          className="
            absolute
            left-[-10%]
            sm:left-0
            bottom-10
            w-[70%]
            sm:w-[55%]
            h-12.5
            sm:h-16
            bg-[#3030F2]/40
            blur-[60px]
            sm:blur-[70px]
          "
          animate={{
            x: [0, 15, 0],
            opacity: [0.55, 0.8, 0.55],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* ================= RIGHT BLUR ================= */}

        <motion.div
          className="
            absolute
            right-[-10%]
            sm:right-0
            bottom-10
            w-[60%]
            sm:w-[45%]
            h-12.5
            sm:h-16
            bg-[#3030F2]/40
            blur-[60px]
            sm:blur-[70px]
          "
          animate={{
            x: [0, -15, 0],
            opacity: [0.55, 0.8, 0.55],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />


        {/* ================= BOTTOM MASK ================= */}

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

    </motion.section>
  );
};

export default TestimonialsSection;

