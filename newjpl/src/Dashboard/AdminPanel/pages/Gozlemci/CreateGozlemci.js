import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createGozlemci } from '../../../../redux-new/actions/gozlemci';
import { getAllOyunLive } from '../../../../redux-new/actions/oyunLive';
// import DropdownList from "react-widgets/DropdownList";
import Multiselect from "react-widgets/Multiselect";
import { toast } from 'react-toastify';


function CreateGozlemci(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Gözlemci eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    // const [id, setId] = useState(null);
    // const [oyunLiveId, setOyunLiveId] = useState([]);
    const [adi, setAdi] = useState("");
    const [published, setPublished] = useState(true);

    const oyunLive = useSelector(state => state.oyunLive);

    // Useeffect tanımlamaları
    useEffect(() => {
      dispatch(getAllOyunLive());
    }, []);

    // Fonksiyon tanımlamaları
    // const oyunLiveFunction = (value) => {
    //   // setOyunLiveId(value.id);
    //   setOyunLiveId(value)
    // }

    const createGozlemciFunc = () => {
        // if(adi.length > 0)
        // {
          // const data = {adi, oyunLiveId, published};
          const data = {adi, published};
          // //console.log("GOZLEMCI DATA: ", data);
          dispatch(createGozlemci(data));
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

  return (
    <>
        <form className="formcss">
        <div className="div2">
          {/* <div>
            <label className="labelcss" htmlFor='oyunLiveId'>Oyun Live</label>
              <Multiselect
                  data={oyunLive}
                  dataKey="id"
                  textField="adi"
                  // defaultValue={'Oyuncu seçin'}
                  onChange={(value) => { oyunLiveFunction(value)}}
                />
          </div> */}
          <div>
            <label className="labelcss" htmlFor='adi'>Adı</label>
              <input className="inputcss" type="text" placeholder="Adı" name="adi" onChange={(event) => { setAdi(event.target.value); }} />
          </div>
        </div>
          {/* <div className="div2">
            <div>
                <label htmlFor="true">Published: True</label>
                <input type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Published: False</label>
                <input type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div> */}
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={createGozlemciFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateGozlemci