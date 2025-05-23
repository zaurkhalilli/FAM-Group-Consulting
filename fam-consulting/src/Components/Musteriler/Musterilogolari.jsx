import React from 'react';
import { motion } from 'framer-motion';
import './Musterilogolari.scss';

const logos = [
  {
    name: 'İZTAŞ',
    url: 'https://www.famgroupconsulting.az/assets/images/companies/iztaj.png',
  },
  {
    name: 'SMTS',
    url: 'https://www.famgroupconsulting.az/assets/images/companies/smts.png',
  },
  {
    name: 'ALGROUP',
    url: 'https://www.famgroupconsulting.az/assets/images/companies/algroup.png',
  },
  {
    name: 'PREMIER',
    url: 'https://www.famgroupconsulting.az/assets/images/companies/premier.png',
  },
  {
    name: 'MB',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZCObLoRdbh0du795cmF1f8LXU2ud9HRgOA&s',
  },
   {
    name: 'SMTS',
    url: 'https://www.famgroupconsulting.az/assets/images/companies/smts.png',
  },
  {
    name: 'ALGROUP',
    url: 'https://www.famgroupconsulting.az/assets/images/companies/algroup.png',
  },
  {
    name: 'PREMIER',
    url: 'https://www.famgroupconsulting.az/assets/images/companies/premier.png',
  },
  {
    name: 'MB',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZCObLoRdbh0du795cmF1f8LXU2ud9HRgOA&s',
  },
   {
    name: 'ALGROUP',
    url: 'https://www.famgroupconsulting.az/assets/images/companies/algroup.png',
  },
  {
    name: 'PREMIER',
    url: 'https://www.famgroupconsulting.az/assets/images/companies/premier.png',
  },
 
];

export default function Musterilogolari() {
  return (
    <div className="musteri-logolari">
      <h2>FAM Group Consulting Müştəriləri :</h2>
      <div className="logo-container">
        {logos.map((logo, i) => (
          <motion.div
            className="logo-card"
            key={i}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src={logo.url}
              alt={logo.name}
              className={logo.url.endsWith('.svg') ? 'svg-logo' : ''}
            />
            <span>{logo.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
