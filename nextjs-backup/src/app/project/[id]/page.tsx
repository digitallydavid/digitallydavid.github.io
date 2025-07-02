'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Users, Monitor, Github, FileText, Play, Award, Target, Lightbulb, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById } from '../../../data/projects';

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'shaders': return 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200';
      case 'tools': return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200';
      case 'vfx': return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200';
      case 'procedural': return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200';
      case 'pipeline': return 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200';
      default: return 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200';
      case 'concept': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                </span>
                {project.featured && (
                  <span className="bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-accent-600 dark:text-accent-400 font-medium mb-6">
                {project.subtitle}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {project.longDescription}
              </p>

              {/* Project Meta */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Year</span>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Duration</span>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Role</span>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.role}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Monitor className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Platforms</span>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.platforms.join(', ')}</p>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    View Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-accent-600 hover:text-accent-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                )}
                {project.links.documentation && (
                  <a
                    href={project.links.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-accent-600 hover:text-accent-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Documentation
                  </a>
                )}
              </div>
            </motion.div>

            {/* Project Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                  <span className="text-9xl opacity-60">{project.images[0]}</span>
                </div>
              </div>
              {/* Additional images placeholder */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {project.images.slice(1, 4).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl opacity-60"
                  >
                    {image}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Project Highlights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Key achievements and standout features of this project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-accent-600" />
                </div>
                <p className="text-gray-900 dark:text-white font-medium">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies & Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technical stack and tools used throughout the project development
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="bg-white dark:bg-gray-800 hover:bg-accent-50 dark:hover:bg-accent-900/10 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Team Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Team Collaboration
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {project.team}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Deep Dive
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Detailed breakdown of technical implementation and architecture
            </p>
          </motion.div>

          <div className="space-y-12">
            {project.techDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {detail.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {detail.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Key obstacles encountered and innovative solutions implemented
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Challenges
                </h3>
              </div>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 text-accent-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Solutions
                </h3>
              </div>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{solution}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Results & Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Measurable outcomes and positive impact achieved through this project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-900 dark:text-white font-medium">{result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 bg-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Interested in Similar Work?
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Explore more projects or get in touch to discuss how I can help with your technical art challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="bg-white text-accent-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View More Projects
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-accent-600 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 