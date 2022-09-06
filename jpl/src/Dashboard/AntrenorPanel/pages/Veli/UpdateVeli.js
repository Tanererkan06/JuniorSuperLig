import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateVeli } from '../../../../redux-new/actions/veli';
import { getAllOyuncuKarti } from '../../../../redux-new/actions/oyuncuKarti';
import { useEffect, useState } from 'react';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VeliService from '../../../../services-new/VeliService';
import { getAllOyun } from '../../../../redux-new/actions/oyun';


function UpdateVeli(props) {
    // Değişken tanımlamaları
    const notify = () => toast.success('Veriler güncellendi!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });

    const id = props.id;
    const [adi, setAdi] = useState("");
    const [soyadi, setSoyadi] = useState("");
    const [resim, setResim] = useState("");
    const [telefon, setTelefon] = useState("");
    const [eposta, setEposta] = useState("");
    const [sifre, setSifre] = useState("");
    const [oyuncuId, setOyuncuId] = useState("");
    const [oyuncuAdi, setOyuncuAdi] = useState("");
    const [adres, setAdres] = useState("");
    const [uyruk, setUyruk] = useState("");
    const [published, setPublished] = useState(true);

    const oyuncuKarti = useSelector(state => state.oyuncuKarti);
    
    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
        VeliService.getById(id).then(response =>{
            setAdi(response.data.adi);
            setSoyadi(response.data.soyadi);
            setResim(response.data.resim);
            setTelefon(response.data.telefon);
            setEposta(response.data.eposta);
            setSifre(response.data.sifre);
            setOyuncuId(response.data.oyuncuid);
            setOyuncuAdi(response.data.oyuncuadi);
            setAdres(response.data.adres);
            setUyruk(response.data.uyruk);
            setPublished(response.data.published);
        });
    }, [])

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllOyuncuKarti());
    }, []);

    // Fonksiyon tanımlamaları
    const oyuncuFunction = (value) => {
      setOyuncuId(value.id);
      setOyuncuAdi(value.adi);
      const data = { oyuncuid: value.id, oyuncuadi: value.adi};
      dispatch(updateVeli({id: props.id, data}));
    }

    const updateVeliFunc = () => {
      // console.log("VERILER: ", adi, soyadi, telefon, eposta, oyuncuAdi, adres, uyruk)
      // if(adi.length > 0 && soyadi.length > 0 && telefon.length > 0 && eposta.length > 0 && oyuncuAdi.length > 0 && adres.length > 0 && uyruk.length > 0)
      //   {
        const data = {adi, soyadi, telefon, eposta, resim, oyuncuid: oyuncuId, oyuncuadi: oyuncuAdi, sifre, adres, uyruk, published};
          dispatch(updateVeli({id: props.id, data}));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        // }
        // else {
        //   alert("Lütfen tüm alanları doldurunuz.");
        // }      
    }

  return (
    <>
        <form className="formcss">
            {/* <label className="labelcss" htmlFor='id'>ID: </label> */}
            {/* <input className="inputcss" type="text" placeholder='id' name="id" onChange={(event) => { setId(event.target.value); }} /> */}
          <div className="div2">
            {/* <div>
              <label className="labelcss" htmlFor="soyadi">Resim</label>
              <input className="inputcss" type="file" placeholder="Resim" name="resim" accept="image/*" onChange={(event) => { setResim(event.target.value); }} />
            </div> */}
          </div>
          <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="adi">Adı</label>
              <input className="inputcss" type="text" placeholder="Adı" value={adi} name="adi" onChange={(event) => { setAdi(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="soyadi">Soyadı</label>
              <input className="inputcss" type="text" placeholder="Soyadı" value={soyadi} name="soyadi" onChange={(event) => { setSoyadi(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="telefon">Telefon</label>
              <input className="inputcss" type="number" placeholder="Telefon" value={telefon} name="telefon" onChange={(event) => { setTelefon(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="adres">Adres</label>
              <input className="inputcss" type="text" placeholder="Adres" name="adres" value={adres} onChange={(event) => { setAdres(event.target.value); }} />
            </div>
          </div>
            <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
              <div className="col-xs-4">
                <label className="labelcss" htmlFor="uyruk">Uyruk</label>
                <input className="inputcss" type="text" placeholder="Uyruk" name="uyruk" value={uyruk} onChange={(event) => { setUyruk(event.target.value); }} />
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
                value={oyuncuAdi}
                onChange={(value) => { oyuncuFunction(value)}}
              />
              </div>
            </div>
            <div className="div2">
              <div>
                <label className="labelcss" htmlFor="eposta">E-posta</label>
                <input className="inputcss" type="text" placeholder="E-posta" value={eposta} name="eposta" onChange={(event) => { setEposta(event.target.value); }} />
              </div>
              <div>
                <label className="labelcss" htmlFor="sifre">Şifre</label>
                <input className="inputcss" type="password" placeholder="Şifre" value={sifre} name="sifre" onChange={(event) => { setSifre(event.target.value); }} />
              </div>
            </div>
          <div className="div2">
            <div>
                <label className="labelcss" htmlFor="true">Published: True</label>
                <input className="inputcss" type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label className="labelcss" htmlFor="false">Published: False</label>
                <input className="inputcss" type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div>
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={updateVeliFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateVeli