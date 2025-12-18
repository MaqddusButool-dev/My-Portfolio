import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#16423C] text-white py-10 px-4"
    >
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="tel:+923179369176" className="flex items-center gap-2 text-[#C4DAD2] hover:text-[#6A9C89] transition">
            <FaPhone />
            <span>Contact</span>
          </a>
          <a href="mailto:maqddusbutool102@gmail.com" className="flex items-center gap-2 text-[#C4DAD2] hover:text-[#6A9C89] transition">
            <FaEnvelope />
            <span>Email</span>
          </a>
          <a href="https://github.com/MaqddusButool-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#C4DAD2] hover:text-[#6A9C89] transition">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/maqddus-butool-82297b303/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#C4DAD2] hover:text-[#6A9C89] transition">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Horizontal line */}
        <div className="border-t border-[#6A9C89]/30 my-6 w-2/3 mx-auto" />

        {/* Copyright */}
        <p className="text-sm text-[#C4DAD2]">
          © {new Date().getFullYear()} <strong className="text-white">Maqddus Butool</strong>. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
