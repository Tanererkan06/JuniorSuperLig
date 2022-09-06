import { useState } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { useDispatch } from 'react-redux';
import { createLigler } from '../../../../redux-new/actions/ligler';
import { toast } from 'react-toastify';

function CreateLigler(props) {
  // Değişken tanımlamaları
  const dispatch = useDispatch();

  const notify = () => toast.success('Lig eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

    // const [id, setId] = useState(null);
    const [ligAdi, setLigAdi] = useState("");
    const [published, setPublished] = useState(true);

    // Fonksiyon tanımlamaları
    const createLiglerFunc = () => {
        // if(ligAdi.length > 0)
        // {
          const data = { ligAdi, published };
          dispatch(createLigler(data));
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
            <label className="labelcss" htmlFor='ligAdi'>Lig Adı</label>
              <input className="inputcss" type="text" placeholder="Lig Adı" name="ligAdi" onChange={(event) => { setLigAdi(event.target.value); }} />
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
            <button className='listele-button listele-button-success' onClick={createLiglerFunc}>Kaydet</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default CreateLigler