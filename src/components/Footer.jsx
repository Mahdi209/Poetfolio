import Link from "next/link";
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Mahdi209", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mohammed-mahdi-0096582b9/",
      label: "LinkedIn",
    },
    { icon: FaTwitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-200 to-slate-300 dark:from-[#112e42] dark:to-[#0a192f]">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {year} Mohammed Mahdi.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-1 mt-1">
              Made with <FaHeart className="text-red-500 animate-pulse" /> in
              Iraq
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end gap-6"
          >
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-300"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-300"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-300"
              prefetch={false}
            >
              Contact
            </Link>
          </motion.nav>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            This website is built with Next.js, Tailwind CSS, and lots of ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
