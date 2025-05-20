import React, { useEffect, useState } from 'react';
import './Slider.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider1 from '../HomeSlider/slider1.png'
const slides = [
  {
    image: 'https://technofusion.az/_next/image?url=https%3A%2F%2Fstrapi.technofusion.az%2Fuploads%2FConsulting_services_1_ce97cd6282.jpg&w=1920&q=75',
    title: 'FAM Group Consulting',
    text: 'Dünya standartlarında işlər üçün müraciət edin!',

  },
  {
    image: 'https://thumbs.dreamstime.com/b/business-consulting-meeting-working-brainstorming-new-project-finance-investment-concept-148096487.jpg',
    title: 'Mühasibat uçotu sahəsində məsləhətlər',
    
  },
  {
     image: 'https://www.patriotsoftware.com/wp-content/uploads/2023/12/what-are-payroll-taxes.webp',
    title: 'Vergi uçotu üzrə məsləhətlər',
    
  },
   {
     image: 'https://media.istockphoto.com/id/1385097502/photo/shot-of-businessmen-shaking-hands-during-a-team-meeting-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=Sljky2xkAG8da8rPovcE9iK-rVZU1-tsNG0JI4R_Zlw=',
    title: 'Kadr uçotu üzrə məsləhətlər',
    
  },
   {
     image: 'https://bridgepointconsulting.com/wp-content/uploads/2025/02/use-financial-audit-findings-strengthen-internal-controls-establish-operational-efficiency.jpg',
    title: 'İdarəetmə uçotu üzrə məsləhətlər',
    
  },
   {
     image: Slider1,
    title: 'Gömrük əməliyyatları ilə əlaqədar məsləhətlər',
    
  },
   {
     image: 'https://www.su.se/polopoly_fs/1.516473.1600255546!/image/image.jpg_gen/derivatives/widescreen_690/image.jpg',
    title: 'İqtisadi hüquq məsləhətləri',
    
  },
   {
     image: 'https://humanprogress.org/wp-content/uploads/2020/08/growth-op-ed-thumbnail.jpg',
    title: 'Korporativ İT xidmətləri',
    
  },
   {
     image: 'https://assets.glginsights.com/wp-content/uploads/2021/10/D1_ConsultingFirms_HeaderImages.jpg',
    title: 'Mühasibat uçotunun bərpası üzrə məsləhətlər',
    
  },
  {
     image: 'https://poetsandquantsforundergrads.com/wp-content/uploads/sites/3/2019/09/consulting.jpg',
    title: 'Vergi, DSMF, Statistika və digər hesabatların verilməsi üzrə məsləhətlər',
    
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
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
