import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { useAppContext } from "../Context/AppContext";
import { motion } from "motion/react";

const Pages_Header = ({
    badge_text,
    heading1,
    heading2,
    discription,
    button_text
}) => {

    const {navigate} = useAppContext()

    return (

        <div className="relative isolate min-h-screen overflow-hidden text-white">

            {/* Background */}
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

            {/* Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-black/20
                    animate-[headerOverlay_1.2s_ease-out_both]
                "
            />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col">

                <Navbar />

                {/* Hero */}
                <div className="flex flex-1 justify-start items-start pt-36 md:pt-0 md:items-center md:justify-center px-5 sm:px-6 lg:px-8">
                    <div className="w-full max-w-5xl text-center">
                        {/* Badge */}
                        <div
                            className="
                                inline-flex
                                max-w-full
                                items-center
                                gap-2
                                rounded-full
                                bg-[#1a191b]
                                px-3
                                py-2
                                backdrop-blur-md
                                mt-8
                                mb-3

                                opacity-0
                                animate-[heroBadgeIn_0.8s_cubic-bezier(0.22,1,0.36,1)_0.25s_forwards]
                                motion-reduce:animate-none
                                motion-reduce:opacity-100

                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-[#222125]
                                hover:shadow-[0_8px_30px_rgba(48,48,242,0.12)]
                            "
                        >

                            <span className="text-[11px] sm:text-sm text-white/70">
                                {badge_text}
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

                                    transition-all
                                    duration-300
                                    group
                                "
                            >
                                <ArrowRight
                                    className="
                                        h-3.5
                                        w-3.5
                                        transition-transform
                                        duration-300
                                        hover:translate-x-0.5
                                    "
                                />
                            </div>

                        </div>


                        {/* Heading */}
                        <h2
                            className="
                                font-bold
                                text-white
                                text-[42px]
                                sm:text-[56px]
                                lg:text-[81.47px]
                                leading-[1.16]
                                text-center
                                flex
                                items-center
                                justify-center
                                mx-auto

                                opacity-0
                                animate-[heroHeadingIn_1s_cubic-bezier(0.22,1,0.36,1)_0.45s_forwards]
                                motion-reduce:animate-none
                                motion-reduce:opacity-100
                            "
                        >
                            {heading1}
                            <br />
                            {heading2}
                        </h2>


                        {/* Description */}
                        <p
                            className="
                                max-w-211.5
                                mx-auto
                                text-center
                                text-[#6D7792]
                                text-base
                                sm:text-[17px]
                                lg:text-[18px]
                                leading-[1.28]
                                font-normal
                                mt-5

                                opacity-0
                                animate-[heroDescriptionIn_0.8s_cubic-bezier(0.22,1,0.36,1)_0.7s_forwards]
                                motion-reduce:animate-none
                                motion-reduce:opacity-100
                            "
                        >
                            {discription}
                        </p>


                        {/* CTA */}
                        <button 
                        onClick={()=>  navigate(button_text === "Discover Our Story" ? "/about" : "/contact")}
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
                                mt-5
                                border
                                border-[#5183FF]
                                border: 2px solid

                                opacity-0
                                animate-[heroButtonIn_0.8s_cubic-bezier(0.22,1,0.36,1)_0.9s_forwards]
                                motion-reduce:animate-none
                                motion-reduce:opacity-100

                                hover:-translate-y-1
                                hover:shadow-[0_15px_40px_rgba(48,48,242,0.30)]
                                active:scale-95
                            "
                        >
                            {button_text}
                        </button>

                    </div>

                </div>

            </div>


            {/* ===============================
                HEADER ANIMATIONS
            ================================ */}

            <style>
                {`

                    /* Cinematic background movement */
                    @keyframes headerBackground {
                        0% {
                            transform: scale(1);
                        }

                        100% {
                            transform: scale(1.06);
                        }
                    }


                    /* Overlay entrance */
                    @keyframes headerOverlay {
                        0% {
                            opacity: 0;
                        }

                        100% {
                            opacity: 1;
                        }
                    }


                    /* Badge */
                    @keyframes heroBadgeIn {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }

                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }


                    /* Heading */
                    @keyframes heroHeadingIn {
                        0% {
                            opacity: 0;
                            transform: translateY(35px);
                            filter: blur(8px);
                        }

                        100% {
                            opacity: 1;
                            transform: translateY(0);
                            filter: blur(0);
                        }
                    }


                    /* Description */
                    @keyframes heroDescriptionIn {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }

                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }


                    /* Button */
                    @keyframes heroButtonIn {
                        0% {
                            opacity: 0;
                            transform: translateY(18px) scale(0.96);
                        }

                        100% {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }


                    /* Accessibility */
                    @media (prefers-reduced-motion: reduce) {

                        *,
                        *::before,
                        *::after {
                            animation-duration: 0.01ms !important;
                            animation-iteration-count: 1 !important;
                            scroll-behavior: auto !important;
                            transition-duration: 0.01ms !important;
                        }

                    }

                `}
            </style>

        </div>
    )
}

export default Pages_Header

