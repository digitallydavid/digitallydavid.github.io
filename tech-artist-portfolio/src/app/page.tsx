'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Code, Gamepad2, Box, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getFeaturedProjects } from '../data/projects';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center hero-pattern pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Technical
              <span className="gradient-text"> Artist</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Bridging the gap between art and technology with innovative tools, 
              stunning visuals, and technical excellence in game development.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <Link 
                href="/portfolio" 
                className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-accent-600" />
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Showcase of recent projects demonstrating technical artistry and innovation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-accent-400/20 to-accent-600/20 relative overflow-hidden flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <span className="text-6xl opacity-60">{project.images[0]}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'Shaders' ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200' :
                      project.category === 'Tools' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200' :
                      project.category === 'VFX' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200' :
                      project.category === 'Procedural' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200' :
                      project.category === 'Pipeline' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200' :
                      'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-200'
                    }`}>
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-accent-600 dark:text-accent-400 mb-3 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/project/${project.id}`}
                      className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center text-sm"
                    >
                      View Project
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                    <div className="flex space-x-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/portfolio" 
              className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="py-20"> ... Technical Expertise ... </section> */}
    </div>
  );
}
