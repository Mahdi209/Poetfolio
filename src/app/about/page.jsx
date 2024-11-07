"use client";
import React from "react";
import AboutPage from "@/components/about-page";
import { motion } from "framer-motion";

export default function AboutPageContainer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#112e42] dark:to-[#0a192f] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-orange-400/10 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-orange-300/10 rounded-full mix-blend-multiply filter blur-xl animate-float-delay-2" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float-delay-4" />
      </div>

      {/* Content wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <AboutPage />
      </motion.div>
    </div>
  );
}
