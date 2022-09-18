import { useState } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createSponsorSuresi } from '../../../../redux-new/actions/sponsorSuresi';
import { toast } from 'react-toastify';
import AuthService from "../../../../services-socket/auth.service";
function CreateSponsorSuresi(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();
  const currentUser = AuthService.getCurrentUser();
  const notify = () => toast.success('Sponsor Süresi eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    const [adi, setAdi] = useState(0);
    const [published, setPublished] = useState(true);

    // Fonksiyon tanımlamaları
    const createSponsorSuresiFunc = () => {
        // if(adi.length > 0)
        // {
          const data = {adi, published}
          dispatch(createSponsorSuresi(data));
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
            <button className='listele-button listele-button-success' onClick={createSponsorSuresiFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateSponsorSuresi