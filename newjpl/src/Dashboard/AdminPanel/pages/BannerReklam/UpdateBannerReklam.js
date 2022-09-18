import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateBannerReklam } from '../../../../redux-new/actions/bannerReklam';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';
import BannerReklamService from '../../../../services-new/BannerReklamService';
import AuthService from "../../../../services-socket/auth.service";

function UpdateBannerReklam(props) {
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

    const activeSehir = useSelector(state => state.currentSehir.currentSehir);
    const currentUser = AuthService.getCurrentUser();

    const id = props.id;
    const [reklamVeren, setReklamVeren] = useState("");
    const [resim, setResim] = useState("");
    const [tarih, setTarih] = useState("");
    const [sehir, setSehir] = useState(currentUser.sehir);
    const [url, setUrl] = useState("");
    const [published, setPublished] = useState(true);
    
    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
      BannerReklamService.getById(id).then(response => {
            setReklamVeren(response.data.reklamveren);
            setResim(response.data.resim);
            let tarih = moment(response.data.tarih).toISOString().slice(0,10);   
            setTarih(tarih);
            setUrl(response.data.url);
            setPublished(response.data.published);
        });
    }, [])


    // Fonksiyon tanımlamaları
    const updateBannerReklamFunc = () => {
          const data = {reklamveren: reklamVeren, resim, tarih, url, published};
          dispatch(updateBannerReklam({id: props.id, data}));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500); 
    }

  return (
    <>
        <form className="formcss">
        <div className="col-xs-12">
          <div className='col-xs-4'>
            <label className="labelcss" htmlFor='oyunLiveId'>Reklam Veren</label>
              <input className="inputcss" type="text" placeholder="Reklam Veren" value={reklamVeren} name="reklamveren" onChange={(event) => { setReklamVeren(event.target.value); }} />
          </div>
          <div className='col-xs-4'>
            <label className="labelcss" htmlFor='resim'>Resim</label>
            <input  type="file" placeholder="Resim" name="resim" accept="image/*" onChange={(event) => { setResim(event.target.value); }} />
          </div>
          <div className='col-xs-4'>
            <label className="labelcss" htmlFor='sehir'>Şehir</label>
            <input className="inputcss" type="text" placeholder="Şehir Adı" name="sehir" value={sehir} disabled />
        </div>
        </div>
        <div className="div2">
          <div>
            <label className="labelcss" htmlFor='tarih'>Tarih</label>
              <input className="inputcss" type="date" placeholder="Tarih" value={tarih} name="tarih" onChange={(event) => { setTarih(event.target.value); }} />
          </div>
          <div>
            <label className="labelcss" htmlFor='url'>URL</label>
            <input className="inputcss" type="text" placeholder="URL" name="url" value={url} onChange={(event) => { setUrl(event.target.value); }} />
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
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={updateBannerReklamFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateBannerReklam