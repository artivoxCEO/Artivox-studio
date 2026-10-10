import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  CalendarDays,
} from "lucide-react";

import { assets } from "../assets/assets";
import Pages_Header from "../Components/Pages_Header";
import FAQs from "../Components/FAQs";


const ContactUs = () => {

  // =====================================================
  // CONTACT INFORMATION
  // =====================================================

  const contactInfo = {
    email: "nay@artivoxstudio.com",
    phone: "+1 (717) 550-1675",
    calendly: "https://calendly.com/designer-cs-73/meet?month=2026-09",
  };


  // =====================================================
  // PAGE DESCRIPTION
  // =====================================================

  const description =
    "Whether you're starting from scratch or leveling up what you have, tell us about your project and we'll take it from there.";


  // =====================================================
  // MAIN CONTAINER ANIMATION
  // =====================================================

  const contactContainer = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        duration: 0.5,
        staggerChildren: 0.12,
      },
    },
  };


  // =====================================================
  // CONTENT ANIMATION
  // =====================================================

  const contactItem = {
    hidden: {
      opacity: 0,
      y: 35,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  // =====================================================
  // CEO IMAGE ANIMATION
  // =====================================================

  const imageAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.94,
    },

    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  // =====================================================
  // FAQ ANIMATION
  // =====================================================

  const faqAnimation = {
    hidden: {
      opacity: 0,
      y: 70,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  return (

    <div className="text-white">


      {/* ================================================= */}
      {/* PAGE HEADER */}
      {/* ================================================= */}

      <Pages_Header
        badge_text="lets work together"
        heading1="Have a Project in Mind?"
        heading2="Let's Make it Real"
        discription={description}
        button_text="Discover Our Story"
      />


      {/* ================================================= */}
      {/* CONTACT SECTION */}
      {/* ================================================= */}

      <motion.section
        className="
          w-full
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
          mt-3
         
          lg:mt-20
          pb-3
          lg:pb-24
        "

        variants={contactContainer}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.08,
        }}
      >

        {/* ================================================= */}
        {/* CONTACT GRID */}
        {/* ================================================= */}

        <div
          className="
            max-w-295
            mx-auto
            grid
            lg:grid-cols-[1.2fr_0.50fr]
            gap-6
            
          "
        >


          {/* ================================================= */}
          {/* MAIN CONTACT CARD */}
          {/* ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              border
              border-white/8
              bg-white/2.5
              min-h-90
              sm:min-h-97.5
              lg:min-h-139.75
                hover:border-[#3030f2]/20
                hover:bg-[#0052ff]/3
            "
          >

            {/* --------------------------------------------- */}
            {/* BACKGROUND GLOW */}
            {/* --------------------------------------------- */}

            <div
              className="
                absolute
                -left-32
                -bottom-32
                w-72
                h-72
                rounded-full
                bg-[#3030f2]/6
                blur-[100px]
                pointer-events-none
              "
            />


            <div
              className="
                relative
                h-full
                grid
                sm:grid-cols-[231px_1fr]
                lg:grid-cols-[331.13px_1fr]
                gap-7
                sm:gap-8
                p-5
                sm:p-6
                lg:p-7
              "
            >


              {/* ================================================= */}
              {/* CEO IMAGE */}
              {/* ================================================= */}

              <motion.div
                variants={imageAnimation}
                className="
                  relative
                  w-full
                
                  sm:h-full
                 
                  overflow-hidden
                  rounded-4xl
                  border
                  border-white/8
                  bg-white/3
                "
              >

                <motion.img
                  src={assets.Contact_pic}
                  alt="Founder and CEO"
                  className="
                    w-[331.13px]
                    h-[491.45px]
                    object-cover
                    object-top
                  "

                  whileHover={{
                    scale: 1.035,
                  }}

                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />


                {/* IMAGE GRADIENT */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-32
                    bg-linear-to-t
                    from-black/70
                    to-transparent
                    pointer-events-none
                  "
                />


                {/* CEO NAME */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                  "
                >

                  <p className="
                    text-base
                    sm:text-lg
                    font-medium
                    text-white
                  ">
                    Nayamat Ali
                  </p>

                  <p className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/70
                  ">
                    Founder & CEO
                  </p>

                </div>

              </motion.div>


              {/* ================================================= */}
              {/* MAIN MESSAGE */}
              {/* ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  py-3
                  sm:py-5
                  lg:py-7
                "
              >

                {/* HEADING */}

                <motion.h2
                  variants={contactItem}
                  className="
                    text-4xl
                    sm:text-5xl
                    lg:text-[3.2rem]
                    xl:text-[3.6rem]
                    font-semibold
                    leading-[1.2]
                    tracking-[-0.035em]
                  "
                >
                  Let's Build
                  <span className="
                    block
                    text-[#9CA3AF]
                    mt-1
                  ">
                    Something
                  </span>

                  <span className="block mt-1">
                    Great
                  </span>
                </motion.h2>


                {/* DESCRIPTION */}

                <motion.p
                  variants={contactItem}
                  className="
                    mt-6
                   w-75
                    text-xs
                    sm:text-sm
                    leading-relaxed
                    text-[#9CA3AF]
                  "
                >
                  Have a idea? or a product that needs a
                  rethink, or a brand ready for its next chapter? I do love to hear about it.
                </motion.p>


                {/* BOOK CALL */}

                <motion.div
                  variants={contactItem}
                  className="mt-10"
                >
                  <a
                    href={contactInfo.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      group relative isolate
      inline-flex w-full
      items-center justify-center
      gap-3
      overflow-hidden
      rounded-2xl
      border border-white/10
      bg-[#3030f2]
      px-6 py-3.5
      text-sm font-medium text-white
      shadow-[0_8px_30px_rgba(0,82,255,0.18)]
      transition-all duration-300 ease-out

      hover:-translate-y-1
      hover:border-white/20
      hover:bg-[#3030f2]
      hover:shadow-[0_12px_40px_rgba(0,82,255,0.30)]

      active:translate-y-0
      active:scale-[0.99]
    "
                  >
                    {/* Subtle shine */}
                    <span
                      className="
        pointer-events-none
        absolute inset-0
        -translate-x-full
        bg-linear-to-r
        from-transparent
        via-white/15
        to-transparent
        transition-transform
        duration-700
        ease-out
        group-hover:translate-x-full
      "
                    />

                    {/* Top highlight */}
                    <span
                      className="
        pointer-events-none
        absolute inset-x-0 top-0
        h-px
        bg-white/30
        opacity-60
      "
                    />

                    <CalendarDays
                      className="
        relative z-10
        h-4 w-4
        transition-transform duration-300
        group-hover:scale-110
      "
                    />

                    <span className="relative z-10">
                      Book a Call Now
                    </span>

                    <ArrowUpRight
                      className="
        relative z-10
        h-4 w-4
        transition-all duration-300
        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
                    />
                  </a>
                </motion.div>
              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* RIGHT CONTACT CARDS */}
          {/* ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-10
            "
          >

            {/* ================================================= */}
            {/* EMAIL CARD */}
            {/* ================================================= */}

            <motion.a
              variants={contactItem}
              href={`mailto:${contactInfo.email}`}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/8
                bg-white/2.5
                px-5
                py-5
                min-h-31.25
                transition-all
                duration-300
                 hover:border-[#3030f2]/20
                hover:bg-[#3030f2]/3
              "
            >

              <div className="
                flex
                items-center
                gap-3
              ">

                <Mail
                  className="
                    w-5
                    h-5
                    text-white/70
                    group-hover:text-[#3030f2]
                    transition-colors
                  "
                />

                <span className="
                  text-[22.46px]
                  font-medium
                ">
                  Email
                </span>
                <span
                  className="
                    ml-auto
                    rounded-sm
                  bg-[#3030f2]
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-white
                  "
                >
                  24/7
                </span>

              </div>


              <div className="
                mt-4
                h-px
                bg-white/[0.07]
              " />


              <p className="
                mt-4
                text-[#9CA3AF]
                text-[17.47px]
                break-all
              ">
                {contactInfo.email}
              </p>

            </motion.a>


            {/* ================================================= */}
            {/* PHONE CARD */}
            {/* ================================================= */}

            {/* <motion.a
              variants={contactItem}
              href={`tel:${contactInfo.phone}`}

              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/8
                bg-white/2.5
                px-5
                py-5
                min-h-31.25
                transition-all
                duration-300
                 hover:border-[#3030f2]/20
                hover:bg-[#0052ff]/3
              "
            >

              <div className="
                flex
                items-center
                gap-3
              ">

                <Phone
                  className="
                    w-5
                    h-5
                    text-white/70
                    group-hover:text-[#3030f2]
                    transition-colors
                  "
                />

                <span className="
                  text-[22.46px]
                  font-medium
                ">
                  Phone
                </span>

              </div>


              <div className="
                mt-4
                h-px
                bg-white/[0.07]
              " />


              <p className="
                mt-4
                text-[#9CA3AF]
                text-[17.47px]
              ">
                {contactInfo.phone}
              </p>

            </motion.a> */}


            {/* ================================================= */}
            {/* BOOKING CARD */}
            {/* ================================================= */}

            <motion.a
              variants={contactItem}
              href={contactInfo.calendly}
              target="_blank"
              rel="noopener noreferrer"

              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/8
                bg-white/2.5
                px-5
                py-5
                min-h-31.25
                transition-all
                duration-300
                hover:border-[#3030f2]/20
                hover:bg-[#0052ff]/3
              "
            >

              <div className="
                flex
                items-center
                gap-3
              ">

                <CalendarDays
                  className="
                    w-5
                    h-5
                    text-white/70
                    group-hover:text-[#3030f2]
                    transition-colors
                  "
                />

                <span className="
                  text-[22.46px]
                  font-medium
                ">
                  Schedule a Call
                </span>

                <span
                  className="
                    ml-auto
                    rounded-sm
                    bg-[#3030f2]
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-white
                  "
                >
                  CALL
                </span>

              </div>


              <div className="
                mt-4
                h-px
                bg-white/[0.07]
              " />


              <div className="
                mt-4
                flex
                items-center
                justify-between
                gap-3
              ">

                <p className="
                text-[#9CA3AF]
                text-[17.47px]
                ">
                  Choose a time that works for you.
                </p>

                <ArrowUpRight
                  className="
                    shrink-0
                    w-4
                    h-4
                    text-slate-500
                    group-hover:text-[#3030f2]
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    transition-all
                  "
                />

              </div>

            </motion.a>

          </div>

        </div>

      </motion.section>
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
      


      {/* ================================================= */}
      {/* FAQ */}
      {/* ================================================= */}

      <motion.div
        variants={faqAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
      >

        <FAQs />

      </motion.div>
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
  );
};


export default ContactUs;