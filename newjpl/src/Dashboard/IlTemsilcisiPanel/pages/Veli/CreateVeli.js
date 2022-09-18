import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createVeli } from '../../../../redux-new/actions/veli';
import { getAllOyuncuKarti } from '../../../../redux-new/actions/oyuncuKarti';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
// import VeliService from '../../../services-new/VeliService';

function CreateVeli(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Veli eklendi!', {
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
    const [resim, setResim] = useState("");
    const [telefon, setTelefon] = useState("");
    // const [eposta, setEposta] = useState("");
    // const [sifre, setSifre] = useState("");
    const [oyuncuId, setOyuncuId] = useState("");
    const [oyuncuAdi, setOyuncuAdi] = useState("");
    const [adres, setAdres] = useState("");
    const [uyruk, setUyruk] = useState("");
    const [published, setPublished] = useState(true);

    const oyuncuKarti = useSelector(state => state.oyuncuKarti);

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllOyuncuKarti());
    }, []);

    // Fonksiyon tanımlamaları
    const oyuncuFunction = (value) => {
      setOyuncuId(value.id);
      setOyuncuAdi(value.adi);
    }

    const createVeliFunc = () => {
          const data = {adi, soyadi, telefon, resim, oyuncuId, oyuncuAdi, adres, uyruk, published}
          dispatch(createVeli(data));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
    }

  return (
    <>
        <form className="formcss">
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor="soyadi">Resim</label>
              <input className="inputcss" type="file" placeholder="Resim" name="resim" accept="image/*" onChange={(event) => { setResim(event.target.value); }} />
            </div>
          </div>
          <div className="col-xs-12" >
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="adi">Adı</label>
              <input className="inputcss" type="text" placeholder="Adı" name="adi" onChange={(event) => { setAdi(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="soyadi">Soyadı</label>
              <input className="inputcss" type="text" placeholder="Soyadı" name="soyadi" onChange={(event) => { setSoyadi(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="telefon">Telefon</label>
              <input className="inputcss" type="number" placeholder="Telefon" name="telefon" onChange={(event) => { setTelefon(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="adres">Adres</label>
              <input className="inputcss" type="text" placeholder="Adres" name="adres" onChange={(event) => { setAdres(event.target.value); }} />
            </div>
          </div>
            <div className="col-xs-12" >
              <div className="col-xs-4">
                <label className="labelcss" htmlFor="uyruk">Uyruk</label>
                <input className="inputcss" type="text" placeholder="Uyruk" name="uyruk" onChange={(event) => { setUyruk(event.target.value); }} />
              </div>
              {/* <div className="col-xs-4">
                <label className="labelcss" htmlFor="oyuncuId">Oyuncu id:</label>
                <input className="inputcss" type="number" placeholder="Oyuncu id" name="oyuncuId" onChange={(event) => { setOyuncuId(event.target.value); }} />
              </div> */}
              <div className="col-xs-4">
                <label className="labelcss" htmlFor="oyuncuAdi">Oyuncu Adı</label>
                <DropdownList
                data={oyuncuKarti}
                dataKey='id'
                textField='adi'
                defaultValue={'Oyuncu seçin'}
                onChange={(value) => { oyuncuFunction(value)}}
              />
              </div>
            </div>
            {/* <div className="div2">
              <div>
                <label className="labelcss" htmlFor="eposta">E-posta</label>
                <input className="inputcss" type="text" placeholder="E-posta" name="eposta" onChange={(event) => { setEposta(event.target.value); }} />
              </div>
              <div>
                <label className="labelcss" htmlFor="sifre">Şifre</label>
                <input className="inputcss" type="password" placeholder="Şifre" name="sifre" onChange={(event) => { setSifre(event.target.value); }} />
              </div>
            </div> */}
          {/* <div className="div2">
            <div>
                <label className="labelcss" htmlFor="true">Published: True</label>
                <input className="inputcss" type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label className="labelcss" htmlFor="false">Published: False</label>
                <input className="inputcss" type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div> */}
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={createVeliFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateVeli