import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#16423C] text-white py-8 sm:py-10 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-bold text-xl sm:text-2xl tracking-wide mb-4 sm:mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-white">MAQDDUS</span>{" "}
            <span className="text-[#6A9C89]">BUTOOL</span>
          </motion.a>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            {["Home", "About", "Services", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#C4DAD2] hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <a 
              href="tel:+923179369176" 
              className="flex items-center gap-2 text-[#C4DAD2] hover:text-[#6A9C89] transition text-xs sm:text-sm"
            >
              <FaPhone className="text-sm" />
              <span className="hidden xs:inline">Contact</span>
            </a>
            <a 
              href="mailto:maqddusbutool102@gmail.com" 
              className="flex items-center gap-2 text-[#C4DAD2] hover:text-[#6A9C89] transition text-xs sm:text-sm"
            >
              <FaEnvelope className="text-sm" />
              <span className="hidden xs:inline">Email</span>
            </a>
            <a 
              href="https://github.com/MaqddusButool-dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#C4DAD2] hover:text-[#6A9C89] transition text-xs sm:text-sm"
            >
              <FaGithub className="text-sm" />
              <span className="hidden xs:inline">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/maqddus-butool-82297b303/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#C4DAD2] hover:text-[#6A9C89] transition text-xs sm:text-sm"
            >
              <FaLinkedin className="text-sm" />
              <span className="hidden xs:inline">LinkedIn</span>
            </a>
          </div>

          {/* Horizontal line */}
          <div className="border-t border-[#6A9C89]/30 w-full max-w-md mx-auto mb-4 sm:mb-6" />

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-[#C4DAD2] flex items-center gap-1 flex-wrap justify-center">
            © {currentYear} <strong className="text-white">Maqddus Butool</strong>. Made with 
            <FaHeart className="text-[#6A9C89] mx-1" /> 
            All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
