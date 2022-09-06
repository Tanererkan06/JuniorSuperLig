import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createTakim } from '../../../../redux-new/actions/takim';
import { getAllAntrenorHoca } from '../../../../redux-new/actions/antrenorHoca';
import { getAllOyunKonum } from '../../../../redux-new/actions/oyunKonum';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import { getAllOyuncuKarti } from '../../../../redux-new/actions/oyuncuKarti';
import DropdownList from "react-widgets/DropdownList";
import Multiselect from "react-widgets/Multiselect";
import { toast } from 'react-toastify';

function CreateTakim(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Takim eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

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
    const [logo, setLogo] = useState("");
    const [konum, setKonum] = useState("");
    const [sorumlu, setSorumlu] = useState("");
    const [sorumluIletisim, setSorumluIletisim] = useState("");
    const [lig, setLig] = useState("");
    const [eposta, setEposta] = useState("");
    const [sifre, setSifre] = useState("");
    const [published, setPublished] = useState(true);

    const antrenorHoca = useSelector(state => state.antrenorHoca)
    const oyunKonumlar = useSelector(state => state.oyunKonum)
    const ligler = useSelector(state => state.ligler)
    const oyuncuKartlari = useSelector(state => state.oyuncuKarti)

    // Useeffect tanımlamaları
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
    }

    const oyunKonumFunction = (value) => {
      setOyunKonum(value.adi);
    }

    const ligFunction = (value) => {
      setLig(value.ligadi);
    }

    const oyuncularFunction = (value) => {
      setOyuncular(value);
    }

    const createTakimFunc = () => {
          const data = { adi, kurulusTarihi, telefon, adres, oyunKonum, fax, website, oyuncular, hocaId, hocaAdi, logo, konum, sorumlu, sorumluIletisim, lig, eposta, sifre, published }
          dispatch(createTakim(data));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
    }

  return (
    <>
        <form className="formcss">
              {/* <label className="labelcss" htmlFor='id'>ID: </label>
              <input className="inputcss" type="text" placeholder='id' name="id" onChange={(event) => { setId(event.target.value); }} /> */}
              <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="adi">Adı</label>
                  <input className="inputcss" type="text" placeholder="Adı" name="name" onChange={(event) => { setAdi(event.target.value); }} />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="kurulusTarihi">Kuruluş Tarihi</label>
                  <input className="inputcss" type="date" placeholder="Kuruluş tarihi" name="kurulusTarihi" onChange={(event) => { setKurulusTarihi(event.target.value); }} />
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
              <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="oyunKonum">Oyun Konum</label>
                  {/* <input className="inputcss" type="text" placeholder="Oyun konum" name="oyunKonum" onChange={(event) => { setOyunKonum(event.target.value); }} /> */}
                  <DropdownList
                    data={oyunKonumlar}
                    dataKey='id'
                    textField='adi'
                    defaultValue={'Oyun Konum seçin'}
                    onChange={(value) => { oyunKonumFunction(value)}}
                  />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="fax">Fax</label>
                  <input className="inputcss" type="number" placeholder="Fax" name="fax" onChange={(event) => { setFax(event.target.value); }} />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="website">Website</label>
                  <input className="inputcss" type="text" placeholder="Website" name="website" onChange={(event) => { setWebsite(event.target.value); }} />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="oyuncular">Oyuncular</label>
                  {/* <input className="inputcss" type="number" placeholder="Oyuncular" name="oyuncular" onChange={(event) => { setOyuncular(event.target.value); }} /> */}
                  <Multiselect
                  data={oyuncuKartlari}
                  dataKey="id"
                  textField="adi"
                  // defaultValue={'Oyuncu seçin'}
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
                    defaultValue={'Antrenör Hoca seçin'}
                    onChange={(value) => { antrenorHocaFunction(value)}}
                  />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="logo">Logo</label>
                  <input className="inputcss" type="file" placeholder="Logo" name="logo" accept="image/*" onChange={(event) => { setLogo(event.target.value); }} />
                </div>
                <div className="col-xs-3">
                  <label className="labelcss" htmlFor="konum">Konum</label>
                  <input className="inputcss" type="text" placeholder="Konum" name="konum" onChange={(event) => { setKonum(event.target.value); }} />
                </div>
              </div>
              <div>
                <label className="labelcss" htmlFor="lig">Lig</label>
                <DropdownList
                    data={ligler}
                    dataKey='id'
                    textField='ligadi'
                    defaultValue={'Lig seçin'}
                    onChange={(value) => { ligFunction(value)}}
                  />
              </div>
              <div className="div2">
                <div>
                  <label className="labelcss" htmlFor="sorumlu">Sorumlu</label>
                  <input className="inputcss" type="text" placeholder="Sorumlu" name="sorumlu" onChange={(event) => { setSorumlu(event.target.value); }} />
                </div>
                <div>
                  <label className="labelcss" htmlFor="sorumluIletisim">Sorumlu İletişim</label>
                  <input className="inputcss" type="number" placeholder="Sorumlu iletişim" name="sorumluIletisim" onChange={(event) => { setSorumluIletisim(event.target.value); }} />
                </div>
              </div>
              <div className="div2">
                <div>
                  <label className="labelcss" htmlFor="eposta">E-posta</label>
                  <input className="inputcss" type="text" placeholder="E-posta" name="eposta" onChange={(event) => { setEposta(event.target.value); }} />
                </div>
                <div>
                  <label className="labelcss" htmlFor="sifre">Şifre</label>
                  <input className="inputcss" type="password" placeholder="Şifre" name="sifre" onChange={(event) => { setSifre(event.target.value); }} />
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
            <button className='listele-button listele-button-success' onClick={createTakimFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateTakim