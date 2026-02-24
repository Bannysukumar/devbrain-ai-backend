'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { Modal } from './Modal';
import { galleryItems } from '@/lib/data/gallery';

type CategoryType = 'events' | 'performances' | 'moments' | 'behind-scenes' | 'All';

const categories = ['All', 'events', 'performances', 'moments', 'behind-scenes'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [selectedItem, setSelectedItem] = useState(galleryItems[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleImageClick = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <SectionWrapper id="gallery" title="Gallery">
      {/* Category filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category as CategoryType)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${activeCategory === category
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50 button-glow'
                : 'glass border-2 border-cyan-500/30 text-gray-300 hover:border-cyan-500'
              }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Gallery grid */}
      <motion.div
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            onClick={() => handleImageClick(item)}
            whileHover={{ y: -6 }}
            className="group cursor-pointer relative aspect-square"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Image content */}
            <div className="relative w-full h-full glass overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 group-hover:from-slate-800/30 group-hover:to-slate-900/30 transition-all duration-300" />

              {/* Image or placeholder */}
              <img
                src={item.image || `https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop`}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
                <div className="text-right">
                  <p className="text-white font-bold text-sm">{item.title}</p>
                  <p className="text-cyan-400 text-xs capitalize font-semibold">{item.category}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gallery Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedItem.title}
      >
        <div className="space-y-4">
          {/* Image in modal */}
          <div className="aspect-video rounded-lg overflow-hidden border border-cyan-500 border-opacity-20">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h4 className="text-lg font-bold text-cyan-400 mb-2">Description</h4>
            <p className="text-gray-300">{selectedItem.description}</p>
          </div>

          <div className="flex gap-2">
            <span className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded-full text-sm capitalize">
              {selectedItem.category}
            </span>
          </div>
        </div>
      </Modal>
    </SectionWrapper>
  );
}
