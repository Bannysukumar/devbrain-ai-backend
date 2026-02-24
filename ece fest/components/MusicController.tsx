'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Music, Music2 } from 'lucide-react';

interface MusicControllerProps {
  onMusicStart?: () => void;
}

export function MusicController({ onMusicStart }: MusicControllerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    // Restore music preference from localStorage
    const musicToggle = localStorage.getItem('eclatMusicToggle');
    if (musicToggle === 'true' && hasUserInteracted) {
      playMusic();
    }
  }, [hasUserInteracted]);

  const playMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0;
    audioRef.current.play().catch(() => {
      // Silent fallback - playback may fail in some browsers
    });

    // Fade in over 2 seconds
    let currentVolume = 0;
    const targetVolume = 0.4;
    const step = targetVolume / 40; // 40 steps = 2 seconds (50ms each)
    const interval = setInterval(() => {
      if (audioRef.current) {
        currentVolume = Math.min(currentVolume + step, targetVolume);
        audioRef.current.volume = currentVolume;
        if (currentVolume >= targetVolume) clearInterval(interval);
      }
    }, 50);

    setIsPlaying(true);
    localStorage.setItem('eclatMusicToggle', 'true');
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
    localStorage.setItem('eclatMusicToggle', 'false');
  };

  const toggleMusic = () => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
    }

    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  // Expose play method for IntroScreen
  useEffect(() => {
    const handleIntroComplete = () => {
      setHasUserInteracted(true);
      setTimeout(() => {
        playMusic();
      }, 500);
    };

    window.addEventListener('eclatIntroComplete', handleIntroComplete);
    return () => window.removeEventListener('eclatIntroComplete', handleIntroComplete);
  }, []);

  return (
    <>
      {/* Audio element with fallback */}
      <audio
        ref={audioRef}
        loop
        crossOrigin="anonymous"
      >
        {/* Using a silent MP3 data URL as fallback */}
        <source 
          src="data:audio/mpeg;base64,//NExAAAAANIAAAAAExBTUUzLjk4LjIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+NExBsAAANIAAAAAExBTUUzLjk4LjIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//NExA8AAANIAAAAAExBTUUzLjk4LjIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+NExAMAAANIAAAAAExBTUUzLjk4LjI=" 
          type="audio/mpeg" 
        />
      </audio>

      {/* Floating music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-950"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Music2 size={24} /> : <Music size={24} />}
      </button>
    </>
  );
}
