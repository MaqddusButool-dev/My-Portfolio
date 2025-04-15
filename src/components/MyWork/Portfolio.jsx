import React, { useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { assets } from "../../assets/assets";
import { X } from "lucide-react"; 

const projects = [
  {
    title: "Inventory Management System",
    shortDescription:
      "Built a responsive frontend for an arms steel company using Next.js and Tailwind CSS. Also contributed to backend features with Prisma and PostgreSQL under guidance.",
    detailedDescription: `
     From November 25, 2024, to January 2, 2025, I developed the frontend for a custom Inventory Management System tailored to an arms steel company. The focus was on creating a responsive and user-friendly interface to ensure ease of use for the company's operations. During this project, I worked closely under the mentorship of Sir Najam, where I contributed to backend development, particularly in implementing core functionalities and ensuring seamless integration with the frontend. This experience significantly enhanced my frontend development skills and provided valuable hands-on experience in backend development concepts. It also fostered collaboration and teamwork in a real-world development environment.
     Key technologies and tools used during the project included HTML, Tailwind CSS, TypeScript, and Next.js for frontend development, and Prisma and PostgreSQL for backend contributions. I also utilized Git, Figma, and VS Code throughout the project to streamline the development process.
    `,
    image: assets.inventery_front,
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
    // githubUrl: "https://github.com/MaqddusButool-dev/Invetory_Management_System.git",
    // liveDemoUrl: "https://code-summarizer.vercel.app",
  },
  {
    title: "Portfolio Website",
    shortDescription: "Personal portfolio with Nextjs A modern and responsive personal portfolio website built with Next.js  to showcase my skills, projects, and experience.",
    detailedDescription:
    "This project is a fully responsive and SEO-friendly personal portfolio website designed and developed using Next.js and React. It features a clean UI, smooth navigation, dark/light mode toggle, and animated transitions. The site includes sections for an about me, skills, featured projects, and a contact form. It's optimized for performance and deployable with platforms like Vercel. This portfolio not only highlights my technical skills but also serves as a platform to connect with potential collaborators and employers.",
    image: assets.portfolio,
    screenshots: [
      assets.portfolio1,
      assets.portfolio2,
      assets.portfolio3,
      assets.portfolio4,
      assets.portfolio5,
      assets.portfolio6
    ],
    githubUrl: "https://github.com/your-username/portfolio",
    liveDemoUrl: "https://your-portfolio.vercel.app",
  },
  {
    title: "Task Manager",
    shortDescription: "Manage tasks and collaborate.",
    detailedDescription:
      "A task management web app that supports real-time collaboration. Users can create, update, and track tasks in shared boards with a modern UI.",
    image: "/images/project3.png",
    screenshots: [
      "/images/project3-screen1.png",
      "/images/project3-screen2.png",
    ],
    githubUrl: "https://github.com/your-username/task-manager",
    liveDemoUrl: "https://task-manager.vercel.app",
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <motion.section
        ref={ref}
        id="work"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold text-[#121212] mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            MY <span className="text-[#FF3B3B]">WORK</span>
          </motion.h1>
          <motion.h2
            className="text-2xl text-[#E63946] mb-2 font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My Latest Work
          </motion.h2>
          <motion.p
            className="text-[#555] text-lg max-w-3xl mx-auto mb-12 font-medium "
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Here are some of my favorite projects that I've worked on recently.
            Click any card to explore screenshots.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={idx}
                onClick={() => setActiveProject(project)}
                className="bg-[#1E1E1E] border border-[#333333] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[#EAEAEA] text-xl font-semibold">
                      {project.title}
                    </h3>

                  </div>
                  <p className="text-[#A1A1A1] text-sm">
                    {project.shortDescription}
                  </p>

                  <button
                onClick={() => setSelectedProject(project)}
                className="text-sm text-[#E63946] hover:underline flex items-center gap-1 mt-3 font-Ovo"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>

                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="mt-10 text-[#FF3B3B] border border-[#FF3B3B] px-6 py-2 rounded-xl hover:bg-[#282828] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      </motion.section>

      {/* Dialog for project screenshots */}
      <AnimatePresence>
        {activeProject && (
          <Dialog
            open={true}
            onClose={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="bg-[#1E1E1E] text-[#EAEAEA] rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-50"
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[#FF3B3B]">
                  {activeProject.title}
                </h2>
                <motion.button
                  onClick={() => setActiveProject(null)}
                  className="text-xl font-bold hover:text-[#E63946]"
                  whileHover={{ rotate: 90, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ✕
                </motion.button>
              </div>
              <p className="text-[#A1A1A1] mb-6">
                {activeProject.detailedDescription}
              </p>

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeProject.screenshots.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full rounded-lg border border-[#333333]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  />
                ))}
              </div> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeProject.screenshots.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full rounded-lg border border-[#333333] cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    onClick={() => setSelectedImage(src)}
                  />
                ))}
              </div>

              {/* Fullscreen Modal */}
              <AnimatePresence>
                {selectedImage && (
                  <motion.div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="relative max-w-4xl w-full px-4">
                      <img
                        src={selectedImage}
                        alt="Full screen"
                        className="w-full h-auto rounded-lg"
                      />
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white bg-black/70 hover:bg-black rounded-full p-2"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;


















// import React, { useState, useRef } from "react";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { Dialog } from "@headlessui/react";
// import { motion, useInView, AnimatePresence } from "framer-motion";

// const projects = [
//   {
//     title: "Code Summarizer",
//     description:
//       "AI-powered tool that summarizes code using LLaMA 3 and CodeBERT.",
//     image: "/images/project1.png",
//     screenshots: [
//       "/images/project1-screen1.png",
//       "/images/project1-screen2.png",
//     ],
//     githubUrl: "https://github.com/your-username/code-summarizer",
//     liveDemoUrl: "https://code-summarizer.vercel.app",
//   },
//   {
//     title: "Portfolio Website",
//     description: "Personal portfolio built using React, TailwindCSS, and JSX.",
//     image: "/images/project2.png",
//     screenshots: [
//       "/images/project2-screen1.png",
//       "/images/project2-screen2.png",
//     ],
//     githubUrl: "https://github.com/your-username/portfolio",
//     liveDemoUrl: "https://your-portfolio.vercel.app",
//   },
//   {
//     title: "Task Manager",
//     description: "A task management app with real-time collaboration.",
//     image: "/images/project3.png",
//     screenshots: [
//       "/images/project3-screen1.png",
//       "/images/project3-screen2.png",
//     ],
//     githubUrl: "https://github.com/your-username/task-manager",
//     liveDemoUrl: "https://task-manager.vercel.app",
//   },
// ];

// const Projects = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [activeProject, setActiveProject] = useState(null);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const visibleProjects = showAll ? projects : projects.slice(0, 3);

//   return (
//     <>
//       <motion.section
//         ref={ref}
//         id="work"
//         initial={{ opacity: 0, y: 100 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="bg-white py-20 px-4"
//       >
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h1
//             className="text-5xl font-bold text-[#121212] mb-4"
//             initial={{ opacity: 0, y: -30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.1, duration: 0.6 }}
//           >
//             MY <span className="text-[#FF3B3B]">WORK</span>
//           </motion.h1>
//           <motion.h2
//             className="text-2xl text-[#E63946] mb-2 font-medium"
//             initial={{ opacity: 0, y: -20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             My Latest Work
//           </motion.h2>
//           <motion.p
//             className="text-[#555] text-lg max-w-3xl mx-auto mb-12 font-medium "
//             initial={{ opacity: 0, y: -10 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             Here are some of my favorite projects that I've worked on recently.
//             Click any card to explore screenshots.
//           </motion.p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {visibleProjects.map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 onClick={() => setActiveProject(project)}
//                 className="bg-[#1E1E1E] border border-[#333333] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: idx * 0.2 }}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-52 object-cover"
//                 />
//                 <div className="p-4 text-left">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="text-[#EAEAEA] text-xl font-semibold">
//                       {project.title}
//                     </h3>
//                     <div className="flex gap-3 text-[#FF3B3B] text-lg">
//                       <a
//                         href={project.liveDemoUrl}
//                         onClick={(e) => e.stopPropagation()}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaExternalLinkAlt />
//                       </a>
//                       <a
//                         href={project.githubUrl}
//                         onClick={(e) => e.stopPropagation()}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaGithub />
//                       </a>
//                     </div>
//                   </div>
//                   <p className="text-[#A1A1A1] text-sm">
//                     {project.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <motion.button
//             onClick={() => setShowAll(!showAll)}
//             className="mt-10 text-[#FF3B3B] border border-[#FF3B3B] px-6 py-2 rounded-xl hover:bg-[#282828] transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.5, duration: 0.4 }}
//           >
//             {showAll ? "Show Less" : "Show More"}
//           </motion.button>
//         </div>
//       </motion.section>

//       {/* Dialog for project screenshots */}
//       <AnimatePresence>
//         {activeProject && (
//           <Dialog
//             open={true}
//             onClose={() => setActiveProject(null)}
//             className="fixed inset-0 z-50 flex items-center justify-center"
//           >
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-80"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             <motion.div
//               className="bg-[#1E1E1E] text-[#EAEAEA] rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-50"
//               initial={{ opacity: 0, scale: 0.95, y: 50 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 50 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold text-[#FF3B3B]">{activeProject.title}</h2>
//                 <motion.button
//                   onClick={() => setActiveProject(null)}
//                   className="text-xl font-bold hover:text-[#E63946]"
//                   whileHover={{ rotate: 90, scale: 1.2 }}
//                   whileTap={{ scale: 0.9 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   ✕
//                 </motion.button>
//               </div>
//               <p className="text-[#A1A1A1] mb-6">{activeProject.description}</p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {activeProject.screenshots.map((src, index) => (
//                   <motion.img
//                     key={index}
//                     src={src}
//                     alt={`Screenshot ${index + 1}`}
//                     className="w-full rounded-lg border border-[#333333]"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 * index, duration: 0.4 }}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </Dialog>
//         )}
//       </AnimatePresence>

//     </>
//   );
// };

// export default Projects;
