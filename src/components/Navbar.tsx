"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "https://ec4you.in" },
  { label: "About", href: "https://ec4you.in/about/" },
  {
    label: "Services",
    href: "https://ec4you.in/services/",
    // children: [
    //   { label: "SEO", href: "/services/seo" },
    //   { label: "PPC", href: "/services/ppc" },
    //   { label: "Social Media", href: "/services/social-media" },
    //   { label: "Web Development", href: "/services/web-development" },
    // ],
  },
  { label: "Careers", href: "https://ec4you.in/careers/" },
  { label: "Blog", href: "https://ec4you.in/blogs/" },
  { label: "Contact", href: "https://ec4you.in/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change (next/link handles this, but we can keep it)
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-orange-500/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="https://ec4you.in/" className="flex items-center gap-2 shrink-0">
          <img
            src="/Logo.png"
            alt="EC4YOU"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-md font-medium text-gray-800 hover:text-orange-600 transition-colors">
                  {item.label} <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-52"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-md font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          onClick={handleLinkClick}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-md font-medium text-gray-800 hover:text-orange-600 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        {/* <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white font-bold text-sm px-6 py-3 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/20"
          >
            Get a Quote
          </Link>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-3">
              {NAV_LINKS.map((item) =>
                item.children ? (
                  <div key={item.label} className="space-y-2">
                    <p className="text-sm font-bold text-gray-900">{item.label}</p>
                    <div className="ml-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
                          onClick={handleLinkClick}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-sm font-semibold text-gray-800 hover:text-orange-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white font-bold text-sm px-6 py-3 rounded-xl mt-4 shadow-lg shadow-orange-500/20"
                onClick={handleLinkClick}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}