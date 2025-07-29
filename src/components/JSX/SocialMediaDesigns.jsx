import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SocialMediaDesigns = () => {
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
      <h1 className="Designs">Social Media Designs</h1>
      <div className="ImagesDiv" ref={containerRef}>
        <img src="/1.png" alt="Design 1" className="Images" />
        <img src="/7.jpg" alt="Design 2" className="Images" />
        <img src="/2.png" alt="Design 3" className="Images" />
        <img src="/4.png" alt="Design 4" className="Images" />
        <img src="/5.png" alt="Design 5" className="Images" />
        <img src="/6.png" alt="Design 6" className="Images" />
        <img src="/3.jpg" alt="Design 7" className="Images" />
        <img src="/20.png" alt="Design 8" className="Images" />
        <img src="/21.jpg" alt="Design 9" className="Images" />
        <img src="/22.jpg" alt="Design 10" className="Images" />
        <img src="/23.jpg" alt="Design 11" className="Images" />
        <img src="/24.jpg" alt="Design 12" className="Images" />
        <img src="/19.jpg" alt="Design 13" className="Images" />
      </div>
    </>
  );
};

export default SocialMediaDesigns;
