import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createPuanDurumu } from '../../../../redux-new/actions/puanDurumu';
// import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';

function CreatePuanDurumu(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Puan Durumu eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    // const [id, setId] = useState(null);
    const [sezon, setSezon] = useState("");
    const [sehir, setSehir] = useState("");
    const [lig, setLig] = useState("");
    const [ligAdi, setLigAdi] = useState("");
    const [takimId, setTakimId] = useState("");
    const [takimAdi, setTakimAdi] = useState("");
    const [oynananOyun, setOynananOyun] = useState("");
    const [galibiyet, setGalibiyet] = useState("");
    const [maglubiyet, setMaglubiyet] = useState("");
    const [beraberlik, setBeraberlik] = useState("");
    const [attigiGol, setAttigiGol] = useState("");
    const [yedigiGol, setYedigiGol] = useState("");
    const [averaj, setAveraj] = useState("");
    const [puan, setPuan] = useState("");
    const [published, setPublished] = useState(true);

  const takim = useSelector(state => state.takim);

    // Useeffect tanımlamaları
    // useEffect(() => {
    //   dispatch(getAllTakim());
    // }, [])

    // Fonksiyon tanımlamaları
    // const takimFunction = (value) => {
    //   setTakimAdi(value.adi);
    //   setTakimId(value.id);
    // }

    const createPuanDurumuFunc = () => {
        // if(adi.length > 0 && soyadi.length > 0 && telefon.length > 0 && eposta.length > 0 && sifre.length > 0 && adres.length > 0 && uyruk.length > 0 && resim.length > 0 && dogumYeri.length > 0 && dogumTarihi.length > 0 && takimId.length > 0 && takimAdi.length > 0){
        // {
          const data = {sezon, lig, sehir, ligadi: ligAdi, takimid: takimId, takimadi: takimAdi, oynananoyun: oynananOyun, galibiyet, malubiyet: maglubiyet, beraberlik, attigigol: attigiGol, yedigigol: yedigiGol, avaraj: averaj, puan, published};
          dispatch(createPuanDurumu(data));
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
            <div>
              <label className="labelcss" htmlFor='id'>Şehir</label>
              <input type="text" placeholder="Şehir" name="sehir" onChange={(event) => { setSehir(event.target.value); }} />
            </div>
          </div>
        <div className="col-xs-12">
          <div className="col-xs-3">
            <label className="labelcss" htmlFor='id'>Sezon</label>
            <input type="number" placeholder="Sezon" name="sezon" onChange={(event) => { setSezon(event.target.value); }} />
          </div>
          <div className="col-xs-3">
            <label className="labelcss" htmlFor='id'>Lig</label>
            <input type="number" placeholder="Lig" name="sezon" onChange={(event) => { setLig(event.target.value); }} />
          </div>
          <div className="col-xs-3">
            <label className="labelcss" htmlFor='id'>Lig Adı</label>
            <input type="text" placeholder="Lig Adı" name="sezon" onChange={(event) => { setLigAdi(event.target.value); }} />
          </div>
          <div className="col-xs-3">
            <label className="labelcss" htmlFor='id'>Takım Adı</label>
            <input type="text" placeholder="Takım Adı" name="takimadi" onChange={(event) => { setTakimAdi(event.target.value); }} />
          </div>
        </div>
          <div className="col-xs-12">
              <div className='col-xs-3'>
                <label className="labelcss" htmlFor="adi">Oynanan Oyun</label>
                <input type="number" className="inputcss" placeholder="Oynanan Oyun" name="oynananoyun" onChange={(event) => { setOynananOyun(event.target.value); }} />
              </div>
              <div className='col-xs-3'>
                <label className="labelcss" htmlFor='soyadi'>Galibiyet</label>
                <input className="inputcss"type="number" placeholder="Galibiyet" name="Galibiyet" onChange={(event) => { setGalibiyet(event.target.value); }} />
              </div>
              <div className='col-xs-3'>
                <label className="labelcss" htmlFor='soyadi'>Mağlubiyet</label>
                <input className="inputcss" type="number" placeholder="Mağlubiyet" name="maglubiyet" onChange={(event) => { setMaglubiyet(event.target.value); }} />
              </div>
              <div className='col-xs-3'>
                <label className="labelcss" htmlFor='soyadi'>Beraberlik</label>
                <input className="inputcss" type="number" placeholder="Beraberlik" name="beraberlik" onChange={(event) => { setBeraberlik(event.target.value); }} />
              </div>
          </div>
          <div className="col-xs-12">
            <div className='col-xs-3'>
              <label className="labelcss" htmlFor='telefon'>Attığı Gol</label>
              <input className="inputcss" type="number" placeholder="Attığı Gol" name="telefon" onChange={(event) => { setAttigiGol(event.target.value); }} />
            </div>      
            <div className='col-xs-3'>
              <label className="labelcss" htmlFor='telefon'>Yediği Gol</label>
              <input className="inputcss" type="number" placeholder="Yediği Gol" name="telefon" onChange={(event) => { setYedigiGol(event.target.value); }} />
            </div>      
            <div className='col-xs-3'>
              <label className="labelcss" htmlFor='telefon'>Averaj</label>
              <input className="inputcss" type="number" placeholder="Averaj" name="telefon" onChange={(event) => { setAveraj(event.target.value); }} />
            </div>      
            <div className='col-xs-3'>
              <label className="labelcss" htmlFor='telefon'>Puan</label>
              <input className="inputcss" type="number" placeholder="Puan" name="telefon" onChange={(event) => { setPuan(event.target.value); }} />
            </div>      
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Published: True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Published: False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div>
          
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            <button className='listele-button listele-button-success' onClick={createPuanDurumuFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreatePuanDurumu