import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateSehir } from '../../../../redux-new/actions/sehir';
import { useEffect, useState } from 'react';
import { getAllLigler} from '../../../../redux-new/actions/ligler';
import { getAllTakim} from '../../../../redux-new/actions/takim';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SehirService from '../../../../services-new/SehirService';
import Multiselect from "react-widgets/Multiselect";


function UpdateSehir(props) {
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
    const [sehirAdi, setSehirAdi] = useState("");
    const [ligler, setLigler] = useState([]);
    const [takimlar, setTakimlar] = useState([]);
    const [published, setPublished] = useState(true);
    
    const dispatch = useDispatch();

    const liglerData = useSelector(state => state.ligler);
    const takimlarData = useSelector(state => state.takim);
    
    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllLigler());
    }, []);

    useEffect(() => {
      dispatch(getAllTakim());
    }, []);

    useEffect(() => {
      SehirService.getById(id).then(response => {
            setSehirAdi(response.data.sehiradi);
            setLigler(response.data.ligler);
            setTakimlar(response.data.takimlar);
            setPublished(response.data.published);
        });
    }, [])


    // Fonksiyon tanımlamaları
    const liglerFunction = (value) => {
      setLigler(value)
      const data = { ligler: value};
      dispatch(updateSehir({ id: props.id, data}))
    }

    const takimlarFunction = (value) => {
      setTakimlar(value)
      const data = { takimlar: value};
      dispatch(updateSehir({ id: props.id, data}))
    }

    const updateSehirFunc = () => {
          const data = {sehiradi: sehirAdi, ligler, takimlar, published};
          dispatch(updateSehir({id: props.id, data}));
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
            <label className="labelcss" htmlFor='oyunLiveId'>Şehir Adı</label>
              <input className="inputcss" type="text" placeholder="Şehir Adı" value={sehirAdi} name="sehiradi" onChange={(event) => { setSehirAdi(event.target.value); }} />
          </div>
          <div className='col-xs-4'>
            <label className="labelcss" htmlFor='oyunLiveId'>Ligler</label>
              {/* <input className="inputcss" type="number" placeholder="Ligler" value={ligler} name="ligler" onChange={(event) => { setLigler(event.target.value); }} /> */}
              <Multiselect
                  data={liglerData}
                  dataKey="id"
                  textField="ligadi"
                  // defaultValue={'Oyuncu seçin'}
                  value={ligler}
                  onChange={(value) => { liglerFunction(value)}}
                />
          </div>
          <div className='col-xs-4'>
            <label className="labelcss" htmlFor='oyunLiveId'>Takımlar</label>
              {/* <input className="inputcss" type="number" placeholder="Takımlar" value={takimlar} name="takimlar" onChange={(event) => { setTakimlar(event.target.value); }} /> */}
              <Multiselect
                  data={takimlarData}
                  dataKey="id"
                  textField="adi"
                  // defaultValue={'Oyuncu seçin'}
                  value={takimlar}
                  onChange={(value) => { takimlarFunction(value)}}
                />
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
            <button className='listele-button listele-button-success' onClick={updateSehirFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateSehir