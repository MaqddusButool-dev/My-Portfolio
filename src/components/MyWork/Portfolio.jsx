import React, { useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { assets } from "../../assets/assets";
import { X } from "lucide-react";
import { HiOutlineArrowRight } from "react-icons/hi";

const projects = [
  {
    title: "Inventory Management System",
    shortDescription:
      "Built a responsive frontend for an arms steel company using Next.js and Tailwind CSS. Also contributed to backend features with Prisma and PostgreSQL under guidance.",
    detailedDescription: `From November 25, 2024, to January 2, 2025, I developed the frontend for a custom Inventory Management System tailored to an arms steel company. The focus was on creating a responsive and user-friendly interface to ensure ease of use for the company's operations. During this project, I worked closely under the mentorship of Sir Najam, where I contributed to backend development, particularly in implementing core functionalities and ensuring seamless integration with the frontend.`,
    image: assets.inventery_front,
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    screenshots: [
      assets.inventory01,
      assets.inventory05,
      assets.inventory03,
      assets.inventory04,
      assets.inventory02,
      assets.inventory06,
      assets.inventory07,
      assets.inventory08,
      assets.inventory09,
      assets.inventory10,
      assets.inventory11,
    ],
    githubUrl:
      "https://github.com/MaqddusButool-dev/ARMSSTEEL_Invetory_Management_System",
    liveDemoUrl:
      "https://github.com/MaqddusButool-dev/ARMSSTEEL_Invetory_Management_System/blob/main/run_ims.bat",
  },
  {
    title: "Portfolio Website",
    shortDescription:
      "A modern and responsive personal portfolio website built with Next.js to showcase my skills, projects, and experience.",
    detailedDescription:
      "This project is a fully responsive and SEO-friendly personal portfolio website designed and developed using Next.js and React. It features a clean UI, smooth navigation, dark/light mode toggle, and animated transitions. The site includes sections for an about me, skills, featured projects, and a contact form. It's optimized for performance and deployable with platforms like Vercel.",
    image: assets.portfolio,
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    screenshots: [
      assets.portfolio1,
      assets.portfolio2,
      assets.portfolio3,
      assets.portfolio4,
      assets.portfolio5,
      assets.portfolio6,
    ],
    githubUrl: "https://github.com/MaqddusButool-dev/portfolio",
    liveDemoUrl: "https://maqddusbutool.vercel.app/",
  },
  {
    title: "Business Website",
    shortDescription:
      "I designed a clean and responsive website for Arms Steel Company to showcase their steel products and company profile.",
    detailedDescription:
      "I developed a responsive and modern business website for Arms Steel Company using Next.js and TypeScript. The website is designed to professionally showcase the company's profile and a variety of steel products. It includes a clean homepage with a company overview, a dynamic product display section, and a fully functional contact form integrated with the Gmail API for real-time message handling.",
    image: assets.armfront,
    tags: ["Next.js", "TypeScript", "Gmail API", "Tailwind CSS"],
    screenshots: [
      assets.arms1,
      assets.arms2,
      assets.arms3,
      assets.arms4,
      assets.arms5,
      assets.arms6,
    ],
    githubUrl: "https://github.com/MaqddusButool-dev/ARMS_STEEL_WEBSITE",
    liveDemoUrl: "https://arms-steel-website.vercel.app/",
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section
        ref={ref}
        id="work"
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

        {/* Decorative blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6A9C89]/10 rounded-full blur-3xl" />

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
                Portfolio
              </span>
              <div className="w-12 h-px bg-[#6A9C89]" />
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`group relative rounded-3xl overflow-hidden bg-white border border-[#C4DAD2] hover:border-[#6A9C89]/50 hover:shadow-xl transition-all duration-500 ${
                  idx === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${idx === 0 ? "h-72 md:h-96" : "h-56 md:h-64"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#6A9C89]/0 group-hover:bg-[#6A9C89]/10 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs text-[#16423C] bg-[#E9EFEC] border border-[#C4DAD2] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#16423C] mb-3 group-hover:text-[#6A9C89] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6A9C89] text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex items-center gap-2 text-[#6A9C89] font-medium text-sm hover:gap-3 transition-all"
                    >
                      View Details
                      <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9EFEC] border border-[#C4DAD2] text-[#16423C] hover:text-[#6A9C89] hover:border-[#6A9C89]/50 hover:shadow-md transition-all"
                        >
                          <FaGithub className="text-lg" />
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#6A9C89] text-white hover:bg-[#5a8a79] transition-all"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-6 right-6 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-full h-px bg-[#6A9C89]" />
                  <div className="absolute top-0 right-0 w-px h-full bg-[#6A9C89]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <Dialog
            open={true}
            onClose={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              className="fixed inset-0 bg-[#16423C]/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            />

            <motion.div
              className="relative bg-white border border-[#C4DAD2] rounded-3xl p-6 md:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-50 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {activeProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs text-[#6A9C89] bg-[#6A9C89]/10 border border-[#6A9C89]/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#16423C]">
                    {activeProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9EFEC] border border-[#C4DAD2] text-[#16423C] hover:text-[#6A9C89] hover:border-[#6A9C89]/50 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-[#6A9C89] leading-relaxed mb-6">
                {activeProject.detailedDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#E9EFEC] border border-[#C4DAD2] text-[#16423C] rounded-full hover:border-[#6A9C89]/50 transition-all"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
                {activeProject.liveDemoUrl && (
                  <a
                    href={activeProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#6A9C89] text-white rounded-full hover:bg-[#5a8a79] transition-all"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Screenshots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeProject.screenshots.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full rounded-xl border border-[#C4DAD2] cursor-pointer hover:border-[#6A9C89]/50 hover:shadow-lg transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    onClick={() => setSelectedImage(src)}
                  />
                ))}
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-[#16423C]/95 flex items-center justify-center z-[60] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img
                src={selectedImage}
                alt="Full screen"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#C4DAD2] text-[#16423C] hover:text-[#6A9C89] transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
