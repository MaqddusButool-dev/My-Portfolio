import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { assets } from "../../assets/assets";
import profileImage from "../../assets/rani1.jpg";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white text-[#333]"
    >
      <div className="flex flex-col items-center justify-center py-16 px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold">
            ABOUT <span className="text-[#FF3B3B]">ME</span>
          </h1>
          <h2 className="text-3xl text-[#555]">Introduction</h2>
        </motion.header>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 w-full">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative w-[20rem] h-[28rem] rounded-3xl overflow-hidden shadow-lg border-4 border-[#121212]"
          >
            <img
              src={assets.AboutImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full"
          >
            <p className="text-lg text-[#555] w-full">
              I’m a passionate frontend developer skilled in React.js, Next.js, and modern web technologies. 
              I specialize in creating visually appealing, responsive, and high-performance applications while 
              collaborating with teams to build innovative solutions.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {[
                {
                  title: "Languages",
                  icon: <FaJs className="text-[#FF3B3B]" />,
                  content: "HTML, CSS, JavaScript, React, Next.js, Python",
                },
                {
                  title: "Education",
                  icon: "🎓",
                  content: "BS Computer Science (Air University, Islamabad)",
                },
                {
                  title: "Certifications",
                  icon: "🏆",
                  content: "Certified Agentic AI Engineer (CAE)",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-[#121212] rounded-xl p-6 bg-[#F8F8F8] shadow-md hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-lg flex items-center text-[#333]">
                    <span className="mr-2 text-[#FF3B3B] text-2xl">{item.icon}</span> 
                    {item.title}
                  </h3>
                  <p className="text-[#555] mt-2">{item.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="w-full">
              <h4 className="text-xl font-semibold mb-4">Tools I Use</h4>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                {[FaReact, SiNextdotjs, FaJs, FaHtml5, FaCss3Alt, SiTailwindcss, FaGithub].map(
                  (Icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="w-16 h-16 flex items-center justify-center border-2 border-[#121212] bg-[#F8F8F8] rounded-lg shadow-md hover:shadow-lg transition"
                    >
                      <Icon className="text-3xl text-[#FF3B3B]" />
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

























// // import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
// import profileImage from "../../assets/rani1.jpg";

// export default function About() {
//   return (
//     <div id="aboutme" className="bg-white text-[#333]">
//       <div className="flex flex-col items-center justify-center py-16 px-6 lg:px-20 max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <motion.header
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl font-bold">
//             ABOUT <span className="text-[#FF3B3B]">ME</span>
//           </h1>
//           <h2 className="text-3xl text-[#555]">Introduction</h2>
//         </motion.header>

//         {/* Content Container */}
//         <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 w-full">
//           {/* Profile Image */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative w-[20rem] h-[28rem] rounded-3xl overflow-hidden shadow-lg border-4 border-[#121212]"
//           >
//             <img
//               src={profileImage}
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full"
//           >
//             <p className="text-lg text-[#555] w-full">
//               I’m a passionate frontend developer skilled in React.js, Next.js, and modern web technologies. 
//               I specialize in creating visually appealing, responsive, and high-performance applications while 
//               collaborating with teams to build innovative solutions.
//             </p>

//             {/* Info Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
//               {[
//                 {
//                   title: "Languages",
//                   icon: <FaJs className="text-[#FF3B3B]" />,
//                   content: "HTML, CSS, JavaScript, React, Next.js, Python",
//                 },
//                 {
//                   title: "Education",
//                   icon: "🎓",
//                   content: "BS Computer Science (Air University, Islamabad)",
//                 },
//                 {
//                   title: "Certifications",
//                   icon: "🏆",
//                   content: "Certified Agentic AI Engineer (CAE)",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="border-2 border-[#121212] rounded-xl p-6 bg-[#F8F8F8] shadow-md hover:shadow-lg transition"
//                 >
//                   <h3 className="text-lg flex items-center text-[#333]">
//                     <span className="mr-2 text-[#FF3B3B] text-2xl">{item.icon}</span> 
//                     {item.title}
//                   </h3>
//                   <p className="text-[#555] mt-2">{item.content}</p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Tools Section */}
//             <div className="w-full">
//               <h4 className="text-xl font-semibold mb-4">Tools I Use</h4>
//               <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
//                 {[FaReact, SiNextdotjs, FaJs, FaHtml5, FaCss3Alt, SiTailwindcss, FaGithub].map(
//                   (Icon, index) => (
//                     <motion.div
//                       key={index}
//                       whileHover={{ scale: 1.1 }}
//                       className="w-16 h-16 flex items-center justify-center border-2 border-[#121212] bg-[#F8F8F8] rounded-lg shadow-md hover:shadow-lg transition"
//                     >
//                       <Icon className="text-3xl text-[#FF3B3B]" />
//                     </motion.div>
//                   )
//                 )}
//               </div>
//             </div>

//             {/* Social Media Links */}
//             {/* <div className="flex gap-4 mt-6">
//               {[
//                 { icon: <FaLinkedin />, link: "https://linkedin.com/in/your-profile" },
//                 { icon: <FaGithub />, link: "https://github.com/your-profile" },
//                 { icon: <FaInstagram />, link: "https://instagram.com/your-profile" },
//                 { icon: <SiVercel />, link: "https://vercel.com/your-profile" },
//               ].map(({ icon, link }, index) => (
//                 <motion.a
//                   key={index}
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.2 }}
//                   className="w-12 h-12 flex items-center justify-center border-2 border-[#FF3B3B] rounded-full shadow-md bg-[#F8F8F8] hover:bg-[#EAEAEA] transition"
//                 >
//                   <span className="text-[#FF3B3B] text-2xl">{icon}</span>
//                 </motion.a>
//               ))}
//             </div> */}

//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }





















// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
// import profileImage from "../../assets/rani1.jpg";

// const socialLinks = [
//   {
//     icon: <FaLinkedin />,
//     link: "https://linkedin.com/in/your-profile",
//     color: "text-[#FF3B3B]",
//   },
//   {
//     icon: <FaGithub />,
//     link: "https://github.com/your-profile",
//     color: "text-[#EAEAEA]",
//   },
//   {
//     icon: <FaInstagram />,
//     link: "https://instagram.com/your-profile",
//     color: "text-[#E63946]",
//   },
//   {
//     icon: <SiVercel />,
//     link: "https://vercel.com/your-profile",
//     color: "text-[#EAEAEA]",
//   },
// ];

// export default function About() {
//   return (
//     <div id="aboutme" className="bg-[#121212] text-[#EAEAEA]">
//       <div
//         className=" flex flex-col items-center justify-center py-16 px-6 lg:px-20 max-w-7xl mx-auto"
//       >
//         {/* Section Heading */}
//         <motion.header
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl font-bold">
//             ABOUT <span className="text-[#FF3B3B]">ME</span>
//           </h1>
//           <h2 className="text-3xl text-[#A1A1A1]">Introduction</h2>
//         </motion.header>

//         {/* Content Container */}
//         <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
//           {/* Profile Image */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative w-[20rem] h-[28rem] rounded-3xl overflow-hidden shadow-lg border-4 border-[#FF3B3B]"
//           >
//             <img
//               src={profileImage}
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
//           >
//             <p className="text-lg text-[#A1A1A1] max-w-lg">
//               I’m a passionate{" "}
//               <span className="text-[#FF3B3B] font-semibold">
//                 Frontend Developer
//               </span>{" "}
//               skilled in <b>React.js, Next.js, and modern web technologies</b>.
//               I specialize in{" "}
//               <b>
//                 building visually appealing, responsive, and high-performance
//                 applications
//               </b>{" "}
//               while collaborating with teams to create innovative solutions.
//             </p>

//             {/* Info Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "Languages",
//                   icon: <FaJs className="text-yellow-500" />,
//                   content: "HTML, CSS, JavaScript, React, Next.js, Python",
//                 },
//                 {
//                   title: "Education",
//                   icon: "🎓",
//                   content: "BS Computer Science (Air University, Islamabad)",
//                 },
//                 {
//                   title: "Certifications",
//                   icon: "🏆",
//                   content: "Certified Agentic AI Engineer (CAE)",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="border border-[#FF3B3B] rounded-xl p-4 bg-[#1E1E1E] shadow-md hover:shadow-lg transition"
//                 >
//                   <h3 className="font-semibold text-lg flex items-center text-[#EAEAEA]">
//                     {item.icon} <span className="ml-2">{item.title}</span>
//                   </h3>
//                   <p className="text-[#A1A1A1] text-sm">{item.content}</p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Tools Section */}
//             <div>
//               <h4 className="text-xl font-semibold mb-4">Tools I Use</h4>
//               <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
//                 {[
//                   FaReact,
//                   SiNextdotjs,
//                   FaJs,
//                   FaHtml5,
//                   FaCss3Alt,
//                   SiTailwindcss,
//                   FaGithub,
//                 ].map((Icon, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.1 }}
//                     className="w-16 h-16 flex items-center justify-center border border-[#FF3B3B] bg-[#1E1E1E] rounded-lg shadow-md hover:shadow-lg transition"
//                   >
//                     <Icon className="text-3xl text-[#EAEAEA]" />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Social Media Links
//             <div className="flex gap-4 mt-6">
//               {socialLinks.map(({ icon, link, color }, index) => (
//                 <motion.a
//                   key={index}
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.2 }}
//                   className={`w-12 h-12 flex items-center justify-center border border-[#333333] rounded-full shadow-md hover:shadow-lg transition ${color}`}
//                 >
//                   {icon}
//                 </motion.a>
//               ))}
//             </div> */}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }










// import React from "react";
// import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
// import profileImage from "../../assets/rani2.jpeg";

// const socialLinks = [
//   { icon: <FaLinkedin />, link: "https://linkedin.com/in/your-profile", color: "text-blue-600" },
//   { icon: <FaGithub />, link: "https://github.com/your-profile", color: "text-gray-800" },
//   { icon: <FaInstagram />, link: "https://instagram.com/your-profile", color: "text-pink-500" },
//   { icon: <SiVercel />, link: "https://vercel.com/your-profile", color: "text-black" },
// ];

// export default function About() {
//   return (
//     <section id="aboutme" className="flex flex-col items-center justify-center py-12 px-5 lg:px-20 max-w-7xl mx-auto">
//       {/* Section Heading */}
//       <header className="text-center mb-10">
//         <h1 className="text-5xl font-bold text-gray-900">
//           ABOUT <span className="text-[#ff0783]">ME</span>
//         </h1>
//         <h2 className="text-3xl text-gray-700">Introduction</h2>
//       </header>

//       {/* Content Container */}
//       <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
//         {/* Profile Image */}
//         <div className="relative w-[20rem] h-[28rem] rounded-3xl overflow-hidden shadow-lg border-4 border-[#ff0783]">
//           <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
//         </div>

//         {/* Text Content */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
//           {/* Introduction Paragraph */}
//           <p className="text-lg text-gray-600 max-w-lg">
//             I’m a passionate <span className="text-[#ff0783] font-semibold">Frontend Developer</span> skilled in **React.js, Next.js, and modern web technologies**. I specialize in **building visually appealing, responsive, and high-performance applications** while collaborating with teams to create innovative solutions.
//           </p>

//           {/* Info Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             <div className="border border-[#ff0783] rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition">
//               <h3 className="font-semibold text-lg text-gray-800 flex items-center">
//                 <FaJs className="mr-2 text-yellow-500" /> Languages
//               </h3>
//               <p className="text-gray-600 text-sm">HTML, CSS, JavaScript, React, Next.js, Python</p>
//             </div>
//             <div className="border border-[#ff0783] rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition">
//               <h3 className="font-semibold text-lg text-gray-800 flex items-center">
//                 🎓 Education
//               </h3>
//               <p className="text-gray-600 text-sm">BS Computer Science (Air University, Islamabad)</p>
//             </div>
//             <div className="border border-[#ff0783] rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition">
//               <h3 className="font-semibold text-lg text-gray-800 flex items-center">
//                 🏆 Certifications
//               </h3>
//               <p className="text-gray-600 text-sm">Certified Agentic AI Engineer (CAE)</p>
//             </div>
//           </div>

//           {/* Tools Section */}
//           <div>
//             <h4 className="text-xl font-semibold text-gray-800 mb-4">Tools I Use</h4>
//             <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
//               {[FaReact, SiNextdotjs, FaJs, FaHtml5, FaCss3Alt, SiTailwindcss, FaGithub].map((Icon, index) => (
//                 <div key={index} className="w-16 h-16 flex items-center justify-center border border-[#ff0783] rounded-lg shadow-md hover:shadow-lg transition">
//                   <Icon className="text-3xl text-gray-700" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Social Media Links
//           <div className="flex gap-4 mt-6">
//             {socialLinks.map(({ icon, link, color }, index) => (
//               <a key={index} href={link} target="_blank" rel="noopener noreferrer"
//                 className={`w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full shadow-md hover:shadow-lg transition ${color}`}
//               >
//                 {icon}
//               </a>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }
