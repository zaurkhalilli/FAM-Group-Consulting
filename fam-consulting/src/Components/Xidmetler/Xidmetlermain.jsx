import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Xidmetlermain.scss';

import { FaGavel, FaUserTie, FaUniversity, FaFileAlt, FaCalculator,  } from 'react-icons/fa';

const services = [
  {
    title: 'İqtisadi hüquq məsləhətləri',
    icon: <FaGavel />,
    short: 'Biznes və hüquqla bağlı hüquqi məsləhətlər.',
    link: '/xidmetler/iqtisadi-huquq',
  },
  {
    title: 'Kadr uçotu üzrə məsləhət xidmətləri',
    icon: <FaUserTie />,
    short: 'İnsan resursları və kadr uçotu üçün dəstək.',
    link: '/xidmetler/kadr-ucotu',
  },
  {
    title: 'Gömrük əməliyyatları üzrə məsləhət',
    icon: <FaUniversity />,
    short: 'İdxal-ixrac əməliyyatlarında hüquqi məsləhət.',
    link: '/xidmetler/gomruk',
  },

  {
    title: 'Vergi öhdəlikləri üzrə məsləhət',
    icon: <FaFileAlt />,
    short: 'Fiziki və hüquqi şəxslər üçün vergi məsləhətləri.',
    link: '/xidmetler/vergi',
  },
  {
    title: 'Mühasibat uçotu və tənzimlənməsi',
    icon: <FaCalculator />,
    short: 'Uçot sisteminin qurulması və idarə olunması.',
    link: '/xidmetler/muhasibat',
  },
];

const Xidmetlermain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-container">
      <h2 className="section-title">XİDMƏTLƏRİMİZ</h2>
      <hr />
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index} data-aos="fade-up">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <a href={service.link}>Ətraflı →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Xidmetlermain;
