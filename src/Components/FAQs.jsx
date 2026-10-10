import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const FaqsData = [
    {
      question: "How do we start working together?",
      answer:
        "Simple — reach out via our contact form or book a free discovery call. We'll discuss your project, goals, and budget, then put together a clear proposal.",
    },
    {
      question: "What does a typical project cost?",
      answer:
        "Every project is scoped individually. Pricing depends on the service, complexity, and timeline. We offer transparent quotes with no hidden fees — you'll always know what you're paying for.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Timelines vary by scope. A brand identity takes 1–2 weeks, a website 3–6 weeks, and a full product design 6–12 weeks. We'll give you a clear timeline before we begin.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. We offer post-launch support packages for updates, fixes, and iterations. Many clients stay on for ongoing design and development work.",
    },
    {
      question: "Will I own everything after the project?",
      answer:
        "Absolutely. You get full ownership of all files, assets, code, and accounts. Nothing is locked behind a subscription or held back at handoff.",
    },
    {
      question: "Can you redesign an existing product or website?",
      answer:
        "Absolutely. Redesigns are a big part of what we do, whether it's a full overhaul or a focused improvement to specific flows and pages.",
    },
  ];

  // =========================================================
  // ANIMATION VARIANTS
  // =========================================================

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const faqVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 lg:px-8 py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      <div className="grid lg:grid-cols-2 gap-20 items-start">

        {/* =====================================================
            LEFT
        ===================================================== */}

        <motion.div variants={containerVariants}>

          {/* Badge */}

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
            className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border-t border-blue-700/40 bg-[#0b0b18]"
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
              className="w-2 h-2 rounded-full bg-white"
            />

            <span className="text-white text-sm font-medium">
              FAQs
            </span>
          </motion.div>


          {/* Heading */}

          <motion.div
            variants={fadeUpVariants}
            className="mt-8"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Frequently
            </h2>

            <h2 className="text-4xl lg:text-5xl font-semibold text-white/40 leading-tight mt-2">
              Asked Questions
            </h2>
          </motion.div>


          {/* Description */}

          <motion.p
            variants={fadeUpVariants}
            className="mt-6 text-white/50 leading-7 max-w-md"
          >
            Everything you need to know before we get started. Still have a
            question? Feel free to get in touch.
          </motion.p>

        </motion.div>


        {/* =====================================================
            RIGHT
        ===================================================== */}

        <motion.div
          variants={containerVariants}
          className="space-y-1"
        >

          {FaqsData.map((faq, i) => (

            <motion.div
              key={i}
              variants={faqVariants}
              layout
              className={`border-b border-white/10 transition-all duration-300 ${
                openIndex === i
                  ? "bg-white/3 rounded-lg"
                  : ""
              }`}
            >

              {/* QUESTION */}

              <motion.button
                onClick={() =>
                  setOpenIndex(
                    openIndex === i ? null : i
                  )
                }
                whileTap={{
                  scale: 0.995,
                }}
                className="w-full flex items-center justify-between py-6 text-left group"
                aria-expanded={openIndex === i}
              >

                <motion.span
                  animate={{
                    x: openIndex === i ? 2 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-white font-medium text-base pr-8 group-hover:text-white/80 transition"
                >
                  {faq.question}
                </motion.span>


                {/* CHEVRON */}

                <motion.div
                  animate={{
                    rotate: openIndex === i ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="shrink-0"
                >
                  <ChevronDown
                    size={20}
                    className="text-white/70"
                  />
                </motion.div>

              </motion.button>


              {/* ANSWER */}

              <AnimatePresence initial={false}>
                {openIndex === i && (

                  <motion.div
                    key="answer"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      height: {
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      opacity: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    }}
                    className="overflow-hidden"
                  >

                    <motion.p
                      initial={{
                        y: -8,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: -5,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.05,
                        ease: "easeOut",
                      }}
                      className="text-white/60 leading-7 pr-8 pb-6"
                    >
                      {faq.answer}
                    </motion.p>

                  </motion.div>

                )}
              </AnimatePresence>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </motion.section>
  );
};

export default FAQs;

