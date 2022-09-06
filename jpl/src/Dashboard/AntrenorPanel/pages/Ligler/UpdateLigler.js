import '../../../App.css';
import '../../../Form.css'
import { useDispatch } from 'react-redux';
import { updateLigler } from '../../../../redux-new/actions/ligler';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LiglerService from "../../../../services-new/LiglerService";


function UpdateLigler(props) {
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
    const [ligAdi, setLigAdi] = useState("");
    const [published, setPublished] = useState(true);
    
    const dispatch = useDispatch();
    
    // Useeffect tanımlamaları
    useEffect(() => {
      LiglerService.getById(id).then(response => {
            setLigAdi(response.data.ligadi);
            setPublished(response.data.published);
        });
    }, [])


    // Fonksiyon tanımlamaları
    const updateLiglerFunc = () => {
        // if(ligAdi.length > 0)
        // {
          const ligadi = ligAdi;
          const data = {ligadi, published};
          console.log("PROPS: ", props.id, data);
          dispatch(updateLigler({id: props.id, data}));
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
           <label className="labelcss" htmlFor='ligAdi'>Lig Adı</label>
            <input className="inputcss" type="text" placeholder="Lig Adı" name="ligAdi" value={ligAdi} onChange={(event) => { setLigAdi(event.target.value); }} />
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
            <button className='listele-button listele-button-success' onClick={updateLiglerFunc}>Düzenle</button>
            <button className='listele-button listele-button-danger' onClick={props.close}>Kapat</button>
        </div>
    </>
    
  )
}

export default UpdateLigler