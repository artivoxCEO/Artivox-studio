import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { assets } from "../assets/assets";

const CTA = () => {
    const navigate = useNavigate();
    const handleBookCall = () => {
    window.open(
        "https://calendly.com/designer-cs-73/meet?month=2026-09",
        "_blank",
        "noopener,noreferrer"
    );
};

    // ================================
    // ANIMATION VARIANTS
    // ================================

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
            y: 30,
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

    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 25,
            scale: 0.96,
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
            className="my-14 px-4 sm:px-10 md:px-14 lg:px-16 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.2,
            }}
        >
            <motion.div
                className="
                    relative
                    w-full
                    overflow-hidden
                    rounded-3xl
                    px-4 py-12
                    sm:px-8 sm:py-14
                    md:px-12 md:py-16
                "
                style={{
                    backgroundImage: `url(${assets.CTA_bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* ================================
                    SUBTLE AMBIENT GLOW
                ================================= */}

                <motion.div
                    className="
                        pointer-events-none
                        absolute
                        -top-32
                        left-1/2
                        h-64
                        w-64
                        -translate-x-1/2
                        rounded-full
                        bg-[#3030F2]/15
                        blur-[100px]
                    "
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* ================================
                    CONTENT
                ================================= */}

                <motion.div
                    variants={containerVariants}
                    className="relative z-10 flex flex-col items-center text-center"
                >

                    {/* ================================
                        BADGE
                    ================================= */}

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
                            flex items-center gap-2
                            px-3 py-1.5
                            sm:px-4 sm:py-2
                            border-t border-blue-700
                            rounded-md
                            bg-[#0b0b18]
                        "
                    >
                        <motion.span
                            className="
                                w-1.5 h-1.5
                                sm:w-2 sm:h-2
                                bg-white
                                rounded-full
                                shrink-0
                            "
                            animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [0.9, 1.15, 0.9],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <span className="text-xs sm:text-sm md:text-base">
                            Work With Us
                        </span>
                    </motion.div>


                    {/* ================================
                        HEADING
                    ================================= */}

                    <motion.div
                        variants={fadeUpVariants}
                        className="mt-6 sm:mt-7 md:mt-8"
                    >
                        <h1
                            className="
                                text-3xl
                                md:text-5xl
                                font-medium
                                leading-tight
                                tracking-tight
                            "
                        >
                            Each Project We Take
                        </h1>

                        <h1
                            className="
                                mt-1
                                text-3xl
                                md:text-5xl
                                font-medium
                                leading-tight
                                tracking-tight
                                text-white/40
                            "
                        >
                            is a Unique Opportunity
                        </h1>
                    </motion.div>


                    {/* ================================
                        DESCRIPTION
                    ================================= */}

                    <motion.p
                        variants={fadeUpVariants}
                        className="
                            mt-5
                            sm:mt-6
                            max-w-xl
                            px-2
                            text-xs
                            sm:text-sm
                            md:text-base
                            leading-5
                            sm:leading-6
                            text-white/40
                        "
                    >
                        Ready to take the next step? Join us now and start
                        transforming your vision into reality with expert support.
                    </motion.p>


                    {/* ================================
                        BUTTON
                    ================================= */}

                  <motion.button
    type="button"
    variants={buttonVariants}
    whileHover={{
        y: -3,
        scale: 1.02,
        boxShadow: "0 15px 40px rgba(48, 48, 242, 0.25)",
    }}
    whileTap={{
        scale: 0.97,
    }}
    onClick={handleBookCall}
    className="
        mt-7
        sm:mt-9
        px-5
        sm:px-6
        py-2.5
        sm:py-3
        rounded-full
        bg-[#3030F2]
        border border-blue-500
        text-sm
        sm:text-base
        font-semibold
        transition-all
        duration-300
        hover:bg-[#2525d9]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-400
        focus-visible:ring-offset-2
    "
>
    Book a Call Now
</motion.button>

                </motion.div>

            </motion.div>
        </motion.section>
    );
};

export default CTA;

