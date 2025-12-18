import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaPython,
  FaDownload,
  FaQuoteLeft,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";
import { assets } from "../../assets/assets";

const skills = [
  { icon: FaReact, name: "React", level: 90 },
  { icon: SiNextdotjs, name: "Next.js", level: 85 },
  { icon: FaJs, name: "JavaScript", level: 95 },
  { icon: SiTypescript, name: "TypeScript", level: 80 },
  { icon: FaPython, name: "Python", level: 85 },
  { icon: SiTailwindcss, name: "Tailwind", level: 90 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white"
    >
      {/* Decorative blur circles */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#6A9C89]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#16423C]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-[#16423C]" />
            <span className="text-xs sm:text-sm text-[#16423C] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold">
              About Me
            </span>
            <div className="w-8 sm:w-12 h-px bg-[#16423C]" />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Introduction Text - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] bg-[#E9EFEC] border border-[#C4DAD2] shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
          >
            {/* Quote icon */}
            <FaQuoteLeft className="absolute top-4 sm:top-8 right-4 sm:right-8 text-4xl sm:text-6xl text-[#16423C]/10" />
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#16423C] leading-relaxed mb-4 sm:mb-6 lg:mb-8 relative z-10 font-medium">
              I'm a <span className="text-[#16423C] font-bold">Full Stack Developer</span> with 
              a passion for crafting beautiful, functional, and user-centered digital experiences. 
              I specialize in modern technologies like{" "}
              <span className="text-[#16423C] font-bold">React</span>,{" "}
              <span className="text-[#16423C] font-bold">Next.js</span>, and{" "}
              <span className="text-[#16423C] font-bold">Python</span>.
            </p>
            
            <p className="text-sm sm:text-base text-[#16423C]/70 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
              Currently pursuing BS Computer Science at Air University, Islamabad. 
              I love turning complex problems into simple, beautiful solutions.
            </p>

            {/* Animated underline */}
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#16423C] to-[#6A9C89] rounded-full" />
          </motion.div>

          {/* Right Column - Stats & Resume */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-[#16423C] to-[#1a524a] relative overflow-hidden min-h-[180px] sm:min-h-[200px]"
            >
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-black/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3">2+</div>
                <div className="text-white text-lg sm:text-xl font-semibold">Years of Experience</div>
                <p className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2">Building web applications & digital products</p>
              </div>
              
              <BiCodeBlock className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-5xl sm:text-7xl text-white/15" />
            </motion.div>

            {/* Resume Card */}
            <motion.a
              href={assets.Resume}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-[#16423C] hover:bg-[#1a524a] transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-lg sm:rounded-xl bg-[#6A9C89] flex items-center justify-center flex-shrink-0">
                  <FaDownload className="text-base sm:text-xl text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-lg">Download Resume</h4>
                  <p className="text-[#C4DAD2] text-xs sm:text-sm">Get my latest CV</p>
                </div>
              </div>
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#6A9C89]/20 flex items-center justify-center group-hover:bg-[#6A9C89] transition-colors flex-shrink-0">
                <span className="text-white text-sm sm:text-base group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          </div>

          {/* Skills Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-12 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] bg-[#E9EFEC] border border-[#C4DAD2] shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-6 sm:mb-8">
              <h4 className="text-xl sm:text-2xl font-bold text-[#16423C]">
                Tech Stack
              </h4>
              <span className="text-xs sm:text-sm text-[#16423C]/70 font-medium">Skills & Technologies</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-white border border-[#C4DAD2] hover:border-[#16423C]/30 hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-lg sm:rounded-xl bg-[#16423C]/10 flex items-center justify-center group-hover:bg-[#16423C]/20 transition-all">
                    <skill.icon className="text-lg sm:text-xl lg:text-2xl text-[#16423C]" />
                  </div>
                  <span className="text-[#16423C] font-semibold text-xs sm:text-sm lg:text-base">{skill.name}</span>
                  <div className="mt-2 sm:mt-3 h-1 bg-[#C4DAD2] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#16423C] to-[#6A9C89] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
