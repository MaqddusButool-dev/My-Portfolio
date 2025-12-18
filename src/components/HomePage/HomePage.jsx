import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { assets } from "../../assets/assets";

const roles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "Backend Developer",
  "Python Developer",
];

// Typing effect with cursor
function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = roles[index];
    
    if (!isDeleting && charIndex < word.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + word[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === word.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, index, isDeleting]);

  return (
    <span className="text-[#6A9C89]">
      {displayedText}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-[#6A9C89] ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}

function HomePage() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#E9EFEC]"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.4]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C4DAD2 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#6A9C89]/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#6A9C89]/20 to-transparent" />
      </div>

      {/* Decorative blur circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#6A9C89]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#16423C]/10 rounded-full blur-3xl" />

      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-8 left-8 w-16 h-px bg-[#6A9C89]/40" />
        <div className="absolute top-8 left-8 w-px h-16 bg-[#6A9C89]/40" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-8 right-8 w-16 h-px bg-[#6A9C89]/40" />
        <div className="absolute top-8 right-8 w-px h-16 bg-[#6A9C89]/40" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-8 left-8 w-16 h-px bg-[#6A9C89]/40" />
        <div className="absolute bottom-8 left-8 w-px h-16 bg-[#6A9C89]/40" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-8 right-8 w-16 h-px bg-[#6A9C89]/40" />
        <div className="absolute bottom-8 right-8 w-px h-16 bg-[#6A9C89]/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          {/* Text Section */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Small intro line */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-8 h-px bg-[#6A9C89]" />
              <span className="text-sm text-[#6A9C89] uppercase tracking-[0.2em] font-light">
                Welcome
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-lg md:text-xl text-[#6A9C89] font-light mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hello, I'm
            </motion.p>
            
            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-[#16423C]">Maqddus</span>{" "}
              <span className="text-[#6A9C89]">Butool</span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              className="text-xl md:text-2xl font-medium text-[#16423C] mb-6 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypingEffect />
            </motion.h2>

            {/* Divider */}
            <motion.div 
              className="w-20 h-px bg-gradient-to-r from-[#6A9C89] to-transparent mx-auto lg:mx-0 mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />

            {/* Description */}
            <motion.p
              className="text-[#16423C]/70 max-w-md mx-auto lg:mx-0 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Crafting digital experiences with clean code and creative solutions. 
              Specialized in building modern web applications.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/maqddus-butool-82297b303/" },
                { Icon: FaGithub, link: "https://github.com/MaqddusButool-dev" },
                { Icon: FaInstagram, link: "https://www.instagram.com/your-instagram" },
                { Icon: SiVercel, link: "https://vercel.com/maqddus-butools-projects" },
              ].map(({ Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#C4DAD2] hover:border-[#6A9C89] hover:bg-[#6A9C89]/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-[#16423C] group-hover:text-[#6A9C89] transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="#work"
                className="px-8 py-3 bg-[#6A9C89] text-white font-medium rounded hover:bg-[#5a8a79] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
              
              <motion.a
                href={assets.Resume}
                className="px-8 py-3 border border-[#6A9C89] text-[#16423C] font-medium rounded hover:bg-[#6A9C89] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-[#6A9C89]/30 rounded-lg" />
            <div className="absolute -inset-8 border border-[#6A9C89]/15 rounded-lg" />
            
            {/* Green accent corner */}
            <div className="absolute -top-4 -right-4 w-8 h-8">
              <div className="absolute top-0 right-0 w-full h-px bg-[#6A9C89]" />
              <div className="absolute top-0 right-0 w-px h-full bg-[#6A9C89]" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8">
              <div className="absolute bottom-0 left-0 w-full h-px bg-[#6A9C89]" />
              <div className="absolute bottom-0 left-0 w-px h-full bg-[#6A9C89]" />
            </div>

            {/* Main image */}
            <motion.div
              className="relative w-64 sm:w-72 md:w-80 aspect-square overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={assets.HeroImage}
                alt="Maqddus Butool"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E9EFEC] via-transparent to-transparent opacity-60" />
              
              {/* Green tint overlay */}
              <div className="absolute inset-0 bg-[#6A9C89]/10 mix-blend-overlay" />
            </motion.div>

            {/* Floating label */}
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-white border border-[#C4DAD2] shadow-sm rounded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <span className="text-xs text-[#16423C] uppercase tracking-[0.15em]">Full Stack Developer</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom line decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C4DAD2] to-transparent" />
    </section>
  );
}

export default HomePage;
