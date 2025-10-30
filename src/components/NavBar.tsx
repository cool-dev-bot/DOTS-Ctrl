"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* ===== MAIN NAVBAR ===== */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow1 flex items-center justify-between px-6 py-3 z-[60] mb-10">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className=" w-24 sm:w-28 md:w-32 object-contain rounded-xl"
          />
        </div>

        {/* Center: Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-10 text-gray-800 font-medium">
          {["About", "Projects", "Products", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-[#BF1E2E] cursor-pointer transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right: Get Quote Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-[#BF1E2E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#a91a27] transition">
            Get Quote
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
            className="text-2xl text-gray-800"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* ===== OVERLAY (Blurred Background) ===== */}
      <div
        className={`fixed inset-0 bg-black/10 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible z-[60]" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      ></div>

      {/* ===== MOBILE SIDEBAR ===== */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white backdrop-blur-2xl shadow-2xl z-[70] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header (Logo + Close Button) */}
          <div className="flex justify-between items-center mb-8">
            <img src="/logo.png" alt="Logo" className="w-28 object-contain" />
            <button
              onClick={closeSidebar}
              aria-label="Close Menu"
              className="text-2xl text-gray-700 hover:text-[#BF1E2E] transition"
            >
              <FiX />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-6 text-gray-800 font-medium text-lg">
            {["About", "Projects", "Products", "Contact"].map((item) => (
              <li
                key={item}
                onClick={closeSidebar}
                className="hover:text-[#BF1E2E] cursor-pointer transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Bottom Button */}
          <div className="mt-auto">
            <button className="bg-[#BF1E2E] text-white px-6 py-2 w-full rounded-lg font-semibold hover:bg-[#a91a27] transition">
              Get Quote
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
