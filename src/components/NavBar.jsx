"use client";

import Link from "next/link";
import { navLink } from "../../public/navLink";
import { IoSunnySharp, IoMoon, IoMenu, IoClose } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-200/80 dark:bg-[#112e42]/80">
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="hidden lg:flex h-20 items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-10 flex items-center gap-3"
            >
              {/* Logo Symbol */}
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-bold text-lg">M</span>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  MM
                </span>
                <span className="text-[10px] text-orange-500 dark:text-orange-400 font-medium tracking-wider">
                  PORTFOLIO
                </span>
              </div>
            </motion.div>

            {/* Hover Glow */}
            <div className="absolute -inset-2 bg-orange-500/20 dark:bg-orange-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navLink.map((item, index) => (
              <Link
                key={index}
                href={item.to}
                className="relative text-base font-medium group"
                prefetch={false}
              >
                <span className="relative z-10 text-gray-800 dark:text-gray-200 transition duration-300 group-hover:text-orange-500 dark:group-hover:text-orange-400">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <IoSunnySharp className="w-5 h-5 text-orange-400" />
              ) : (
                <IoMoon className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="lg:hidden flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-orange-500 dark:text-orange-400"
          >
            MM
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <IoMenu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute w-full bg-slate-200/95 dark:bg-[#112e42]/95 backdrop-blur-md"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {navLink.map((item, index) => (
                <Link
                  key={index}
                  href={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-center text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-center pt-2">
                <button
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle Dark Mode"
                >
                  {theme === "dark" ? (
                    <IoSunnySharp className="w-5 h-5 text-orange-400" />
                  ) : (
                    <IoMoon className="w-5 h-5 text-gray-800" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
