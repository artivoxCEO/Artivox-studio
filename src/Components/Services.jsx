import React from "react";
import { assets } from "../assets/assets";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const Services = () => {
  const ServiesCardDetail = [
    {
      icon: assets.services_logo,
      badge: "Branding",
      heading: "Logo Design & Branding",
      descrption:
        "Our brand is more than a logo. We build complete visual identities — mark, typography, colour, and guidelines — that make you instantly recognizable and impossible to forget.",
      check1: "Logo design + full brand guidelines",
      check2: "Typography, color system & brand assets",
    },
    {
      icon: assets.services_UIUX,
      badge: "Design",
      heading: "UI/UX Design",
      descrption:
        "We design interfaces that feel intuitive from the first click. Every screen is crafted around how real users think, move, and decide; clean, purposeful, and conversion-focused.",
      check1: "User research, wireframes & prototypes",
      check2: "High-fidelity UI ready for development",
    },
    {
      icon: assets.services_Web,
      badge: "Web",
      heading: "Web Design & Development",
      descrption:
        "Fast, responsive, and built to perform. We design and develop websites that look sharp on every device and are engineered to grow with your business.",
      check1: "Custom design + responsive development",
      check2: "SEO-ready, fast-loading & scalable build",
    },
    {
      icon: assets.services_sass,
      badge: "SaaS",
      heading: "SaaS Product Design",
      descrption:
        "I design logos and full branding that makes your business look professional and unique. Clean, modern visuals that match your brand identity. Simple designs that leave a strong and lasting impression.",
      check1: "A simple, unique logo for your brand.",
      check2: "Colors, fonts, and usage rules for consistency.",
    },
    {
      icon: assets.services_framer,
      badge: "No-Code",
      heading: "Framer & Webflow",
      descrption:
        "We build high-performance websites on Framer and Webflow. Pixel-perfect, easy to manage, and launched without the overhead of custom code.",
      check1: "Custom Framer & Webflow development",
      check2: "CMS setup, animations & client handoff",
    },
    {
      icon: assets.Shopify_icon,
      badge: "High Converting",
      heading: "Shopify Store Design",
      descrption:
        "We build high-performance Shopify stores that are fast, pixel-perfect, easy to manage, and built to convert without the complexity of custom code.",
      check1: "Shopify Store design",
      check2: "other essential set ups to launch",
    },
  ];

  // ================= SECTION ANIMATION =================

  const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

  // ================= HEADER ANIMATION =================

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

  // ================= CARD ANIMATION =================

 const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
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
    <motion.div
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-14 sm:py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={sectionVariants}
    >
      {/* ================================================= */}
      {/* CENTER GLOW — BELOW LG */}
      {/* ================================================= */}

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

      {/* ================================================= */}
      {/* LEFT GLOW — LG+ */}
      {/* ================================================= */}

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

      {/* ================================================= */}
      {/* RIGHT GLOW — LG+ */}
      {/* ================================================= */}

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
    rounded-tr-4xl
    pointer-events-none
    blur-[2px]
    bg-[linear-gradient(230deg,rgba(48,48,242,0.20),rgba(0,0,29,0.3),#000)]
  "
/>

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <motion.div
        variants={headerVariants}
        className="flex flex-col items-center justify-center mb-32 relative z-10"
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
            flex
            items-center
            gap-3
            px-5
            py-2.5
            border-t
            border-[#3030F2]
            rounded-md
            bg-linear-to-b
            from-white/10
            to-[#3030F2]/10
            w-fit
          "
        >
          <span className="w-2 h-2 bg-white rounded-full shrink-0"></span>

          <span className="text-sm sm:text-base text-white">
            Our Services
          </span>
        </motion.div>

        {/* Heading */}

        <div className="mt-6 sm:mt-7">
          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              leading-tight
              text-white
            "
          >
            Everything Your Brand
          </h1>

          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              text-white/40
              leading-tight
              mt-1
            "
          >
            Needs, Under One Roof
          </h1>
        </div>

        {/* Description */}

        <p
          className="
            text-white/40
            text-sm
            sm:text-base
            leading-6
            mt-5
            max-w-xl
            text-center
          "
        >
          From 1st impression to final build, we cover every layer
          of your digital presence.
        </p>
      </motion.div>

      {/* ================================================= */}
      {/* SERVICES CARDS */}
      {/* ================================================= */}

      <motion.div
        className="relative z-10"
        variants={sectionVariants}
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
            lg:gap-8
            mt-10
            sm:mt-14
            lg:mt-20
          "
        >
          {ServiesCardDetail.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.35,
                  ease: "easeOut",
                },
              }}
              className="
                group
                relative
                w-full
                min-h-90.25
                rounded-[21px]
                overflow-hidden
                p-7.5
                text-white

                border
                border-white/8

                bg-[#080914]

                shadow-[0_20px_60px_rgba(0,0,0,0.25)]

                transition-all
                duration-500
                ease-out

                hover:border-[#3030F2]/40
                hover:shadow-[0_25px_80px_rgba(48,48,242,0.18)]
              "
            >
              {/* ================= BACKGROUND IMAGE ================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-cover
                  bg-center
                  opacity-[0.32]

                  transition-all
                  duration-700
                  ease-out

                  group-hover:scale-105
                  group-hover:opacity-[0.42]
                "
                style={{
                  backgroundImage: `url(${assets.Serveices_Card_image})`,
                }}
              />

              {/* ================= DARK OVERLAY ================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-b
                  from-[#0B0C18]/50
                  via-[#080914]/70
                  to-[#050509]/95
                "
              />

              {/* ================= TOP BLUE GLOW ================= */}

              <div
                className="
                  absolute
                  -top-24
                  -right-24
                  w-48
                  h-48
                  rounded-full
                  bg-[#3030F2]/10
                  blur-3xl

                  transition-all
                  duration-700

                  group-hover:bg-[#3030F2]/20
                  group-hover:scale-125
                "
              />

              {/* ================= BOTTOM BLUE GLOW ================= */}

              <div
                className="
                  absolute
                  -bottom-32
                  left-1/2
                  -translate-x-1/2
                  w-64
                  h-40
                  rounded-full
                  bg-[#3030F2]/5
                  blur-3xl

                  transition-all
                  duration-700

                  group-hover:bg-[#3030F2]/10
                "
              />

              {/* ================= INNER BORDER ================= */}

              <div
                className="
                  absolute
                  inset-px
                  rounded-[20px]
                  border
                  border-white/2.5
                  pointer-events-none
                "
              />

              {/* ================= CARD CONTENT ================= */}

              <div className="relative z-10 flex h-full flex-col gap-5.25">

                {/* ================= TOP ================= */}

                <div className="flex items-center justify-between">

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="
                      flex
                      w-12.75
                      h-11.75
                      items-center
                      justify-center
                      rounded-[10px]

                      bg-[#090A14]/90
                      border
                      border-white/8

                      shadow-[0_8px_30px_rgba(48,48,242,0.15)]

                      shrink-0

                      transition-all
                      duration-500

                      group-hover:border-[#3030F2]/40
                      group-hover:bg-[#0C0D1C]
                      group-hover:shadow-[0_8px_35px_rgba(48,48,242,0.3)]
                    "
                  >
                    <img
                      src={card.icon}
                      alt=""
                      className="
                        w-6.5
                        h-6.5
                        object-contain

                        transition-transform
                        duration-500

                        group-hover:scale-110
                      "
                    />
                  </motion.div>

                  {/* Badge */}

                  <div
                    className="
                      flex
                      h-7.5
                      min-w-18
                      items-center
                      justify-center
                      rounded-xl

                      border
                      border-white/6

                      bg-linear-to-b
                      from-[#152555]/90
                      to-[#051847]/90

                      px-3.2
                      py-2

                      shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]

                      transition-all
                      duration-300

                      group-hover:border-[#5183FF]/20
                    "
                  >
                    <span
                      className="
                        font-['Rethink_Sans']
                        text-[10.5px]
                        font-medium
                        leading-3.5
                        text-white
                      "
                    >
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* ================= TITLE + DESCRIPTION ================= */}

                <div className="flex flex-col gap-3.5">

                  <h2
                    className="
                      font-['Rethink_Sans']
                      text-[26px]
                      font-semibold
                      leading-8.5
                      text-white
                    "
                  >
                    {card.heading}
                  </h2>

                  <p
                    className="
                      font-['Rethink_Sans']
                      text-[12px]
                      font-normal
                      leading-4.25
                      text-[#6D7792]
                    "
                  >
                    {card.descrption}
                  </p>
                </div>

              

                {/* ================= FEATURES ================= */}

                <div className="flex flex-col gap-2.5">

                  {/* Feature 1 */}

                  <div className="flex items-center gap-2">

                    <span
                      className="
                        flex
                        h-3.5
                        w-3.5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#3030F2]

                        shadow-[0_0_10px_rgba(48,48,242,0.35)]

                        transition-all
                        duration-300

                        group-hover:shadow-[0_0_14px_rgba(48,48,242,0.6)]
                      "
                    >
                      <Check
                        strokeWidth={3}
                        className="h-2.25 w-2.25 text-white"
                      />
                    </span>

                    <p
                      className="
                        font-['Rethink_Sans']
                        text-[10.5px]
                        font-normal
                        leading-4.25
                        text-[#6D7792]
                      "
                    >
                      {card.check1}
                    </p>
                  </div>

                  {/* Feature 2 */}

                  <div className="flex items-center gap-2">

                    <span
                      className="
                        flex
                        h-3.5
                        w-3.5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#3030F2]

                        shadow-[0_0_10px_rgba(48,48,242,0.35)]

                        transition-all
                        duration-300

                        group-hover:shadow-[0_0_14px_rgba(48,48,242,0.6)]
                      "
                    >
                      <Check
                        strokeWidth={3}
                        className="h-2.5 w-2.5 text-white"
                      />
                    </span>
                    <p
                      className="
                        text-[10.5px]
                        font-normal
                        leading-4.25
                        text-[#6D7792]
                      "
                    >
                      {card.check2}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================================================= */}
      {/* BOOK A CALL BUTTON */}
      {/* ================================================= */}

     <motion.div
  variants={headerVariants}
  className="flex items-center justify-center mt-24 relative z-10"
>
  <motion.a
    href="https://calendly.com/designer-cs-73/meet?month=2026-09"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 1.04,
      y: -2,
    }}
    whileTap={{
      scale: 0.96,
    }}
    transition={{
      duration: 0.25,
      ease: "easeOut",
    }}
    className="
      flex
      w-54
      h-13.5
      items-center
      justify-center
      gap-[9.57px]
      rounded-[30.62px]
      border-[1.91px]
      border-[#5183FF]
      bg-[#3030F2]
      px-[22.97px]
      py-[11.48px]
      font-['Rethink_Sans']
      text-[17.63px]
      font-semibold
      leading-none
      text-white
      text-center
      transition
      duration-300
      hover:bg-[#2525d8]
      active:scale-95
    "
  >
    Book a 10 Min Call
  </motion.a>
</motion.div>
    </motion.div>
  );
};

export default Services;