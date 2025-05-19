import React, { useState } from 'react';
import '../Navbar/Navbar.scss'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div id="navbar">
        <div className="navtop">
          <div className="navleft">
            <p><FaMapMarkerAlt color="white" /> Nəriman Nərimanov rayonu, Əhməd Rəcəbli küç., 224, 4-cü mərtəbə</p>
          </div>
          <div className="navright">
            <div className="list">
              <li><Link to="https://www.facebook.com/famgroupmedia/"><IoLogoFacebook size={25} /></Link></li>
              <li><Link to="/"><FaSquareXTwitter size={21} /></Link></li>
              <li><Link to="https://www.instagram.com/famgroupconsulting/"><FiInstagram size={21} /></Link></li>
              <li><Link to="/"><FaYoutube size={24} /></Link></li>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-1">
            <div className="col-xl-3">
              <div className="logo">
                <Link to="/">
                  <img src="https://www.famgroupconsulting.az/assets/images/logo.png" alt="FAM-Group-Consulting-Logo" />
                </Link>
              </div>
            </div>
             <div className="col-xl-3">
              <div className="logo">
                <Link to="/">
                  <img src="https://www.famgroupconsulting.az/assets/images/logo.png" alt="FAM-Group-Consulting-Logo" />
                </Link>
              </div>
            </div>
             <div className="col-xl-3">
              <div className="logo">
                <Link to="/">
                  <img src="https://www.famgroupconsulting.az/assets/images/logo.png" alt="FAM-Group-Consulting-Logo" />
                </Link>
              </div>
            </div>
             <div className="col-xl-3">
              <div className="logo">
                <Link to="/">
                  <img src="https://www.famgroupconsulting.az/assets/images/logo.png" alt="FAM-Group-Consulting-Logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-10">
              <div className="container">
                <div className="row">
                  <div className="col-xl-2"><div className="link"><Link to="/">ANA SƏHİFƏ</Link></div></div>
                  <div className="col-xl-2">
                    <div className="nav-drop nav-drop2">
                      <div className="link">
                        <Link to="/about">HAQQIMIZDA</Link>
                        <br />
                        <div className="nav__dropdown">
                          <Link to="/rehberlik">RƏHBƏRLİK</Link>
                          <Link to="/ethics">ETİKA VƏ UYĞUNLUQ</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2">
                    <div className="link">
                      <div className="nav-drop nav-drop2">
                        <Link to="/services">XİDMƏTLƏR</Link>
                        <div className="nav__dropdown">
                          <Link to="/firstservice">Beynəlxalq Audit Standartlarına əsasən illik maliyyə hesabatlarının auditi</Link>
                          <Link to="/secondservice">Xüsusi təyinatlı hesabatlar və tapşırıqlar üzrə rəy</Link>
                          <Link to="/thirdservice">Məsləhət və digər əlaqəli xidmətlərin göstərilməsi</Link>
                          <Link to="/fourthservice">Əmlak və digər mülkiyyət obyektlərinin qiymətləndirilməsinin düzgünlüyünün təsdiqi</Link>
                          <Link to="/fifthservice">İstintaq və məhkəmə dəstəyi xidmətləri</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2"><div className="link"><Link to="/lisenziyalar">LİSENZİYALAR</Link></div></div>
                  <div className="col-xl-2"><div className="link"><Link to="/karyera">KARYERA</Link></div></div>
                  <div className="col-xl-2"><div className="link"><Link to="/elaqe">ƏLAQƏ</Link></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Navbar */}
      <div className="navbar__tablet">
        <div className="navbar__tablet-menu">
          <div className="navbarlogo">
            <Link to="/"><img src="https://www.famgroupaudit.az/assets/images/auditlogo.png" alt="FAM-Group-Construction-Logo" /></Link>
          </div>
          <Link to="/">ANA SƏHİFƏ</Link>
          <div className="tablet-dropdown">
            <Link to="/about">HAQQIMIZDA</Link>
            <div className="tablet-dropdown-menu">
              <Link to="/rehberlik">RƏHBƏRLİK</Link>
              <Link to="/ethics">ETİKA VƏ UYĞUNLUQ</Link>
            </div>
          </div>
          <div className="tablet-dropdown">
            <Link to="/services">XİDMƏTLƏR</Link>
            <div className="tablet-dropdown-menu">
              <Link to="/firstservice">Beynəlxalq Audit Standartlarına əsasən illik maliyyə hesabatlarının auditi</Link>
              <Link to="/secondservice">Xüsusi təyinatlı hesabatlar və tapşırıqlar üzrə rəy</Link>
              <Link to="/thirdservice">Məsləhət və digər əlaqəli xidmətlərin göstərilməsi</Link>
              <Link to="/fourthservice">Əmlak və digər mülkiyyət obyektlərinin qiymətləndirilməsinin düzgünlüyünün təsdiqi</Link>
              <Link to="/fifthservice">İstintaq və məhkəmə dəstəyi xidmətləri</Link>
            </div>
          </div>
          
          <Link to="/lisenziyalar">LİSENZİYALAR</Link>
          <Link to="/elaqe">ƏLAQƏ</Link>
          <Link to="/karyera">KARYERA</Link>
        </div>
      </div>

      {/* Mobil Navbar */}
      <div className="navbar__mobile">
        <div className="navbar__burger" onClick={toggleMenu}>
          <div className="navbarlogo">
            <Link to="/"><img src="https://www.famgroupaudit.az/assets/images/auditlogo.png" alt="FAM-Group-Construction-Logo" /></Link>
          </div>
          ☰
        </div>
        {menuOpen && (
          <div className="navbar__mobile-menu">
            <Link to="/">ANA SƏHİFƏ</Link>
            <Link to="/about">HAQQIMIZDA</Link>
            <Link to="/rehberlik">RƏHBƏRLİK</Link>
            <Link to="/lisenziyalar">LİSENZİYALAR</Link>
            <Link to="/ethics">ETİK DAVRANIŞ</Link>
            <Link to="/services">XİDMƏTLƏR</Link>
            <Link to="/elaqe">ƏLAQƏ</Link>
            <Link to="/karyera">KARYERA</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
