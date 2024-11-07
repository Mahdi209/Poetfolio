"use client";
import ContactMe from "@/components/contact-me";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { LandingPage } from "@/components/landing-page";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 dark:from-[#112e42] dark:via-[#0a192f] dark:to-[#112e42]"
    >
      {/* Landing Page */}
      <section className="relative">
        <LandingPage />
      </section>

      {/* Skills Section */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <Skills />
      </section>

      {/* Projects Section */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <Projects />
      </section>

      {/* Contact Section */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <ContactMe />
      </section>

      {/* Footer Section */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <Footer />
      </section>

      {/* Floating Navigation Dots */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['home', 'skills', 'projects', 'contact'].map((section, index) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className="w-3 h-3 rounded-full bg-orange-500/50 hover:bg-orange-500 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500/50 origin-left z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}
