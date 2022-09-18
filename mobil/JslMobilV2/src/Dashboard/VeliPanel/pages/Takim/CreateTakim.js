import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createOyuncuKarti } from '../../../../redux-new/actions/oyuncuKarti';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
import { getAllAntrenorHoca } from '../../../../redux-new/actions/antrenorHoca';
import { getAllTakim, updateTakim } from '../../../../redux-new/actions/takim';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import { getAllVeli } from '../../../../redux-new/actions/veli';
import VeliService from '../../../../services-new/VeliService';
import TakimService from '../../../../services-new/TakimService';
import AuthService from "../../../../services-socket/auth.service";

function CreateTakim(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();
  const currentUser = AuthService.getCurrentUser();

  const notify = () => toast.success('Oyuncu eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    const notify2 = () => toast.error('Girilen bilgiler hatalı yada boş olduğu için oyuncu eklenemedi!', {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });

    const notify3 = () => toast.warning('Girilen bilgiler hatalı yada boş, lütfen bilgileri kontrol ediniz!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });

    const notify4 = () => toast.success('Girilen bilgiler doğru, işleminize devam edebilirsiniz.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });

    const notify5 = () => toast.warning('Yaş kontrolü başarısız, lütfen yaşınıza uygun lige kayıt olunuz.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });

    const [kimlikNo, setKimlikNo] = useState(0);
    const [adi, setAdi] = useState("");
    const [soyadi, setSoyadi] = useState("");
    const [dogumYeri, setDogumYeri] = useState("");
    const [dogumTarihi, setDogumTarihi] = useState("");
    const [boy, setBoy] = useState("");
    const [kilo, setKilo] = useState("");
    const [pozisyon, setPozisyon] = useState("");
    const [takimId, setTakimId] = useState("");
    const [takimAdi, setTakimAdi] = useState("");
    const [lig, setLig] = useState("");
    const [formaNo, setFormaNo] = useState(0);
    const [oynadigiMacSayisi, setOynadigiMacSayisi] = useState(0);
    const [atilanGolSayisi, setAtilanGolSayisi] = useState(0);
    const [asist, setAsist] = useState(0);
    const [resim, setResim] = useState("");
    const [oncekiTakimi, setOncekiTakimi] = useState(null);
    const [sariKart, setSariKart] = useState(0);
    const [kirmiziKart, setKirmiziKart] = useState(0);
    const [hocaId, setHocaId] = useState("");
    const [hocaAdi, setHocaAdi] = useState("");
    const [veli, setVeli] = useState("");
    const [telefon, setTelefon] = useState("");
    const [adres, setAdres] = useState("");
    const [sehir, setSehir] = useState(currentUser.sehir);
    // const [eposta, setEposta] = useState("");
    // const [sifre, setSifre] = useState("");
    const [uyruk, setUyruk] = useState("");
    const [published, setPublished] = useState(true);

    const [show, setShow] = useState(false);

    const ligler = useSelector(state => state.ligler);
    const takim = useSelector(state => state.takim);
    const antrenorHoca = useSelector(state => state.antrenorHoca);
    const veliler = useSelector(state => state.veli);

    const id = props.id;

    useEffect(() => {
      TakimService.getById(id).then(response => {
        setTakimId(response.data.id);
        setTakimAdi(response.data.adi);
        setHocaAdi(response.data.hocaadi);
        setLig(response.data.lig);
        setSehir(response.data.sehir);
      })
    })

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllLigler());
    }, []);

    
    useEffect(() => {
      dispatch(getAllTakim());
    }, []);

    useEffect(() => {
      dispatch(getAllAntrenorHoca());
    }, []);

    useEffect(() => {
      dispatch(getAllVeli());
    }, []);

    // Fonksiyon tanımlamaları
    const liglerFunction = (value) => {
      setLig(value.ligadi);
    }

    const takimFunction = (value) => {
      setTakimAdi(value.adi);
      setTakimId(value.id);
    }

    const antrenorHocaFunction = (value) => {
      setHocaAdi(value.adi);
      setHocaId(value.id);
    }

    const veliFunction = (value) => {
      setVeli(value.adi);
    }

    const checkAge = (value) => {
      const tarih = new Date(dogumTarihi);
      let year = tarih.getFullYear();
    }

    const createOyuncuKartiFunc = () => {
      if(show === false) {
        if(checkAge(dogumTarihi) === false) {
          notify5();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 7500);
        }
        notify2();
        setTimeout(() => {
          props.close();
          window.location.reload(false);
        }, 7500);
      }
      else {
        const oyuncularArray = [];
        const oyuncuData = {kimlikNo, adi, soyadi, dogumYeri, dogumTarihi, boy, kilo, pozisyon, takimId, takimAdi, lig, formaNo, oynadigiMacSayisi, atilanGolSayisi, asist, resim, oncekiTakimi, sariKart, kirmiziKart, hocaId, hocaAdi, veli, telefon, adres, uyruk, published}

        TakimService.update(props.id).then(response => {
          //console.log("UPDATE GIRDI")
           TakimService.getById(props.id).then(response => {
              //console.log("GET BY ID ILE VERI CEKTIM:" , response.data.oyuncular);
              oyuncularArray.push(response.data.oyuncular);
           })
            const adi = response.data.adi;
            const kurulustarihi= response.data.kurulustarihi;
            const telefon = response.data.telefon;
            const adres = response.data.adres;
            const oyunkonum = response.data.oyunkonum;
            const fax = response.data.fax;
            const website = response.data.website;
            oyuncularArray.push(oyuncuData);
            const oyuncular = oyuncularArray;
            const hocaid = response.data.hocaid;
            const hocaadi = response.data.hocaadi;
            const veli = response.data.veli;
            const logo = response.data.logo;
            const konum = response.data.konum;
            const eposta = response.data.eposta;
            const lig = response.data.lig;
            const sehir = response.data.sehir;
            const published = response.data.published;  
            const data = {adi, kurulustarihi, telefon, adres, oyunkonum, fax, website, oyuncular, hocaid, hocaadi, veli, logo, konum, eposta, lig, sehir, published};
          dispatch(updateTakim({id, data}));
        })
        notify();
        setTimeout(() => {
          props.close();
          window.location.reload(false);
        }, 4500);
      }  
    }

    const checkPerson = (e, kimlikNo, adi, soyadi, dogumTarihi) => {
      e.preventDefault();
      const tarih = new Date(dogumTarihi);
      let year = tarih.getFullYear();
      // //console.log("DOGUM TARIHI SON HAL: ", year);
      const data = { TCKimlikNo: kimlikNo, Ad: adi, Soyad: soyadi, DogumYili: year}
      VeliService.isRealPerson(data).then(response => {
        if(response.data.TCKimlikNoDogrulaResult === true)
        {
          setShow(true);
          notify4();
        }
        else {
          notify3();
        }
      })
    }

  return (
    <>
        <form className="formcss">
          {
            !show ? 
            <>
            <div  className="div2">
              <div>
                <label className="labelcss" htmlFor="kimlikNo">Kimlik No</label>
                <input className="inputcss" type="number" placeholder="Kimlik no" name="kimlikNo" onChange={(event) => { setKimlikNo(event.target.value); }} />
              </div>
              <div>
              {/* <label className="labelcss" htmlFor="kimlikNo">Doğum Tarihi</label> */}
              <label className="labelcss" htmlFor="kimlikNo">Doğum Yılı</label>
              <input className="inputcss" type="date" placeholder="Doğum tarihi" name="dogumTarihi" onChange={(event) => { setDogumTarihi(event.target.value); }} />
              {/* <input className="inputcss" type="text" placeholder="Doğum Yılı" name="dogumTarihi" onChange={(event) => { setDogumTarihi(event.target.value); }} /> */}
            </div>
          </div>
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor='id'>Adı </label>
              <input className="inputcss" type="text" placeholder="Adı" name="adi" onChange={(event) => { setAdi(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor="kimlikNo">Soyadı</label>
              <input className="inputcss" type="text" placeholder="Soyadı" name="soyadi" onChange={(event) => { setSoyadi(event.target.value); }} />
            </div>
          </div>
          <button onClick={(e) => checkPerson(e, kimlikNo, adi, soyadi, dogumTarihi)}>TC Kimlik No Doğrula</button>
          </>
            : ''
          }
          {
            show ? (
              <>
              <div className="div2">
                  <label className="labelcss" htmlFor='id'>Fotograf </label>
                  <input  type="file" placeholder="Resim" name="resim" accept="image/*" onChange={(event) => { setResim(event.target.value); }} />
              </div>
              <div className="div2">
              <div>
                <label className="labelcss" htmlFor='id'>Uyruk </label>
                <input className="inputcss" type="text" placeholder="Uyruk" name="uyruk" onChange={(event) => { setUyruk(event.target.value); }} />
              </div>
              <div>
              <label className="labelcss" htmlFor='id'>Doğum Yeri </label>
              <input className="inputcss" type="text" placeholder="Doğum yeri" name="dogumYeri" onChange={(event) => { setDogumYeri(event.target.value); }} />
            </div>
              </div>
                 <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
                    <div className="col-xs-3">
                      <label className="labelcss" htmlFor='id'>Boy </label>
                      <input className="inputcss" type="number" placeholder="Boy" name="boy" onChange={(event) => { setBoy(event.target.value); }} />
                    </div>
                    <div className="col-xs-3">
                      <label className="labelcss" htmlFor="kimlikNo">Kilo</label>
                      <input className="inputcss" type="number" placeholder="Kilo" name="kilo" onChange={(event) => { setKilo(event.target.value); }} />
                    </div>
                    <div className="col-xs-3">
                      <label className="labelcss" htmlFor="kimlikNo">Pozisyon</label>
                      <input className="inputcss" type="text" placeholder="Pozisyon" name="pozisyon" onChange={(event) => { setPozisyon(event.target.value); }} />
                    </div>
                    {/* <div className="col-xs-3">
                      <label className="labelcss" htmlFor="kimlikNo">Forma No</label>
                      <input className="inputcss" type="number" placeholder="Forma no" name="formaNo" onChange={(event) => { setFormaNo(event.target.value); }} />
                    </div> */}


                  </div>
                  <div className="div2">
                    <div>
                      <label className="labelcss" htmlFor="kimlikNo">Telefon</label>
                      <input className="inputcss" type="number" placeholder="Telefon" name="telefon" onChange={(event) => { setTelefon(event.target.value); }} />
                    </div>
                    <div>
                      <label className="labelcss" htmlFor="kimlikNo">Adres</label>
                      <input className="inputcss" type="text" placeholder="Adres" name="adres" onChange={(event) => { setAdres(event.target.value); }} />
                    </div>
                  </div>
                  <div className="div2">
                    <div>
                      <label className="labelcss" htmlFor='id'>Şehir</label>
                      <input className="inputcss" type="text" placeholder="Şehir" name="sehir" value={sehir} readOnly />
                    </div>
                  </div>
                  <div className="div2">
                    <div>
                      <label className="labelcss" htmlFor='id'>Lig</label>
                      <input className="inputcss" type="text" placeholder="Lig" name="lig" value={lig} readOnly />
                      {/* <DropdownList
                        data={ligler}
                        dataKey='id'
                        textField='ligadi'
                        defaultValue={'Lig seçin'}
                        onChange={(value) => { liglerFunction(value)}}
                      /> */}
                    </div>
                    <div>
                      <label className="labelcss" htmlFor="kimlikNo">Önceki Takımı</label>
                      <input className="inputcss" type="text" placeholder="Önceki takımı" name="oncekiTakimi" onChange={(event) => { setOncekiTakimi(event.target.value); }} />
                    </div>
                  </div>
                  <div className="div2">
                    {/* <div>
                      <label className="labelcss" htmlFor='id'>Takım</label>
                      <input className="inputcss" type="number" placeholder="Takim id" name="takimId" onChange={(event) => { setTakimId(event.target.value); }} />
                    </div> */}
                    <div>
                      <label className="labelcss" htmlFor="kimlikNo">Takım Adı</label>
                      <input className="inputcss" type="text" placeholder="Takim adi" name="takimAdi" value={takimAdi} readOnly />
                      {/* <DropdownList
                        data={takim}
                        dataKey='id'
                        textField='adi'
                        defaultValue={'Takım seçin'}
                        onChange={(value) => { takimFunction(value)}}
                      /> */}
                    </div>
                  </div>
                  <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
                    {/* <div className="col-xs-4">
                      <label className="labelcss" htmlFor="kimlikNo">Antrenor</label>
                      <input className="inputcss" type="number" placeholder="Hoca id" name="hocaId" onChange={(event) => { setHocaId(event.target.value); }} />
                    </div> */}
                    <div className="col-xs-4">
                      <label className="labelcss" htmlFor="kimlikNo">Antrenor Adı</label>
                      <input className="inputcss" type="text" placeholder="Hoca adi" name="hocaadi" value={hocaAdi} readOnly />
                    </div>
                    <div className="col-xs-4">
                      <label className="labelcss" htmlFor="kimlikNo">Veli</label>
                      <input className="inputcss" type="text" placeholder="Veli" name="veli" value={currentUser.isim} readOnly  />
                      {/* <DropdownList
                        data={veliler}
                        dataKey='id'
                        textField='adi'
                        defaultValue={'Veli seçin'}
                        onChange={(value) => { veliFunction(value)}}
                      /> */}
                    </div>
                  </div>
                  {/* <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
                    <div className="col-xs-4">
                      <label className="labelcss" htmlFor="kimlikNo">Oynadığı Maç Sayısı</label>
                      <input className="inputcss" type="number" placeholder="Oynadığı maç sayısı" name="oynadigiMacSayisi" onChange={(event) => { setOynadigiMacSayisi(event.target.value); }} />
                    </div>
                    <div className="col-xs-4">
                      <label className="labelcss" htmlFor="kimlikNo">Atılan Gol Sayısı</label>
                      <input className="inputcss" type="number" placeholder="Atılan gol sayısı" name="atilanGolSayisi" onChange={(event) => { setAtilanGolSayisi(event.target.value); }} />
                    </div>
                    <div className="col-xs-4">
                      <label className="labelcss" htmlFor="kimlikNo">Asist</label>
                      <input className="inputcss" type="number" placeholder="Asist" name="asist" onChange={(event) => { setAsist(event.target.value); }} />
                    </div>
                  </div> */}
                  {/* <div className="div2">
                    <div>
                      <label className="labelcss" htmlFor="kimlikNo">Gördüğü Sarı Kart</label>
                      <input className="inputcss" type="number" placeholder="Sarı kart" name="sariKart" onChange={(event) => { setSariKart(event.target.value); }} />
                    </div>
                    <div>
                      <label className="labelcss" htmlFor="kimlikNo">Gördüğü Kırmızı Kart</label>
                      <input className="inputcss" type="number" placeholder="Kırmızı kart" name="kirmiziKart" onChange={(event) => { setKirmiziKart(event.target.value); }} />
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
              </>
            )
            : <div style={{textAlign: 'center'}}>Girdiğiniz bilgiler yanlış yada boş, lütfen girdiğiniz bilgileri kontrol edin!</div>
          }
          </form>
          {/* <ToastContainer /> */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={createOyuncuKartiFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateTakim