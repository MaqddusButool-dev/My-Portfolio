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
      className="relative py-24 overflow-hidden bg-[#E9EFEC]"
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

      {/* Decorative blur circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6A9C89]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#16423C]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#6A9C89]" />
            <span className="text-sm text-[#6A9C89] uppercase tracking-[0.2em] font-medium">
              About Me
            </span>
            <div className="w-12 h-px bg-[#6A9C89]" />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Introduction Text - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 p-10 rounded-[2rem] bg-white border border-[#C4DAD2] shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
          >
            {/* Quote icon */}
            <FaQuoteLeft className="absolute top-8 right-8 text-6xl text-[#6A9C89]/10" />
            
            <p className="text-xl md:text-2xl text-[#16423C] leading-relaxed mb-8 relative z-10">
              I'm a <span className="text-[#6A9C89] font-semibold">Full Stack Developer</span> with 
              a passion for crafting beautiful, functional, and user-centered digital experiences. 
              I specialize in modern technologies like{" "}
              <span className="text-[#16423C] font-semibold">React</span>,{" "}
              <span className="text-[#16423C] font-semibold">Next.js</span>, and{" "}
              <span className="text-[#16423C] font-semibold">Python</span>.
            </p>
            
            <p className="text-[#6A9C89] leading-relaxed mb-8">
              Currently pursuing BS Computer Science at Air University, Islamabad. 
              I love turning complex problems into simple, beautiful solutions.
            </p>

            {/* Animated underline */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#6A9C89] to-[#16423C] rounded-full" />
          </motion.div>

          {/* Right Column - Stats & Resume */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 p-8 rounded-[2rem] bg-gradient-to-br from-[#6A9C89] to-[#16423C] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="text-7xl font-bold text-white mb-3">2+</div>
                <div className="text-white/90 text-xl font-medium">Years of Experience</div>
                <p className="text-white/70 text-sm mt-2">Building web applications & digital products</p>
              </div>
              
              <BiCodeBlock className="absolute bottom-6 right-6 text-7xl text-white/15" />
            </motion.div>

            {/* Resume Card */}
            <motion.a
              href={assets.Resume}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-[2rem] bg-[#16423C] hover:bg-[#1a524a] transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#6A9C89] flex items-center justify-center">
                  <FaDownload className="text-xl text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Download Resume</h4>
                  <p className="text-[#C4DAD2] text-sm">Get my latest CV</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#6A9C89]/20 flex items-center justify-center group-hover:bg-[#6A9C89] transition-colors">
                <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          </div>

          {/* Skills Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-12 p-10 rounded-[2rem] bg-white border border-[#C4DAD2] shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-bold text-[#16423C]">
                Tech Stack
              </h4>
              <span className="text-sm text-[#6A9C89]">Skills & Technologies</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-5 rounded-2xl bg-[#E9EFEC] border border-[#C4DAD2] hover:border-[#6A9C89]/50 hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#6A9C89]/10 flex items-center justify-center group-hover:bg-[#6A9C89]/20 transition-all">
                    <skill.icon className="text-2xl text-[#6A9C89]" />
                  </div>
                  <span className="text-[#16423C] font-medium">{skill.name}</span>
                  <div className="mt-3 h-1 bg-[#C4DAD2] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#6A9C89] to-[#16423C] rounded-full"
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
