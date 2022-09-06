import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateSlider } from '../../../../redux-new/actions/slider';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SliderService from '../../../../services-new/SliderService';


function UpdateSlider(props) {
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
    const [baslik, setBaslik] = useState("");
    const [resimBaslik, setResimBaslik] = useState("");
    const [src, setSrc] = useState("");
    const [resimIcerik, setResimIcerik] = useState("");
    const [videoBaslik, setVideoBaslik] = useState("");
    const [url, setUrl] = useState("");
    const [veriTipi, setVeriTipi] = useState("");
    const [slideTipi, setSlideTipi] = useState(false);
    const [published, setPublished] = useState(true);
    
    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
      SliderService.getById(id).then(response => {
            setBaslik(response.data.baslik);
            setResimBaslik(response.data.resimbaslik);
            setSrc(response.data.src);
            setResimIcerik(response.data.resimicerik);
            setVideoBaslik(response.data.videobaslik);
            setUrl(response.data.url);
            setVeriTipi(response.data.veritipi);
            setSlideTipi(response.data.slidetipi);
            setPublished(response.data.published);
        });
    }, [])


    // Fonksiyon tanımlamaları
    const updateSliderFunc = () => {
          const data = {baslik, resimbaslik: resimBaslik, src, resimicerik: resimIcerik, videobaslik: videoBaslik, url, veritipi: veriTipi, slidetipi: slideTipi, published};
          dispatch(updateSlider({id: props.id, data}));
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
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='baslik'>Başlık</label>
              <input className="inputcss" type="text" placeholder="Başlık" name="baslik" value={baslik} onChange={(event) => { setBaslik(event.target.value); }} />
          </div>
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='baslik'>Resim Başlık</label>
              <input className="inputcss" type="text" placeholder="Resim Başlık" name="resimbaslik" value={resimBaslik} onChange={(event) => { setResimBaslik(event.target.value); }} />
          </div>
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='baslik'>Resim İçerik</label>
              <input className="inputcss" type="text" placeholder="Resim İçerik" name="resimicerik" value={resimIcerik} onChange={(event) => { setResimIcerik(event.target.value); }} />
          </div>
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='baslik'>Başlık</label>
              <input className="inputcss" type="text" placeholder="Video Başlık" name="videobaslik" value={videoBaslik} onChange={(event) => { setVideoBaslik(event.target.value); }} />
          </div>
          <div className="col-xs-12">
            <div className="col-xs-4">
              <label className="labelcss" htmlFor='src'>SRC</label>
              <input className="inputcss" type="text" placeholder="SRC" name="src" value={src} onChange={(event) => { setSrc(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor='src'>URL</label>
              <input className="inputcss" type="text" placeholder="URL" name="url" value={url} onChange={(event) => { setUrl(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor='src'>Veri Tipi</label>
              <input className="inputcss" type="text" placeholder="Veri Tipi" value={veriTipi} name="veritipi" onChange={(event) => { setVeriTipi(event.target.value); }} />
            </div>
          </div>
        </div>
        <div className="div2">
            <div>
                <label htmlFor="true">Slide Tipi: True</label>
                <input type="radio" id="true1" name="slideTipi" placeholder="True" value="true" onChange={(event) => { setSlideTipi(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Slide Tipi: False</label>
                <input type="radio" id="false1" name="slideTipi" placeholder="False" value="false" onChange={(event) => { setSlideTipi(event.target.value); }} />
            </div>
          </div>
          <div className="div2">
            <div>
                <label htmlFor="true">Published: True</label>
                <input type="radio" id="true2" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Published: False</label>
                <input type="radio" id="false2" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div>
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={updateSliderFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateSlider