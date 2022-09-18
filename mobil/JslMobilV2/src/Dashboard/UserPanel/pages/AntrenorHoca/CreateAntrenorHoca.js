import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createAntrenorHoca } from '../../../../redux-new/actions/antrenorHoca';
import { getAllTakim } from '../../../../redux-new/actions/takim';
// import io from "socket.io-client";
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';

// const Takim =  io.connect("localhost:8000/Takim");

function CreateAntrenorHoca(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Antrenör Hoca eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    // const [id, setId] = useState(null);
    const [adi, setAdi] = useState("");
    const [soyadi, setSoyadi] = useState("");
    const [telefon, setTelefon] = useState("");
    const [eposta, setEposta] = useState("");
    const [sifre, setSifre] = useState("");
    const [adres, setAdres] = useState("");
    const [uyruk, setUyruk] = useState("");
    const [resim, setResim] = useState("");
    const [dogumYeri, setDogumYeri] = useState("");
    const [dogumTarihi, setDogumTarihi] = useState("");
    const [takimId, setTakimId] = useState("");
    const [takimAdi, setTakimAdi] = useState("");
    const [published, setPublished] = useState(true);

  const takim = useSelector(state => state.takim);

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllTakim());
    }, [])

    // Fonksiyon tanımlamaları
    const takimFunction = (value) => {
      setTakimAdi(value.adi);
      setTakimId(value.id);
    }

    const createAntrenorHocaFunc = () => {
        // if(adi.length > 0 && soyadi.length > 0 && telefon.length > 0 && eposta.length > 0 && sifre.length > 0 && adres.length > 0 && uyruk.length > 0 && resim.length > 0 && dogumYeri.length > 0 && dogumTarihi.length > 0 && takimId.length > 0 && takimAdi.length > 0){
        // {
          const data = {adi, soyadi, telefon, eposta, sifre, adres, uyruk, resim, dogumYeri, dogumTarihi, takimId, takimAdi, published};
          dispatch(createAntrenorHoca(data));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        }
      // }
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
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor='telefon'>Telefon </label>
              <input className="inputcss" type="number" placeholder="Telefon" name="telefon" onChange={(event) => { setTelefon(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor='adres'>Adres </label>
              <input className="inputcss" type="text" placeholder="Adres yeri" name="adres" onChange={(event) => { setAdres(event.target.value); }} />
            </div>
           
          </div>
          <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor='uyruk'>Uyruk </label>
              <input className="inputcss" type="text" placeholder="Uyruk" name="uyruk" onChange={(event) => { setUyruk(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="dogumYeri">Doğum Yeri</label>
              <input className="inputcss" type="text" placeholder="Doğum Yeri" name="dogumYeri" onChange={(event) => { setDogumYeri(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="dogumTarihi">Doğum Tarihi</label>
              <input className="inputcss" type="date" placeholder="Doğum Tarihi" name="dogumTarihi" onChange={(event) => { setDogumTarihi(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor="takimAdi">Takım Adı</label>
              <DropdownList
                data={takim}
                dataKey='id'
                textField='adi'
                defaultValue={'Takımı seçin'}
                onChange={(value) => { takimFunction(value)}}
              />
            </div>
          </div>

          <div className="div2">
            <div>
              <label className="labelcss" htmlFor="eposta">E-Posta</label>
              <input className="inputcss" type="text" placeholder="E-Posta" name="eposta" onChange={(event) => { setEposta(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor="sifre">Şifre</label>
              <input className="inputcss" type="password" placeholder="Şifre" name="sifre" onChange={(event) => { setSifre(event.target.value); }} />
            </div>
          </div>
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
            <button className='listele-button listele-button-success' onClick={createAntrenorHocaFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateAntrenorHoca