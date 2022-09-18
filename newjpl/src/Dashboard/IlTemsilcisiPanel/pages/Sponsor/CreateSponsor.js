import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createSponsor } from '../../../../redux-new/actions/sponsor';
import { getAllSponsorKategori } from '../../../../redux-new/actions/sponsorKategori';
import { getAllSponsorSuresi } from '../../../../redux-new/actions/sponsorSuresi';
import { getAllSponsorUcretBirimi } from '../../../../redux-new/actions/sponsorUcretBirimi';
import { getAllSponsorSureTuru } from '../../../../redux-new/actions/sponsorSureTuru';
import DropdownList from "react-widgets/DropdownList";
import { toast } from 'react-toastify';
import AuthService from "../../../../services-socket/auth.service";
function CreateSponsor(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Sponsor eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    const activeSehir = useSelector(state => state.currentSehir.currentSehir);

    const currentUser = AuthService.getCurrentUser();
    // const [id, setId] = useState(null);
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

    // Useeffect tanımlamaları
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


    // Fonksiyon tanımlamaları
    const sponsorKategoriFunction = (value) => {
      setSponsorKategori(value.adi);
    }

    const sponsorSuresiFunction = (value) => {
      setSponsorlukSuresi(value.adi);
    }

    const sponsorUcretBirimiFunction = (value) => {
      setSponsorlukUcretBirimi(value.adi);
    }

    const sponsorSureTuruFunction = (value) => {
      setSponsorlukSureTuru(value.adi);
    }

    const createSponsorFunc = () => {
        // if(sponsorAdi.length > 0 && sponsorIl.length > 0 && sponsorKategori.length > 0 && sponsorReklami.length > 0 && sponsorlukSuresi.length > 0 && sponsorlukUcreti.length > 0 && sponsorlukUcretBirimi.length > 0 && eposta.length > 0)
        // {
          // //console.log("DATA: ", sponsorAdi, sponsorIl, sponsorKategori, sponsorReklami, sponsorlukSuresi, sponsorlukSureTuru, sponsorlukUcreti, sponsorlukUcretBirimi, eposta, sifre, published);
          // const data = {sponsoradi: sponsorAdi, sponsoril: sponsorIl, sponsorkategori: sponsorKategori, sponsorreklami: sponsorReklami, sponsorluksuresi: sponsorlukSuresi, sponsorluksureturu: sponsorlukSureTuru, sponsorlukucreti: sponsorlukUcreti, sponsorlukucretbirimi: sponsorlukUcretBirimi, eposta, sifre, published }
          // const data = {sponsorAdi, sponsorIl, sponsorKategori, sponsorReklami, sponsorlukSuresi, sponsorlukSureTuru, sponsorlukUcreti, sponsorlukUcretBirimi, eposta, sifre, published }
          const data = {sponsorAdi, sehir, sponsorKategori, sponsorReklami, sponsorlukSuresi, sponsorlukSureTuru, sponsorlukUcreti, sponsorlukUcretBirimi, published }
          //console.log("DATA: ", data);
          dispatch(createSponsor(data));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        }
      //   else {
      //     alert("Lütfen tüm alanları doldurunuz.");
      // }
    // }

  return (
    <>
        <form className="formcss">
            {/* <label className="labelcss" htmlFor='id'>ID: </label>
            <input className="inputcss"  type="text" placeholder='id' name="id" onChange={(event) => { setId(event.target.value); }} /> */}
            <div className="col-xs-12" >
              <div className="col-xs-4">
                <label className="labelcss" htmlFor="sponsorAdi">Sponsor adı:</label>
                <input className="inputcss"  type="text" placeholder="Sponsor adı" name="sponsorAdi" onChange={(event) => { setSponsorAdi(event.target.value); }} />
              </div>
              <div className="col-xs-4">
                <label className="labelcss" htmlFor="sponsorIl">Şehir</label>
                <input className="inputcss" type="text" placeholder="Şehir Adı" name="sehir" value={sehir} disabled />
              </div>
              <div className="col-xs-4">
                <label className="labelcss" htmlFor="sponsorKategori">Sponsor kategori:</label>
                {/* <input className="inputcss"  type="text" placeholder="Sponsor Kategori" name="sponsorKategori" onChange={(event) => { setSponsorKategori(event.target.value); }} /> */}
                  <DropdownList
                  data={sponsorlukKategori}
                  dataKey='id'
                  textField='adi'
                  defaultValue={'Sponsor Kategori seçin'}
                  onChange={(value) => { sponsorKategoriFunction(value)}}
                />
              </div>
            </div>
            <div>
                <label className="labelcss" htmlFor="sponsorReklami">Sponsor reklamı:</label>
                <input className="inputcss"  type="text" placeholder="Sponsor Reklamı" name="sponsorReklami" onChange={(event) => { setSponsorReklami(event.target.value); }} />
              </div>
            <div className="col-xs-12" >
              <div className="col-xs-3">
                <label className="labelcss" htmlFor="sponsorlukSuresi">Sponsorluk süresi:</label>
                {/* <input className="inputcss"  type="number" placeholder="Sponsorluk Süresi" name="sponsorlukSuresi" onChange={(event) => { setSponsorlukSuresi(event.target.value); }} /> */}
                <DropdownList
                  data={sponsorSuresi}
                  dataKey='id'
                  textField='adi'
                  defaultValue={'Sponsor Süresi seçin'}
                  onChange={(value) => { sponsorSuresiFunction(value)}}
                />
              </div>
              <div className="col-xs-3">
                <label className="labelcss" htmlFor="sponsorlukSureTuru">Sponsorluk süre türü:</label>
                {/* <input className="inputcss"  type="number" placeholder="Sponsorluk Süresi" name="sponsorlukSuresi" onChange={(event) => { setSponsorlukSuresi(event.target.value); }} /> */}
                <DropdownList
                  data={sponsorSureTuru}
                  dataKey='id'
                  textField='adi'
                  defaultValue={'Sponsor Süre Türü seçin'}
                  onChange={(value) => { sponsorSureTuruFunction(value)}}
                />
              </div>
              <div className="col-xs-3">
                <label className="labelcss" htmlFor="sponsorlukUcreti">Sponsorluk ücreti:</label>
                <input className="inputcss"  type="number" placeholder="Sponsorluk Ücreti" name="sponsorlukUcreti" onChange={(event) => { setSponsorlukUcreti(event.target.value); }} />
              </div>
              <div className="col-xs-3">
                <label className="labelcss" htmlFor="sponsorlukUcretBirimi">Sponsorluk ücret birimi:</label>
                {/* <input className="inputcss"  type="text" placeholder="Sponsorluk Ücret Birimi" name="sponsorlukUcretBirimi" onChange={(event) => { setSponsorlukUcretBirimi(event.target.value); }} /> */}
                <DropdownList
                  data={sponsorUcretBirimi}
                  dataKey='id'
                  textField='adi'
                  defaultValue={'Sponsor Ücret Birimi seçin'}
                  onChange={(value) => { sponsorUcretBirimiFunction(value)}}
                />
              </div>
            </div>
            {/* <div className="div2">
              <div>
                <label className="labelcss" htmlFor="eposta">E-posta:</label>
                <input className="inputcss"  type="text" placeholder="E-posta" name="eposta" onChange={(event) => { setEposta(event.target.value); }} />
              </div>
              <div>
                <label className="labelcss" htmlFor="sifre">Şifre:</label>
                <input className="inputcss"  type="password" placeholder="Şifre" name="sifre" onChange={(event) => { setSifre(event.target.value); }} />
              </div>
            </div>    */}
          {/* <div className="div2">
            <div>
                <label className="labelcss" htmlFor="true">Published: True</label>
                <input className="inputcss"  type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label className="labelcss" htmlFor="false">Published: False</label>
                <input className="inputcss"  type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div> */}
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={createSponsorFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateSponsor