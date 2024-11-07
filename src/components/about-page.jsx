"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaCamera, FaPaintBrush } from "react-icons/fa";

export default function AboutPage() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Tailwindcss",
    "CSS",
    "Git",
    "Github",
    "MongoDB",
    "Express js",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#112e42] dark:to-[#0a192f] flex items-center justify-center">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <Avatar className="h-48 w-48 lg:h-64 lg:w-64 relative">
                <AvatarImage
                  src="/myphoto.jpg"
                  className="object-cover object-top rounded-full"
                />
                <AvatarFallback>MH</AvatarFallback>
              </Avatar>
            </div>

            {/* Name and Title */}
            <motion.div className="mt-6 space-y-2" {...fadeInUp}>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-600 text-transparent bg-clip-text">
                Mohammed Mahdi Salah
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Full-Stack Web Developer
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="mt-8 w-full"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/20 px-3 py-1 text-sm transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* About Me */}
            <motion.div {...fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <FaCode className="text-2xl text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  About Me
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hi, I'm Mohammed Mahdi Salah, a passionate full-stack web
                developer with a love for building efficient, modern websites.
                I'm constantly learning and adapting to the latest technologies
                to deliver the best possible solutions.
              </p>
            </motion.div>

            {/* Technical Expertise */}
            <motion.div {...fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <FaLaptopCode className="text-2xl text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  Technical Expertise
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My toolkit includes React, Express, MongoDB, Tailwind CSS, and
                more. I have a knack for crafting intuitive user interfaces and
                robust back-end systems. I'm always eager to tackle new
                challenges and expand my skill set.
              </p>
            </motion.div>

            {/* Beyond Code */}
            <motion.div {...fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex gap-2">
                  <FaCamera className="text-2xl text-orange-500" />
                  <FaPaintBrush className="text-2xl text-orange-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  Beyond Code
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy photography and drawing. These
                creative outlets help me relax and recharge, and they often
                inspire my work as a developer. I believe that a well-rounded
                perspective is essential for creating truly great digital
                experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
