import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { assets } from "../../assets/assets";

// Typing effect setup
const words = ["Web Developer", "Frontend Developer", "Python Programmer", "Backend Developer"];

function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const word = words[index];
    if (charIndex < word.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + word[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % words.length);
      }, 1000);
    }
  }, [charIndex, index]);

  return (
    <motion.span
      key={index}
      className="inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText} <span className="animate-blink text-white">|</span>
    </motion.span>
  );
}

function HomePage() {
  return (
    // <div id="home" className="bg-[#121212] text-[#EAEAEA] min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6">
    //   <div className="container max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
    //     {/* Left Content Section */}
    //     <motion.div
    //       className="text-center md:text-left space-y-4 w-full md:w-2/5"
    //       initial={{ opacity: 0, x: -50 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.8 }}
    //     >
    //       <h2 className="text-base sm:text-lg md:text-2xl font-light text-[#A1A1A1]">
    //         Hello, It's Me
    //       </h2>
    //       <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white bg-gradient-to-r from-[#FF3B3B] to-[#E63946] bg-clip-text">
    //         MAQDDUS BUTOOL
    //       </h1>
    //       <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FF3B3B] mt-2">
    //         And I'm a <TypingEffect />
    //       </h3>
    //       <p className="text-sm sm:text-base text-[#A1A1A1] max-w-md mx-auto md:mx-0">
    //         I'm a web designer with extensive experience in website design, frontend development, and UI/UX.
    //       </p>

    //       {/* Social Icons */}
    //       <div className="flex justify-center md:justify-start gap-5 mt-5 text-white text-xl sm:text-2xl">
    //         {[
    //           { Icon: FaLinkedin, link: "https://www.linkedin.com/in/maqddus-butool-82297b303/" },
    //           { Icon: FaGithub, link: "https://github.com/MaqddusButool-dev" },
    //           { Icon: FaInstagram, link: "https://www.instagram.com/your-instagram" },
    //           { Icon: SiVercel, link: "https://vercel.com/maqddus-butools-projects" },
    //         ].map(({ Icon, link }, i) => (
    //           <motion.a
    //             key={i}
    //             href={link}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             whileHover={{ scale: 1.2, rotate: 5 }}
    //             transition={{ type: "spring", stiffness: 300 }}
    //             className="cursor-pointer hover:text-[#FF3B3B] transition-colors"
    //           >
    //             <Icon />
    //           </motion.a>
    //         ))}
    //       </div>

    //       {/* Buttons */}
    //       <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
    //         <motion.a
    //           className="bg-[#FF3B3B] text-white px-6 py-2 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#E63946] transition-all shadow-lg"
    //           whileHover={{ scale: 1.1 }}
    //           whileTap={{ scale: 0.95 }}
    //           href="#about"
    //         >
    //           More About Me
    //         </motion.a>
    //         <motion.a
    //           href={assets.Resume}
    //           className="bg-[#1E1E1E] text-[#EAEAEA] px-6 py-2 rounded-lg text-base sm:text-lg font-semibold border border-[#333333] hover:bg-[#282828] transition-all shadow-lg"
    //           whileHover={{ scale: 1.1 }}
    //           whileTap={{ scale: 0.95 }}
    //         >
    //           Download My Resume
    //         </motion.a>
    //       </div>
    //     </motion.div>

    //     {/* Right Image Section */}
    //     <motion.div
    //       className="relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full overflow-hidden border-8 
    //       border-gradient-to-r from-[#FF3B3B] to-[#E63946] shadow-lg shadow-[#FF3B3B]/50 
    //       flex items-center justify-center"
    //       initial={{ opacity: 0, scale: 0.8 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 0.8, ease: "easeInOut" }}
    //       whileHover={{
    //         scale: 1.08,
    //         rotate: 3,
    //         boxShadow: "0px 0px 25px #FF3B3B",
    //       }}
    //       whileTap={{ scale: 0.98 }}
    //     >
    //       {/* Floating Animation */}
    //       <motion.img
    //         src={assets.HeroImage}
    //         alt="Profile Picture"
    //         className="w-full h-full object-cover"
    //         animate={{
    //           y: [0, -10, 0],
    //         }}
    //         transition={{
    //           duration: 3,
    //           repeat: Infinity,
    //           repeatType: "reverse",
    //           ease: "easeInOut",
    //         }}
    //       />

    //       {/* Glow Effect */}
    //       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF3B3B]/30 to-transparent blur-lg opacity-20"></div>
    //     </motion.div>
    //   </div>
    // </div>
    <div
  id="home"
  className="bg-[#121212] text-[#EAEAEA] min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6"
>
  <div className="container max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
    
    {/* Left Content Section */}
    <motion.div
      className="text-center lg:text-left space-y-4 w-full lg:w-2/5"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-base sm:text-lg md:text-2xl font-light text-[#A1A1A1]">
        Hello, It's Me
      </h2>
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white bg-gradient-to-r from-[#FF3B3B] to-[#E63946] bg-clip-text">
        MAQDDUS BUTOOL
      </h1>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FF3B3B] mt-2">
        And I'm a <TypingEffect />
      </h3>
      <p className="text-sm sm:text-base text-[#A1A1A1] max-w-md mx-auto lg:mx-0">
        I'm a web designer with extensive experience in website design, frontend development, and UI/UX.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center lg:justify-start gap-5 mt-5 text-white text-xl sm:text-2xl">
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
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer hover:text-[#FF3B3B] transition-colors"
          >
            <Icon />
          </motion.a>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
        <motion.a
          className="bg-[#FF3B3B] text-white px-6 py-2 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#E63946] transition-all shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#about"
        >
          More About Me
        </motion.a>
        <motion.a
          href={assets.Resume}
          className="bg-[#1E1E1E] text-[#EAEAEA] px-6 py-2 rounded-lg text-base sm:text-lg font-semibold border border-[#333333] hover:bg-[#282828] transition-all shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download My Resume
        </motion.a>
      </div>
    </motion.div>

    {/* Right Image Section */}
    <motion.div
      className="relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full overflow-hidden border-8 
      border-gradient-to-r from-[#FF3B3B] to-[#E63946] shadow-lg shadow-[#FF3B3B]/50 
      flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      whileHover={{
        scale: 1.08,
        rotate: 3,
        boxShadow: "0px 0px 25px #FF3B3B",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.img
        src={assets.HeroImage}
        alt="Profile Picture"
        className="w-full h-full object-cover"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF3B3B]/30 to-transparent blur-lg opacity-20"></div>
    </motion.div>
  </div>
</div>

  );
}


export default HomePage;
