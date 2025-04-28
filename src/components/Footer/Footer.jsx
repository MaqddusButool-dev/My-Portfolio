import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#121212] text-[#EAEAEA] py-10 px-4  shadow-[0_-10px_20px_-5px_rgba(255,255,255,0.1)]"
    >
      {/* Divider line to separate from section above */}
      {/* <div className="h-1 bg-gradient-to-r from-[#FF3B3B] via-[#ffffff1a] to-[#FF3B3B] mb-6 rounded-full w-3/4 mx-auto" /> */}

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="tel:+923179369176" className="flex items-center gap-2 hover:text-[#FF3B3B] transition">
            <FaPhone />
            <span>Contact</span>
          </a>
          <a href="mailto:maqddusbutool102@gmail.com" className="flex items-center gap-2 hover:text-[#FF3B3B] transition">
            <FaEnvelope />
            <span>Email</span>
          </a>
          <a href="https://github.com/MaqddusButool-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FF3B3B] transition">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/maqddus-butool-82297b303/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FF3B3B] transition">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Horizontal line */}
        <div className="border-t border-[#333333] my-4 w-2/3 mx-auto" />

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} <strong>Maqddus Butool</strong>. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

