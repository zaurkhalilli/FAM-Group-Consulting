import '../Haqqimizda/Haqqimizdamain.scss'
import React, { useEffect, useState } from 'react';

const Haqqimizdamain = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 300); 
  }, []);

  return (
    <div className="about-container">
      <div className="image-side">
        <img src='https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png' alt="FAM Group" />
      </div>
      <div className={`text-side ${showText ? 'show' : ''}`}>
        <h2>FAM Group Consulting şirkəti haqqında</h2> {/* 👈 Başlıq buradadır */}
        <p>
          “FAM Group Consulting” MMC “FAM Group” ailəsinə daxil olan şirkətlərdən biridir. 08.01.2019-cu ildə 1912020003906600 №-li çıxarış əsasında dövlət qeydiyyatına alınmışdır. FAM Group Consulting MMC olaraq müştərilərimizə beynalxalq və yerli standartlara uyğun xidmətlər təklif edirik. Çox qısa bir müddətdə, FAM Group Consulting MMC böyük nəticələr əldə edib, müştərilərin inamını qazanıb, şirkətin müştəri bazası genişlənib, və regionda aparıcı yerlərdən birini tutur.
             Şirkətimizin əldə etdiyi nailiyyətlər bizim bacarığımıza əsaslanır və müştərilərimizə əlimizdən gələn səviyyədə xidmət göstərməyimizdən irəli gəlir. Biz, Sizə göstərdiyimiz xidmətlərin keyfiyyətinə və konfedensiallığı qorumağa təminat veririk.
        </p>
      </div>
    </div>
  );
};
export default Haqqimizdamain
