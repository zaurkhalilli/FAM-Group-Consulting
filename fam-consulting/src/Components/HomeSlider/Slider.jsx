import React, { useEffect, useState } from 'react';
import './Slider.scss';

const slides = [
  {
    image: '/images/sekil1.jpg',
    title: 'Yazı 1',
    text: 'Buraya mətn əlavə edə bilərsiniz',
  },
  {
    image: '/images/sekil2.jpg',
    title: 'Yazı 2',
    text: 'İstədiyiniz mətni yazın',
  },
  {
    image: '/images/sekil3.jpg',
    title: 'Yazı 3',
    text: 'Burada əlavə yazılar ola bilər',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <div className="content">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
