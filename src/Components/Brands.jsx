import React from "react";
import { assets } from "../assets/assets";

const Brands = () => {
  const brands = [
    { name: "Velocity", logo: "◐" },
    { name: "Enigma", logo: "✦" },
    { name: "Lumina", logo: "◉" },
    { name: "Vortex", logo: "✺" },
    { name: "Synergy", logo: "≫" },
    { name: "Spectrum", logo: "◐" },
  ];

  return (
    <>
      <style>{`
        .marquee {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 24s linear infinite;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .fade-left,
        .fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 10;
          pointer-events: none;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, #000, transparent);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, #000, transparent);
        }
      `}</style>

      <section className="lg:mt-16 md:py-10 overflow-hidden mb-10 md:mb-0">

        {/* Marquee */}
        <div className="relative">

          <div className="fade-left" />
          <div className="fade-right" />

          <div className="marquee">

            <div className="marquee-track">

              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    px-10
                    md:px-14
                    py-2
                    whitespace-nowrap
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  <span
                    className="
                      text-3xl
                      md:text-4xl
                      text-white/70
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    {brand.logo}
                  </span>

                  <span
                    className="
                      text-xl
                      md:text-2xl
                      font-semibold
                      tracking-wide
                      text-white/60
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    {brand.name}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>

       
      </section>
    </>
  );
};

export default Brands;