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

  return (
    <header className=" border-b border-black dark:border-white  px-4 lg:px-6 h-16 flex items-center w-full  bg-slate-200 dark:bg-[#112e42] text-black dark:text-white transition-all duration-500">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center w-full px-10 justify-between">
        <div className="flex space-x-6">
          {" "}
          {/* Added spacing between links */}
          {navLink.map((item, index) => (
            <Link
              key={index}
              href={item.to}
              className="text-xl font-medium hover:underline underline-offset-4 transition-all duration-500"
              prefetch={false}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          className="border bg-black dark:bg-white text-white dark:text-black p-2 rounded-lg transition-all duration-500"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle Dark Mode" // Added aria-label for accessibility
        >
          {theme === "dark" ? <IoSunnySharp /> : <IoMoon />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden w-full text-right">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <IoClose className="w-8 h-8" />
          ) : (
            <IoMenu className="w-8 h-8" />
          )}
        </button>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 right-0  bg-slate-200 dark:bg-[#112e42] p-4 shadow-md lg:hidden flex flex-col items-center  z-30 gap-y-5"
            >
              {navLink.map((item, index) => (
                <Link
                  key={index}
                  href={item.to}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-lg font-medium hover:underline underline-offset-4 transition-all duration-500"
                >
                  {item.name}
                </Link>
              ))}
              <button
                className="border bg-black dark:bg-white text-white dark:text-black p-2 rounded-lg transition-all duration-500"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <IoSunnySharp /> : <IoMoon />}
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
