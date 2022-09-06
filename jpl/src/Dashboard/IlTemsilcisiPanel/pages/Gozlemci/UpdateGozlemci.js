import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateGozlemci } from '../../../../redux-new/actions/gozlemci';
import { getAllOyunLive } from '../../../../redux-new/actions/oyunLive';
// import io from "socket.io-client";
import { useEffect, useState } from 'react';
import DropdownList from "react-widgets/DropdownList";
import Multiselect from "react-widgets/Multiselect";

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import GozlemciService from '../../../../services-new/GozlemciService';

// const OyunLive =  io.connect("http://localhost:3001/OyunLive");
// const Gozlemci =  io.connect("http://localhost:3001/Gozlemci");

function UpdateGozlemci(props) {
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
    // const [oyunLiveId, setOyunLiveId] = useState([]);
    const [adi, setAdi] = useState("");
    const [published, setPublished] = useState(true);

    const oyunLive = useSelector(state => state.oyunLive);
    
    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
      GozlemciService.getById(id).then(response => {
            // setOyunLiveId(response.data.oyunliveid);
            setAdi(response.data.adi);
            setPublished(response.data.published);
        });
    }, [])

    useEffect(() => {
      dispatch(getAllOyunLive());
    }, []);

    // Fonksiyon tanımlamaları
    // const oyunLiveFunction = (value) => {
    //   setOyunLiveId(value);
    //   const data = { oyunliveid: value};
    //   dispatch(updateGozlemci({ id: props.id, data}))
    //   // console.log("OYUNLIVE DEGISIT: ", props.id, data);
    //   // dispatch(updateGozlemci({ id: props.id, oyunliveid: data}));
    // }

    const updateGozlemciFunc = () => {
        // if(adi.length > 0 && oyunLiveId.length > 0)
        // {
          // const data = {adi, oyunLiveId, published};
          const data = {adi, published};
          dispatch(updateGozlemci({id: props.id, data}));
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
          {/* <div>
           <label className="labelcss" htmlFor='oyunLiveId'>Oyun Live</label>
              <Multiselect
                  data={oyunLive}
                  dataKey='id'
                  textField="adi"
                  value={oyunLiveId}
                  onChange={(value) => { oyunLiveFunction(value)}}
                />
          </div> */}
        </div>
        <div className="div2">
          <div>
            <label className="labelcss" htmlFor='adi'>Gözlemci Adı</label>
            <input className="inputcss"  type="text" placeholder="Gözlemci Adı" name="adi" value={adi} onChange={(event) => { setAdi(event.target.value); }} />
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
            <button className='listele-button listele-button-success' onClick={updateGozlemciFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateGozlemci