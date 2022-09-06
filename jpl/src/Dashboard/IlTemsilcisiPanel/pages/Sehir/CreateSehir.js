import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createSehir } from '../../../../redux-new/actions/sehir';
import { getAllLigler } from '../../../../redux-new/actions/ligler';
import { getAllTakim } from '../../../../redux-new/actions/takim';
import Multiselect from "react-widgets/Multiselect";
import { toast } from 'react-toastify';


function CreateSehir(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Şehir eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    // const [id, setId] = useState(null);
    const [sehirAdi, setSehirAdi] = useState("");
    const [ligler, setLigler] = useState([]);
    const [takimlar, setTakimlar] = useState([]);
    const [published, setPublished] = useState(true);

    const liglerData = useSelector(state => state.ligler);
    const takimlarData = useSelector(state => state.takim);

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllLigler());
    }, []);

    useEffect(() => {
      dispatch(getAllTakim());
    }, []);

    // Fonksiyon tanımlamaları
    const liglerFunction = (value) => {
      // setOyunLiveId(value.id);
      setLigler(value)
    }

    const takimlarFunction = (value) => {
      // setOyunLiveId(value.id);
      setTakimlar(value)
    }


    const createSehirFunc = () => {
          const data = {sehiradi: sehirAdi, ligler, takimlar, published};
          console.log("SEHIR DATA: ", data);
          dispatch(createSehir(data));
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
              <input className="inputcss" type="text" placeholder="Şehir Adı" name="sehiradi" onChange={(event) => { setSehirAdi(event.target.value); }} />
          </div>
          <div className='col-xs-4'>
            <label className="labelcss" htmlFor='oyunLiveId'>Ligler</label>
              {/* <input className="inputcss" type="number" placeholder="Ligler" name="ligler" onChange={(event) => { setLigler(event.target.value); }} /> */}
              <Multiselect
                  data={liglerData}
                  dataKey="id"
                  textField="ligadi"
                  // defaultValue={'Oyuncu seçin'}
                  onChange={(value) => { liglerFunction(value)}}
                />
          </div>
          <div className='col-xs-4'>
            <label className="labelcss" htmlFor='oyunLiveId'>Takımlar</label>
              {/* <input className="inputcss" type="number" placeholder="Takımlar" name="takimlar" onChange={(event) => { setTakimlar(event.target.value); }} /> */}
                <Multiselect
                  data={takimlarData}
                  dataKey="id"
                  textField="adi"
                  // defaultValue={'Oyuncu seçin'}
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
            <button className='listele-button listele-button-success' onClick={createSehirFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateSehir