import { useState } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createSponsorUcretBirimi } from '../../../../redux-new/actions/sponsorUcretBirimi';
import { toast } from 'react-toastify';
import AuthService from "../../../../services-socket/auth.service";
function CreateSponsorUcretBirimi(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Sponsor Ücret Birimi eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

  
    const [adi, setAdi] = useState("");
    const [published, setPublished] = useState(true);

    // Fonksiyon tanımlamaları
    const createSponsorUcretBirimiFunc = () => {
          const data = {adi, published}
          dispatch(createSponsorUcretBirimi(data));
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
          </div>
          <div>
            <label className="labelcss" htmlFor='Adi'>Adı</label>
              <input className="inputcss" type="text" placeholder="Adı" name="Adi" onChange={(event) => { setAdi(event.target.value); }} />
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
            <button className='listele-button listele-button-success' onClick={createSponsorUcretBirimiFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateSponsorUcretBirimi