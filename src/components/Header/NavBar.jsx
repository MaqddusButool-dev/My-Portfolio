import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaCogs, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const menuItems = [
  { name: "Home", id: "home", icon: FaHome },
  { name: "About", id: "about", icon: FaUser },
  { name: "Services", id: "services", icon: FaCogs },
  { name: "Work", id: "work", icon: FaBriefcase },
  { name: "Contact", id: "contact", icon: FaEnvelope },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = menuItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#C4DAD2]"
          : "bg-white/80 backdrop-blur-md border-b border-[#C4DAD2]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          className="font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide flex-shrink-0"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-[#16423C]">MAQDDUS</span>{" "}
          <span className="text-[#6A9C89]">BUTOOL</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.id}`}
              className={`relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium transition-colors rounded-lg ${
                activeSection === item.id
                  ? "text-[#16423C] bg-[#E9EFEC]"
                  : "text-[#16423C]/70 hover:text-[#16423C] hover:bg-[#E9EFEC]/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#16423C] rounded-full"
                  layoutId="activeIndicator"
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.a
          href="#contact"
          className="hidden lg:flex items-center gap-2 font-semibold bg-[#16423C] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg hover:bg-[#1a524a] transition-all shadow-md text-sm xl:text-base"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Let's Talk</span>
          <HiOutlineArrowRight className="text-lg" />
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#16423C] text-white"
          whileTap={{ scale: 0.95 }}
          aria-label="Menu Toggle"
        >
          <GiHamburgerMenu className="text-xl" />
        </motion.button>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-[#16423C]/40 backdrop-blur-sm lg:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMenu(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-[85%] max-w-[320px] h-full bg-white lg:hidden z-50 overflow-hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header with gradient */}
                <div className="relative bg-gradient-to-br from-[#16423C] to-[#1a524a] p-6 pb-10">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#6A9C89]/20 rounded-full blur-xl" />
                  
                  <div className="relative z-10 flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[#C4DAD2] text-xs uppercase tracking-widest mb-1">Menu</p>
                      <h3 className="text-white font-bold text-lg">Navigation</h3>
                    </div>
                    <motion.button
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm"
                      onClick={() => setShowMenu(false)}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IoClose className="text-2xl" />
                    </motion.button>
                  </div>

                  {/* User greeting */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#6A9C89] flex items-center justify-center text-white font-bold text-lg">
                      M
                    </div>
                    <div>
                      <p className="text-white font-semibold">Maqddus Butool</p>
                      <p className="text-[#C4DAD2] text-sm">Full Stack Developer</p>
                    </div>
                  </div>

                  {/* Wave decoration */}
                  <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-6 fill-white">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z"></path>
                    </svg>
                  </div>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-4 overflow-y-auto">
                  <p className="text-[#16423C]/50 text-xs uppercase tracking-widest mb-3 px-2">Pages</p>
                  <ul className="space-y-1">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <a
                          href={`#${item.id}`}
                          onClick={() => setShowMenu(false)}
                          className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium transition-all ${
                            activeSection === item.id
                              ? "bg-[#16423C] text-white shadow-lg shadow-[#16423C]/20"
                              : "text-[#16423C] hover:bg-[#E9EFEC]"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            activeSection === item.id
                              ? "bg-white/20"
                              : "bg-[#E9EFEC]"
                          }`}>
                            <item.icon className={`text-lg ${
                              activeSection === item.id ? "text-white" : "text-[#16423C]"
                            }`} />
                          </div>
                          <span className="flex-1">{item.name}</span>
                          {activeSection === item.id && (
                            <div className="w-2 h-2 rounded-full bg-[#6A9C89]" />
                          )}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-[#C4DAD2]">
                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <a
                      href="https://github.com/MaqddusButool-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#E9EFEC] flex items-center justify-center text-[#16423C] hover:bg-[#16423C] hover:text-white transition-all"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/maqddus-butool-82297b303/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#E9EFEC] flex items-center justify-center text-[#16423C] hover:bg-[#16423C] hover:text-white transition-all"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a
                      href="mailto:maqddusbutool102@gmail.com"
                      className="w-10 h-10 rounded-xl bg-[#E9EFEC] flex items-center justify-center text-[#16423C] hover:bg-[#16423C] hover:text-white transition-all"
                    >
                      <FaEnvelope className="text-lg" />
                    </a>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    onClick={() => setShowMenu(false)}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#16423C] to-[#1a524a] text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-[#16423C]/20 transition-all"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Let's Work Together</span>
                    <HiOutlineArrowRight className="text-lg" />
                  </motion.a>

                  <p className="text-center text-xs text-[#16423C]/40 mt-4">
                    © 2024 All rights reserved
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
