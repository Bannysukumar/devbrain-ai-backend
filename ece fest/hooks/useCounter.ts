import { useEffect, useState, useRef } from 'react';

interface UseCounterProps {
  end: number;
  duration?: number;
  start?: number;
  isVisible?: boolean;
}

export function useCounter({ end, duration = 2, start = 0, isVisible = true }: UseCounterProps) {
  const [count, setCount] = useState(start);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    const increment = (end - start) / (duration * 60); // 60fps
    let current = start;

    intervalRef.current = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isVisible, end, duration, start]);

  return count;
}
