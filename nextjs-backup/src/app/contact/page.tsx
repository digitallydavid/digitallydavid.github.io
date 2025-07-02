'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center">
        <section className="py-2 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-16 shadow-lg space-y-14 text-center"
            >
              {/* Image Placeholder */}
              <div className="flex justify-center mb-10">
                <div className="w-40 h-40 rounded-full bg-accent-100 dark:bg-accent-900/20 flex items-center justify-center text-7xl text-accent-600">
                  🧑‍💻
                </div>
              </div>
              <div className="space-y-10">
                <a
                  href="mailto:digitallydavid@gmail.com"
                  className="flex items-center justify-center gap-4 text-2xl font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  <Mail className="h-8 w-8" /> digitallydavid@gmail.com
                </a>
                <div className="flex items-center justify-center gap-4 text-2xl text-gray-700 dark:text-gray-300">
                  <MapPin className="h-8 w-8 text-accent-600" /> Vancouver, WA
                </div>
                <a
                  href="/resume"
                  className="flex items-center justify-center gap-4 text-2xl font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  <Globe className="h-8 w-8" /> View Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
} 