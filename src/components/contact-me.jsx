"use client";
import Link from "next/link";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function ContactMe() {
  const contactMethods = [
    {
      icon: FaPhoneAlt,
      href: "tel:+9647808882223",
      label: "Phone",
      color: "from-green-400 to-green-600",
    },
    {
      icon: MdEmail,
      href: "mailto:mohammed.mahdi1265@gmail.com",
      label: "Email",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mohammed-mahdi-0096582b9/",
      label: "LinkedIn",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Mahdi209",
      label: "GitHub",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#112e42] dark:to-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-600 inline-block text-transparent bg-clip-text mb-6">
            Get in Touch
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Let's connect! Feel free to reach out through any of these
            platforms.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative p-6 bg-white dark:bg-[#1a365d]/30 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Hover gradient effect */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon container */}
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800/50 group-hover:scale-110 transition-transform duration-300">
                      <method.icon
                        className={`w-8 h-8 bg-gradient-to-r ${method.color}  bg-clip-text`}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {method.label}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Contact Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Available for freelance opportunities and collaborations
          </p>
        </motion.div>
      </div>
    </section>
  );
}
