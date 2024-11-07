"use client";
import ContactMe from "@/components/contact-me";
import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#112e42] dark:to-[#0a192f] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        {/* Animated gradient circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl mx-auto backdrop-blur-sm"
        >
          <ContactMe />
        </motion.div>
      </div>
    </div>
  );
}
