'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { messages } from '@/lib/data/messages';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Messages() {
  return (
    <SectionWrapper id="messages" title="Wall of Love">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(255, 0, 110, 0.2)' }}
            className="group relative"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Card content */}
            <div className="relative glass-dark p-6 h-full flex flex-col">
              {/* Quote mark */}
              <motion.div
                className="text-5xl text-pink-400 opacity-30 mb-2"
                whileHover={{ opacity: 0.6, scale: 1.1 }}
              >
                "
              </motion.div>

              {/* Message text */}
              <p className="text-gray-300 mb-4 leading-relaxed italic flex-grow">
                {message.text}
              </p>

              {/* Author info */}
              <motion.div
                className="flex items-center gap-3 pt-4 border-t border-cyan-500/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  whileHover={{ scale: 1.15 }}
                >
                  {message.author.charAt(0)}
                </motion.div>
                <div>
                  <p className="text-white font-semibold text-sm">{message.author}</p>
                  {message.role && <p className="text-cyan-400 text-xs">{message.role}</p>}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to action (Hidden)
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-400 mb-6">
          Have a message for ÉCLAT? Share your thoughts and memories!
        </p>
        <motion.button 
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full button-glow-pink"
        >
          Add Your Message
        </motion.button>
      </motion.div>
      */}
    </SectionWrapper>
  );
}
