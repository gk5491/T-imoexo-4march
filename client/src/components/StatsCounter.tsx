
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Globe, Package, ThumbsUp } from 'lucide-react';

const StatsCounter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, isInView]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};
export default StatsCounter;