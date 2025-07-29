import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blender = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.Images, .VideoBlender');

    elements.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          if (el.tagName === 'VIDEO') {
            el.classList.add('VideoVisible');
          } else {
            el.classList.add('ImagesVisible');
          }
        },
      });
    });
  }, []);

  return (
    <>
      <h1 className="Designs">Blender</h1>
      <div className="ImagesDiv" ref={containerRef}>
        <img src="/8.png" alt="Design 1" className="Images" />
        <img src="/9.png" alt="Design 2" className="Images" />
        <img src="/11.png" alt="Design 3" className="Images" />
        <img src="/13.png" alt="Design 4" className="Images" />
        <img src="/14.png" alt="Design 5" className="Images" />
        <img src="/15.png" alt="Design 6" className="Images" />
        <img src="/16.jpg" alt="Design 7" className="Images" />
        <img src="/17.jpg" alt="Design 8" className="Images" />
        <video src="/video.mkv" controls className="VideoBlender" />
      </div>
    </>
  );
};

export default Blender;
