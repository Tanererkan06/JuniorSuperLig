import { useState, useEffect } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch } from 'react-redux';
import { createIlTemsilcisi } from '../../../../redux-new/actions/ilTemsilcisi';
import { toast } from 'react-toastify';

function CreateIlTemsilcisi(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('İl Temsilcisi eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    // const [id, setId] = useState(null);
    const [adi, setAdi] = useState("");
    const [published, setPublished] = useState(true);

    // Fonksiyon tanımlamaları
    const createIlTemsilcisiFunc = () => {
        // if(adi.length > 0)
        // {
          const data = { adi, published }
          dispatch(createIlTemsilcisi(data));;
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
          <div>
            <label className="labelcss" htmlFor='adi'>Adı</label>
              <input className="inputcss" type="text" placeholder="Adı" name="adi" onChange={(event) => { setAdi(event.target.value); }} />
          </div>
            
        </div>
          {/* <div className="div2">
            <div>
                <label htmlFor="true">Published: True</label>
                <input className="inputcss" type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label htmlFor="false">Published: False</label>
                <input className="inputcss" type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div> */}
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={createIlTemsilcisiFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateIlTemsilcisi