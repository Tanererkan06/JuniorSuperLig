import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createSponsor } from '../../../../redux-new/actions/sponsor';
import { getAllSehir } from '../../../../redux-new/actions/sehir';
import { getAllSponsorKategori } from '../../../../redux-new/actions/sponsorKategori';
import { getAllSponsorSuresi } from '../../../../redux-new/actions/sponsorSuresi';
import { getAllSponsorUcretBirimi } from '../../../../redux-new/actions/sponsorUcretBirimi';
import { getAllSponsorSureTuru } from '../../../../redux-new/actions/sponsorSureTuru';
import DropdownList from "react-widgets/DropdownList";
import Multiselect from "react-widgets/Multiselect";
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

    const currentUser = AuthService.getCurrentUser();
    // const [id, setId] = useState(null);
    const [sponsorAdi, setSponsorAdi] = useState("");
    
    const [sehir, setSehir] = useState([]);
    const [sponsorKategori, setSponsorKategori] = useState("");
    const [sponsorEkleyenId, setSponsorEkleyenId] = useState(currentUser.id);
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
    const sehirler = useSelector(state => state.sehir);

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllSponsorKategori());
      dispatch(getAllSponsorSuresi());
      dispatch(getAllSponsorUcretBirimi());
      dispatch(getAllSponsorSureTuru());
      dispatch(getAllSehir());
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

    const sehirFunction = (value) => {
      sehir.array(value.sehiradi); //test et
    }

    const createSponsorFunc = () => {
          // const data = {sponsorAdi, sehir, sponsorKategori, sponsorReklami, sponsorlukSuresi, sponsorlukSureTuru, sponsorlukUcreti, sponsorlukUcretBirimi, published }
          const data = {sponsorAdi, sponsorEkleyenId, sehir, sponsorKategori, sponsorReklami, sponsorlukSuresi, sponsorlukSureTuru, published }
          //console.log("DATA: ", data);
          dispatch(createSponsor(data));
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
            <input className="inputcss"  type="text" placeholder='id' name="id" onChange={(event) => { setId(event.target.value); }} /> */}
            <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
              <div className="col-xs-4">
                <label className="labelcss" htmlFor="sponsorAdi">Sponsor adı:</label>
                <input className="inputcss"  type="text" placeholder="Sponsor adı" name="sponsorAdi" onChange={(event) => { setSponsorAdi(event.target.value); }} />
              </div>
              <div className="col-xs-4">
                <label className="labelcss" htmlFor="sponsorIl">Şehir</label>
                <Multiselect
                  data={sehirler}
                  dataKey="id"
                  textField="sehiradi"
                  // defaultValue={'Şehir seçin'}
                  onChange={(value) => { sehirFunction(value)}}
                />
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
            <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
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
              {/* <div className="col-xs-3">
                <label className="labelcss" htmlFor="sponsorlukUcreti">Sponsorluk ücreti:</label>
                <input className="inputcss"  type="number" placeholder="Sponsorluk Ücreti" name="sponsorlukUcreti" onChange={(event) => { setSponsorlukUcreti(event.target.value); }} />
              </div> */}
              {/* <div className="col-xs-3">
                <label className="labelcss" htmlFor="sponsorlukUcretBirimi">Sponsorluk ücret birimi:</label>
                <DropdownList
                  data={sponsorUcretBirimi}
                  dataKey='id'
                  textField='adi'
                  defaultValue={'Sponsor Ücret Birimi seçin'}
                  onChange={(value) => { sponsorUcretBirimiFunction(value)}}
                />
              </div> */}
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