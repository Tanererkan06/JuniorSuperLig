import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateTakim } from '../../../../redux-new/actions/takim';
import { getAllAntrenorHoca } from '../../../../redux-new/actions/antrenorHoca';
import { getAllOyunKonum } from '../../../../redux-new/actions/oyunKonum';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import { getAllOyuncuKarti } from '../../../../redux-new/actions/oyuncuKarti';
import moment from 'moment';
import { useEffect, useState } from 'react';
import DropdownList from "react-widgets/DropdownList";
import TakimService from '../../../../services-new/TakimService';
import Multiselect from "react-widgets/Multiselect";
import AuthService from "../../../../services-socket/auth.service";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function UpdateTakim(props) {
    // Değişken tanımlamaları
    const currentUser = AuthService.getCurrentUser();
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
    const [kurulusTarihi, setKurulusTarihi] = useState("");
    const [telefon, setTelefon] = useState("");
    const [adres, setAdres] = useState("");
    const [oyunKonum, setOyunKonum] = useState("");
    const [fax, setFax] = useState("");
    const [website, setWebsite] = useState("");
    const [oyuncular, setOyuncular] = useState([]);
    const [hocaId, setHocaId] = useState("");
    const [hocaAdi, setHocaAdi] = useState("");
    const [lig, setLig] = useState("");
    const [logo, setLogo] = useState("");
    const [konum, setKonum] = useState("");
    const [sehir, setSehir] = useState(currentUser.sehir);
    const [sorumlu, setSorumlu] = useState("");
    const [sorumluIletisim, setSorumluIletisim] = useState("");
    const [eposta, setEposta] = useState("");
    const [sifre, setSifre] = useState("");
    const [published, setPublished] = useState(true);

    const oyunKonumlar = useSelector(state => state.oyunKonum);
    const antrenorHoca = useSelector(state => state.antrenorHoca);
    const ligler = useSelector(state => state.ligler);
    const oyuncuKartlari = useSelector(state => state.oyuncuKarti);
    
    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
        TakimService.getById(id).then(response => {
            let kurulustarihi = moment(response.data.kurulustarihi).toISOString().slice(0,10);
            setAdi(response.data.adi);
            setKurulusTarihi(kurulustarihi);
            setTelefon(response.data.telefon);
            setAdres(response.data.adres);
            setOyunKonum(response.data.oyunkonum);
            setFax(response.data.fax);
            setSehir(response.data.sehir);
            setWebsite(response.data.website);
            setOyuncular(response.data.oyuncular);
            // setHocaId(response.hocaId);
            setLig(response.data.lig);
            setHocaAdi(response.data.hocaadi);
            setLogo(response.data.logo);
            setKonum(response.data.konum);
            setSorumlu(response.data.sorumlu);
            setSorumluIletisim(response.data.sorumluiletisim);
            setEposta(response.data.eposta);
            setSifre(response.data.sifre);
            setPublished(response.data.published);  
        });
    }, [])

    useEffect(() => {
      dispatch(getAllAntrenorHoca());
    }, []);

    useEffect(() => {
      dispatch(getAllOyunKonum());
    }, []);

    useEffect(() => {
      dispatch(getAllLigler());
    }, []);

    useEffect(() => {
      dispatch(getAllOyuncuKarti());
    }, []);


    // Fonksiyon tanımlamaları
    const antrenorHocaFunction = (value) => {
      setHocaId(value.id);
      setHocaAdi(value.adi);
      const data = { hocaid: value.id, hocaadi: value.adi};
      dispatch(updateTakim({id: props.id, data}));
    }

    const oyunKonumFunction = (value) => {
      setOyunKonum(value.adi);
      const data = { oyunkonum: value.adi};
      dispatch(updateTakim({id: props.id, data}));
    }

    const ligFunction = (value) => {
      setLig(value.ligadi);
      const data = { lig: value.ligadi};
      dispatch(updateTakim({id: props.id, data}));
    }

    const oyuncularFunction = (value) => {
      setOyuncular(value);
      const data = { oyuncular: value};
      dispatch(updateTakim({id: props.id, data}));
    }

    const updateTakimFunc = () => {
      // if(adi.length > 0 && kurulusTarihi.length > 0 && telefon.length > 0 && adres.length > 0 && oyunKonum.length > 0 && fax.length > 0 && website.length > 0 && oyuncular.length > 0 && hocaId.length > 0 && logo.length > 0 && konum.length > 0 && sorumlu.length > 0 && sorumluIletisim.length > 0 && eposta.length > 0)
      //   {
        const data = {adi, kurulustarihi: kurulusTarihi, telefon, adres, oyunKonum, fax, website, oyuncular, hocaId, hocaAdi, logo, sehir, konum, sorumlu, sorumluIletisim, eposta, sifre, published}
        // //console.log("GONDERILEN VERI: ", data);
          dispatch(updateTakim({id: props.id, data}));
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
              {/* <label className="labelcss" htmlFor='id'>ID: </label>
              <input className="inputcss" type="text" placeholder='id' name="id" onChange={(event) => { setId(event.target.value); }} /> */}
              <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="adi">Adı</label>
                  <input className="inputcss" type="text" placeholder="Adı" name="name" value={adi} onChange={(event) => { setAdi(event.target.value); }} />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="kurulusTarihi">Kuruluş Tarihi</label>
                  <input className="inputcss" type="date" placeholder="Kuruluş tarihi" value={kurulusTarihi} name="kurulusTarihi" onChange={(event) => { setKurulusTarihi(event.target.value); }} />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="telefon">Telefon</label>
                  <input className="inputcss" type="number" placeholder="Telefon" name="telefon" value={telefon} onChange={(event) => { setTelefon(event.target.value); }} />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="adres">Adres</label>
                  <input className="inputcss" type="text" placeholder="Adres" name="adres" value={adres} onChange={(event) => { setAdres(event.target.value); }} />
                </div>
              </div>
              <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="oyunKonum">Oyun Konum</label>
                  {/* <input className="inputcss" type="text" placeholder="Oyun konum" name="oyunKonum" value={oyunKonum} onChange={(event) => { setOyunKonum(event.target.value); }} /> */}
                  <DropdownList
                    data={oyunKonumlar}
                    dataKey='id'
                    textField='adi'
                    value={oyunKonum}
                    onChange={(value) => { oyunKonumFunction(value)}}
                  />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="fax">Fax</label>
                  <input className="inputcss" type="number" placeholder="Fax" name="fax" value={fax} onChange={(event) => { setFax(event.target.value); }} />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="website">Website</label>
                  <input className="inputcss" type="text" placeholder="Website" name="website" value={website} onChange={(event) => { setWebsite(event.target.value); }} />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="oyuncular">Oyuncular</label>
                  {/* <input className="inputcss" type="number" placeholder="Oyuncular" name="oyuncular" value={oyuncular} onChange={(event) => { setOyuncular(event.target.value); }} /> */}
                  <Multiselect
                  data={oyuncuKartlari}
                  dataKey='id'
                  textField="adi"
                  value={oyuncular}
                  onChange={(value) => { oyuncularFunction(value)}}
                />
                </div>
              </div>
              <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
                {/* <div className="col-xs-3">
                  <label className="labelcss" htmlFor="hocaId">Hoca id</label>
                  <input className="inputcss" type="number" placeholder="Hoca id" name="hocaId" onChange={(event) => { setHocaId(event.target.value); }} />
                </div> */}
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="hocaAdi">Hoca Adı</label>
                  {/* <input className="inputcss" type="text" placeholder="Hoca adı" name="hocaAdi" onChange={(event) => { setHocaAdi(event.target.value); }} /> */}
                  <DropdownList
                    data={antrenorHoca}
                    dataKey='id'
                    textField='adi'
                    value={hocaAdi}
                    onChange={(value) => { antrenorHocaFunction(value)}}
                  />
                </div>
                {/* <div className="col-xs-3">
                  <label className="labelcss" htmlFor="logo">Logo</label>
                  <input className="inputcss" type="file" placeholder="Logo" name="logo" accept="image/*" onChange={(event) => { setLogo(event.target.value); }} />
                </div> */}
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="konum">Konum</label>
                  <input className="inputcss" type="text" placeholder="Konum" value={konum} name="konum" onChange={(event) => { setKonum(event.target.value); }} />
                </div>
              </div>
              <div>
              <label className="labelcss" htmlFor="lig">Lig</label>
              <DropdownList
                    data={ligler}
                    dataKey='id'
                    textField='ligadi'
                    value={lig}
                    onChange={(value) => { ligFunction(value)}}
                  />
              </div>
              <div className="div2">
                <div>
                  <label className="labelcss" htmlFor="sorumlu">Sorumlu</label>
                  <input className="inputcss" type="text" placeholder="Sorumlu" value={sorumlu} name="sorumlu" onChange={(event) => { setSorumlu(event.target.value); }} />
                </div>
                <div>
                  <label className="labelcss" htmlFor="sorumluIletisim">Sorumlu İletişim</label>
                  <input className="inputcss" type="number" placeholder="Sorumlu iletişim" value={sorumluIletisim} name="sorumluIletisim" onChange={(event) => { setSorumluIletisim(event.target.value); }} />
                </div>
              </div>
              <div className="div2">
                <div>
                  <label className="labelcss" htmlFor="eposta">E-posta</label>
                  <input className="inputcss" type="text" placeholder="E-posta" name="eposta" value={eposta} onChange={(event) => { setEposta(event.target.value); }} />
                </div>
                <div>
                  <label className="labelcss" htmlFor="sifre">Şifre</label>
                  <input className="inputcss" type="password" placeholder="Şifre" name="sifre" value={sifre} onChange={(event) => { setSifre(event.target.value); }} />
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
            <button className='listele-button listele-button-success' onClick={updateTakimFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateTakim