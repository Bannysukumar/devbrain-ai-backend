'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    // Dispatch event to MusicController to start music
    window.dispatchEvent(new CustomEvent('eclatIntroComplete'));

    // Fade out and complete after animation
    setTimeout(() => {
      localStorage.setItem('eclatIntroSeen', 'true');
      onComplete();
    }, 800);
  };

  const handleReplay = () => {
    localStorage.removeItem('eclatIntroSeen');
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-black to-slate-900 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Golden Frame for HOD */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-48 h-48 md:w-64 md:h-64"
        >
          {/* Golden frame border */}
          <div className="absolute inset-0 border-8 border-yellow-500 rounded-3xl shadow-2xl shadow-yellow-400/50" />

          {/* Inner frame effect */}
          <div className="absolute inset-4 border-2 border-yellow-400 rounded-2xl" />

          {/* HOD Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center text-yellow-200 text-center p-1 overflow-hidden z-10">
            <img
              src="/New folder/hod.jpeg"
              alt="HOD Mrs. G. Krishna Mohan"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Glow effect */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 border-4 border-yellow-400 border-opacity-0 rounded-3xl blur-lg"
            style={{
              boxShadow: '0 0 30px rgba(250, 204, 21, 0.4)'
            }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 mb-2 drop-shadow-lg">
            KING OF ECE
          </h1>

          <p className="text-xl md:text-2xl text-yellow-100 font-semibold mb-1">
            Mrs. G. Krishna Mohan
          </p>
          <p className="text-lg md:text-xl text-yellow-200">
            Head of the Department — ECE
          </p>
        </motion.div>

        {/* Enter Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleEnter}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
        >
          Enter ÉCLAT 2K26
        </motion.button>

        {/* Replay link */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={handleReplay}
          className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
        >
          Replay Intro
        </motion.button>
      </div>
    </motion.div>
  );
}
