import { useState } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch } from 'react-redux';
import { createSponsorKategori } from '../../../../redux-new/actions/sponsorKategori';
import { toast } from 'react-toastify';

function CreateSponsorKategori(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Sponsor Kategori eklendi!', {
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
    const createSponsorKategoriFunc = () => {
        // if(sponsorAdi.length > 0 && sponsorIl.length > 0 && sponsorKategori.length > 0 && sponsorReklami.length > 0 && sponsorlukSuresi.length > 0 && sponsorlukUcreti.length > 0 && sponsorlukUcretBirimi.length > 0 && eposta.length > 0)
        // {
          const data = { adi, published }
          dispatch(createSponsorKategori(data));
          notify();
          setTimeout(() => {
            props.close();
            window.location.reload(false);
          }, 4500);
        // }
      //   else {
      //     alert("Lütfen tüm alanları doldurunuz.");
      // }
    }

  return (
    <>
        <form className="formcss">
            <div className="div2">
              <div>
                <label className="labelcss" htmlFor="adi">Adı</label>
                <input className="inputcss"  type="text" placeholder="Adı" name="adi" onChange={(event) => { setAdi(event.target.value); }} />
              </div>
            </div>      
          <div className="div2">
            <div>
                <label className="labelcss" htmlFor="true">Published: True</label>
                <input className="inputcss"  type="radio" id="true" name="published" placeholder="True" value="true" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
            <div>
               <label className="labelcss" htmlFor="false">Published: False</label>
                <input className="inputcss"  type="radio" id="false" name="published" placeholder="False" value="false" onChange={(event) => { setPublished(event.target.value); }} />
            </div>
          </div>
          </form>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {/* <ToastContainer /> */}
            <button className='listele-button listele-button-success' onClick={createSponsorKategoriFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateSponsorKategori