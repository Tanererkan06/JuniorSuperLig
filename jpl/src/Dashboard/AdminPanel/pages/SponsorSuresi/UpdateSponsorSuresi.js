import '../../../App.css';
import '../../../Form.css'
import { useDispatch } from 'react-redux';
import { updateSponsorSuresi } from '../../../../redux-new/actions/sponsorSuresi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SponsorSuresiService from '../../../../services-new/SponsorSuresiService';


function UpdateSponsorSuresi(props) {
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
    const [adi, setAdi] = useState(0);
    const [published, setPublished] = useState(true);
    
    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
        SponsorSuresiService.getById(id).then(response => {
            // setId(response.id);
            setAdi(response.data.adi);
            setPublished(response.data.published);
        });
    }, [])


    // Fonksiyon tanımlamaları
    const updateSponsorSuresiFunc = () => {
        // if(adi.length > 0)
        // {
          const data = {adi, published}
          dispatch(updateSponsorSuresi({id: props.id, data}));
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
            <label className="labelcss" htmlFor='id'>Id</label>
            <input className="inputcss" type="text" placeholder="Id" name="id" onChange={(event) => { setId(event.target.value); }} />
          </div> */}
          <div>
           <label className="labelcss" htmlFor='Adi'>Adı</label>
            <input className="inputcss" type="number" placeholder="Adı" name="Adi" value={adi} onChange={(event) => { setAdi(event.target.value); }} />
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
            <button className='listele-button listele-button-success' onClick={updateSponsorSuresiFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateSponsorSuresi