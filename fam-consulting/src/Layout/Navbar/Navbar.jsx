import React, { useState } from 'react';
import '../Navbar/Navbar.scss'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";


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
            <p><FaMapMarkerAlt color="white" /> Nəriman Nərimanov rayonu, Əhməd Rəcəbli küç., 226, 3-cü mərtəbə</p>
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
                <div className="navinfo">
                    <div className="infoleft">
                        <BsClock size={40} color='#285da1' /> 
                    </div>
                    <div className="inforight">
                         <h5>İş Saatları</h5>
                         <p>  09:30 - 18:00   
                        <br />
                        Bazar Ertəsi - Cümə</p>
                    </div>
                </div>
            </div>
             <div className="col-xl-3">
              <div className="logo">
               <div className="navinfo">
                 <div className="infoleft">
                      <MdOutlinePhoneInTalk size={35} color='#285da1'/>
                    </div>
                    <div className="inforight">
                         <h5>Əlaqə</h5>
                         <p>   Mob.: (+994 50) 278-72-98 
                        <br />
                        Mob.: (+994 50) 278-71-88
                        <br />
                         Email: office@famgroupconsulting.az
                        </p>
                    </div>
                </div>
              </div>
            </div>
             <div className="col-xl-3">
              <div className="logo">
               <div className="navinfo">
                 <div className="infoleft">
                    <CiLocationOn size={40} color='#285da1'/>
                 </div>
                 <div className="inforight">
                    <h5>Gəncə Ofisi</h5>
                         <p>    Şah İsmayıl Xətai prospekti, 93.
                        <br />
                        Mob.: (+994 50) 278-71-88
                        <br />
                        Aura Park AVM, 4-cü mərtəbə,
                        <br /> Ofis 405.
                        </p>
                </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="container">
                <div className="row  navtxt">
                   <div className="col-xl-2">
                  <div className="link"><Link to="/">ANA SƏHİFƏ</Link></div>
                  </div>
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
                        <Link to="/services">XİDMƏTLƏR</Link>
                     
                    </div>
                  </div>
                  <div className="col-xl-2"><div className="link"><Link to="/lisenziyalar">LİSENZİYALAR</Link></div></div>
                  <div className="col-xl-2"><div className="link"><Link to="/customers">MÜŞTƏRİLƏR</Link></div></div>
                  <div className="col-xl-2"><div className="link"><Link to="/contact">ƏLAQƏ</Link></div></div>
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
              <Link to="/firstservice">İqtisadi hüquq məsləhətləri</Link>
              <Link to="/secondservice">Kadr uçotu üzrə məsləhət xidmətləri</Link>
              <Link to="/thirdservice">Gömrük əməliyyatları ilə əlaqədar məsləhət xidmətləri</Link>
              <Link to="/fourthservice">Audit xidmətləri</Link>
              <Link to="/fifthservice">Hüquqi və Fiziki şəxslərin vergi öhdəlikləri üzrə məsləhət xidmətləri</Link>
              <Link to="/sixservice">Mühasibat uçotunun aparılması və tənzimlənməsi üzrə məsləhət xidmətləri</Link>
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
