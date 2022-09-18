import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateOyuncuKarti } from '../../../../redux-new/actions/oyuncuKarti';
import { useEffect, useState } from 'react';
import moment from 'moment';
import DropdownList from "react-widgets/DropdownList";
import { getAllAntrenorHoca } from '../../../../redux-new/actions/antrenorHoca';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import { getAllVeli } from '../../../../redux-new/actions/veli';
import { toast } from 'react-toastify';
import OyuncuKartiService from '../../../../services-new/OyuncuKartiService'
import AuthService from "../../../../services-socket/auth.service";
import 'react-toastify/dist/ReactToastify.css';


function UpdateOyuncuKarti(props) {
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

      const currentUser = AuthService.getCurrentUser();
  const activeSehir = useSelector(state => state.currentSehir.currentSehir);

    const id = props.id;
    // const [kimlikNo, setKimlikNo] = useState(0);
    // const [adi, setAdi] = useState("");
    // const [soyadi, setSoyadi] = useState("");
    const [dogumYeri, setDogumYeri] = useState("");
    // const [dogumTarihi, setDogumTarihi] = useState("");
    const [boy, setBoy] = useState("");
    const [kilo, setKilo] = useState("");
    const [sehir, setSehir] = useState(currentUser.sehir);
    const [pozisyon, setPozisyon] = useState("");
    const [takimId, setTakimId] = useState("");
    const [takimAdi, setTakimAdi] = useState("");
    const [lig, setLig] = useState("");
    const [formaNo, setFormaNo] = useState("");
    const [oynadigiMacSayisi, setOynadigiMacSayisi] = useState("");
    const [atilanGolSayisi, setAtilanGolSayisi] = useState("");
    const [asist, setAsist] = useState("");
    const [resim, setResim] = useState("");
    const [oncekiTakimi, setOncekiTakimi] = useState("");
    const [sariKart, setSariKart] = useState("");
    const [kirmiziKart, setKirmiziKart] = useState("");
    const [hocaId, setHocaId] = useState("");
    const [hocaAdi, setHocaAdi] = useState("");
    const [veli, setVeli] = useState("");
    const [telefon, setTelefon] = useState("");
    const [adres, setAdres] = useState("");
    // const [eposta, setEposta] = useState("");
    // const [sifre, setSifre] = useState("");
    const [uyruk, setUyruk] = useState("");
    const [published, setPublished] = useState(true);

    const ligler = useSelector(state => state.ligler);
    const takim = useSelector(state => state.takim);
    const antrenorHoca = useSelector(state => state.antrenorHoca);
    const veliler = useSelector(state => state.veli);
    
    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
        OyuncuKartiService.getById(id).then(response =>{
            //console.log("GELEN VERI: ", response.data);
            let dogumTarihi = moment(response.data.Dogumtarihi).toISOString().slice(0,10);  
            // setKimlikNo(response.data.kimlikno);
            // setAdi(response.data.adi);
            // setSoyadi(response.data.soyadi);
            setDogumYeri(response.data.dogumyeri);
            // setDogumTarihi(dogumTarihi);
            setSehir(response.data.sehir);
            setBoy(response.data.boy);
            setKilo(response.data.kilo);
            setPozisyon(response.data.pozisyon);
            setTakimAdi(response.data.takimadi);
            setLig(response.data.lig);
            setFormaNo(response.data.formano);
            setOynadigiMacSayisi(response.data.oynadigimacsayisi);
            setAtilanGolSayisi(response.data.atilangolsayisi);
            setAsist(response.data.asist);
            setResim(response.data.resim);
            setOncekiTakimi(response.data.oncekitakimi);
            setSariKart(response.data.sarikart);
            setKirmiziKart(response.data.kirmizikart);
            setHocaAdi(response.data.hocaadi);
            setVeli(response.data.veli);
            setTelefon(response.data.telefon);
            setAdres(response.data.adres);
            // setEposta(response.data.eposta);
            // setSifre(response.data.sifre);
            setUyruk(response.data.uyruk);  
        });
    }, [])

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
      setLig(value);
      const data = { lig: value};
      dispatch(updateOyuncuKarti({id: props.id, data}));
    }

    const takimFunction = (value) => {
      setTakimAdi(value.adi);
      setTakimId(value.id);
      const data = { takimid: value.id, takimadi: value.adi};
      dispatch(updateOyuncuKarti({id: props.id, data}));
    }

    const antrenorHocaFunction = (value) => {
      setHocaAdi(value.adi);
      setHocaId(value.id);
      const data = { hocaid: value.id, hocaadi: value.adi};
      dispatch(updateOyuncuKarti({id: props.id, data}));
    }

    const veliFunction = (value) => {
      setVeli(value.adi);
      const data = { veli: value.adi};
      dispatch(updateOyuncuKarti({id: props.id, data}));
    }

    const updateOyuncuKartiFunc = () => {
        // const data = {kimlikNo, adi, soyadi, dogumYeri, dogumTarihi, boy, kilo, pozisyon, takimId, takimAdi, lig, formaNo, oynadigiMacSayisi, atilanGolSayisi, asist, resim, oncekiTakimi, sariKart, kirmiziKart, hocaId, hocaAdi, veli, telefon, adres, eposta, sifre, uyruk, published}
        // const data = {dogumyeri: dogumYeri, boy, kilo, pozisyon, takimid: takimId, takimadi: takimAdi, lig, formano: formaNo, oynadigimacsayisi: oynadigiMacSayisi, atilangolsayisi: atilanGolSayisi, asist, resim, oncekitakimi: oncekiTakimi, sarikart: sariKart, kirmizikart: kirmiziKart, hocaid: hocaId, hocaadi: hocaAdi, veli, telefon, adres, eposta, sifre, uyruk, published}
        const data = {dogumyeri: dogumYeri, boy, kilo, pozisyon, takimid: takimId, takimadi: takimAdi, lig, formano: formaNo, oynadigimacsayisi: oynadigiMacSayisi, atilangolsayisi: atilanGolSayisi, asist, resim, oncekitakimi: oncekiTakimi, sarikart: sariKart, sehir, kirmizikart: kirmiziKart, hocaid: hocaId, hocaadi: hocaAdi, veli, telefon, adres, uyruk, published}
        //console.log("UPDATE EDILEN VEIRLER: ", data);
          dispatch(updateOyuncuKarti({id: props.id, data}));
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
        <div className="div2">
          <div>
            <label className="labelcss" htmlFor='id'>Fotograf </label>
            <input  type="file" placeholder="Resim" name="resim" accept="image/*" onChange={(event) => { setResim(event.target.value); }} />
          </div>
          <div>
            <label className="labelcss" htmlFor='sehir'>Şehir</label>
            <input className="inputcss" type="text" placeholder="Şehir Adı" name="sehir" value={sehir} disabled />
          </div>
        </div>
          <div  className="div2">
              {/* <div>
                <label className="labelcss" htmlFor="kimlikNo">Kimlik No</label>
                <input className="inputcss" type="number" placeholder="Kimlik no" value={kimlikNo} name="kimlikNo" onChange={(event) => { setKimlikNo(event.target.value); }} />
              </div> */}
              <div>
                <label className="labelcss" htmlFor='id'>Uyruk </label>
                <input className="inputcss" type="text" placeholder="Uyruk" name="uyruk" value={uyruk} onChange={(event) => { setUyruk(event.target.value); }} />
              </div>
          </div>
          {/* <div className="div2">
            <div>
              <label className="labelcss" htmlFor='id'>Adı </label>
              <input className="inputcss" type="text" placeholder="Adı" name="adi" value={adi} onChange={(event) => { setAdi(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor="kimlikNo">Soyadı</label>
              <input className="inputcss" type="text" placeholder="Soyadı" name="soyadi" value={soyadi} onChange={(event) => { setSoyadi(event.target.value); }} />
            </div>
          </div> */}
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor='id'>Doğum Yeri </label>
              <input className="inputcss" type="text" placeholder="Doğum yeri" name="dogumYeri" value={dogumYeri} onChange={(event) => { setDogumYeri(event.target.value); }} />
            </div>
            {/* <div>
              <label className="labelcss" htmlFor="kimlikNo">Doğum Tarihi</label>
              <input className="inputcss" type="date" placeholder="Doğum tarihi" name="dogumTarihi" value={dogumTarihi} onChange={(event) => { setDogumTarihi(event.target.value); }} />
            </div> */}
          </div>
          <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor='id'>Boy </label>
              <input className="inputcss" type="number" placeholder="Boy" value={boy} name="boy" onChange={(event) => { setBoy(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="kimlikNo">Kilo</label>
              <input className="inputcss" type="number" placeholder="Kilo" value={kilo} name="kilo" onChange={(event) => { setKilo(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="kimlikNo">Pozisyon</label>
              <input className="inputcss" type="text" placeholder="Pozisyon" value={pozisyon} name="pozisyon" onChange={(event) => { setPozisyon(event.target.value); }} />
            </div>
            <div className="col-xs-3">
              <label className="labelcss" htmlFor="kimlikNo">Forma No</label>
              <input className="inputcss" type="number" placeholder="Forma no" value={formaNo} name="formaNo" onChange={(event) => { setFormaNo(event.target.value); }} />
            </div>


          </div>
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor="kimlikNo">Telefon</label>
              <input className="inputcss" type="number" placeholder="Telefon" value={telefon} name="telefon" onChange={(event) => { setTelefon(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor="kimlikNo">Adres</label>
              <input className="inputcss" type="text" placeholder="Adres" name="adres" value={adres} onChange={(event) => { setAdres(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor='id'>Lig</label>
              {/* <input className="inputcss" type="number" placeholder="Lig" name="lig" onChange={(event) => { setLig(event.target.value); }} /> */}
              <DropdownList
                data={ligler}
                dataKey='id'
                textField='ligadi'
                value={lig}
                onChange={(value) => { liglerFunction(value.ligadi)}}
              />
            </div>
            <div>
              <label className="labelcss" htmlFor="kimlikNo">Önceki Takımı</label>
              <input className="inputcss" type="text" placeholder="Önceki takımı" value={oncekiTakimi} name="oncekiTakimi" onChange={(event) => { setOncekiTakimi(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            {/* <div>
              <label className="labelcss" htmlFor='id'>Takım</label>
              <input className="inputcss" type="number" placeholder="Takim id" name="takimId" onChange={(event) => { setTakimId(event.target.value); }} />
            </div> */}
            <div>
              <label className="labelcss" htmlFor="kimlikNo">Takım Adı</label>
              {/* <input className="inputcss" type="text" placeholder="Takim adi" name="takimAdi" onChange={(event) => { setTakimAdi(event.target.value); }} /> */}
              <DropdownList
                data={takim}
                dataKey='id'
                textField='adi'
                value={takimAdi}
                onChange={(value) => { takimFunction(value)}}
              />
            </div>
          </div>
          <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
            {/* <div className="col-xs-4">
              <label className="labelcss" htmlFor="kimlikNo">Antrenor</label>
              <input className="inputcss" type="number" placeholder="Hoca id" name="hocaId" onChange={(event) => { setHocaId(event.target.value); }} />
            </div> */}
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="kimlikNo">Antrenor Adı</label>
              <DropdownList
                data={antrenorHoca}
                dataKey='id'
                textField='adi'
                value={hocaAdi}
                onChange={(value) => { antrenorHocaFunction(value)}}
              />
              {/* <input className="inputcss" type="text" placeholder="Hoca adı" name="hocaAdi" onChange={(event) => { setHocaAdi(event.target.value); }} /> */}
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="kimlikNo">Veli</label>
              {/* <input className="inputcss" type="text" placeholder="Veli" name="veli" onChange={(event) => { setVeli(event.target.value); }} /> */}
              <DropdownList
                data={veliler}
                dataKey='id'
                textField='adi'
                value={veli}
                onChange={(value) => { veliFunction(value)}}
              />
            </div>
          </div>
          <div className="col-xs-12" style={{ marginLeft: "-30px" }}>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="kimlikNo">Oynadığı Maç Sayısı</label>
              <input className="inputcss" type="number" placeholder="Oynadığı maç sayısı" value={oynadigiMacSayisi} name="oynadigiMacSayisi" onChange={(event) => { setOynadigiMacSayisi(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="kimlikNo">Atılan Gol Sayısı</label>
              <input className="inputcss" type="number" placeholder="Atılan gol sayısı" value={atilanGolSayisi} name="atilanGolSayisi" onChange={(event) => { setAtilanGolSayisi(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor="kimlikNo">Asist</label>
              <input className="inputcss" type="number" placeholder="Asist" name="asist" value={asist} onChange={(event) => { setAsist(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
              <label className="labelcss" htmlFor="kimlikNo">Gördüğü Sarı Kart</label>
              <input className="inputcss" type="number" placeholder="Sarı kart" name="sariKart" value={sariKart} onChange={(event) => { setSariKart(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor="kimlikNo">Gördüğü Kırmızı Kart</label>
              <input className="inputcss" type="number" placeholder="Kırmızı kart" name="kirmiziKart" value={kirmiziKart} onChange={(event) => { setKirmiziKart(event.target.value); }} />
            </div>
          </div>
         
      
          {/* <div className="div2">
            <div>
              <label className="labelcss" htmlFor="kimlikNo">E-Posta</label>
              <input className="inputcss" type="text" placeholder="E-Posta" name="eposta" value={eposta} onChange={(event) => { setEposta(event.target.value); }} />
            </div>
            <div>
              <label className="labelcss" htmlFor="kimlikNo">Şifre</label>
              <input className="inputcss" type="password" placeholder="Şifre" name="sifre" value={sifre} onChange={(event) => { setSifre(event.target.value); }} />
            </div>
          </div> */}
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
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={updateOyuncuKartiFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateOyuncuKarti