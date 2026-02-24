'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { Modal } from './Modal';
import { events } from '@/lib/data/events';

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

export function Events() {
  const [activeTab, setActiveTab] = useState<'technical' | 'non-technical'>('technical');
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEvents = events.filter((event) => event.category === activeTab);

  const handleEventClick = (event: typeof events[0]) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <SectionWrapper id="events" title="Events">
      {/* Tab buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <motion.button
          onClick={() => setActiveTab('technical')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
            activeTab === 'technical'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 button-glow'
              : 'glass border-2 border-cyan-500/30 text-gray-300 hover:border-cyan-500'
          }`}
        >
          ⚙️ Technical Events
        </motion.button>
        <motion.button
          onClick={() => setActiveTab('non-technical')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
            activeTab === 'non-technical'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 button-glow-purple'
              : 'glass border-2 border-purple-500/30 text-gray-300 hover:border-purple-500'
          }`}
        >
          🎨 Non-Technical Events
        </motion.button>
      </div>

      {/* Events grid */}
      <motion.div
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            variants={cardVariants}
            onClick={() => handleEventClick(event)}
            whileHover={{ y: -8 }}
            className="group cursor-pointer relative"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            {/* Card content */}
            <div className="relative glass-dark p-6 h-full flex flex-col">
              <h3 className="text-lg font-bold text-cyan-300 mb-3 group-hover:neon-text-cyan transition-all">
                {event.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                {event.description}
              </p>
              <motion.button
                whileHover={{ x: 4 }}
                className="text-cyan-400 font-semibold hover:text-cyan-300 text-sm inline-flex items-center gap-1"
              >
                Explore <span>→</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Event Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedEvent.name}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-cyan-400 mb-2">Description</h4>
            <p className="text-gray-300">{selectedEvent.description}</p>
          </div>

          {selectedEvent.rules && (
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-2">Rules</h4>
              <p className="text-gray-300 whitespace-pre-line">{selectedEvent.rules}</p>
            </div>
          )}

          {selectedEvent.prizes && (
            <div>
              <h4 className="text-lg font-bold text-pink-400 mb-2">Prizes</h4>
              <p className="text-gray-300">{selectedEvent.prizes}</p>
            </div>
          )}

          {selectedEvent.contact && (
            <div>
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Contact</h4>
              <p className="text-gray-300">{selectedEvent.contact}</p>
            </div>
          )}

          <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:shadow-lg transition-all">
            Register for this Event
          </button>
        </div>
      </Modal>
    </SectionWrapper>
  );
}
