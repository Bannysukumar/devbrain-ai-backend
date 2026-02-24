'use client';

import { useState, useEffect, useCallback } from 'react';
import { IntroScreen } from '@/components/IntroScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Events } from '@/components/Events';
import { FamilyWall } from '@/components/FamilyWall';
import { Gallery } from '@/components/Gallery';
import { Messages } from '@/components/Messages';
import { Credits } from '@/components/Credits';
import { Contact } from '@/components/Contact';
import { MusicController } from '@/components/MusicController';
import { BackgroundVideo } from '@/components/BackgroundVideo';

export default function Home() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if intro has been seen before
    const introSeen = localStorage.getItem('eclatIntroSeen');
    setShowIntro(introSeen !== 'true');
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  // Show nothing until hydration is complete
  if (showIntro === null) {
    return (
      <main className="bg-gradient-to-b from-slate-950 via-black to-slate-900 min-h-screen text-white overflow-x-hidden">
        <MusicController />
        <Navbar />
        <Hero />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden bg-slate-950">
      {/* Animated Background */}
      <BackgroundVideo />

      {/* Global Music Controller */}
      <MusicController />

      {/* Intro Screen */}
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      {/* Main Content - relative z-10 to sit above background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Events />
        <FamilyWall />
        <Gallery />
        <Messages />
        <Credits />
        <Contact />
      </div>
    </main>
  );
}
