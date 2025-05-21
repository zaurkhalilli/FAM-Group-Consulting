import React, { useEffect } from 'react';
import './Elaqemain.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineMail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Elaqemain = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div id='elaqe'>
      <div className="container">
        <div className="row g-5">
          {/* Sol tərəf */}
          <div className="col-md-6" data-aos="fade-up">
            <div className="elaqeinputlari">
              <div className="container">
                <div className="row">
                  <h5><MdOutlineMail color='white' size={25} /> ƏLAQƏ FORMASI</h5>
                  <div className="col-xl-6">
                    <p>Ad</p>
                    <input type="text" placeholder="Adınızı daxil edin" />
                  </div>
                  <div className="col-xl-6">
                    <p>Soyad</p>
                    <input type="text" placeholder="Soyadınızı daxil edin" />
                  </div>
                  <div className="col-xl-6">
                    <p>E-mail</p>
                    <input type="email" placeholder='example@gmail.com' />
                  </div>
                  <div className="col-xl-6">
                    <p>Telefon</p>
                    <input type="tel" placeholder="+994..." pattern="[0-9+ ]+" required />
                  </div>
                </div>
              </div>
            </div>
            <div className="mesajinput">
              <p>Mesaj</p>
              <textarea placeholder="Mesajınızı bura yazın..."></textarea>
            </div>
            <div className="elaqebtn">
              <button>GÖNDƏR <FaArrowRight /></button>
            </div>
          </div>

          {/* Sağ tərəf */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="elaqeright">
              <h5><FaGlobe color='white' size={25} /> ƏLAQƏ MƏLUMATLARI</h5>
              <p>Ünvan</p>
              <div className="infotop">
                <span>AZ1075, Bakı şəhəri, Azərbaycan,</span>
                <span>Nəriman Nərimanov rayonu,</span>
                <span>Əhməd Rəcəbli küç., 224, 3-cü mərtəbə</span>
              </div>
              <div className="infobottom">
                <span>Mob.: (+994 50) 278-72-27</span>
                <span>Tel.: (+994 12) 565-57-84</span>
                <span>Email: office@famgroupconstruction.az</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elaqemain;
