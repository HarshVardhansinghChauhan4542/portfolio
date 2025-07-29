import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Brochure = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.Images');

    elements.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => el.classList.add('ImagesVisible'),
      });
    });
  }, []);

  return (
    <>
      <h1 className="Brochure">Brochure</h1>
      <div className="ImagesDiv" ref={containerRef}>
        <a
          href="https://docs.google.com/presentation/d/1fbzDm8fRAyJmLRgFi6wLb0suuVoPGNvZ1zqAeUhEqgw/edit?slide=id.g262ed8d55c4_1_0#slide=id.g262ed8d55c4_1_0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/27.png" className="Images" alt="Publication" />
        </a>
      </div>
    </>
  );
};

export default Brochure;
