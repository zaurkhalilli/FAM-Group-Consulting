import React from 'react'
import { PiBuildingApartment } from "react-icons/pi";
import '../Haqqimizda/Haqqimizdainfo.scss'
import { BsBuildings } from "react-icons/bs";


const Haqqimizdainfo = () => {
  return (
    <div id='infoabout'>
        <h3>Əlaqə məlumatları:</h3>
      <div className="container">
        <div className="row g-3">
            <div className="col-xl-6">
            <p><PiBuildingApartment size={35}/>   Bakı ofisi</p>
            <br />
            <span>
                AZ1075, Bakı şəhəri, Azərbaycan,
                <br />
                Nəriman Nərimanov rayonu,
                <br />
                Əhməd Rəcəbli küç., 224, 3-cü mərtəbə
                <br />
                Email: office@famgroupconsulting.az
                <br />
                Mob.: (+994 50) 278-72-98
                <br />
                Mob.: (+994 50) 278-71-88
            </span>
            </div>
            <div className="col-xl-6 right">
                 <p><BsBuildings size={35}/>  Gəncə ofisi</p>
                 <br />
            <span>
                AZ2001, Gəncə şəhəri, Azərbaycan,
                <br />
                Şah İsmayıl Xətai prospekti, 93.
                <br />
                Aura Park AVM, 4-cü mərtəbə, Ofis 405.
                <br />
                Email: office@famgroupconsulting.az
                <br />
                Mob.: (+994 50) 264-66-63
                <br />
                Mob.: (+994 50) 278-72-88
                <br />
                Tel.: (+994 22) 265-17-35
            </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Haqqimizdainfo
