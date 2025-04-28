import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
// #import app.css file
import "../../../src/App.css";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About Me", id: "about" },
  { name: "Services", id: "services" },
  { name: "My Work", id: "work" },
  { name: "Contact Us", id: "contact" },
];

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Ensuring the mobile menu is hidden on page load
    setShowMenu(false);
  }, []);

  return (
    <header className="bg-[#121212] text-white shadow-md fixed w-full top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="font-bold text-2xl sm:text-3xl tracking-wide">
          <h1 className="bg-gradient-to-r from-[#FF3B3B] to-[#E63946] text-transparent bg-clip-text hover:scale-105 transition-transform duration-200">
            MAQDDUS <span className="text-white">BUTOOL</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 xl:space-x-8 font-semibold text-base xl:text-lg">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={`#${item.id}`}
                  className="hover:text-[#FF3B3B] transition-colors relative"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-[#FF3B3B] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button - Desktop Only */}
        <a
          href="#contact"
          className="hidden lg:block font-semibold bg-[#FF3B3B] text-white px-4 py-2 xl:px-5 xl:py-2 rounded-lg hover:bg-[#E63946] transition-all shadow-md text-sm xl:text-base"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setShowMenu(!showMenu)} aria-label="Menu Toggle">
            {showMenu ? <IoClose className="text-3xl" /> : <GiHamburgerMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#181818] shadow-lg transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-50 overflow-hidden`}
      >
        <div className="p-5 flex flex-col h-full">
          {/* Close Button */}
          <button
            className="self-end text-white text-3xl mb-5"
            onClick={() => setShowMenu(false)}
          >
            <IoClose />
          </button>

          {/* Mobile Menu Items */}
          <ul className="space-y-6 text-base font-semibold text-center">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={`#${item.id}`}
                  onClick={() => setShowMenu(false)}
                  className="hover:text-[#FF3B3B] transition-colors"
                >
                  {item.name}
                  <span className="block w-0 h-[3px] bg-[#FF3B3B] transition-all duration-300 group-hover:w-full mx-auto mt-1"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button inside Mobile Menu */}
          <a
            href="#contact"
            onClick={() => setShowMenu(false)}
            className="mt-auto bg-[#FF3B3B] text-white px-6 py-2 rounded-lg text-base font-semibold hover:bg-[#E63946] transition-all shadow-md text-center"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;


























// import React, { useState } from 'react';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";

// const menuItems = [
//   { name: "Home", id: "home" },
//   { name: "About Me", id: "about" },
//   { name: "Services", id: "services" },
//   { name: "My Work", id: "work" },
//   { name: "Contact Us", id: "contact" },
// ];

// function NavBar() {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <header className="bg-[#121212] text-white shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <div className="font-bold text-2xl sm:text-3xl tracking-wide">
//           <h1 className="bg-gradient-to-r from-[#FF3B3B] to-[#E63946] text-transparent bg-clip-text hover:scale-105 transition-transform duration-200">
//             MAQDDUS <span className="text-white">BUTOOL</span>
//           </h1>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:block">
//           <ul className="flex space-x-6 xl:space-x-8 font-semibold text-base xl:text-lg">
//             {menuItems.map((item, index) => (
//               <li key={index} className="relative group">
//                 <a
//                   href={`#${item.id}`}
//                   className="hover:text-[#FF3B3B] transition-colors relative"
//                 >
//                   {item.name}
//                   <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-[#FF3B3B] transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Contact Button - Desktop Only */}
//         <a
//           href="#contact"
//           className="hidden lg:block font-semibold bg-[#FF3B3B] text-white px-4 py-2 xl:px-5 xl:py-2 rounded-lg hover:bg-[#E63946] transition-all shadow-md text-sm xl:text-base"
//         >
//           Contact
//         </a>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button onClick={() => setShowMenu(!showMenu)} aria-label="Menu Toggle">
//             {showMenu ? <IoClose className="text-3xl" /> : <GiHamburgerMenu className="text-3xl" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation - Sliding Sidebar */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full min-h-screen bg-[#181818] shadow-lg transform ${
//           showMenu ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 lg:hidden z-50`}
//       >
//         <div className="p-5 flex flex-col h-full">
//           {/* Close Button */}
//           <button
//             className="self-end text-white text-3xl mb-5"
//             onClick={() => setShowMenu(false)}
//           >
//             <IoClose />
//           </button>

//           {/* Mobile Menu Items */}
//           <ul className="space-y-6 text-base font-semibold text-center">
//             {menuItems.map((item, index) => (
//               <li key={index} className="relative group">
//                 <a
//                   href={`#${item.id}`}
//                   onClick={() => setShowMenu(false)}
//                   className="hover:text-[#FF3B3B] transition-colors"
//                 >
//                   {item.name}
//                   <span className="block w-0 h-[3px] bg-[#FF3B3B] transition-all duration-300 group-hover:w-full mx-auto mt-1"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Contact Button inside Mobile Menu */}
//           <a
//             href="#contact"
//             onClick={() => setShowMenu(false)}
//             className="mt-auto bg-[#FF3B3B] text-white px-6 py-2 rounded-lg text-base font-semibold hover:bg-[#E63946] transition-all shadow-md text-center"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default NavBar;























// import React, { useState } from 'react';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";

// const menuItems = ["Home", "About Me", "Services", "My Work", "Contact Us"];

// function NavBar() {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <header className="bg-[#121212] text-white shadow-md fixed w-full top-0 z-50">
//       <div className="container max-w-7xl mx-auto flex justify-between items-center p-5">
//         {/* Logo */}
//         <div className="font-bold text-3xl tracking-wide">
//           <h1 className="bg-gradient-to-r from-[#FF3B3B] to-[#E63946] text-transparent bg-clip-text hover:scale-105 transition-transform">
//             MAQDDUS <span className='text-white'>BUTOOL</span>
//           </h1>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:block">
//           <ul className="flex space-x-8 font-semibold text-lg">
//             {menuItems.map((item, index) => (
//               <li key={index} className="relative group">
//                 <a href="#" className="hover:text-[#FF3B3B] transition-colors relative">
//                   {item}
//                   {/* Underline Effect */}
//                   <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-[#FF3B3B] transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Contact Button - Desktop Only */}
//         <button className="hidden lg:block font-semibold bg-[#FF3B3B] text-white px-5 py-2 rounded-lg hover:bg-[#E63946] transition-all shadow-md">
//           Contact
//         </button>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button onClick={() => setShowMenu(!showMenu)}>
//             {showMenu ? <IoClose className="text-3xl" /> : <GiHamburgerMenu className="text-3xl" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation - Sliding Sidebar */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full bg-[#181818] shadow-lg transform ${
//           showMenu ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 lg:hidden`}
//       >
//         <div className="p-5 flex flex-col h-full">
//           {/* Close Button */}
//           <button
//             className="self-end text-white text-3xl mb-5"
//             onClick={() => setShowMenu(false)}
//           >
//             <IoClose />
//           </button>

//           {/* Mobile Menu Items */}
//           <ul className="space-y-6 text-lg font-semibold text-center">
//             {menuItems.map((item, index) => (
//               <li key={index} className="relative group">
//                 <a href="#" className="hover:text-[#FF3B3B] transition-colors" onClick={() => setShowMenu(false)}>
//                   {item}
//                   {/* Underline Effect */}
//                   <span className="block w-0 h-[3px] bg-[#FF3B3B] transition-all duration-300 group-hover:w-30 mx-auto mt-1"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Contact Button inside Mobile Menu */}
//           <button className="mt-auto bg-[#FF3B3B] text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-[#E63946] transition-all shadow-md">
//             Contact
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default NavBar;

