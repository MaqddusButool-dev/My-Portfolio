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
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.3]">
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
              What I Offer
            </span>
            <div className="w-12 h-px bg-[#6A9C89]" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-[#E9EFEC] border border-[#C4DAD2] hover:border-[#6A9C89]/50 hover:shadow-xl transition-all duration-500"
            >
              {/* Corner accent on hover */}
              <div className="absolute top-6 right-6 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-full h-px bg-[#6A9C89]" />
                <div className="absolute top-0 right-0 w-px h-full bg-[#6A9C89]" />
              </div>

              {/* Service Number */}
              <div className="absolute top-8 right-8 text-6xl font-bold text-[#C4DAD2] group-hover:text-[#6A9C89]/20 transition-colors duration-300">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#6A9C89]/10 flex items-center justify-center mb-6 group-hover:bg-[#6A9C89]/20 transition-colors duration-300">
                <service.icon className="text-3xl text-[#6A9C89]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-[#16423C] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[#6A9C89] text-sm font-medium">{service.subtitle}</p>
                </div>

                <p className="text-[#16423C]/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs text-[#16423C] bg-white border border-[#C4DAD2] rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#6A9C89]/0 group-hover:via-[#6A9C89]/30 to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
