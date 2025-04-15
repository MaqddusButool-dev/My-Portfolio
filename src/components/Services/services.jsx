import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaDatabase, FaPython, FaJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const services = [
  {
    icon: <FaReact className="text-[#FF3B3B] text-5xl" />,
    title: "Frontend Development (React)",
    description:
      "Building high-performance, interactive web applications with React.js for seamless user experiences.",
  },
  {
    icon: <SiNextdotjs className="text-[#FF3B3B] text-5xl" />,
    title: "Web Development (Next.js)",
    description:
      "Creating optimized and SEO-friendly web apps with Next.js, using SSR and static site generation.",
  },
  {
    icon: <FaPython className="text-[#FF3B3B] text-5xl" />,
    title: "Python Programming",
    description:
      "Developing scalable solutions with Python, including automation, AI, and web applications.",
  },
  {
    icon: <FaDatabase className="text-[#FF3B3B] text-5xl" />,
    title: "Database Management (PostgreSQL & Prisma)",
    description:
      "Optimizing databases with PostgreSQL & Prisma for high performance and integrity.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="services"
      ref={ref}
      className="bg-[#121212] text-[#EAEAEA] py-20 px-5"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#EAEAEA] mb-4">
          MY <span className="text-[#FF3B3B]">SERVICES</span>
        </h2>
        <p className="text-[#A1A1A1] text-lg mb-10 max-w-3xl mx-auto">
          I deliver high-quality frontend solutions tailored to your needs,
          ensuring precision, performance, and user satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1E1E1E] border border-[#333333] rounded-xl p-6 shadow-lg flex flex-col items-center space-y-4 transition-all hover:border-[#FF3B3B] hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-[#EAEAEA] text-center">
                {service.title}
              </h3>
              <p className="text-[#A1A1A1] text-sm text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


















// import React from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaDatabase, FaPython, FaJs } from "react-icons/fa";
// import { SiNextdotjs } from "react-icons/si";

// const services = [
//   {
//     icon: <FaReact className="text-[#FF3B3B] text-5xl" />,
//     title: "Frontend Development (React)",
//     description:
//       "Building high-performance, interactive web applications with React.js for seamless user experiences.",
//   },
//   {
//     icon: <SiNextdotjs className="text-[#FF3B3B] text-5xl" />,
//     title: "Web Development (Next.js)",
//     description:
//       "Creating optimized and SEO-friendly web apps with Next.js, using SSR and static site generation.",
//   },
//   {
//     icon: <FaPython className="text-[#FF3B3B] text-5xl" />,
//     title: "Python Programming",
//     description:
//       "Developing scalable solutions with Python, including automation, AI, and web applications.",
//   },
//   {
//     icon: <FaDatabase className="text-[#FF3B3B] text-5xl" />,
//     title: "Database Management (PostgreSQL & Prisma)",
//     description:
//       "Optimizing databases with PostgreSQL & Prisma for high performance and integrity.",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="bg-[#121212] text-[#EAEAEA] py-20 px-5">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-5xl font-bold text-[#EAEAEA] mb-4">
//           MY <span className="text-[#FF3B3B]">SERVICES</span>
//         </h2>
//         <p className="text-[#A1A1A1] text-lg mb-10 max-w-3xl mx-auto">
//           I deliver high-quality frontend solutions tailored to your needs,
//           ensuring precision, performance, and user satisfaction.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#1E1E1E] border border-[#333333] rounded-xl p-6 shadow-lg flex flex-col items-center space-y-4 transition-all hover:border-[#FF3B3B] hover:scale-105"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               {service.icon}
//               <h3 className="text-xl font-semibold text-[#EAEAEA] text-center">
//                 {service.title}
//               </h3>
//               <p className="text-[#A1A1A1] text-sm text-center">
//                 {service.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
