"use client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../public/navLink";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi"; // Import icons

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#112e42] dark:to-[#0a192f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-600 inline-block text-transparent bg-clip-text mb-6">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            A collection of projects that showcase my passion for web
            development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white dark:bg-[#1a365d]/30 backdrop-blur-sm overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={project.image}
                      width={550}
                      height={310}
                      alt={project.name}
                      className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay Links */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        href={project.live.Link}
                        target="_blank"
                        className="p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-110 transition-all duration-300"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </Link>
                      <Link
                        href={project.github.Link}
                        target="_blank"
                        className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transform hover:scale-110 transition-all duration-300"
                      >
                        <FiGithub className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
