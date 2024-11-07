"use client";
import Skills from "@/components/Skills";
import React from "react";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#112e42] dark:to-[#0a192f] flex items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content container */}
      <div className="relative w-full z-10">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Skills />
        </motion.div>
      </div>
    </motion.div>
  );
}
