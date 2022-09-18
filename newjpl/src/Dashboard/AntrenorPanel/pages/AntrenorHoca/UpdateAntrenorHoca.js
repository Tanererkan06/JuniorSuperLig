import '../../../App.css';
import '../../../Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateAntrenorHoca, getByIdAntrenorHoca } from '../../../../redux-new/actions/antrenorHoca';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { useEffect, useState } from 'react';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
import AntrenorHocaService from '../../../../services-new/AntrenorHocaService';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';

// const AntrenorHoca =  io.connect("localhost:8000/AntrenorHoca");
// const Takim =  io.connect("localhost:8000/Takim");

function UpdateAntrenorHoca(props) {
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

    // const [takimData, setTakimData] = useState([]);
    const antrenorHoca = useSelector(state => state.antrenorHoca);
    const takim = useSelector(state => state.takim);
    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllTakim());
    }, []);
    
    // Useeffect tanımlamaları
    useEffect(() => {
          AntrenorHocaService.getById(id).then(response => {
            setAdi(response.data.adi);
            setSoyadi(response.data.soyadi);
            setTelefon(response.data.telefon);
            setEposta(response.data.eposta);
            setSifre(response.data.sifre);
            setAdres(response.data.adres);
            setUyruk(response.data.uyruk);
            setResim(response.data.resim);
            setDogumYeri(response.data.dogumyeri);
            let dogumTarihi = moment(response.data.dogumtarihi).toISOString().slice(0,10);            
            setDogumTarihi(dogumTarihi);
            setTakimAdi(response.data.takimadi);
            setPublished(response.data.published);
        })
    }, [dispatch])

    // Fonksiyon tanımlamaları
    const takimFunction = async (value) => {
      await setTakimAdi(value.adi);
      await setTakimId(value.id);
      const data = { takimid: value.id, takimadi: value.adi};
      // //console.log("GITMEDEN KI VEIRLERE BAKAM: ", data);
      dispatch(updateAntrenorHoca({id: props.id, data}));
    }

    const updateAntrenorHocaFunc = () => {
        // if(adi.length > 0 && soyadi.length > 0 && telefon.length > 0 && eposta.length > 0 && adres.length > 0 && uyruk.length > 0 && dogumYeri.length > 0 && dogumTarihi.length > 0 && takimAdi.length > 0){
        // {
          // if(resim !== ''){
          //   const data ={adi, soyadi, telefon, eposta, sifre, adres, uyruk, resim, dogumYeri, dogumTarihi, takimId, takimAdi, published};
          //   dispatch(updateAntrenorHoca({id: props.id, data}));
          // } else {
          //   const data = {adi, soyadi, telefon, eposta, sifre, adres, uyruk, dogumYeri, dogumTarihi, takimId, takimAdi, published};
          //   dispatch(updateAntrenorHoca({id: props.id, data}));
          // }
          const data = {adi, soyadi, telefon, eposta, sifre, adres, uyruk, resim, dogumYeri, dogumTarihi, takimId, takimAdi, published};
          dispatch(updateAntrenorHoca({id: props.id, data}));
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
              <label className="labelcss" htmlFor='resim'>Fotoğraf</label>
              <input type="file" placeholder="Resim" name="resim" accept="image/*" onChange={(event) => { setResim(event.target.value); }} />
          </div>     
        </div>
          <div  className="div2">
              <div>
                <label className="labelcss" htmlFor="adi">Adı</label>
                <input className="inputcss" type="text" placeholder="Adı" name="adi" value={adi} onChange={(event) => { setAdi(event.target.value); }} />
              </div>
              <div>
                <label className="labelcss" htmlFor='soyadi'>Soyadı</label>
                <input className="inputcss" type="text" placeholder="Soyadı" name="soyadi" value={soyadi} onChange={(event) => { setSoyadi(event.target.value); }} />
              </div>
          </div>
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor='telefon'>Telefon</label>
              <input className="inputcss" type="number" placeholder="Telefon" name="telefon" value={telefon} onChange={(event) => { setTelefon(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor='adres'>Adres</label>
              <input className="inputcss" type="text" placeholder="Adres yeri" name="adres" value={adres} onChange={(event) => { setAdres(event.target.value); }} />
            </div>
           
          </div>
          <div className="col-xs-12" >
            <div className="col-xs-4">
              <label className="labelcss" htmlFor='uyruk'>Uyruk</label>
              <input className="inputcss" type="text" placeholder="Uyruk" name="uyruk" value={uyruk} onChange={(event) => { setUyruk(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="dogumYeri">Doğum Yeri</label>
              <input className="inputcss" type="text" placeholder="Doğum Yeri" name="dogumYeri" value={dogumYeri} onChange={(event) => { setDogumYeri(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="dogumTarihi">Doğum Tarihi</label>
              <input className="inputcss" type="date" placeholder="Doğum Tarihi" name="dogumTarihi" value={dogumTarihi} onChange={(event) => { setDogumTarihi(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor="takimAdi">Takım Adı</label>
              <DropdownList
                data={takim}
                dataKey='id'
                textField='adi'
                value={takimAdi}
                onChange={(value) => { takimFunction(value)}}
              />
            </div>
          </div>

          <div className="div2">
            <div>
              <label className="labelcss" htmlFor="eposta">E-Posta</label>
              <input className="inputcss" type="text" placeholder="E-Posta" name="eposta" value={eposta} onChange={(event) => { setEposta(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor="sifre">Şifre</label>
              <input className="inputcss" type="password" placeholder="Şifre" name="sifre" value={sifre} onChange={(event) => { setSifre(event.target.value); }} />
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
            <button className='listele-button listele-button-success' onClick={updateAntrenorHocaFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateAntrenorHoca