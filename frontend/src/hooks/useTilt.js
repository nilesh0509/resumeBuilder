// src/hooks/useTilt.js
import { useState, useRef, useEffect } from 'react';

export const useTilt = (ref, options = { max: 15, speed: 400 }) => {
  const [style, setStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const { max, speed } = options;

    const handleMouseMove = (e) => {
      if (!isHovered) return;
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateX = -y * max;
      const rotateY = x * max;
      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
        boxShadow: `0 20px 40px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.1)`,
        transition: `transform ${speed}ms ease-out, box-shadow ${speed}ms ease-out`,
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setStyle({
        transform: 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
        boxShadow: 'none',
        transition: 'transform 300ms ease-out, box-shadow 300ms ease-out',
      });
    };

    const handleMouseEnter = () => setIsHovered(true);

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [ref, options, isHovered]);

  return style;
};