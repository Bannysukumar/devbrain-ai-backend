'use client';

import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '-100px',
    ...options,
  });

  return { ref, isInView };
}
