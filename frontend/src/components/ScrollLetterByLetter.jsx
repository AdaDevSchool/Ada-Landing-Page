import { useEffect, useRef, useState } from 'react';
import '../static/css/ScrollLetterByLetter.css';

const ScrollLetterByLetter = ({ children, delay = 30, triggerOffset = 0.3 }) => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const text = typeof children === 'string' ? children : '';

  // Limpia los timeouts al desmontar
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsAnimating(true);
            setVisibleLetters(0); // Reinicia la animación
          } else {
            setIsAnimating(false);
            if (animationRef.current) {
              clearTimeout(animationRef.current);
            }
          }
        });
      },
      {
        threshold: triggerOffset,
        rootMargin: '0px 0px -50px 0px' // Ajusta según necesidad
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [triggerOffset]);

  useEffect(() => {
    if (!isAnimating) return;

    if (visibleLetters < text.length) {
      animationRef.current = setTimeout(() => {
        setVisibleLetters(prev => prev + 1);
      }, delay);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isAnimating, visibleLetters, text.length, delay]);

  return (
    <h1 ref={containerRef} className="letter-container text-3xl font-bold text-dark mb-4">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`letter ${index < visibleLetters ? 'visible' : ''}`}
          style={{ 
            transitionDelay: `${index * (delay / 1000)}s`,
            animationDelay: `${index * (delay / 1000)}s`
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
};

export default ScrollLetterByLetter;