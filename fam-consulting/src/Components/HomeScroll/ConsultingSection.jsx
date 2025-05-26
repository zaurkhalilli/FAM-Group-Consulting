import React from 'react';
import './ConsultingSection.scss';
const items = [
  {
    icon: '💼',
    title: 'Strategiya və Planlama',
    description: 'Biz biznesiniz üçün effektiv strategiyalar hazırlayırıq.'
  },
  {
    icon: '📊',
    title: 'Analitik Dəstək',
    description: 'Ətraflı bazar və performans analizləri təqdim edirik.'
  },
  {
    icon: '🤝',
    title: 'Müştəri Əlaqələri',
    description: 'Ən yaxşı müştəri təcrübəsini yaratmaqda kömək edirik.'
  },
  {
    icon: '🚀',
    title: 'İnnovasiya və İnkişaf',
    description: 'Yeni imkanlar və innovativ həllərlə sizi irəli aparırıq.'
  }
];

const ConsultingSection = () => {
  return (
    <section className="consulting-section">
      <div className="content-wrapper">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`item ${index % 2 === 1 ? 'right' : 'left'}`}
          >
            <div className="icon">{item.icon}</div>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultingSection;
