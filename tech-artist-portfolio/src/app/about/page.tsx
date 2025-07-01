'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Download, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}

const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Senior Technical Artist',
    company: 'AAA Game Studio',
    description: 'Leading technical art initiatives for next-gen open-world RPG. Implementing advanced shader systems and optimizing rendering pipelines for multiple platforms.',
    skills: ['HLSL', 'Unity', 'Houdini', 'Python']
  },
  {
    year: '2022',
    title: 'Technical Artist',
    company: 'Indie Game Studio',
    description: 'Developed procedural art tools and automated asset pipelines. Created stylized shaders and VFX systems for mobile and PC platforms.',
    skills: ['Maya', 'Substance', 'C#', 'Blender']
  },
  {
    year: '2020',
    title: 'Junior Technical Artist',
    company: 'Digital Media Company',
    description: 'Built custom tools for content creators and streamlined art production workflows. Focused on real-time rendering optimization.',
    skills: ['Unity', 'Python', 'Git', 'Perforce']
  },
  {
    year: '2019',
    title: 'Computer Science Degree',
    company: 'University',
    description: 'Bachelor of Science in Computer Science with focus on Computer Graphics and Game Development. Graduated Summa Cum Laude.',
    skills: ['C++', 'OpenGL', 'Mathematics', 'Algorithms']
  }
];

const skills = [
  {
    category: 'Programming Languages',
    items: ['C#', 'Python', 'HLSL/GLSL', 'C++', 'JavaScript', 'MEL', 'VEX']
  },
  {
    category: 'Game Engines',
    items: ['Unity', 'Unreal Engine 4/5', 'Godot', 'Custom Engines']
  },
  {
    category: '3D Software',
    items: ['Maya', 'Blender', 'Houdini', '3ds Max', 'Cinema 4D']
  },
  {
    category: 'Texturing & Materials',
    items: ['Substance Suite', 'Photoshop', 'GIMP', 'Quixel', 'Mari']
  },
  {
    category: 'Version Control',
    items: ['Git', 'Perforce', 'SVN', 'Plastic SCM']
  },
  {
    category: 'Specializations',
    items: ['Real-time Rendering', 'Procedural Generation', 'Pipeline Development', 'Performance Optimization']
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate technical artist with over 5 years of experience bridging the gap between 
                creative vision and technical implementation in game development.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                My expertise spans shader development, pipeline optimization, and tool creation. 
                I love solving complex technical challenges while maintaining artistic quality and 
                ensuring smooth workflows for development teams.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">5+ years in game development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Specialized in real-time rendering</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Expert in pipeline automation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Cross-platform optimization specialist</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/resume.pdf"
                  className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
                  download
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center">
                <span className="text-white text-8xl">👨‍💻</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-accent-600 text-2xl">⚡</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Philosophy
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My approach to technical art is grounded in the belief that technology should enhance creativity, not limit it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bridge Building",
                description: "I excel at translating artistic vision into technical reality, ensuring seamless collaboration between artists and programmers.",
                icon: "🌉"
              },
              {
                title: "Innovation Focus",
                description: "Always exploring cutting-edge techniques and tools to push the boundaries of what's possible in real-time graphics.",
                icon: "🚀"
              },
              {
                title: "Quality First",
                description: "Committed to delivering high-quality solutions that are both technically sound and artistically compelling.",
                icon: "✨"
              }
            ].map((philosophy, index) => (
              <motion.div
                key={philosophy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{philosophy.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{philosophy.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{philosophy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Career Timeline
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey through the world of technical art and game development
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-200 dark:bg-accent-800"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-accent-600" />
                      <span className="text-accent-600 font-semibold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{item.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-accent-100 dark:bg-accent-900/20 text-accent-800 dark:text-accent-200 px-2 py-1 rounded text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive toolkit spanning multiple disciplines and technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-accent-100 dark:hover:bg-accent-900/20 transition-colors cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto mb-8">
              Ready to collaborate on your next project? I'd love to hear about your vision and discuss how we can bring it to life.
            </p>
            <Link
              href="/contact"
              className="bg-white text-accent-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-block"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 