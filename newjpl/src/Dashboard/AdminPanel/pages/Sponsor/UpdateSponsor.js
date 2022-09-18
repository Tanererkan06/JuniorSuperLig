import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateSponsor } from '../../../../redux-new/actions/sponsor';
import { getAllSponsorKategori } from '../../../../redux-new/actions/sponsorKategori';
import { getAllSponsorSuresi } from '../../../../redux-new/actions/sponsorSuresi';
import { getAllSponsorUcretBirimi } from '../../../../redux-new/actions/sponsorUcretBirimi';
import { getAllSponsorSureTuru } from '../../../../redux-new/actions/sponsorSureTuru';
import SponsorService from '../../../../services-new/SponsorService';
import { useEffect, useState } from 'react';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllSehir } from '../../../../redux-new/actions/sehir';
import AuthService from "../../../../services-socket/auth.service";
function UpdateSponsor(props) {
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

  const activeSehir = useSelector(state => state.currentSehir.currentSehir);
  const sehirler = useSelector(state => state.sehir);
  const id = props.id;
  const [sponsorAdi, setSponsorAdi] = useState("");
  const [sehir, setSehir] = useState(currentUser.sehir);
  const [sponsorKategori, setSponsorKategori] = useState("");
  const [sponsorReklami, setSponsorReklami] = useState("");
  const [sponsorlukSuresi, setSponsorlukSuresi] = useState("");
  const [sponsorlukSureTuru, setSponsorlukSureTuru] = useState("");
  const [sponsorlukUcreti, setSponsorlukUcreti] = useState("");
  const [sponsorlukUcretBirimi, setSponsorlukUcretBirimi] = useState("");
  // const [eposta, setEposta] = useState("");
  // const [sifre, setSifre] = useState("");
  const [published, setPublished] = useState(true);

  const sponsorlukKategori = useSelector(state => state.sponsorKategori);
  const sponsorSuresi = useSelector(state => state.sponsorSuresi);
  const sponsorUcretBirimi = useSelector(state => state.sponsorUcretBirimi);
  const sponsorSureTuru = useSelector(state => state.sponsorSureTuru);

  const dispatch = useDispatch();

  // Useeffect tanımlamaları
  useEffect(() => {
    SponsorService.getById(id).then(response => {
      // setId(response.id);
      setSponsorAdi(response.data.sponsoradi);
      setSehir(response.data.sehir);
      setSponsorKategori(response.data.sponsorkategori);
      setSponsorReklami(response.data.sponsorreklami);
      setSponsorlukSuresi(response.data.sponsorluksuresi);
      setSponsorlukSureTuru(response.data.sponsorluksureturu);
      setSponsorlukUcreti(response.data.sponsorlukucreti);
      setSponsorlukUcretBirimi(response.data.sponsorlukucretbirimi);
      // setEposta(response.data.eposta);
      // setSifre(response.data.sifre);
      setPublished(response.data.published);
    });
  }, [])

  useEffect(() => {
    dispatch(getAllSponsorKategori());
  }, []);

  useEffect(() => {
    dispatch(getAllSponsorSuresi());
  }, []);

  useEffect(() => {
    dispatch(getAllSponsorUcretBirimi());
  }, []);

  useEffect(() => {
    dispatch(getAllSponsorSureTuru());
  }, []);
  useEffect(() => {
    dispatch(getAllSehir());
  }, []);
  // Fonksiyon tanımlamaları
  const sponsorKategoriFunction = (value) => {
    setSponsorKategori(value.adi);
    const data = { sponsorkategori: value.adi };
    dispatch(updateSponsor({ id: props.id, data }));
  }

  const sponsorSuresiFunction = (value) => {
    setSponsorlukSuresi(value.adi);
    const data = { sponsorluksuresi: value.adi };
    dispatch(updateSponsor({ id: props.id, data }));
  }

  const sponsorUcretBirimiFunction = (value) => {
    setSponsorlukUcretBirimi(value.adi);
    const data = { sponsorlukucretbirimi: value.adi };
    dispatch(updateSponsor({ id: props.id, data }));
  }

  const sponsorSureTuruFunction = (value) => {
    setSponsorlukSureTuru(value.adi);
    const data = { sponsorluksureturu: value.adi };
    dispatch(updateSponsor({ id: props.id, data }));
  }
  const sehirFunction = (value) => {
    setSehir(value)
    const data = { sehir: value.sehiradi };
    dispatch(updateSponsor({ id: props.id, data }))
  }


  const updateSponsorFunc = () => {
    // if(sponsorAdi.length > 0 && sponsorIl.length > 0 && sponsorKategori.length > 0 && sponsorReklami.length > 0 && sponsorlukSuresi.length > 0 && sponsorlukUcreti.length > 0 && sponsorlukUcretBirimi.length > 0 && eposta.length > 0)
    // {
    // const data = {sponsoradi: sponsorAdi, sponsoril: sponsorIl, sponsorkategori: sponsorKategori, sponsorreklami: sponsorReklami, sponsorluksuresi: sponsorlukSuresi, sponsorluksureturu: sponsorlukSureTuru, sponsorlukucreti: sponsorlukUcreti, sponsorlukucretbirimi: sponsorlukUcretBirimi, eposta, sifre, published}
    const data = { sponsoradi: sponsorAdi, sehir, sponsorkategori: sponsorKategori, sponsorreklami: sponsorReklami, sponsorluksuresi: sponsorlukSuresi, sponsorluksureturu: sponsorlukSureTuru, sponsorlukucreti: sponsorlukUcreti, sponsorlukucretbirimi: sponsorlukUcretBirimi, published }
    dispatch(updateSponsor({ id: props.id, data }));
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

        </div>
        <div className="col-xs-12" >
          <div className="col-xs-4">
            <label className="labelcss" htmlFor="sponsorAdi">Sponsor Adı</label>
            <input className="inputcss" type="text" placeholder="Sponsor adı" value={sponsorAdi} name="sponsorAdi" onChange={(event) => { setSponsorAdi(event.target.value); }} />
          </div>
          <div className="col-xs-4">
            <label className="labelcss" htmlFor="sponsorIl">Şehir</label>
            <DropdownList
              data={sehirler}
              dataKey='id'
              textField='sehiradi'
              value={sehir}
              onChange={(value) => { sehirFunction(value) }}
            />
          </div>
          <div className="col-xs-4">
            <label className="labelcss" htmlFor="sponsorKategori">Sponsor Kategori</label>
            {/* <input className="inputcss"  type="text" placeholder="Sponsor Kategori" value={sponsorKategori} name="sponsorKategori" onChange={(event) => { setSponsorKategori(event.target.value); }} /> */}
            <DropdownList
              data={sponsorlukKategori}
              dataKey='id'
              textField='adi'
              value={sponsorKategori}
              onChange={(value) => { sponsorKategoriFunction(value) }}
            />
          </div>
        </div>
        <div>
          <label className="labelcss" htmlFor="sponsorReklami">Sponsor Reklamı</label>
          <input className="inputcss" type="text" placeholder="Sponsor Reklamı" value={sponsorReklami} name="sponsorReklami" onChange={(event) => { setSponsorReklami(event.target.value); }} />
        </div>
        <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
          <div className="col-xs-3">
            <label className="labelcss" htmlFor="sponsorlukSuresi">Sponsorluk Süresi</label>
            {/* <input className="inputcss"  type="number" placeholder="Sponsorluk Süresi" value={sponsorlukSuresi} name="sponsorlukSuresi" onChange={(event) => { setSponsorlukSuresi(event.target.value); }} /> */}
            <DropdownList
              data={sponsorSuresi}
              dataKey='id'
              textField='adi'
              value={sponsorlukSuresi}
              onChange={(value) => { sponsorSuresiFunction(value) }}
            />
          </div>
          <div className="col-xs-3">
            <label className="labelcss" htmlFor="sponsorlukSureTuru">Sponsorluk Süre Türü</label>
            {/* <input className="inputcss"  type="number" placeholder="Sponsorluk Süresi" value={sponsorlukSuresi} name="sponsorlukSuresi" onChange={(event) => { setSponsorlukSuresi(event.target.value); }} /> */}
            <DropdownList
              data={sponsorSureTuru}
              dataKey='id'
              textField='adi'
              value={sponsorlukSureTuru}
              onChange={(value) => { sponsorSureTuruFunction(value) }}
            />
          </div>
          <div className="col-xs-3">
            <label className="labelcss" htmlFor="sponsorlukUcreti">Sponsorluk Ücreti</label>
            <input className="inputcss" type="number" placeholder="Sponsorluk Ücreti" value={sponsorlukUcreti} name="sponsorlukUcreti" onChange={(event) => { setSponsorlukUcreti(event.target.value); }} />
          </div>
          <div className="col-xs-3">
            <label className="labelcss" htmlFor="sponsorlukUcretBirimi">Sponsorluk Ücret Birimi</label>
            {/* <input className="inputcss"  type="text" placeholder="Sponsorluk Ücret Birimi" value={sponsorlukUcretBirimi} name="sponsorlukUcretBirimi" onChange={(event) => { setSponsorlukUcretBirimi(event.target.value); }} /> */}
            <DropdownList
              data={sponsorUcretBirimi}
              dataKey='id'
              textField='adi'
              value={sponsorlukUcretBirimi}
              onChange={(value) => { sponsorUcretBirimiFunction(value) }}
            />
          </div>
        </div>
        {/* <div className="div2">
              <div>
                <label className="labelcss" htmlFor="eposta">E-posta</label>
                <input className="inputcss"  type="text" placeholder="E-posta" value={eposta} name="eposta" onChange={(event) => { setEposta(event.target.value); }} />
              </div>
              <div>
                <label className="labelcss" htmlFor="sifre">Şifre:</label>
                <input className="inputcss"  type="password" placeholder="Şifre" value={sifre} name="sifre" onChange={(event) => { setSifre(event.target.value); }} />
              </div>
            </div>    */}
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
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        {/* <ToastContainer /> */}
        <button className='listele-button listele-button-success' onClick={updateSponsorFunc}>Düzenle</button>
        <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
      </div>
    </>

  )
}

export default UpdateSponsor