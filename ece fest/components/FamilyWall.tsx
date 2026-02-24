'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { people } from '@/lib/data/people';

const filterOptions = ['All', 'HOD', 'Faculty']; //, 'Convenor', 'Volunteer', 'Senior', 'Junior'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export function FamilyWall() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPeople = people.filter((person) => {
    if (activeFilter === 'All') return true;
    return person.role.toUpperCase() === activeFilter.toUpperCase() ||
      (activeFilter === 'Convenor' && person.role === 'convenor') ||
      (activeFilter === 'Volunteer' && person.role === 'volunteer') ||
      (activeFilter === 'Senior' && person.role === 'senior') ||
      (activeFilter === 'Junior' && person.role === 'junior') ||
      (activeFilter === 'Faculty' && person.role === 'faculty') ||
      (activeFilter === 'HOD' && person.role === 'hod');
  });

  return (
    <SectionWrapper id="family" title="ECE Family">
      {/* Filter buttons */}
      <motion.div
        className="flex flex-wrap gap-3 justify-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {filterOptions.map((filter, index) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/50'
              : 'glass border-2 border-cyan-500/30 text-gray-300 hover:border-cyan-500'
              }`}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* People grid */}
      <motion.div
        key={activeFilter}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredPeople.map((person, index) => (
          <motion.div
            key={person.id}
            variants={cardVariants}
            custom={index}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Card content */}
            <div className="relative overflow-hidden rounded-2xl glass-dark p-4 h-full">
              {/* Avatar with hover animation */}
              <motion.div
                className="aspect-square bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl mb-4 flex items-center justify-center text-gray-400 overflow-hidden relative"
                whileHover={{ scale: 1.08 }}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-initials')) {
                      const initials = document.createElement('span');
                      initials.className = 'fallback-initials text-2xl font-bold text-cyan-400';
                      initials.textContent = person.name.split(' ').map(w => w[0]).join('').slice(0, 2);
                      parent.appendChild(initials);
                    }
                  }}
                />
              </motion.div>

              {/* Info */}
              <h3 className="text-lg font-bold text-cyan-300 mb-1 group-hover:neon-text-cyan transition-all line-clamp-2">
                {person.name}
              </h3>
              <p className="text-sm neon-text-pink mb-2 capitalize">{person.role}</p>
              {person.designation && (
                <p className="text-xs text-gray-400">{person.designation}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Count info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-12 text-gray-400"
      >
        Showing {filteredPeople.length} member{filteredPeople.length !== 1 ? 's' : ''} • Total: {people.length}
      </motion.div>
    </SectionWrapper>
  );
}
