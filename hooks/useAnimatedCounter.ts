import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Animated Counter Hook
 * Animates a number from 0 to the target value with easeOutExpo easing
 *
 * @param end - The target number to count to
 * @param duration - Duration of the animation in milliseconds (default: 2000ms)
 * @param startOnView - Whether to start animation when element enters viewport (default: true)
 * @returns { count, ref } - Current count value and ref to attach to element
 *
 * @example
 * const { count, ref } = useAnimatedCounter(100, 2000);
 * <div ref={ref}>{count}</div>
 */
export function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!startOnView || isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function (easeOutExpo) - starts fast, slows down at the end
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setCount(Math.floor(easedProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
}
