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
          href="https://drive.google.com/file/d/1kA6CgFBve29txCXeK1-GgblMcnxEeSzt/view?usp=sharing"
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
