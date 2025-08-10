import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Frontend = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const images = containerRef.current.querySelectorAll('.Images');
    images.forEach((img) => {
      ScrollTrigger.create({
        trigger: img,
        start: 'top 85%',
        onEnter: () => img.classList.add('ImagesVisible'),
      });
    });
  }, []);

  return (
    <>
      <h1 className="Designs">Fronted Development Projects</h1>
      <div className="ImagesDiv" ref={containerRef}>
        <a
          href="https://cyntiaportfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/25.png" alt="Design 1" className="Images" />
        </a>
        <a
          href="https://kgpnow.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/26.png" alt="Design 2" className="Images" />
        </a>
      </div>
    </>
  );
};

export default Frontend;
