import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <nav className="relative z-50 w-full px-5 sm:px-8 lg:px-10 pt-6 sm:pt-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={assets.logo}
              alt="Artivio"
              className="h-10 w-auto sm:h-12 transition-transform duration-300 hover:scale-105"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="rounded-full border border-white/10 bg-black/40 px-3 py-4 backdrop-blur-xl">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-white/15 text-white" 
                            : "text-white/70 hover:bg-white/10 hover:text-white"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop CTA */}
          <button onClick={()=> navigate('/portfolio')}
            className="
              hidden md:block
              rounded-full
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
              active:scale-95
            "
          >
            See Our Work
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 transition hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[82%] max-w-sm bg-[#05050A]/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <img
            src={assets.logo}
            alt="Artivio"
            className="h-10 w-auto"
          />

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 hover:bg-white/10"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-8 gap-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-5 py-4 text-base transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="px-6 mt-4">
          <button onClick={()=> navigate('/portfolio')}
            className="
              w-full
              rounded-full
              bg-white
              py-3.5
              text-black
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-95
            "
          >
            See Our Work
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
