import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCogs, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const menuItems = [
  { name: "Home", id: "home", icon: FaHome },
  { name: "About", id: "about", icon: FaUser },
  { name: "Services", id: "services", icon: FaCogs },
  { name: "Work", id: "work", icon: FaBriefcase },
  { name: "Contact", id: "contact", icon: FaEnvelope },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hideBottomNav, setHideBottomNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Hide/show bottom nav based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideBottomNav(true);
      } else {
        setHideBottomNav(false);
      }
      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      const sections = menuItems.map((item) => document.getElementById(item.id));
      const scrollPosition = currentScrollY + 100;

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


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

      </div>

      {/* Mobile Bottom Navigation Bar */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 lg:hidden z-50"
        initial={{ y: 0 }}
        animate={{ y: hideBottomNav ? 100 : 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Glass effect background */}
        <div className="relative bg-white/95 backdrop-blur-xl border-t border-[#C4DAD2] shadow-[0_-4px_30px_rgba(22,66,60,0.1)]">
          {/* Decorative top line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#C4DAD2] rounded-full -translate-y-2" />
          
          <div className="flex items-center justify-around px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.a
                  key={index}
                  href={`#${item.id}`}
                  className="relative flex flex-col items-center justify-center py-1.5 px-3 min-w-[60px]"
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Active background pill */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#16423C] to-[#1a524a] rounded-2xl"
                      layoutId="bottomNavActive"
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    />
                  )}
                  
                  {/* Icon container */}
                  <motion.div
                    className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "text-white" 
                        : "text-[#16423C]/60"
                    }`}
                    animate={{ 
                      scale: isActive ? 1.1 : 1,
                      y: isActive ? -2 : 0
                    }}
                    transition={{ type: "spring", damping: 15, stiffness: 300 }}
                  >
                    <Icon className={`text-lg transition-all ${isActive ? "text-xl" : ""}`} />
                  </motion.div>
                  
                  {/* Label */}
                  <motion.span
                    className={`relative z-10 text-[10px] font-semibold mt-0.5 transition-all duration-300 ${
                      isActive 
                        ? "text-white" 
                        : "text-[#16423C]/60"
                    }`}
                    animate={{ 
                      opacity: 1,
                      y: isActive ? -1 : 0
                    }}
                  >
                    {item.name}
                  </motion.span>
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#6A9C89] rounded-full shadow-[0_0_8px_rgba(106,156,137,0.6)]"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default NavBar;
