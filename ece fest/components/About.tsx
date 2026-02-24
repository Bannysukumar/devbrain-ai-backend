'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { Zap, Users, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: 'Technical Excellence',
    description:
      'Push the boundaries of engineering with cutting-edge competitions and workshops showcasing innovation and technical prowess.'
  },
  {
    icon: Users,
    title: 'Cultural Vibrancy',
    description:
      'Celebrate creativity through diverse cultural performances, debates, and artistic expressions that unite the college community.'
  },
  {
    icon: Lightbulb,
    title: 'Togetherness',
    description:
      'Build lasting bonds and memories through collaborative events, team challenges, and shared experiences that strengthen our ECE family.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function About() {
  return (
    <SectionWrapper id="about" title="About ÉCLAT">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              {/* Card content */}
              <div className="relative glass-dark p-8 h-full">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 mb-6"
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-cyan-300 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{highlight.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 text-center max-w-3xl mx-auto"
      >
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          ÉCLAT 2K26 is the flagship annual festival of the Electronics and Communication Engineering (ECE) department at AKITS. 
          It stands as a platform for students to showcase their technical expertise, cultural talents, and organizational skills.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          With both technical competitions and non-technical events, ÉCLAT creates an inclusive environment where innovation meets creativity,
          and individual excellence contributes to collective pride.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
