import React, { useEffect, useState } from 'react';
import './Slider.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider1 from '../HomeSlider/slider1.png'
const slides = [
  {
    image: '/HomeSlider/slider1.png',
    title: 'FAM Group Consulting',
    text: 'Dünya standartlarına cavab verən işlər üçün müraciət edin!',
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
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

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

      <button className="nav-button left" onClick={goToPrev}>
        <FaChevronLeft />
      </button>
      <button className="nav-button right" onClick={goToNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
