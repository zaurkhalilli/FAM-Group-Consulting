import React from 'react'
import '../Footer/Footer.scss'
const Footer = () => {
  return (
    <div id='footer'>
      <div className="container">
        <div className="row g-2">
          <div className="col-xl-3">
          <img src="https://www.famgroupconsulting.az/assets/images/logo.png" alt="FAM-Group-Consulting-Logo" />
          </div>
          <div className="col-xl-9">
          <div className="footerright">
            <h4>ƏLAQƏ MƏLUMATLARI :</h4>
            <p>AZ1075, Bakı şəhəri, Nəriman Nərimanov rayonu,
              <br />
                Əhməd Rəcəbli küç., 224, 3-cü mərtəbə
                <br />
                Email: office@famgroupaudit.az
                <br />
                Mob.: (+994 50) 289-28-28
                <br />
                Mob.: (+994 50) 278-71-87
                <br />
                - Gəncə Ofisi
                <br />
                Şah İsmayıl Xətai prospekti, 93.
                <br />
                Mob.: (+994 50) 278-71-88
                <br />
                Aura Park AVM, 4-cü mərtəbə,
                Ofis 405.
            </p>
          </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span> © 2025
        <br />
        FAM Group Consulting. Bütün hüquqlar qorunur.</span>
      </div>
    </div>
  )
}

export default Footer
