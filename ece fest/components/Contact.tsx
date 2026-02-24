'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { MapPin, Mail, Phone, MapPlus } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    content: 'Abdul Kalam Engineering College Kothagudem, Kothagudem, Telangana 507120'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'eclat@akits.edu.in'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 (40) 2302-1234'
  }
];

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

export function Contact() {
  return (
    <SectionWrapper id="contact" title="Get in Touch">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card content */}
              <div className="relative glass-dark p-8 text-center">
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-cyan-300 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-400 text-sm">{info.content}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Map placeholder and CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="space-y-8"
      >
        {/* Map embed */}
        <motion.div
          className="relative rounded-2xl overflow-hidden h-96"
          whileHover={{ boxShadow: '0 0 40px rgba(0, 212, 255, 0.2)' }}
          style={{ border: '1px solid rgba(0,212,255,0.2)' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.0!2d80.5761297!3d17.498373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3410b91247e5e1%3A0x68209fc4b2327b55!2sAKITS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AKITS Campus Location"
          />
        </motion.div>

        {/* Contact form CTA (Hidden)
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative glass-dark p-8">
              <h3 className="text-lg font-bold text-cyan-300 mb-4">Have Questions?</h3>
              <p className="text-gray-400 text-sm mb-6">
                Feel free to reach out to us for any queries about ÉCLAT 2K26. Our team will be happy to help!
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full button-glow"
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative glass-dark p-8">
              <h3 className="text-lg font-bold text-purple-300 mb-4">Register for Events</h3>
              <p className="text-gray-400 text-sm mb-6">
                Ready to participate? Click below to register for your favorite events at ÉCLAT 2K26.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full button-glow-purple"
              >
                Register Now
              </motion.button>
            </div>
          </motion.div>
        </div>
        */}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 pt-8 border-t border-cyan-500 border-opacity-20 text-center text-gray-400 text-sm"
      >
        <p>© 2026 ÉCLAT - ECE Department, AKITS. All rights reserved.</p>
      </motion.div>
    </SectionWrapper>
  );
}
