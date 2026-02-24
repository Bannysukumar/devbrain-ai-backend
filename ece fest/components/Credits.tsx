'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { credits } from '@/lib/data/credits';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Credits() {
  return (
    <SectionWrapper id="credits" title="Credits">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        {credits.map((group, index) => (
          <motion.div 
            key={index} 
            variants={groupVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-bold neon-text-cyan mb-8 text-center"
              whileInView={{ textShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
              viewport={{ once: true }}
            >
              {group.title}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.people.map((person, personIndex) => (
                <motion.div
                  key={personIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: personIndex * 0.04, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="relative group"
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  {/* Content */}
                  <div className="relative glass-dark p-4 text-center">
                    <motion.p 
                      className="text-white font-semibold group-hover:text-cyan-300 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {person}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Made with love message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 pt-12 border-t border-cyan-500/30 text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-4 text-4xl"
        >
          ❤️
        </motion.div>
        <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-4">
          Made with Love by the ECE Family
        </h3>
        <motion.p 
          className="text-gray-400 text-sm max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Special thanks to all faculty, organizers, volunteers, and participants who made ÉCLAT 2K26 an unforgettable celebration of engineering excellence.
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
