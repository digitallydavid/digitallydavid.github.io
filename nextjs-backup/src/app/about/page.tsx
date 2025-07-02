'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';
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
    year: '2022 - Current',
    title: 'Technical Artist',
    company: 'Airship Syndicate',
    description: 'Responsible for technical art initiatives including game performance optimization, tool design, and animation systems. Shipped Wayfinder (2023) and contributing to two unannounced titles.',
    skills: ['Unreal Engine', 'C++', 'Python', 'Performance Optimization']
  },
  {
    year: '2021',
    title: '3D Character Artist',
    company: '**KID A AMNESIA** (Arbitrarily Good Productions)',
    description: 'Led character creation from sculpting/modeling to retopology, rigging, and in-engine implementation. Developed character behaviors and reactive animation systems.',
    skills: ['Unreal Engine', 'Maya', 'Zbrush', 'Character Art', 'Animation Systems']
  },
  {
    year: '2021',
    title: '3D Artist',
    company: 'Solar Ash (Heart Machine)',
    description: 'Created environmental assets including Houdini-generated body piles, infected targets, and corpse props. Supported art team with modeling tasks to meet shipping deadlines.',
    skills: ['Unreal Engine', 'Houdini', 'Maya', 'Environmental Art', 'Modeling']
  },
  {
    year: '2020',
    title: '3D Character Artist',
    company: 'We Are OFK (Teddy Dief Productions)',
    description: 'Expanded game cast by adapting main character base meshes into unique supporting roles. Delivered final models and textures aligned with stylized aesthetic.',
    skills: ['Character Art', 'Modeling', 'Texturing', 'Stylized Art']
  },
  {
    year: '2020 - 2022',
    title: '3D Character and Tech Artist',
    company: 'Contractor (Various Studios)',
    description: 'Worked with clients including Annapurna, Iridium Games, Giant Sparrow, and Arbitrarily Good Games on character art and technical art projects.',
    skills: ['Character Art', 'Technical Art', 'Client Work', 'Multiple Studios']
  },
  {
    year: '2015 - 2020',
    title: 'Senior Compositor',
    company: 'Various VFX Studios',
    description: 'Worked at Ingenuity Studios, Fuse FX, and Barnstorm VFX on projects including The Orville, Taylor Swift, Maroon 5, American Horror Story, Grey\'s Anatomy, and 9-1-1.',
    skills: ['Compositing', 'VFX', 'Nuke', 'Film & TV']
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
                I&apos;m a versatile technical artist with a passion for tool, system, and feature design, 
                currently working at Airship Syndicate on game performance optimization and animation systems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                My expertise spans character art, technical art, and visual effects, with experience 
                ranging from game development to film compositing. I love solving complex problems 
                and enhancing gameplay experiences through innovative technical solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Current Technical Artist at Airship Syndicate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Shipped Wayfinder (2023)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Expert in character art and technical art</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Former Senior Compositor for film & TV</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/resume"
                  className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
                >
                  View Resume
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
              My journey from film compositing to game development technical art
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




    </div>
  );
} 