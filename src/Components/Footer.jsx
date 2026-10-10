import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaBehance, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Footer = () => {

const brandIcons = [
  {
    icon: <FaBehance className="h-5 w-5" />,
    label: "Behance",
    link: "https://www.behance.net/artivoxstudio",
  },
  {
    icon: <FaLinkedin className="h-5 w-5" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/artivoxstudio/?viewAsMember=true",
  },
  {
    icon: <FaInstagram className="h-5 w-5" />,
    label: "Instagram",
    link: "https://www.instagram.com/artivoxstudio.37/",
  },
];


  const footerLinks = [
    "Home",
    "About",
    "Services",
    "Portfolio",
   
  ];

  const otherLinks = ["Blogs", "Privacy", "Timeline", "Waitlist"];

  const contactLinks = ["Contact", "FAQs"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer className="text-white mt-16 lg:mt-24 overflow-hidden">
      <div
        className="relative px-4 sm:px-6 lg:px-8 py-10"
        style={{
          backgroundImage: `url(${assets.Footer_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 px-7 py-5"
        >
          {/* ================= LEFT SIDE ================= */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col"
          >
            {/* Logo */}
            <motion.div
              className="flex items-center gap-4 w-fit cursor-pointer group"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src={assets.Footer_logo}
                alt="Artivio Logo"
                className="w-10 h-10 sm:w-12 sm:h-12"
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 12,
                }}
              />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold transition-colors duration-300 group-hover:text-[#6b6bff]">
                artivox
              </h2>
            </motion.div>

            {/* Heading */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold mt-8 max-w-md"
            >
              Book a Call For Free Consultation
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/40 max-w-md mt-4 leading-7"
            >
              Experienced team delivering exceptional digital solutions
              tailored to your brand.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-5 w-fit"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(48,48,242,0.35)",
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  className="group flex items-center gap-3 px-5 py-3 bg-[#3030f2] rounded-full"
                >
                  <span>Contact Us</span>

                  <motion.span
                    className="flex"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Heading */}
            <motion.p
              variants={itemVariants}
              className="mt-16 text-white/40 text-2xl"
            >
              Our Social Handels
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              {brandIcons.map((social, i) => (
               
<motion.a
  href={social.link}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={social.label}
  key={i}
  variants={itemVariants}
  whileHover={{
    y: -7,
    scale: 1.08,
    rotate: -3,
    backgroundColor: "#3030f2",
    boxShadow: "0 12px 30px rgba(48,48,242,0.35)",
  }}
  whileTap={{ scale: 0.94 }}
  transition={{
    type: "spring",
    stiffness: 350,
    damping: 18,
  }}
  className="h-13.25 w-13.25 bg-white/10 rounded-2xl flex items-center justify-center"
>
  {social.icon}
</motion.a>

              ))}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 gap-10"
          >
            {/* Main Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start gap-5"
            >
              <h2 className="font-bold text-lg mb-1">Explore</h2>

              {footerLinks.map((link) => (
                <Link
                  key={link}
                  to={
                    link === "Home"
                      ? "/"
                      : `/${link.toLowerCase()}`
                  }
                  className="group relative text-white/40 hover:text-white transition-colors duration-300"
                >
                  <span>{link}</span>

                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#3030f2] rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </motion.div>

            {/* Others */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start gap-5"
            >
              <h2 className="font-bold text-lg mb-1">Others</h2>

              {otherLinks.map((link) => (
                <Link
                  key={link}
                  to="#"
                  className="group flex items-center text-white/40 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <span>{link}</span>
                </Link>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start gap-5"
            >
              <h2 className="font-bold text-lg mb-1">Contact</h2>

              {contactLinks.map((link) => (
                <Link
                  key={link}
                 to={link === "Contact" ? "/contact" : "#"}
                  className="group text-white/40 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  {link}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom subtle line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative origin-left h-px bg-white/10 mt-10"
        />
      </div>
    </footer>
  );
};

export default Footer;