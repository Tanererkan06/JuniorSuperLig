import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createSlider } from '../../../../redux-new/actions/slider';
import { toast } from 'react-toastify';
import SliderFileUploadServices from '../../../../services-new/SliderFileUploadServices';
import AuthService from "../../../../services-socket/auth.service";
function CreateSlider(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Sponsor Fotoğraf eklendi!', {
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
    const [baslik, setBaslik] = useState("");
    const [sehir, setSehir] = useState(currentUser.sehir);
    const [resimBaslik, setResimBaslik] = useState("");
    const [src, setSrc] = useState("");
    const [resimIcerik, setResimIcerik] = useState("");
    const [videoBaslik, setVideoBaslik] = useState("");
    const [url, setUrl] = useState("");
    const [veriTipi, setVeriTipi] = useState("");
    const [slideTipi, setSlideTipi] = useState(false);
    const [published, setPublished] = useState(true);
    const [selectedFiles,setSelectedFiles] = useState();
    const [currentFile,setCurrentFile] =useState();
    const [progress,setProgress]=useState();
    const [message,setMessage]=useState();
    const [fileInfos,setFileInfos]=useState([]);


    const createSliderFunc = () => {
        // if(adi.length > 0)
        // {
          upload();
          const data = {baslik, sehir, resimbaslik: resimBaslik, src, resimicerik: resimIcerik, videobaslik: videoBaslik, url, veritipi: veriTipi, slidetipi: slideTipi, published};
          dispatch(createSlider(data));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
      //   }
      //   else {
      //     alert("Lütfen tüm alanları doldurunuz.");
      // }
    }

    const upload = () => {
      //console.log("UPLOAD GIRILDI");
      let currentFile2 = selectedFiles[0];
      
      setProgress(0);
      setCurrentFile(currentFile2)
  
      SliderFileUploadServices.upload(currentFile2, (event) => {
        setProgress(Math.round((100 * event.loaded) / event.total))
      })
        .then((response) => {
          setMessage(response.data.message)

          return SliderFileUploadServices.getFiles();
        })
        .then((files) => {
          setFileInfos(files.data)
          //console.log("filesInfo: ",files.data)
        })
        .catch(() => {
          setProgress(0);
          setMessage("Could not upload the file!");
          setCurrentFile(undefined);
        });
        setSelectedFiles(undefined)
    }
  return (
    <>
        <form className="formcss">
        <label className="btn btn-default">
          <input type="file" onChange={(event) => setSelectedFiles(event.target.files)} />
        </label>

        <button
          className="btn btn-success"
          disabled={!selectedFiles}
          onClick={() => upload()}
        >
          Upload
        </button>

        <h2>{message}</h2>
        {/* <div className='div2'>
            <label className="labelcss" htmlFor='sehir'>Şehir</label>
            <input className="inputcss" type="text" placeholder="Şehir Adı" name="sehir" value={sehir} disabled />
          </div>
        <div className="col-xs-12">
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='baslik'>Başlık</label>
              <input className="inputcss" type="text" placeholder="Başlık" name="baslik" onChange={(event) => { setBaslik(event.target.value); }} />
          </div>
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='baslik'>Resim Başlık</label>
              <input className="inputcss" type="text" placeholder="Resim Başlık" name="resimbaslik" onChange={(event) => { setResimBaslik(event.target.value); }} />
          </div>
          <div className='col-xs-3'>
            <label className="labelcss" htmlFor='baslik'>Başlık</label>
              <input className="inputcss" type="text" placeholder="Video Başlık" name="videobaslik" onChange={(event) => { setVideoBaslik(event.target.value); }} />
          </div>
          <div className="col-xs-12">
            <div className="col-xs-4">
              <label className="labelcss" htmlFor='src'>SRC</label>
              <input className="inputcss" type="text" placeholder="SRC" name="src" onChange={(event) => { setSrc(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor='src'>URL</label>
              <input className="inputcss" type="text" placeholder="URL" name="url" onChange={(event) => { setUrl(event.target.value); }} />
            </div>
            <div className="col-xs-4">
              <label className="labelcss" htmlFor='src'>Veri Tipi</label>
              <input className="inputcss" type="text" placeholder="Veri Tipi" name="veritipi" onChange={(event) => { setVeriTipi(event.target.value); }} />
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
          </div> */}
          {/* <div className="div2">
            <div>
                <label htmlFor="true">Published: True</label>
                <input type="radio" id="true2" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Published: False</label>
                <input type="radio" id="false2" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div> */}
          </form>
        {/* <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}> */}
            {/* <ToastContainer /> */}
            {/* <button className='listele-button listele-button-success' onClick={createSliderFunc}>Kaydet</button> */}
            {/* <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button> */}
        {/* </div> */}
    </>
    
  )
}

export default CreateSlider