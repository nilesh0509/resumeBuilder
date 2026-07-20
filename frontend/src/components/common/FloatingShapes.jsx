import React, { useEffect, useRef } from 'react';

const FloatingShapes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const shapes = container.children;

    const animate = () => {
      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        const speed = 0.02 + i * 0.005;
        const x = Math.sin(Date.now() * speed + i * 1.5) * 50;
        const y = Math.cos(Date.now() * speed * 0.8 + i * 2) * 50;
        const rotate = Date.now() * 0.01 * (i + 1) * 0.5;
        shape.style.transform = `translate3d(${x}px, ${y}px, ${i * 10}px) rotate(${rotate}deg) scale(${1 + Math.sin(Date.now() * 0.005 + i) * 0.15})`;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const colors = ['#4f46e5', '#7c3aed', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
  const shapes = [
    { type: 'circle', size: 80 },
    { type: 'square', size: 60 },
    { type: 'circle', size: 50 },
    { type: 'square', size: 70 },
    { type: 'circle', size: 40 },
    { type: 'square', size: 90 },
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, i) => {
        const top = 5 + Math.random() * 90;
        const left = 5 + Math.random() * 90;
        const bgColor = colors[i % colors.length];
        const shapeClass = shape.type === 'circle' ? 'rounded-full' : 'rounded-lg';
        return (
          <div
            key={i}
            className={`absolute ${shapeClass} opacity-25`}
            style={{
              width: shape.size,
              height: shape.size,
              top: `${top}%`,
              left: `${left}%`,
              backgroundColor: bgColor,
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingShapes;