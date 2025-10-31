"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ get current route

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const links = [
    { name: "About", href: "/about-us" },

    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ===== MAIN NAVBAR ===== */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] bg-white rounded-2xl shadow1 flex items-center justify-between px-6 py-3 z-[60] mb-10">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" onClick={closeSidebar}>
            <img
              src="/logo.png"
              alt="Logo"
              className="w-24 sm:w-28 md:w-32 object-contain rounded-xl"
            />
          </Link>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-10 text-gray-800">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-[#BF1E2E]  "
                      : "hover:text-[#BF1E2E]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: Get Quote Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/quotation">
            <button className="bg-[#BF1E2E] text-white px-6 py-2 rounded-lg font-light hover:bg-[#a91a27] transition">
              Get Quote
            </button>
          </Link>
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

      {/* ===== OVERLAY ===== */}
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
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={closeSidebar}>
              <img src="/logo.png" alt="Logo" className="w-28 object-contain" />
            </Link>
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
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={closeSidebar}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-[#BF1E2E] border-b-2 border-[#BF1E2E]"
                        : "hover:text-[#BF1E2E]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Bottom Button */}
          <div className="mt-auto">
            <Link href="/quote" onClick={closeSidebar}>
              <button className="bg-[#BF1E2E] text-white px-6 py-2 w-full rounded-lg font-semibold hover:bg-[#a91a27] transition">
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
