import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Xidmetlermain.scss';

import { FaGavel, FaUserTie, FaUniversity, FaFileAlt, FaCalculator,  } from 'react-icons/fa';

const services = [
  {
    title: 'İqtisadi hüquq məsləhətləri',
    icon: <FaGavel />,
    short: 'Hüquqi və fiziki şəxslərə biznes hüququ ilə əlaqədar məsləhət xidmətləri',
    link: '/xidmetler/iqtisadi-huquq',
  },
  {
    title: 'Kadr uçotu üzrə məsləhət xidmətləri',
    icon: <FaUserTie />,
    short: 'Əmək müqaviləsi, əmək müqaviləsi tərəflərinin hüquqi öhdəlikləri, əmək müqaviləsi bildirişi, əməyin mühafizəsi və s. bu kimi əmək qanunvericiliyinə müvafiq olaraq məsləhət xidmətləri',
    link: '/xidmetler/kadr-ucotu',
  },
  {
    title: 'Gömrük əməliyyatları üzrə məsləhət',
    icon: <FaUniversity />,
    short: 'Xarici iqtisadi fəaliyyətlə əlaqədar (müqavilələr, müqavilələrin qeydiyyatı, idxal,ixrac və s,) bütün xidmətlər',
    link: '/xidmetler/gomruk',
  },

  {
    title: 'Vergi öhdəlikləri üzrə məsləhət',
    icon: <FaFileAlt />,
    short: 'Vergi öhdəliklərinin , bəyannamə mükəlləfiyyətlərinin, vergi borclarının müəyyənləşdirilməsi',
    link: '/xidmetler/vergi',
  },
  {
    title: 'Mühasibat uçotu və tənzimlənməsi',
    icon: <FaCalculator />,
    short: 'Müəssisələrdə uçot siyasətinin hazırlanması, mühasibat uçotu haqqında Azərbaycan Respublikasının qanununa və BMHS-na əsasən uçotun təşkili üzrə xidmətlər',
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Xidmetlermain;
