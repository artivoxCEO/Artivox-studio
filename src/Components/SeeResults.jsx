import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { assets } from "../assets/assets";

const SeeResults = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  const cardData = [
    {
      title: "Unlock Your Creative Flow",
      image: assets.Portfolio_image_5,
    },
    {
      title: "Design Your Digital Future",
      image: assets.Portfolio_image_6,
    },
    {
      title: "Build with Passion, Ship with Pride",
      image: assets.Portfolio_image_3,
    },
    {
      title: "Think Big, Code Smart",
      image: assets.Portfolio_image_4,
    },
    {
      title: "Create. Innovate. Grow.",
      image: assets.Portfolio_image_7,
    },
    {
      title: "Ideas Into Digital Experiences",
      image: assets.Portfolio_image_8,
    },
    {
      title: "Digital Experiences That Convert",
      image: assets.Portfolio_image_9,
    },
    {
      title: "Built For What's Next",
      image: assets.Portfolio_image_10,
    },
  ];

  // =========================================================
  // ANIMATION VARIANTS
  // =========================================================

  const headerVariants = {
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

  const cardsContainerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardRevealVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.97,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        py-16
        sm:py-20
        lg:py-24
      "
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
    >
    
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
    left-10
    top-40
    w-76.25
    h-42.25
   bg-[linear-gradient(230deg,rgba(48,48,242,0.20),rgba(0,0,29,0.3),#000)]
    rounded-tr-4xl
    pointer-events-none
    blue-[2px]
  "
/>

{/* ================= RIGHT GLOW — LG+ ================= */}
<div
  className="
    hidden
    lg:block
    absolute
    right-10
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

      {/* =========================================================
          HEADER
      ========================================================= */}

      <motion.div
        variants={headerVariants}
        className="
          relative
          z-10
          mx-auto
          mb-20
          flex
          max-w-4xl
          flex-col
          items-center
          px-5
          text-center
          md:mb-32
        "
      >
        {/* Badge */}

        <motion.div
          whileHover={{
            y: -2,
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="
            relative
            flex
            items-center
            gap-3
            rounded-[10px]
            border-t
            border-blue-700
            bg-linear-to-b
            from-white/10
            to-[#3030F2]/10
            px-4
            py-2
            shadow-[0_0_30px_rgba(48,48,242,0.08)]
          "
        >
          <motion.span
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-2
              w-2
              rounded-full
              bg-white
            "
          />

          <span
            className="
              font-['Rethink_Sans']
              text-sm
              text-white
              sm:text-base
            "
          >
            See the Results
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          variants={headerVariants}
          className="
            mt-7
            max-w-175
            
            text-4xl
            font-bold
            leading-[1.08]
            tracking-[-0.03em]
            text-white
            sm:text-5xl
            lg:text-[54px]
          "
        >
          The Trusted Rise Partner

          <span className="block text-white/40">
            For Businesses & Startups
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          variants={headerVariants}
          className="
            mt-5
            max-w-150
            
            text-sm
            leading-6
            text-[#6D7792]
            sm:text-base
          "
        >
          From first impression to final build, we cover every layer
          of your digital presence.
        </motion.p>
      </motion.div>

      {/* =========================================================
          MARQUEE
      ========================================================= */}

      <div
        className="
          relative
          w-full
          overflow-hidden
        "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-16
            bg-linear-to-r
            from-black
            to-transparent
            sm:w-32
            lg:w-48
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-16
            bg-linear-to-l
            from-black
            to-transparent
            sm:w-32
            lg:w-48
          "
        />

        {/* =====================================================
            MARQUEE TRACK
        ===================================================== */}

        <motion.div
          variants={cardsContainerVariants}
          className="flex w-max"
          style={{
            animation: "portfolioMarquee 45s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* FIRST SET */}

          <div className="flex shrink-0 gap-5 px-2.5 sm:gap-6">
            {cardData.map((card, index) => (
              <motion.div
                key={`first-${index}`}
                variants={cardRevealVariants}
              >
                <PortfolioCard card={card} />
              </motion.div>
            ))}
          </div>

          {/* DUPLICATE SET */}

          <div className="flex shrink-0 gap-5 px-2.5 sm:gap-6">
            {cardData.map((card, index) => (
              <motion.div
                key={`second-${index}`}
                variants={cardRevealVariants}
              >
                <PortfolioCard card={card} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          MARQUEE ANIMATION
      ========================================================= */}

      <style>
        {`
          @keyframes portfolioMarquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .portfolio-marquee {
              animation-play-state: paused !important;
            }
          }
        `}
      </style>
    </motion.section>
  );
};


/* =========================================================
   PORTFOLIO CARD
========================================================= */

const PortfolioCard = ({ card }) => {
  return (
    <motion.article
      tabIndex={0}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      whileFocus={{
        y: -8,
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="
        group
        relative
        h-65
        w-75
        shrink-0
        cursor-pointer
        overflow-hidden
        rounded-[22px]
        border
        border-white/8
        bg-[#090A14]
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        outline-none
        transition-all
        duration-500
        hover:border-[#3030F2]/50
        hover:shadow-[0_25px_80px_rgba(48,48,242,0.18)]
        focus:border-[#3030F2]/50
        sm:h-80
        sm:w-100
        lg:h-97.25
        lg:w-123.5
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <motion.img
        src={card.image}
        alt={card.title}
        loading="lazy"
        draggable="false"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-110
          group-focus:scale-110
        "
      />

      {/* =====================================================
          DARK BASE OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/10
          transition-all
          duration-500
          group-hover:bg-black/45
          group-focus:bg-black/45
        "
      />

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-2/3
          bg-linear-to-t
          from-black/90
          via-black/30
          to-transparent
          opacity-70
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* =====================================================
          BLUE GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          left-1/2
          h-40
          w-40
          -translate-x-1/2
          rounded-full
          bg-[#3030F2]/30
          blur-[70px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          group-focus:opacity-100
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          flex
          translate-y-3
          items-end
          justify-between
          gap-5
          p-5
          opacity-0
          transition-all
          duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
          group-focus:translate-y-0
          group-focus:opacity-100
          sm:p-6
        "
      >
        <div>
          {/* Small label */}

          <span
            className="
              mb-2
              inline-block
              rounded-full
              border
              border-white/15
              bg-white/10
              px-3
              py-1
              font-['Rethink_Sans']
              text-[10px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-white/80
              backdrop-blur-md
            "
          >
            Featured Work
          </span>

          {/* Title */}

          <h3
            className="
              max-w-82.5
              font-['Rethink_Sans']
              text-lg
              font-semibold
              leading-tight
              text-white
              sm:text-xl
            "
          >
            {card.title}
          </h3>
        </div>

        {/* Arrow */}

        <motion.div
          whileHover={{
            rotate: 45,
            scale: 1.08,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            text-white
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:bg-[#3030F2]
            group-focus:bg-[#3030F2]
          "
        >
          ↗
        </motion.div>
      </div>
    </motion.article>
  );
};

export default SeeResults;

