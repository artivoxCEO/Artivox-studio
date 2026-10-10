import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import FAQs from "./FAQs";
import CTA from "./CTA";
import { motion } from "motion/react";


const Portfolio_Data_page = ({ project }) => {

    // =========================================================
    // ANIMATION VARIANTS
    // =========================================================

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 45,
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


    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };


    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };


    const imageReveal = {
        hidden: {
            opacity: 0,
            scale: 0.96,
            y: 30,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };


    return (
        <div>

            {/* =====================================================
                HERO
            ===================================================== */}

            <div className="relative isolate min-h-screen overflow-hidden text-white">

                {/* Background */}

                <div
                    className="absolute inset-0 bg-cover bg-top md:bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${assets.Portfolio_bg})`,
                    }}
                />

                {/* Content */}

                <div className="relative z-10 flex min-h-screen flex-col">

                    <Navbar />


                    {/* Header */}

                    <div className="flex flex-col gap-5 items-center justify-center mt-36">


                        {/* Badge */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/10 px-3.75 py-2.25 backdrop-blur-md mt-5"
                        >

                            <span className="text-[11px] sm:text-sm text-white/70">
                                Portfolio
                            </span>

                            <motion.div
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.55,
                                }}
                                className="flex h-6 w-10 shrink-0 items-center justify-center rounded-full bg-[#3030f2]"
                            >
                                <ArrowRight className="h-3.5 w-3.5" />
                            </motion.div>

                        </motion.div>


                        {/* Project Title */}

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 45,
                                filter: "blur(8px)",
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-white font-bold text-[57px] lg:text-[81.47px] leading-23.75 text-center flex items-center justify-center"
                        >
                            {project.title}
                        </motion.h1>

                    </div>

                </div>

            </div>


            {/* =====================================================
                PROJECT CONTENT
            ===================================================== */}

            <div className="py-20 mx-5 md:mx-14">

                <div className="mx-auto flex max-w-7xl items-start flex-col gap-20 px-6 lg:flex-row">


                    {/* =================================================
                        LEFT PROJECT DETAIL CARD
                    ================================================= */}

                    <motion.aside
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        className="w-full max-w-76.25 rounded-4xl border border-[#3030F2]/80 bg-[#00001F]/90 p-8"
                    >

                        <div className="space-y-10">

                            {project.projectInfo.map((item, index) => (

                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >

                                    <div className="space-y-2">

                                        <p className="text-base font-normal text-white/70">
                                            {item.title}
                                        </p>

                                        <h3 className="text-2xl font-semibold text-white">
                                            {item.value}
                                        </h3>

                                    </div>


                                    {index !== project.projectInfo.length - 1 && (
                                        <div className="mt-8 border-b border-white/30" />
                                    )}

                                </motion.div>

                            ))}

                        </div>

                    </motion.aside>


                    {/* =================================================
                        RIGHT SIDE
                    ================================================= */}

                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        className="flex-1"
                    >


                        {/* =================================================
                            MAIN IMAGE
                        ================================================= */}

                        <motion.div
                            variants={imageReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            className="overflow-hidden"
                        >

                            <motion.img
                                src={project.images.main}
                                alt=""
                                whileHover={{
                                    scale: 1.015,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="w-full"
                            />

                        </motion.div>


                        {/* =================================================
                            PROJECT DESCRIPTION
                        ================================================= */}

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            className="mt-10 text-white"
                        >

                            <h2 className="text-4xl font-bold">
                                Project Description :
                            </h2>

                            {
                                project.description.map((text, index) => (

                                    <motion.p
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            y: 15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.08,
                                        }}
                                        className="mt-5 text-white/80 max-w-2xl"
                                    >
                                        {text}
                                    </motion.p>

                                ))
                            }

                        </motion.div>


                        {/* =================================================
                            PROBLEMS + SOLUTIONS
                        ================================================= */}

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            className="mt-14"
                        >

                            <motion.div
                                variants={imageReveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                className="overflow-hidden"
                            >

                                <motion.img
                                    src={project.images.problems}
                                    alt=""
                                    whileHover={{
                                        scale: 1.015,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="w-full"
                                />

                            </motion.div>


                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                className="mt-4 text-white"
                            >

                                {/* PROBLEMS */}

                                <h2 className="text-4xl font-medium mb-6 mt-10">
                                    Problems :
                                </h2>

                                {
                                    project.problems.map((problem, index) => (

                                        <motion.p
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                x: -15,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.06,
                                            }}
                                            className="text-white/80"
                                        >
                                            {index + 1}. {problem}
                                        </motion.p>

                                    ))
                                }


                                {/* SOLUTIONS */}

                                <h2 className="text-4xl font-medium mt-14 mb-6">
                                    Solutions :
                                </h2>

                                {
                                    project.solutions.map((solution, index) => (

                                        <motion.p
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                x: -15,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.06,
                                            }}
                                            className="text-white/80"
                                        >
                                            {index + 1}. {solution}
                                        </motion.p>

                                    ))
                                }

                            </motion.div>

                        </motion.div>


                        {/* =================================================
                            STYLE GUIDE IMAGE
                        ================================================= */}

                        <motion.div
                            variants={imageReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            className="mt-10 overflow-hidden"
                        >

                            <motion.img
                                src={project.images.styleGuide}
                                alt=""
                                whileHover={{
                                    scale: 1.015,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="w-full"
                            />

                        </motion.div>


                        {/* =================================================
                            STYLE GUIDE CONTENT
                        ================================================= */}

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            className="mt-10"
                        >

                            <h2 className="text-4xl font-medium text-white">
                                Style Guide :
                            </h2>

                            {project.styleGuide.map((text, index) => (

                                <motion.p
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                    }}
                                    className="mt-5 text-white/80 max-w-2xl"
                                >
                                    {text}
                                </motion.p>

                            ))}

                        </motion.div>


                        {/* =================================================
                            FEATURES IMAGE
                        ================================================= */}

                        <motion.div
                            variants={imageReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            className="mt-10 overflow-hidden"
                        >

                            <motion.img
                                src={project.images.features}
                                alt=""
                                whileHover={{
                                    scale: 1.015,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="w-full"
                            />

                        </motion.div>


                        {/* =================================================
                            CORE FEATURES
                        ================================================= */}

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            className="mt-4 text-white"
                        >

                            <h2 className="text-4xl font-medium mb-6 mt-10">
                                Core Features :
                            </h2>

                            {
                                project.features.map((feature, index) => (

                                    <motion.p
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            x: -15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.06,
                                        }}
                                        className="text-white/80"
                                    >
                                        {index + 1}. {feature}
                                    </motion.p>

                                ))
                            }

                        </motion.div>

                    </motion.div>

                </div>


                {/* =================================================
                    DESKTOP IMAGES
                ================================================= */}

                <div className="mt-10 lg:mb-32">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 60,
                            scale: 0.97,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden rounded-4xl"
                    >

                        <motion.img
                            src={project.images.desktop1}
                            alt=""
                            whileHover={{
                                scale: 1.015,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-4xl w-full"
                        />

                    </motion.div>


                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 60,
                            scale: 0.97,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-10 overflow-hidden rounded-4xl"
                    >

                        <motion.img
                            src={project.images.desktop2}
                            alt=""
                            whileHover={{
                                scale: 1.015,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-4xl w-full"
                        />

                    </motion.div>

                </div>


                {/* =================================================
                    CTA
                ================================================= */}

                <CTA />

            </div>

        </div>
    )
}

export default Portfolio_Data_page

