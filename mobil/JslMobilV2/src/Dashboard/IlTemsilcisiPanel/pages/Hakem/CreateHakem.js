import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch } from 'react-redux';
import { createHakem } from '../../../../redux-new/actions/hakem';
import { toast } from 'react-toastify';

function CreateHakem(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Hakem eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    const [adi, setAdi] = useState("");
    const [soyadi, setSoyadi] = useState("");
    const [dogumTarihi, setDogumTarihi] = useState("");
    const [gosterdigiSariKart, setGosterdigiSariKart] = useState("");
    const [gosterdigiKirmiziKart, setGosterdigiKirmiziKart] = useState("");
    const [oyunSayisi, setOyunSayisi] = useState("");
    const [resim, setResim] = useState("");
    const [gorevliOlduguOyun, setGorevliOlduguOyun] = useState("");
    const [telefon, setTelefon] = useState("");
    // const [eposta, setEposta] = useState("");
    const [adres, setAdres] = useState("");
    // const [sifre, setSifre] = useState("");
    const [published, setPublished] = useState(true);

    // Fonksiyon tanımlamaları
    const createHakemFunc = () => {
        // if(adi.length > 0 && soyadi.length > 0 && dogumTarihi.length > 0 && gosterdigiSariKart.length > 0 && gosterdigiKirmiziKart.length > 0 && oyunSayisi.length > 0 && gorevliOlduguOyun.length > 0 && telefon.length > 0 && eposta.length > 0 && adres.length > 0 && sifre.length > 0)
        // {
          // const data = {adi, soyadi, dogumTarihi, gosterdigiSariKart, gosterdigiKirmiziKart, oyunSayisi, resim, gorevliOlduguOyun, telefon, eposta, adres, sifre, published};
          const data = {adi, soyadi, dogumTarihi, gosterdigiSariKart, gosterdigiKirmiziKart, oyunSayisi, resim, gorevliOlduguOyun, telefon, adres, published};
          dispatch(createHakem(data));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        }
      //   else {
      //     alert("Lütfen tüm alanları doldurunuz.");
      //   }
      // }

  return (
    <>
        <form className="formcss">
        <div className="div2">
            <label className="labelcss" htmlFor='id'>Fotograf </label>
            <input  type="file" placeholder="Resim" name="resim" accept="image/*" onChange={(event) => { setResim(event.target.value); }} />
        </div>
          <div  className="div2">
              <div>
                <label className="labelcss" htmlFor="adi">Adı</label>
                <input className="inputcss" type="text" placeholder="Adı" name="adi" onChange={(event) => { setAdi(event.target.value); }} />
              </div>
              <div>
                <label className="labelcss" htmlFor='soyadi'>Soyadı</label>
                <input className="inputcss" type="text" placeholder="Soyadı" name="soyadi" onChange={(event) => { setSoyadi(event.target.value); }} />
              </div>
          </div>
          <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor='telefon'>Telefon</label>
              <input className="inputcss" type="number" placeholder="Telefon" name="telefon" onChange={(event) => { setTelefon(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor='adres'>Adres</label>
              <input className="inputcss" type="text" placeholder="Adres yeri" name="adres" onChange={(event) => { setAdres(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="dogumTarihi">Doğum Tarihi</label>
              <input className="inputcss" type="date" placeholder="Doğum Tarihi" name="dogumTarihi" onChange={(event) => { setDogumTarihi(event.target.value); }} />
          </div>
          </div>
          <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor='gosterdigiSariKart'>Gösterdiği Sarı Kart </label>
              <input className="inputcss" type="number" placeholder="Gösterdiği Sarı Kart" name="gosterdigiSariKart" onChange={(event) => { setGosterdigiSariKart(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor='gosterdigiKirmiziKart'>Gösterdiği Kırmızı Kart </label>
              <input className="inputcss" type="number" placeholder="Gösterdiği Kırmızı Kart" name="gosterdigiKirmiziKart" onChange={(event) => { setGosterdigiKirmiziKart(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="oyunSayisi">Oyun Sayısı</label>
              <input className="inputcss" type="number" placeholder="Oyun Sayısı" name="oyunSayisi" onChange={(event) => { setOyunSayisi(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="gorevliOlduguOyun">Görevli Olduğu Oyun</label>
              <input className="inputcss" type="number" placeholder="Görevli Olduğu Oyun" name="gorevliOlduguOyun" onChange={(event) => { setGorevliOlduguOyun(event.target.value); }} />
            </div>
          </div>
          {/* <div className="div2">
            <div>
              <label className="labelcss" htmlFor="eposta">E-Posta</label>
              <input className="inputcss" type="text" placeholder="E-Posta" name="eposta" onChange={(event) => { setEposta(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor="sifre">Şifre</label>
              <input className="inputcss" type="password" placeholder="Şifre" name="sifre" onChange={(event) => { setSifre(event.target.value); }} />
            </div>
          </div> */}
          {/* <div className="div2">
            <div>
                <label htmlFor="true">Published: True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Published: False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div> */}
          
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={createHakemFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateHakem