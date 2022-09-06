import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createBannerReklam } from '../../../../redux-new/actions/bannerReklam';
import { toast } from 'react-toastify';


function CreateBannerReklam(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Banner Reklam eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    // const [id, setId] = useState(null);
    const [reklamVeren, setReklamVeren] = useState("");
    const [resim, setResim] = useState("");
    const [tarih, setTarih] = useState("");
    const [url, setUrl] = useState("");
    const [published, setPublished] = useState(true);

    // Fonksiyon tanımlamaları
    const createBannerReklamFunc = () => {
          const data = {reklamveren: reklamVeren, resim, tarih, url, published};
          dispatch(createBannerReklam(data));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
    }

  return (
    <>
        <form className="formcss">
        <div className="div2">
          <div>
            <label className="labelcss" htmlFor='oyunLiveId'>Reklam Veren</label>
              <input className="inputcss" type="text" placeholder="Reklam Veren" name="reklamveren" onChange={(event) => { setReklamVeren(event.target.value); }} />
          </div>
          <div>
            <label className="labelcss" htmlFor='resim'>Resim</label>
            <input  type="file" placeholder="Resim" name="resim" accept="image/*" onChange={(event) => { setResim(event.target.value); }} />
          </div>
        </div>
        <div className="div2">
          <div>
            <label className="labelcss" htmlFor='tarih'>Tarih</label>
              <input className="inputcss" type="date" placeholder="Tarij" name="tarih" onChange={(event) => { setTarih(event.target.value); }} />
          </div>
          <div>
            <label className="labelcss" htmlFor='url'>URL</label>
            <input className="inputcss" type="text" placeholder="URL" name="url" onChange={(event) => { setUrl(event.target.value); }} />
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
            <button className='listele-button listele-button-success' onClick={createBannerReklamFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateBannerReklam