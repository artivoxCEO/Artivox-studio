import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const HowItWork = () => {
    const [activeStep, setActiveStep] = useState(0);

    const cardRefs = useRef([]);
    const gridRef = useRef(null);       // wraps BOTH columns (defines scroll bounds)
    const rightColRef = useRef(null);   // right column wrapper (stretches to grid height)
    const stickyBoxRef = useRef(null);  // the visual box we manually "stick"

    const ServiesCardDetail = [
        {
            icon: assets.services_logo,
            badge: "Starting",
            heading: "Discovery",
            descrption:
                "We start by understanding Your business, goals, and users. No assumptions. just deep questions and sharper clarity before a single pixel is placed.",
            image: assets.Serveices_image,
        },
        {
            icon: assets.services_logo,
            badge: "Planning",
            heading: "Strategy & Planning",
            descrption:
                "We map out the full project. sitemap, user flows, content structure, and timeline. Everything planned so nothing gets missed.",
            image: assets.Serveices_image,
        },
        {
            icon: assets.services_logo,
            badge: "Web",
            heading: "Design & Development",
            descrption:
                "This is where ideas become visuals. We design every screen, state and interaction, pixel-perfect and built around Your brand. We build what we designed; clean, fast, and responsive.",
            image: assets.Serveices_image,
        },
        {
            icon: assets.services_logo,
            badge: "Launch",
            heading: "Launch & Handoff",
            descrption:
                "We test everything, fix everything, then hand over a product you are proud to ship. You get full ownership; files, access and guidance included.",
            image: assets.Serveices_image,
        },
    ];

    // =====================================================
    // SINGLE SCROLL HANDLER — drives both:
    //   1) which card is "active" (for the image swap)
    //   2) manual sticky transform on the right-column image
    //
    // Native CSS `position: sticky` is dropped entirely here.
    // It's unreliable the moment ANY ancestor (this section,
    // a page wrapper, another Framer Motion component higher
    // up the tree) has `overflow` other than visible, or a
    // `transform` applied — both of which silently break the
    // browser's sticky containing-block resolution. Doing the
    // math ourselves with getBoundingClientRect sidesteps that
    // completely, since it only reads real viewport coordinates.
    // =====================================================
    useEffect(() => {
        const TOP_OFFSET = 96; // matches visual "top-24" (24 * 4px)

        const handleScroll = () => {
            // ---- 1. Manual sticky for the right column image ----
            const col = rightColRef.current;
            const box = stickyBoxRef.current;

            if (col && box) {
                const colRect = col.getBoundingClientRect();
                const colHeight = col.offsetHeight;
                const boxHeight = box.offsetHeight;

                const maxTranslate = Math.max(colHeight - boxHeight, 0);

                // How far down we'd need to shift the box so it sits
                // TOP_OFFSET px from the top of the viewport, clamped
                // so it never scrolls past the bottom of its column.
                let translateY = Math.max(TOP_OFFSET - colRect.top, 0);
                translateY = Math.min(translateY, maxTranslate);

                box.style.transform = `translate3d(0, ${translateY}px, 0)`;
            }

            // ---- 2. Which card is currently "active" ----
            const referenceLine = window.innerHeight * 0.5;
            let closestIndex = 0;
            let closestDistance = Infinity;

            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const distance = Math.abs(cardCenter - referenceLine);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveStep(closestIndex);
        };

        handleScroll(); // run once on mount so initial state is correct

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    // =====================================================
    // ANIMATION VARIANTS
    // =====================================================

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const fadeUpVariants = {
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

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 45,
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
        <motion.section
            className="
                relative
                max-w-7xl
                mx-auto
                px-4
                sm:px-6
                lg:px-8
                py-20
                sm:py-24
                lg:py-32
            "
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.08,
            }}
        >

            {/* ================================================= */}
            {/* BACKGROUND GLOW — isolated in its own clipped box */}
            {/* so it never needs overflow-hidden on the section   */}
            {/* itself (that was breaking position:sticky before). */}
            {/* ================================================= */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="
                        absolute
                        left-1/2
                        top-20
                        -translate-x-1/2
                        w-100
                        h-62.5
                        rounded-full
                        bg-[#3030F2]/10
                        blur-[120px]
                    "
                />
            </div>


            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

                <motion.div
                    variants={fadeUpVariants}
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
                        gap-4
                        px-3
                        py-2
                        border-t
                        border-blue-700
                        rounded-md
                        bg-[#0b0b18]
                        w-fit
                    "
                >
                    <span className="w-2 h-2 bg-white rounded-full" />

                    <span className="text-white">
                        How It Works
                    </span>
                </motion.div>


                {/* Heading */}

                <motion.div
                    variants={fadeUpVariants}
                    className="mt-7"
                >

                    <h1
                        className="
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-semibold
                            leading-tight
                            text-white
                        "
                    >
                        We Simplify the Journey
                    </h1>

                    <h1
                        className="
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-semibold
                            text-white/40
                            leading-tight
                            mt-2
                        "
                    >
                        From Design to Launch
                    </h1>

                </motion.div>


                {/* Description */}

                <motion.p
                    variants={fadeUpVariants}
                    className="
                        text-white/40
                        text-sm
                        sm:text-base
                        leading-6
                        sm:leading-7
                        mt-5
                        max-w-2xl
                    "
                >
                    A clear, structured process so you always know what's
                    happening, what's next, and what to expect.
                </motion.p>

            {/* </motion.header> */} 
            


            {/* ================================================= */}
            {/* MAIN CONTENT */}
            {/* ================================================= */}

            <div
                ref={gridRef}
                className="
                    relative
                    z-10
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-12
                    lg:gap-20
                    mt-16
                    lg:mt-24
                "
            >

                {/* ================================================= */}
                {/* LEFT SIDE — SCROLLING CARDS */}
                {/* ================================================= */}

                <motion.div
                    variants={containerVariants}
                    className="
                        flex
                        flex-col
                        gap-8
                        sm:gap-10
                    "
                >

                    {ServiesCardDetail.map((card, index) => (

                        <motion.article
                            key={index}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            variants={cardVariants}
                            whileHover={{
                                y: -5,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`
                                group
                                relative
                                w-full
                                rounded-2xl
                                overflow-hidden
                                p-6
                                sm:p-8
                                lg:p-10
                                text-white
                                border
                                transition-all
                                duration-500
                                ${
                                    activeStep === index
                                        ? `
                                            border-white/15
                                            shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                                        `
                                        : `
                                            border-white/5
                                        `
                                }
                            `}
                            style={{
                                backgroundImage: `url(${assets.Serveices_Card_image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >

                            {/* ================================================= */}
                            {/* DARK OVERLAY */}
                            {/* ================================================= */}

                            <div
                                className={`
                                    absolute
                                    inset-0
                                    transition-all
                                    duration-700
                                    ${
                                        activeStep === index
                                            ? "bg-black/25"
                                            : "bg-black/45"
                                    }
                                `}
                            />


                            {/* ================================================= */}
                            {/* PREMIUM AMBIENT GLOW */}
                            {/* ================================================= */}

                            <motion.div
                                animate={{
                                    opacity:
                                        activeStep === index ? 1 : 0,
                                    scale:
                                        activeStep === index ? 1 : 0.8,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-24
                                    -top-24
                                    h-64
                                    w-64
                                    rounded-full
                                    bg-[#3030F2]/20
                                    blur-[80px]
                                "
                            />


                            {/* ================================================= */}
                            {/* CARD CONTENT */}
                            {/* ================================================= */}

                            <div className="relative z-10">

                                {/* Top Row */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
                                    "
                                >

                                    {/* Icon */}

                                    <motion.div
                                        animate={{
                                            scale:
                                                activeStep === index
                                                    ? 1
                                                    : 0.96,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeOut",
                                        }}
                                        className="
                                            w-16
                                            h-16
                                            sm:w-20
                                            sm:h-20
                                            flex
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-black/40
                                            backdrop-blur-md
                                            border
                                            border-white/10
                                            shrink-0
                                        "
                                    >
                                        <img
                                            src={card.icon}
                                            alt=""
                                        />
                                    </motion.div>


                                    {/* Badge */}

                                    <div
                                        className="
                                            px-5
                                            py-2
                                            rounded-full
                                            bg-[#132353]
                                            text-sm
                                            whitespace-nowrap
                                            border
                                            border-white/5
                                        "
                                    >
                                        {card.badge}
                                    </div>

                                </div>


                                {/* Text */}

                                <div
                                    className="
                                        flex
                                        flex-col
                                        items-start
                                        justify-start
                                        mt-8
                                    "
                                >

                                    <h2
                                        className="
                                            text-2xl
                                            
                                            sm:text-3xl
                                            font-semibold
                                            leading-tight
                                        "
                                    >
                                        {card.heading}
                                    </h2>

                                    <p
                                        className="
                                            text-sm
                                            sm:text-base
                                            text-white/60
                                            leading-7
                                            max-w-xl
                                            mt-5
                                        "
                                    >
                                        {card.descrption}
                                    </p>

                                </div>

                            </div>

                        </motion.article>

                    ))}

                </motion.div>


                {/* ================================================= */}
                {/* RIGHT SIDE — MANUALLY "STUCK" STORY IMAGE          */}
                {/* This column stretches to match the left column's  */}
                {/* height (grid default align-items: stretch), which */}
                {/* gives our manual-sticky math room to move within. */}
                {/* ================================================= */}

                <div
                    ref={rightColRef}
                    className="
                        hidden
                        lg:block
                        relative
                    "
                >

                    <motion.div
                        ref={stickyBoxRef}
                        initial={{
                            opacity: 0,
                            scale: 0.96,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            relative
                            w-full
                            max-w-xl
                            mx-auto
                        "
                    >

                        {/* ================================================= */}
                        {/* IMAGE GLOW */}
                        {/* ================================================= */}

                        <div
                            className="
                                absolute
                                -inset-10
                                rounded-full
                                bg-[#3030F2]/10
                                blur-[100px]
                                pointer-events-none
                            "
                        />


                        {/* ================================================= */}
                        {/* IMAGE CONTAINER */}
                        {/* ================================================= */}

                        <div
                            className="
                                relative
                                w-full
                                aspect-square
                                rounded-3xl
                                overflow-hidden
                                border
                                border-white/10
                                bg-[#0b0b18]
                                shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                            "
                        >

                            {/* Image */}

                            <AnimatePresence mode="wait">

                                <motion.img
                                    key={activeStep}
                                    src={
                                        ServiesCardDetail[activeStep].image
                                    }
                                    alt={
                                        ServiesCardDetail[activeStep].heading
                                    }
                                    initial={{
                                        opacity: 0,
                                        scale: 1.06,
                                        filter: "blur(8px)",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        filter: "blur(0px)",
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.98,
                                        filter: "blur(5px)",
                                    }}
                                    transition={{
                                        duration: 0.65,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="
                                        absolute
                                        inset-0
                                        w-full
                                        h-full
                                        object-cover
                                    "
                                />

                            </AnimatePresence>


                            {/* Image gradient */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-linear-to-t
                                    from-black/80
                                    via-black/10
                                    to-transparent
                                    pointer-events-none
                                "
                            />


                            {/* ================================================= */}
                            {/* IMAGE INFORMATION */}
                            {/* ================================================= */}

                            <div
                                className="
                                    absolute
                                    bottom-8
                                    left-8
                                    right-8
                                    z-10
                                "
                            >

                                <AnimatePresence mode="wait">

                                    <motion.div
                                        key={activeStep}
                                        initial={{
                                            opacity: 0,
                                            y: 15,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -15,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >

                                            <span
                                                className="
                                                    text-xs
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-blue-400
                                                "
                                            >
                                                Step{" "}
                                                {String(activeStep + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <span
                                                className="
                                                    w-8
                                                    h-px
                                                    bg-white/20
                                                "
                                            />

                                            <span
                                                className="
                                                    text-xs
                                                    text-white/40
                                                "
                                            >
                                                {
                                                    ServiesCardDetail[
                                                        activeStep
                                                    ].badge
                                                }
                                            </span>

                                        </div>


                                        <h3
                                            className="
                                                mt-3
                                                text-2xl
                                                font-medium
                                                text-white
                                            "
                                        >
                                            {
                                                ServiesCardDetail[
                                                    activeStep
                                                ].heading
                                            }
                                        </h3>

                                    </motion.div>

                                </AnimatePresence>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>


            {/* ================================================= */}
            {/* MOBILE IMAGE */}
            {/* ================================================= */}

            <motion.div
                variants={fadeUpVariants}
                className="
                    lg:hidden
                    mt-14
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    aspect-4/3
                    bg-[#0b0b18]
                "
            >

                <AnimatePresence mode="wait">

                    <motion.img
                        key={activeStep}
                        src={
                            ServiesCardDetail[activeStep].image
                        }
                        alt={
                            ServiesCardDetail[activeStep].heading
                        }
                        initial={{
                            opacity: 0,
                            scale: 1.05,
                            filter: "blur(6px)",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(4px)",
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                        "
                    />

                </AnimatePresence>


                <div
                    className="
                        absolute
                        inset-0
                        bg-linear-to-t
                        from-black/80
                        via-transparent
                        to-transparent
                    "
                />


                <div
                    className="
                        absolute
                        bottom-6
                        left-6
                        right-6
                        z-10
                    "
                >

                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-blue-400
                        "
                    >
                        Step{" "}
                        {String(activeStep + 1).padStart(2, "0")}
                    </p>

                    <AnimatePresence mode="wait">

                        <motion.h3
                            key={activeStep}
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                            }}
                            transition={{
                                duration: 0.4,
                            }}
                            className="
                                mt-2
                                text-xl
                                font-medium
                                text-white
                            "
                        >
                            {ServiesCardDetail[activeStep].heading}
                        </motion.h3>

                    </AnimatePresence>

                </div>

            </motion.div>

        </motion.section>
    );
};

export default HowItWork;


// import React from "react";
// import { ArrowUpRight } from "lucide-react";
// import { assets } from "../assets/assets";
// import { motion } from "motion/react";

// const HowItWork = () => {
//     const processSteps = [
//         {
//             number: "01",
//             label: "Starting",
//             title: "Discovery",
//             description:
//                 "We understand your business, goals, audience, and challenges before a single pixel is placed.",
//         },
//         {
//             number: "02",
//             label: "Planning",
//             title: "Strategy & Planning",
//             description:
//                 "We define the sitemap, user flows, content structure, technical requirements, and project roadmap.",
//         },
//         {
//             number: "03",
//             label: "Build",
//             title: "Design & Development",
//             description:
//                 "We turn the strategy into a polished digital experience that is responsive, fast, and built around your brand.",
//         },
//         {
//             number: "04",
//             label: "Launch",
//             title: "Launch & Handoff",
//             description:
//                 "Everything is tested, refined, and prepared for launch before the final product is handed over to you.",
//         },
//     ];

//     // =====================================================
//     // ANIMATION VARIANTS
//     // =====================================================

//     const containerVariants = {
//         hidden: {},
//         visible: {
//             transition: {
//                 staggerChildren: 0.12,
//             },
//         },
//     };

//     const fadeUpVariants = {
//         hidden: {
//             opacity: 0,
//             y: 35,
//         },

//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.75,
//                 ease: [0.22, 1, 0.36, 1],
//             },
//         },
//     };

//     const stepVariants = {
//         hidden: {
//             opacity: 0,
//             y: 35,
//         },

//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.7,
//                 ease: [0.22, 1, 0.36, 1],
//             },
//         },
//     };

//     return (
//         <motion.section
//             aria-labelledby="how-it-works-title"
//             className="bg-[#05050d] py-20 sm:py-24 lg:py-36 overflow-hidden"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//                 once: true,
//                 amount: 0.12,
//             }}
//             variants={containerVariants}
//         >

//             <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

//                 {/* ================================================= */}
//                 {/* HEADER */}
//                 {/* ================================================= */}

//                 <motion.header
//                     variants={containerVariants}
//                     className="
//                         mx-auto
//                         flex
//                         max-w-5xl
//                         flex-col
//                         items-center
//                         justify-center
//                         text-center
//                     "
//                 >

//                     {/* ================= BADGE ================= */}

//                     <motion.div
//                         variants={fadeUpVariants}
//                         whileHover={{
//                             y: -2,
//                             scale: 1.02,
//                         }}
//                         transition={{
//                             duration: 0.3,
//                             ease: "easeOut",
//                         }}
//                         className="
//                             mb-6
//                             inline-flex
//                             items-center
//                             gap-3
//                             rounded-full
//                             border
//                             border-blue-700/50
//                             bg-[#0b0b18]
//                             px-3.5
//                             py-2
//                             sm:px-4
//                         "
//                     >
//                         <span className="h-2 w-2 rounded-full bg-white" />

//                         <span className="text-xs font-medium text-white sm:text-sm">
//                             How It Works
//                         </span>
//                     </motion.div>


//                     {/* ================= HEADING ================= */}

//                     <motion.h2
//                         id="how-it-works-title"
//                         variants={fadeUpVariants}
//                         className="
//                             max-w-4xl
//                             text-[clamp(2.6rem,11vw,6rem)]
//                             font-semibold
//                             leading-[0.98]
//                             tracking-[-0.05em]
//                             text-white
//                         "
//                     >
//                         We simplify the journey

//                         <span className="block text-white/30">
//                             from design to launch.
//                         </span>
//                     </motion.h2>


//                     {/* ================= DESCRIPTION ================= */}

//                     <motion.div
//                         variants={fadeUpVariants}
//                         className="
//                             mt-7
//                             flex
//                             max-w-2xl
//                             items-start
//                             justify-center
//                             gap-4
//                             text-center
//                         "
//                     >
//                         <span className="mt-2 h-px w-7 shrink-0 bg-blue-600 sm:w-10" />

//                         <p className="text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
//                             A clear, structured process designed to remove
//                             uncertainty and keep every project moving with
//                             purpose.
//                         </p>

//                         <span className="mt-2 h-px w-7 shrink-0 bg-blue-600 sm:w-10" />
//                     </motion.div>

//                 </motion.header>


//                 {/* ================================================= */}
//                 {/* MOBILE IMAGE */}
//                 {/* ================================================= */}

//                 <motion.div
//                     variants={fadeUpVariants}
//                     className="
//                         mt-12
//                         overflow-hidden
//                         rounded-[22px]
//                         border
//                         border-white/10
//                         bg-[#0b0b18]
//                         md:hidden
//                     "
//                 >

//                     <div className="relative aspect-[4/3]">

//                         <motion.img
//                             src={assets.Serveices_image}
//                             alt="Digital design and development process"
//                             loading="lazy"
//                             initial={{ scale: 1.05 }}
//                             whileInView={{ scale: 1 }}
//                             viewport={{
//                                 once: true,
//                                 amount: 0.2,
//                             }}
//                             transition={{
//                                 duration: 1.2,
//                                 ease: [0.22, 1, 0.36, 1],
//                             }}
//                             className="h-full w-full object-cover"
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-[#05050d]/80 via-transparent to-transparent" />

//                         <div className="absolute bottom-5 left-5 right-5">

//                             <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
//                                 Our approach
//                             </p>

//                             <p className="mt-2 max-w-[260px] text-lg font-medium leading-snug text-white">
//                                 Strategy first.
//                                 <span className="block text-white/45">
//                                     Execution with purpose.
//                                 </span>
//                             </p>

//                         </div>

//                     </div>

//                 </motion.div>


//                 {/* ================================================= */}
//                 {/* PROCESS */}
//                 {/* ================================================= */}

//                 <div className="mt-14 sm:mt-20 lg:mt-28">

//                     <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 xl:gap-28">


//                         {/* ================================================= */}
//                         {/* DESKTOP IMAGE */}
//                         {/* ================================================= */}

//                         <motion.div
//                             variants={fadeUpVariants}
//                             className="
//                                 hidden
//                                 lg:sticky
//                                 lg:top-24
//                                 lg:block
//                                 lg:self-start
//                             "
//                         >

//                             <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b18]">

//                                 <div className="relative aspect-[4/5]">

//                                     <motion.img
//                                         src={assets.Serveices_image}
//                                         alt="Digital design and development process"
//                                         loading="lazy"
//                                         whileHover={{
//                                             scale: 1.03,
//                                         }}
//                                         transition={{
//                                             duration: 0.7,
//                                             ease: [0.22, 1, 0.36, 1],
//                                         }}
//                                         className="
//                                             h-full
//                                             w-full
//                                             object-cover
//                                         "
//                                     />

//                                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#05050d]/90 to-transparent" />

//                                     <div className="absolute bottom-8 left-8 right-8">

//                                         <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
//                                             Our approach
//                                         </p>

//                                         <p className="mt-2 text-xl font-medium leading-snug text-white">
//                                             Strategy first.
//                                             <span className="block text-white/45">
//                                                 Execution with purpose.
//                                             </span>
//                                         </p>

//                                     </div>

//                                 </div>

//                             </div>


//                             <div className="mt-7 border-l border-blue-600/60 pl-5">

//                                 <p className="max-w-sm text-sm leading-6 text-white/35">
//                                     Every decision has a reason. Every stage
//                                     has a purpose.
//                                 </p>

//                             </div>

//                         </motion.div>


//                         {/* ================================================= */}
//                         {/* STEPS */}
//                         {/* ================================================= */}

//                         <motion.div
//                             variants={containerVariants}
//                         >

//                             {/* ================= DESKTOP TIMELINE ================= */}

//                             <div className="relative hidden lg:block">

//                                 {/* Timeline line */}

//                                 <div className="absolute bottom-0 left-[17px] top-0 w-px bg-white/10" />


//                                 {processSteps.map((step, index) => (

//                                     <motion.article
//                                         key={step.number}
//                                         variants={stepVariants}
//                                         className="
//                                             group
//                                             relative
//                                             pb-20
//                                             pl-20
//                                             last:pb-0
//                                         "
//                                     >

//                                         {/* Number circle */}

//                                         <motion.div
//                                             whileHover={{
//                                                 scale: 1.12,
//                                             }}
//                                             transition={{
//                                                 duration: 0.3,
//                                                 ease: "easeOut",
//                                             }}
//                                             className="
//                                                 absolute
//                                                 left-0
//                                                 top-0
//                                                 flex
//                                                 h-9
//                                                 w-9
//                                                 items-center
//                                                 justify-center
//                                                 rounded-full
//                                                 border
//                                                 border-white/15
//                                                 bg-[#05050d]
//                                                 transition-all
//                                                 duration-300
//                                                 group-hover:border-blue-500
//                                                 group-hover:bg-blue-600
//                                             "
//                                         >
//                                             <span className="text-[10px] text-white/50 group-hover:text-white">
//                                                 {step.number}
//                                             </span>
//                                         </motion.div>


//                                         <div className="
//                                             border-b
//                                             border-white/10
//                                             pb-20
//                                             group-last:border-0
//                                             group-last:pb-0
//                                         ">

//                                             {/* Step label */}

//                                             <div className="mb-5 flex items-center gap-3">

//                                                 <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400">
//                                                     {step.label}
//                                                 </span>

//                                                 <span className="h-px w-5 bg-white/15" />

//                                                 <span className="text-xs text-white/25">
//                                                     Step {step.number}
//                                                 </span>

//                                             </div>


//                                             {/* Title */}

//                                             <h3 className="
//                                                 text-4xl
//                                                 font-medium
//                                                 tracking-[-0.03em]
//                                                 text-white
//                                             ">
//                                                 {step.title}
//                                             </h3>


//                                             {/* Description */}

//                                             <p className="
//                                                 mt-5
//                                                 max-w-2xl
//                                                 text-base
//                                                 leading-7
//                                                 text-white/40
//                                             ">
//                                                 {step.description}
//                                             </p>


//                                             {/* Arrow */}

//                                             <motion.div
//                                                 whileHover={{
//                                                     x: 4,
//                                                     y: -4,
//                                                 }}
//                                                 transition={{
//                                                     duration: 0.3,
//                                                     ease: "easeOut",
//                                                 }}
//                                                 className="
//                                                     mt-7
//                                                     flex
//                                                     h-10
//                                                     w-10
//                                                     items-center
//                                                     justify-center
//                                                     rounded-full
//                                                     border
//                                                     border-white/10
//                                                     text-white/30
//                                                     transition-all
//                                                     duration-300
//                                                     group-hover:border-blue-500/50
//                                                     group-hover:bg-blue-600
//                                                     group-hover:text-white
//                                                 "
//                                             >
//                                                 <ArrowUpRight
//                                                     size={17}
//                                                     strokeWidth={1.5}
//                                                 />
//                                             </motion.div>

//                                         </div>

//                                     </motion.article>

//                                 ))}

//                             </div>


//                             {/* ================================================= */}
//                             {/* MOBILE / TABLET STEPS */}
//                             {/* ================================================= */}

//                             <div className="lg:hidden">

//                                 {processSteps.map((step) => (

//                                     <motion.article
//                                         key={step.number}
//                                         variants={stepVariants}
//                                         className="
//                                             group
//                                             border-b
//                                             border-white/10
//                                             py-8
//                                             first:pt-0
//                                             last:border-0
//                                             last:pb-0
//                                             sm:py-10
//                                         "
//                                     >

//                                         {/* Top row */}

//                                         <div className="flex items-center justify-between">

//                                             <div className="flex items-center gap-3">

//                                                 <motion.span
//                                                     whileHover={{
//                                                         scale: 1.1,
//                                                     }}
//                                                     className="
//                                                         flex
//                                                         h-8
//                                                         w-8
//                                                         items-center
//                                                         justify-center
//                                                         rounded-full
//                                                         border
//                                                         border-white/15
//                                                         text-[10px]
//                                                         text-white/50
//                                                         transition-all
//                                                         duration-300
//                                                         group-hover:border-blue-500
//                                                         group-hover:bg-blue-600
//                                                         group-hover:text-white
//                                                     "
//                                                 >
//                                                     {step.number}
//                                                 </motion.span>


//                                                 <span className="
//                                                     text-[10px]
//                                                     uppercase
//                                                     tracking-[0.2em]
//                                                     text-blue-400
//                                                 ">
//                                                     {step.label}
//                                                 </span>

//                                             </div>


//                                             <motion.div
//                                                 whileHover={{
//                                                     x: 4,
//                                                     y: -4,
//                                                 }}
//                                                 transition={{
//                                                     duration: 0.3,
//                                                 }}
//                                             >
//                                                 <ArrowUpRight
//                                                     size={18}
//                                                     strokeWidth={1.5}
//                                                     className="
//                                                         text-white/25
//                                                         transition-all
//                                                         duration-300
//                                                         group-hover:text-blue-400
//                                                     "
//                                                 />
//                                             </motion.div>

//                                         </div>


//                                         {/* Content */}

//                                         <div className="mt-5">

//                                             <h3 className="
//                                                 text-2xl
//                                                 font-medium
//                                                 tracking-[-0.025em]
//                                                 text-white
//                                                 sm:text-3xl
//                                             ">
//                                                 {step.title}
//                                             </h3>

//                                             <p className="
//                                                 mt-3
//                                                 max-w-xl
//                                                 text-sm
//                                                 leading-6
//                                                 text-white/40
//                                                 sm:text-base
//                                                 sm:leading-7
//                                             ">
//                                                 {step.description}
//                                             </p>

//                                         </div>

//                                     </motion.article>

//                                 ))}

//                             </div>

//                         </motion.div>

//                     </div>

//                 </div>


//                 {/* ================================================= */}
//                 {/* BOTTOM VALUES */}
//                 {/* ================================================= */}

//                 <motion.div
//                     variants={containerVariants}
//                     className="
//                         mt-16
//                         grid
//                         grid-cols-1
//                         border-t
//                         border-white/10
//                         pt-7
//                         sm:grid-cols-3
//                         sm:gap-8
//                         lg:mt-28
//                         lg:pt-10
//                     "
//                 >

//                     {/* Value 01 */}

//                     <motion.div
//                         variants={fadeUpVariants}
//                         className="
//                             border-b
//                             border-white/10
//                             py-5
//                             sm:border-0
//                             sm:py-0
//                         "
//                     >
//                         <p className="text-xl font-medium text-white">
//                             01
//                         </p>

//                         <p className="
//                             mt-2
//                             text-[10px]
//                             uppercase
//                             tracking-[0.16em]
//                             text-white/30
//                         ">
//                             Clear direction
//                         </p>
//                     </motion.div>


//                     {/* Value 02 */}

//                     <motion.div
//                         variants={fadeUpVariants}
//                         className="
//                             border-b
//                             border-white/10
//                             py-5
//                             sm:border-0
//                             sm:py-0
//                         "
//                     >
//                         <p className="text-xl font-medium text-white">
//                             02
//                         </p>

//                         <p className="
//                             mt-2
//                             text-[10px]
//                             uppercase
//                             tracking-[0.16em]
//                             text-white/30
//                         ">
//                             Thoughtful execution
//                         </p>
//                     </motion.div>


//                     {/* Value 03 */}

//                     <motion.div
//                         variants={fadeUpVariants}
//                         className="py-5 sm:py-0"
//                     >
//                         <p className="text-xl font-medium text-white">
//                             03
//                         </p>

//                         <p className="
//                             mt-2
//                             text-[10px]
//                             uppercase
//                             tracking-[0.16em]
//                             text-white/30
//                         ">
//                             Ready to launch
//                         </p>
//                     </motion.div>

//                 </motion.div>

//             </div>
//         </motion.section>
//     );
// };

// export default HowItWork;
