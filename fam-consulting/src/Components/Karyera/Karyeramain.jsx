import React from 'react'
import '../Karyera/Karyeramain.scss'
const Karyeramain = () => {
  return (
    <div id='karyera'>
      <div className="karyeramain">
        <div className="container">
            <h2>KARYERA</h2>
            <hr />
            <div className="row g-3">
                <h3>ŞƏXSİ MƏLUMATLAR</h3>
                <div className="col-xl-6">
                <p>Ad</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>Soyad</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>Ata adı</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>Cins</p>
                <div class="input-group mb-3">
                <select class="form-select" id="inputGroupSelect01">
                <option selected>-</option>
                <option value="1">Kişi</option>
                <option value="2">Qadın</option>
                </select>
                </div>
                </div>
                <div className="col-xl-6">
                <p>Doğum tarixi</p>
                <input type="date" />
                </div>
                <div className="col-xl-6">
                <p>Doğum yeri</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>Qeydiyyat ünvanı</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>Faktiki yaşadığı ünvan</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>Ailə vəziyyəti</p>
                <div class="input-group mb-3">
                <select class="form-select" id="inputGroupSelect01">
                <option selected>-</option>
                <option value="1">Evli</option>
                <option value="2">Subay</option>
                </select>
                </div>
                </div>
                <div className="col-xl-6">
                <p>Mobil nömrə</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>Təhsil</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>Əlavə təhsil</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>Şəhər telefonu</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>Email</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>İş yeri</p>
                <input type="text" />
                </div>
                <div className="col-xl-6">
                <p>CV Yüklə</p>
                <div class="input-group">
                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">CV</button>
                </div>
                </div>
                <div className="karyerabtn">
                    <button>GÖNDƏR</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Karyeramain
