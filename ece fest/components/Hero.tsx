'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculate = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculate());
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return { timeLeft, isClient };
}

const TARGET_DATE = new Date('2026-02-26T00:00:00');

export function Hero() {
  const { timeLeft, isClient } = useCountdown(TARGET_DATE);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 py-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Poster/Image with glass effect */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
            <div className="relative glass overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-gray-400 relative">
                <Image
                  src="/images/brocher.png"
                  alt="ÉCLAT 2K26 Fest Poster"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title with neon effect */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
            <span className="neon-text-cyan">ÉCLAT</span>
            <br />
            <span className="neon-text-purple">2K26</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-2 font-light tracking-wide"
        >
          The Flagship Festival of Electronics & Communication Engineering
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-cyan-400/80 mb-8 font-medium"
        >
          Where Innovation Meets Excellence
        </motion.p>

        {/* Date and Location with glass card */}
        <motion.div
          variants={itemVariants}
          className="inline-block glass mb-10"
        >
          <div className="px-6 md:px-8 py-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-xl">📅</span>
              <span>February 26-27, 2026</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-xl">📍</span>
              <span>AKITS Campus, Hyderabad</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.button
            suppressHydrationWarning
            onClick={() => scrollToSection('events')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 font-bold rounded-full text-white relative overflow-hidden group button-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 animate-pulse" />
            <span className="relative flex items-center justify-center gap-2">
              ✨ Explore Events
            </span>
          </motion.button>

          <motion.button
            suppressHydrationWarning
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 font-bold rounded-full text-purple-300 glass button-glow-purple border-2 border-purple-500/50 hover:border-purple-500"
          >
            <span className="flex items-center justify-center gap-2">
              💬 Get in Touch
            </span>
          </motion.button>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6 neon-text-cyan">Event Starts In</h3>

            <div className="flex gap-4 md:gap-8 justify-center">
              {/* Days */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 glass rounded-xl flex items-center justify-center mb-2 border border-cyan-500/30 group hover:border-cyan-400 transition-colors">
                  <span className="text-2xl md:text-4xl font-black text-white group-hover:neon-text-cyan">
                    {isClient ? String(timeLeft.days).padStart(2, '0') : '00'}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-wider">Days</span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 glass rounded-xl flex items-center justify-center mb-2 border border-purple-500/30 group hover:border-purple-400 transition-colors">
                  <span className="text-2xl md:text-4xl font-black text-white group-hover:neon-text-purple">
                    {isClient ? String(timeLeft.hours).padStart(2, '0') : '00'}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-wider">Hours</span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 glass rounded-xl flex items-center justify-center mb-2 border border-pink-500/30 group hover:border-pink-400 transition-colors">
                  <span className="text-2xl md:text-4xl font-black text-white group-hover:neon-text-pink">
                    {isClient ? String(timeLeft.minutes).padStart(2, '0') : '00'}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-wider">Mins</span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 glass rounded-xl flex items-center justify-center mb-2 border border-blue-500/30 group hover:border-blue-400 transition-colors">
                  <span className="text-2xl md:text-4xl font-black text-white group-hover:neon-text-blue">
                    {isClient ? String(timeLeft.seconds).padStart(2, '0') : '00'}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-gray-400 font-semibold uppercase tracking-wider">Secs</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-cyan-400/60"
        >
          <div className="text-xs uppercase tracking-widest font-semibold">Scroll to discover</div>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
