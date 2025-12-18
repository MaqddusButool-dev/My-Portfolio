import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaDatabase, FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const services = [
  {
    icon: FaReact,
    title: "Frontend Development",
    subtitle: "React.js",
    description:
      "Building high-performance, interactive web applications with React.js for seamless user experiences.",
    features: ["Component Architecture", "State Management", "Performance Optimization"],
  },
  {
    icon: SiNextdotjs,
    title: "Web Development",
    subtitle: "Next.js",
    description:
      "Creating optimized and SEO-friendly web apps with Next.js, using SSR and static site generation.",
    features: ["Server Side Rendering", "API Routes", "SEO Optimization"],
  },
  {
    icon: FaPython,
    title: "Backend Development",
    subtitle: "Python & FastAPI",
    description:
      "Developing scalable backend solutions with Python, including automation, AI, and APIs.",
    features: ["REST APIs", "AI Integration", "Automation Scripts"],
  },
  {
    icon: FaDatabase,
    title: "Database Design",
    subtitle: "PostgreSQL & Prisma",
    description:
      "Optimizing databases with PostgreSQL & Prisma for high performance and data integrity.",
    features: ["Schema Design", "Query Optimization", "Data Modeling"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#E9EFEC]"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C4DAD2 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Decorative blur circles */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#16423C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#6A9C89]/5 rounded-full blur-3xl" />

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
              What I Offer
            </span>
            <div className="w-8 sm:w-12 h-px bg-[#16423C]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#16423C] leading-tight px-4">
            Services & <span className="text-[#6A9C89]">Expertise</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#C4DAD2] hover:border-[#16423C]/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Corner accent on hover */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 sm:w-8 h-6 sm:h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-full h-px bg-[#16423C]" />
                <div className="absolute top-0 right-0 w-px h-full bg-[#16423C]" />
              </div>

              {/* Service Number */}
              <div className="absolute top-5 sm:top-8 right-5 sm:right-8 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E9EFEC] group-hover:text-[#16423C]/10 transition-colors duration-300">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#16423C]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#16423C]/20 transition-colors duration-300">
                <service.icon className="text-xl sm:text-2xl lg:text-3xl text-[#16423C]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#16423C] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[#6A9C89] text-xs sm:text-sm font-semibold">{service.subtitle}</p>
                </div>

                <p className="text-[#16423C]/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-[#16423C] font-medium bg-[#E9EFEC] border border-[#C4DAD2] rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-5 sm:left-8 right-5 sm:right-8 h-px bg-gradient-to-r from-transparent via-[#16423C]/0 group-hover:via-[#16423C]/30 to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
