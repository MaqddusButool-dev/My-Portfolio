import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Work", id: "work" },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md text-[#16423C] shadow-sm fixed w-full top-0 z-50 border-b border-[#C4DAD2]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="font-bold text-2xl sm:text-3xl tracking-wide">
          <h1 className="text-[#16423C] hover:scale-105 transition-transform duration-200">
            MAQDDUS <span className="text-[#6A9C89]">BUTOOL</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 xl:space-x-8 font-semibold text-base xl:text-lg">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={`#${item.id}`}
                  className="text-[#16423C]/80 hover:text-[#16423C] transition-colors relative"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#6A9C89] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button - Desktop Only */}
        <a
          href="#contact"
          className="hidden lg:block font-semibold bg-[#6A9C89] text-white px-4 py-2 xl:px-5 xl:py-2 rounded-lg hover:bg-[#5a8a79] transition-all shadow-md text-sm xl:text-base"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setShowMenu(!showMenu)} aria-label="Menu Toggle">
            {showMenu ? (
              <IoClose className="text-3xl text-[#16423C]" />
            ) : (
              <GiHamburgerMenu className="text-3xl text-[#16423C]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-50 overflow-hidden border-l border-[#C4DAD2]`}
      >
        <div className="p-5 flex flex-col h-full">
          {/* Close Button */}
          <button
            className="self-end text-[#16423C] text-3xl mb-5"
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
                  className="text-[#16423C]/80 hover:text-[#16423C] transition-colors"
                >
                  {item.name}
                  <span className="block w-0 h-[2px] bg-[#6A9C89] transition-all duration-300 group-hover:w-full mx-auto mt-1"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button inside Mobile Menu */}
          <a
            href="#contact"
            onClick={() => setShowMenu(false)}
            className="mt-auto bg-[#6A9C89] text-white px-6 py-2 rounded-lg text-base font-semibold hover:bg-[#5a8a79] transition-all shadow-md text-center"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
